const { Article, Category, Comment, Order, Post, Product, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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

      posts: async() => {
        return Post.find();
      },
      post: async(_, {postId}) => {
        return Post.findOne({ _id: postId });
      },

      comments: async() => {
        return Comment.find();
      },
      comment: async(_, {commentId}) => {
        return Comment.findOne({_id: commentId})
      },

      order: async(_, {orderId}) => {
        return Order.findOne({ _id: orderId });
      },

      me: async(parent, args, context) => {
        if(context.user) {
            return Profile.findOne({ _id: context.user._id });
        }
        throw AuthenticationError
      },

      checkout: async(_, args, context) => {
        const url = new URL(context.headers.referer).origin;
        await Order.create({ products: args.products.map(({ _id }) => _id)});
        const line_items = [];

        for(const product of args.products) {
            line_items.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        description: product.description,
                        images: [`${url}/images/${product.image}`]
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.purchaseQuantity,
            })
        }

        const session = await stripe.checkout.session.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`,
        });

        return { session: session.id };
      }
    },
    Mutations: {
        addUser: async(_, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async(_, args, context) => {
            if(context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw AuthenticationError;
        },
        removeUser: async(_, {id}) => {
            try {
                return await User.findByIdAndDelete(id);
            } catch {
                throw console.error("No User Found");
            }
        },

        addPost: async(_, args) => {
            const post = await Post.create(args);
            return post;
        },
        removePost: async(_, {id}) => {
            try {
                return await Post.findByIdAndDelete(id);
            } catch {
                throw console.error("No Post Found");
            }
        },

        addComment: async(_, args) => {
            const comment = await Comment.create(args);
            // get the post by id
            // populate post with comment
            return comment;
        },
        removeComment: async(_, {id}) => {
            try {
                return await Comment.findByIdAndDelete(id);
            } catch {
                throw console.error("No Comment Found");
            }
        },

        addProduct: async(_, args) => {
            const product = await Product.create(args);
            return product;
        },
        updateProduct: async(_, args) => {
            try {
                return await Product.findByIdAndUpdate(_id, { $inc: { description: args.description, image: args.image, price: args.price, quantity: args.quantity}}, { new: true});
            } catch {    
                throw console.error("No Product Found");
            }
        },

        addOrder: async(_, args) => {
            const order = await Order.create(args);
            return order;
        },
        updateOrder: async(_, { products }) => {
            try {
                return await Order.findByIdAndUpdate(_id, { $addToSet: { products: products }}, { new: true});
            } catch {
                throw console.error("No Order Found");
            }
        },
        removeOrder: async(_, {id}) => {
            try {
                return Order.findByIdAndDelete(id);
            } catch {
                throw console.error("No Order Found");
            }
        },

        login: async(_, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) throw AuthenticationError;

            const checkPW = await user.isCorrectPassword(password);
            if(!checkPW) throw AuthenticationError;

            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;