const mongoose = require('mongoose');
require("dotenv").config();

// CHANGE DATABASE NAME IF WANTED
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fashionDB');

module.exports = mongoose.connection;
