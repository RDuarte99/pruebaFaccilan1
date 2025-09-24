const express = require('express');
const { insertarVenta, obtenerVentas } = require('../ventas');
const router = express.Router();

// Insertar venta
router.post('/', async (req, res) => {
    try {
        const { producto, cantidad, precio } = req.body;
        const venta = await insertarVenta(producto, cantidad, precio);
        res.json(venta);
    } catch (err) {
        res.status(500).json({ error: 'Error al registrar venta', details: err.message });
    }
});

// Obtener ventas
router.get('/', async (req, res) => {
    try {
        const ventas = await obtenerVentas();
        res.json(ventas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener ventas', details: err.message });
    }
});

module.exports = router;
