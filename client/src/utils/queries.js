import { gql } from '@apollo/client';

// Query to get the logged-in user's data
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        title
        description
        bookId
        image
        link
      }
    }
  }
`;
