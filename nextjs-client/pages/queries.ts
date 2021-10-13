import gql from 'graphql-tag';

const FRAGMENT_USER = gql`
    fragment User on User {
        id
        name
    }
`;

const FRAGMENT_POST = gql`
    fragment Post on Post {
        id
        title
        content
        published
        createdAt
        user {
            ...User
        }
    }
    ${FRAGMENT_USER}
`;

export const QUERY_POSTS = gql`
    query GetPosts {
        posts {
            ...Post
        }
    }
    ${FRAGMENT_POST}
`;

export const QUERY_POST = gql`
    query GetPost($id: ID!) {
        post(id: $id) {
            ...Post
        }
    }
    ${FRAGMENT_POST}
`;

export const CREATE_POST = gql`
    mutation CreatePost($input: NewPost) {
        createPost(input: $input) {
            ...Post
        }
    }
`;
