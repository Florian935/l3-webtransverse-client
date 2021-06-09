import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';

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
    }).then((unusedResponse) => history.push('/book'));
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitForm}>
        <label>Name:</label>
        <input
          name='name'
          type='text'
          required
          placeholder='Title of the book'
          value={getData('name')}
          onChange={(e) => setData('name', e.target.value)}
        />
        <label>Description:</label>
        <input
          name='description'
          type='text'
          required
          placeholder='Description of the book'
          value={getData('description')}
          onChange={(e) => setData('description', e.target.value)}
        />
        <button type='submit'>Add book</button>
      </form>
    </Fragment>
  );
}
