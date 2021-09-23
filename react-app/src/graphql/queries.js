import { gql } from "@apollo/client";

import { PostFields, UserFields } from "./fragments";

export const GetPosts = gql`
  query GetPosts {
    posts {
      ...PostFields
    }
  }
  ${PostFields}
`;

export const GetUsers = gql`
  query GetUsers {
    users {
      ...UserFields
    }
  }
  ${UserFields}
`;
