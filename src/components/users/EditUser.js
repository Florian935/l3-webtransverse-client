import { useMutation } from '@apollo/react-hooks';
import { Fragment, useState } from 'react';
import gpl from 'graphql-tag';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { GET_USERS } from './User';
import { Link } from 'react-router-dom';
import '../../styles/EditUser.scss';

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
      <div className='EditUser'>
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
            <div className='surname-input'>
              <label>Surname:</label>
              <input
                name='surname'
                type='text'
                required
                placeholder='surname'
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
                placeholder='login'
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
                placeholder='password'
                value={getData('pass')}
                onChange={(e) => setData('pass', e.target.value)}
              />
            </div>
            <div className='edit-user-button'>
              <Link
                to='/user'
                className='link'
                onClick={(e) => onSubmitForm(e)}
              >
                Update user
              </Link>
              <Link to='/user' className='link'>
                Back to list
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
