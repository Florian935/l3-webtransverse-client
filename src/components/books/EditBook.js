import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { GET_BOOKS } from './Book';
import '../../styles/EditBook.scss';
import { Link } from 'react-router-dom';

const UPDATE_BOOK = gpl`
  mutation updateBook($id: ID!, $bookInput: BookInput!) {
      updateBook(_id: $id, input: $bookInput)
    }
`;

export default function EditBook(props) {
  let {
    state: { book },
  } = useLocation();
  const [formData, setFormData] = useState({ ...book });
  const history = useHistory();
  const [updateBook] = useMutation(UPDATE_BOOK);

  const getData = (key) => (formData.hasOwnProperty(key) ? formData[key] : '');

  const setData = (key, value) => setFormData({ ...formData, [key]: value });

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateBook({
      variables: {
        id: book._id,
        bookInput: {
          name: getData('name'),
          description: getData('description'),
        },
      },
      refetchQueries: [{ query: GET_BOOKS }],
    }).then((unusedResponse) => history.push('/book'));
  };

  return (
    <Fragment>
      <div className='EditBook'>
        <h2>Edit user:</h2>
        <div>
          <form onSubmit={onSubmitForm}>
            <div className='name-input'>
              <label>Name:</label>
              <input
                name='name'
                type='text'
                required
                placeholder='Name'
                value={getData('name')}
                onChange={(e) => setData('name', e.target.value)}
              />
            </div>
            <div className='description-input'>
              <label>Description:</label>
              <input
                name='description'
                type='text'
                required
                placeholder='description'
                value={getData('description')}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>
            <div className='edit-book-button'>
              <Link
                to='/book'
                className='link'
                onClick={(e) => onSubmitForm(e)}
              >
                Update book
              </Link>
              <Link to='/book' className='link'>
                Back to list
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
