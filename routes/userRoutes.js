// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Registrar um novo usuário
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar usuário', error });
    }
});

// Fazer login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
        res.status(200).json({ message: 'Login bem-sucedido', user });
        } else {
        res.status(401).json({ message: 'Usuário ou senha incorretos' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erro ao fazer login', error });
    }
});

module.exports = router;
