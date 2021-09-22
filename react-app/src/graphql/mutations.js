import { gql } from "@apollo/client";

import { PostFields } from "./fragments";

// export const AddPost = gql`
//   mutation AddPost($authorID: ID!, $content: String!, $title: String!) {
//     addPost(authorID: $authorID, content: $content, title: $title) {
//       ...PostFields
//     }
//   }
//   ${PostFields}
// `;

export const AddPost = gql`
  mutation AddPost($content: String!, $title: String!) {
    createPost(input: { content: $content, title: $title }) {
      ...PostFields
    }
  }
  ${PostFields}
`;
