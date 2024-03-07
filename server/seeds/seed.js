const db = require('../config/connection');
const { Product, User } = require('../models');
const productSeeds = require('./productSeeds.json');
const categorySeeds = required('./categorySeeds.json')
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');
    await cleanDB('Category',"categories");

    await User.create(userSeeds);
    await Product.create(productSeeds);
    await Category.create(categorySeeds);

    // for (let i = 0; i < productSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }  


});
