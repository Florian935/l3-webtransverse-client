import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { GET_BOOKS } from './Book';
import '../../styles/AddBook.scss';
import { Link } from 'react-router-dom';

const ADD_BOOK = gpl`
    mutation createBook($name: String!, $description: String!) {
        createBook(name: $name, description: $description)
      }
`;

export default function AddBook(props) {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const [addBook, { data }] = useMutation(ADD_BOOK);

  const getData = (key) => (formData.hasOwnProperty(key) ? formData[key] : '');

  const setData = (key, value) => setFormData({ ...formData, [key]: value });

  const onSubmitForm = (event) => {
    event.preventDefault();
    addBook({
      variables: { name: getData('name'), description: getData('description') },
      refetchQueries: [{ query: GET_BOOKS }],
    }).then((unusedResponse) => history.push('/book'));
  };

  return (
    <Fragment>
      <div className='add-book-container'>
        <h2>Add a new book:</h2>
        <form onSubmit={onSubmitForm}>
          <div className='name-input'>
            <label>Name:</label>
            <input
              name='name'
              type='text'
              required
              placeholder='Title of the book'
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
              placeholder='Description of the book'
              value={getData('description')}
              onChange={(e) => setData('description', e.target.value)}
            />
          </div>
        </form>
        <div className='add-book-button'>
          <Link className='link' onClick={(e) => onSubmitForm(e)}>
            Add book
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
