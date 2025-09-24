const client = require('./config/database');

// Insertar venta
async function insertarVenta(producto, cantidad, precio) {
    const total = cantidad * precio;
    const query = 'INSERT INTO ventas (producto, cantidad, precio, total) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [producto, cantidad, precio, total];
    const res = await client.query(query, values);
    return res.rows[0];
}

// Leer ventas
async function obtenerVentas() {
    const res = await client.query('SELECT * FROM ventas ORDER BY id DESC');
    return res.rows;
}

module.exports = {
    insertarVenta,
    obtenerVentas
};
