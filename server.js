// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // Para analisar JSON no corpo das requisições

// Conectar ao MongoDB sem as opções depreciadas
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado ao MongoDB com sucesso!'))
    .catch(err => console.log('Erro ao conectar ao MongoDB', err));

// Usar as rotas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
