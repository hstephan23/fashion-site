import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $userName: String!, $password: String!, $email: String!) {
        addUser(firstName: $firstName, lastName: $laastName, userName: $userName, password: $password, email: $email) {
            token
            user {
                _id
            }
        }
    }
`;