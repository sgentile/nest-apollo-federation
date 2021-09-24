import { gql } from "@apollo/client";

export const postAdded = gql`
  subscription postAdded {
    postAdded {
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
