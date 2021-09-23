import { gql } from "@apollo/client";

// export const PostFields = gql`
//   fragment PostFields on Post {
//     author {
//       id
//       name
//     }
//     content
//     id
//     publishedAt
//     title
//   }
// `;

export const UserFields = gql`
  fragment UserFields on User {
    id
    name
  }
`;

export const PostFields = gql`
  fragment PostFields on Post {
    id
    title
    content
    published
    createdAt
    user {
      ...UserFields
    }
  }
  ${UserFields}
`;
