import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { GET_USERS } from './User';

const UPDATE_USER = gpl`
  mutation updateUser($id: ID!, $userInput: UserInput!) {
      updateUser(_id: $id, input: $userInput)
    }
`;

export default function UserEdit(props) {
  let {
    state: { user },
  } = useLocation();
  const [formData, setFormData] = useState({ ...user });
  const history = useHistory();
  const [updateUser] = useMutation(UPDATE_USER);

  const getData = (key) => (formData.hasOwnProperty(key) ? formData[key] : '');

  const setData = (key, value) => setFormData({ ...formData, [key]: value });

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateUser({
      variables: {
        id: user._id,
        userInput: {
          name: getData('name'),
          surname: getData('surname'),
          login: getData('login'),
          pass: getData('pass'),
        },
      },
      refetchQueries: [{ query: GET_USERS }],
    }).then((unusedResponse) => history.push('/user'));
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
        <label>Surname:</label>
        <input
          name='surname'
          type='text'
          required
          placeholder='Surname'
          value={getData('surname')}
          onChange={(e) => setData('surname', e.target.value)}
        />
        <input
          name='login'
          type='text'
          required
          placeholder='Login'
          value={getData('login')}
          onChange={(e) => setData('login', e.target.value)}
        />
        <input
          name='pass'
          type='password'
          required
          placeholder='Password'
          value={getData('pass')}
          onChange={(e) => setData('pass', e.target.value)}
        />
        <button type='submit'>Update user</button>
      </form>
    </Fragment>
  );
}
