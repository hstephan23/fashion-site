const { signToken, AuthenticationError } = require('../utils/auth');
// import the models 
// import stripe

const resolvers = {
    Query: {
      users: async() => {
        return User.find();
      },

      user: async(parent, { userId }) => {
        return User.findOne({ _id: userId });
      },

      products: async() => {
        return Product.find();
      },

      product: async(_, { productId }) => {
        return Product.findOne({ _id: productId });
      },

      article: async(_, {articleId}) => {
        return Article.findOne({ _id: articleId });
      },

      articles: async() => {
        return Article.find();
      },

      me: async(parent, args, context) => {
        if(context.user) {
            return Profile.findOne({ _id: context.user._id });
        }
        throw AuthenticationError
      },
    },
    // Mutations: {

    // }
};

module.exports = resolvers;