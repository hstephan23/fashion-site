const db = require('../config/connection');
const { Product, User } = require('../models');
const productSeeds = require('./productSeeds.json');
const productSeeds = require('./productSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
    await Product.create(productSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
