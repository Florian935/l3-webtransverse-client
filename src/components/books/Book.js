import { Fragment } from 'react';
import gpl from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_BOOKS = gpl`
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

export default function Book(props) {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    return (
      <Fragment>
        <div>"Loading..."</div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className='container'>
        <h4>List of all projects.</h4>
        <ul>
          {data.books.map((book) => (
            <li key={book._id} value={book.name} className='project-list-book'>
              <h3>{book.name}</h3>
              <p>{book.description}.</p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
