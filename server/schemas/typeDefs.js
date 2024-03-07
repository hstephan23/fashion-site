const typeDefs = `
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        email: String!
        orders: [Order]
    }

    type Product {
        _id: ID!
        name: String!
        description: String
        image: String
        price: Float!
        quantity: Int
        category: Category
    }

    type Order {
        _id: ID!
        purchaseDate: String
        products: [Product]
    }

    type Category {
        _id: ID!
        name: String
    }

    type Article {
        _id: ID!
        userID: [User]
        url: String
    }

    type Post {
        _id: ID!
        text: String
        published: Boolean
        createdAt: String
        comments: [Comment]
    }

    type Comment {
        _id: ID!
        userID: User
        comment: String
    }
    

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(_id: ID!): User
        users: [User]
        
        article(_id: ID!): Article
        articles: [Article]

        product(_id: ID!): Product
        products: [Product]

        posts: [Post]
        comments: [Comment]

        order(_id: ID!): Order
        me: User
    }

    type Mutations {
        addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): User
        removeUser: User

        addPost(text: String!, published: Boolean, createdAt: String, comments: Comment): Post 
        removePost(_id: ID!): Post
        
        addComment(userID: Int!, comment: String!): Comment
        removeComment(_id: ID!): Comment

        addProduct(name: String!, description: String, image: String, price: Float!, quantity: Int!, category: Category!): Product
        updateProduct(_id: ID!, description: String, image: String, price: Float, quantity: Int!): Product

        addOrder(products: [Product]): Order
        updateOrder(products: [Product]): Order
        removeOrder(_id: ID!): Order

        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs; 