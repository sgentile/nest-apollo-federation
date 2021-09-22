import { gql } from "@apollo/client";

import { PostFields } from "./fragments";

export const postAdded = gql`
  subscription postAdded {
    postAdded {
      ...PostFields
    }
  }
  ${PostFields}
`;
