import { gql } from "@apollo/client";

export const GetPosts = gql`
    query GetPosts {
        posts {
            id
            title
            content
            published
            createdAt
            user {
                id
                name
            }
        }
    }
`;

export const GetUsers = gql`
    query GetUsers {
        users {
            id
            name
        }
    }
`;
