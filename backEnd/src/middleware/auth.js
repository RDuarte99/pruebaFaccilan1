const jwt = require('jsonwebtoken');
const db = require('../config/database');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token de acceso requerido'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Verificar si el usuario existe y está activo
    const userResult = await db.query(
      'SELECT id_usuario, nombre, email, id_rol, id_tienda, estado FROM Usuario WHERE id_usuario = $1',
      [decoded.userId]
    );

    if (userResult.rows.length === 0 || !userResult.rows[0].estado) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no válido'
      });
    }

    req.user = userResult.rows[0];
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Token no válido'
    });
  }
};

const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const roleResult = await db.query(
        'SELECT nombre FROM Rol WHERE id_rol = $1',
        [req.user.id_rol]
      );

      const userRole = roleResult.rows[0]?.nombre;

      if (!roles.includes(userRole)) {
        return res.status(403).json({
          success: false,
          message: 'No tienes permisos para realizar esta acción'
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error al verificar permisos'
      });
    }
  };
};

module.exports = {
  authenticateToken,
  authorizeRoles
};