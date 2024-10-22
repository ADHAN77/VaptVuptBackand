// models/Merchant.js
const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
