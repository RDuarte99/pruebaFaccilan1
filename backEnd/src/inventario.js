const client = require('./config/database');

// Insertar producto en inventario
async function insertarInventario(producto, cantidad) {
    const query = 'INSERT INTO inventario (producto, cantidad) VALUES ($1, $2) RETURNING *';
    const values = [producto, cantidad];
    const res = await client.query(query, values);
    return res.rows[0];
}

// Leer inventario
async function obtenerInventario() {
    const res = await client.query('SELECT * FROM inventario ORDER BY id DESC');
    return res.rows;
}

module.exports = {
    insertarInventario,
    obtenerInventario
};
