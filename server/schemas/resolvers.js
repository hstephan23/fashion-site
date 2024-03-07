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

      article: async(_, {articleId}) => {

      },

      articles: async(_, {articleId}) => {

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