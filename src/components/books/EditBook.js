import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { GET_BOOKS } from './Book';

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
      <h4>Edit user</h4>
      <form onSubmit={onSubmitForm}>
        <label>Name:</label>
        <input
          name='name'
          type='text'
          required
          placeholder='Name'
          value={getData('name')}
          onChange={(e) => setData('name', e.target.value)}
        />
        <label>Description:</label>
        <input
          name='description'
          type='text'
          required
          placeholder='description'
          value={getData('description')}
          onChange={(e) => setData('description', e.target.value)}
        />
        <button type='submit'>Update book</button>
      </form>
    </Fragment>
  );
}
