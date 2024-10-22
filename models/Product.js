// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    images: [{ type: String }], // Array de URLs de imagens
    merchantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Merchant', required: true },
    deliveryFee: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
