import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';

export default function Navbar(props) {
  return (
    <Fragment>
      <nav className='nav'>
        <ul className='nav-list'>
          <li>
            <Link to='/home' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/book' className='link'>
              Book
            </Link>
          </li>
          <li>
            <Link to='/user' className='link'>
              User
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
