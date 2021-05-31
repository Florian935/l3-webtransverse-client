import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className='nav-list'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/book'>Book</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
