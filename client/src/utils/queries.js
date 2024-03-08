import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userID: ID!) {
        user(userID: $userID) {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`;

export const QUERY_ARTICLES = gql`
    query allArticles {
        _id
        userID
        url
    }
`;

export const QUERY_SINGLE_ARTICLE = gql`
    query singleArticle($articleID: ID!) {
        article(articleID: $articleID) {
            _id
            userID
            url
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    query allProducts {
        _id
        name
        description
        image
        price
        quantity
        category
    }
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query singleProduct($productID: ID!) {
        product(productID: $productID) {
            name
            description
            image
            price
            quantity
            category
        }
    }
`;

export const QUERY_POSTS = gql`
    query allPosts {
        text
        published
        createdAt
        comments
    }
`;

export const QUERY_SINGLE_POST = gql`
    query singlePost($postID: ID!) {
        post(postID: $postID) {
            _id
            text
            published
            createdAt
            comments
        }
    }
`;

export const QUERY_SINGLE_ORDER = gql`
    query singleOrder($orderID: ID!) {
        order(orderID: $orderId) {
            _id
            purchaseDate
            products
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`

export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ProductInput]) {
        checkout(products: $products) {
            session
        }
    }
`;
