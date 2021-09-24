import { gql } from "@apollo/client";

export const AddPost = gql`
  mutation generatePost($title: String!, $content: String!, $userId: Int!) {
    createPost(input: { title: $title, content: $content, userId: $userId }) {
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
