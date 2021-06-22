import { Fragment } from 'react';
import gpl from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

export const GET_BOOKS = gpl`
    query Books {
        books {
            _id
            name
            description
            categories {
                _id
            }
        }
    }
`;

const DELETE_BOOK = gpl`
    mutation deleteBook($id: ID!) {
        deleteBook(_id: $id)
    }
`;

export default function Book(props) {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK);

  const onDeleteBook = (event, id) => {
    event.preventDefault();
    deleteBook({
      variables: { id },
    });
    data.books = data.books.filter((book) => book._id !== id);
  };

  if (loading) {
    return (
      <Fragment>
        <div>Loading...</div>
      </Fragment>
    );
  }

  if (error) {
    return (
      <Fragment>
        <div>An error occured while retrieving books from server.</div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className='container'>
        <h4>List of all books:</h4>
        <ul>
          {data.books.map((book) => (
            <li key={book._id} value={book.name}>
              <h3>{book.name}</h3>
              <p>{book.description}</p>
              <button>
                <Link
                  to={{ pathname: `/book/edit/${book._id}`, state: { book } }}
                >
                  Edit
                </Link>
              </button>
              <button onClick={(e) => onDeleteBook(e, book._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <Link to='/book/add' className='link'>
        Add book
      </Link>
    </Fragment>
  );
}
