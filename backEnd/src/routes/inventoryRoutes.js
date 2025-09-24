const express = require('express');
const { insertarInventario, obtenerInventario } = require('../inventario');
const router = express.Router();

// Insertar producto en inventario
router.post('/', async (req, res) => {
    try {
        const { producto, cantidad } = req.body;
        const item = await insertarInventario(producto, cantidad);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: 'Error al agregar producto', details: err.message });
    }
});

// Obtener inventario
router.get('/', async (req, res) => {
    try {
        const inventario = await obtenerInventario();
        res.json(inventario);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener inventario', details: err.message });
    }
});

module.exports = router;
