import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { GET_USERS } from './User';
import { Link } from 'react-router-dom';
import '../../styles/AddUser.scss';

const ADD_USER = gpl`
    mutation createUserWithInput($userInput: UserInput!) {
        createUserWithInput(input: $userInput)
      }
`;

export default function AddUser(props) {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const [addUser] = useMutation(ADD_USER);

  const getData = (key) => (formData.hasOwnProperty(key) ? formData[key] : '');

  const setData = (key, value) => setFormData({ ...formData, [key]: value });

  const onSubmitForm = (event) => {
    event.preventDefault();
    addUser({
      variables: {
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
      <div className='AddUser'>
        <h2>Add a new user:</h2>
        <div>
          <form onSubmit={onSubmitForm}>
            <div className='name-input'>
              <label>Name:</label>
              <input
                name='name'
                type='text'
                required
                placeholder='Title of the user'
                value={getData('name')}
                onChange={(e) => setData('name', e.target.value)}
              />
            </div>
            <div className='surname-input'>
              <label>Surname:</label>
              <input
                name='surname'
                type='text'
                required
                placeholder='Surname of the user'
                value={getData('surname')}
                onChange={(e) => setData('surname', e.target.value)}
              />
            </div>
            <div className='login-input'>
              <label>Login:</label>
              <input
                name='login'
                type='text'
                required
                placeholder='login of the user'
                value={getData('login')}
                onChange={(e) => setData('login', e.target.value)}
              />
            </div>
            <div className='password-input'>
              <label>Password:</label>
              <input
                name='password'
                type='password'
                required
                placeholder='Surname of the user'
                value={getData('pass')}
                onChange={(e) => setData('pass', e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className='add-user-button'>
          <Link to='/user' className='link' onClick={(e) => onSubmitForm(e)}>
            Add user
          </Link>
          <Link to='/user' className='link'>
            Back to list
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
