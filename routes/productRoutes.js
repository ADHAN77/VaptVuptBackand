// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Criar um novo produto
router.post('/', async (req, res) => {
    const { name, price, category, images, merchantId, deliveryFee } = req.body;
    try {
        const newProduct = new Product({ name, price, category, images, merchantId, deliveryFee });
        await newProduct.save();
        res.status(201).json({ message: 'Produto criado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar produto', error });
    }
});

// Obter todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao obter produtos', error });
    }
});

module.exports = router;
