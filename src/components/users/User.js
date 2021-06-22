import { Fragment } from 'react';
import gpl from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

export const GET_USERS = gpl`
    query Users {
        users {
            _id
            name
            surname
            login
            pass
        }
    }
`;

const DELETE_USER = gpl`
    mutation deleteUser($id: ID!) {
        deleteUser(_id: $id)
    }
`;

export default function User(props) {
  const { loading, error, data } = useQuery(GET_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  const onDeleteUser = (event, id) => {
    event.preventDefault();
    deleteUser({
      variables: { id },
    });
    data.users = data.users.filter((user) => user._id !== id);
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
        <div>An error occured while retrieving users from server.</div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className='container'>
        <h4>List of all users:</h4>
        <ul>
          {data.users.map((user) => (
            <li key={user._id} value={user.name}>
              <h3>{user.name}</h3>
              <div>{user.surname}</div>
              <div>{user.login}</div>
              <button>
                <Link
                  to={{ pathname: `/user/edit/${user._id}`, state: { user } }}
                >
                  Edit
                </Link>
              </button>
              <button onClick={(e) => onDeleteUser(e, user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <Link to='/user/add' className='link'>
        Add user
      </Link>
    </Fragment>
  );
}
