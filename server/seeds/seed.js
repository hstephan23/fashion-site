const db = require('../config/connection');
const { Product, User, Category } = require('../models');
const electronicSeeds = require('./electronicSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const furnitureSeeds = require('./furnitureSeeds.json');
const tshirtSeeds = require('./t-shirtSeeds.json');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');
    await cleanDB('Category',"categories");

    await User.create(userSeeds);
    const products = [...electronicSeeds, ...furnitureSeeds, ...tshirtSeeds]; 
    await Product.create(products);
    const cats = await Category.create(categorySeeds);

    const setCat = async (seeds, index) => {
      for (let i = 0; i < seeds.length; i++) {
        await Product.findOneAndUpdate(
          { name: seeds[i].name },
          {
            $set: {
              category: cats[index]._id,
            } 
          },
          {
            new: true
          }
        )
      };
    };

    await setCat(electronicSeeds, 3);
    await setCat(furnitureSeeds, 5);
    await setCat(tshirtSeeds, 4);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }  


});
