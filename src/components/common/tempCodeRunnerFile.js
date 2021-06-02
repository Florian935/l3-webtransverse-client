import { Fragment, useState } from 'react';
import Navbar from './Navbar';
import '../../styles/Header.scss';
import { FiMenu } from 'react-icons/fi';

export default function Header(props) {
  let { navbarOpen } = useState({ navbarOpen: false });

  const toggleNavbar = () => {
    console.log(navbarOpen);
    navbarOpen = !navbarOpen;
  };

  return (
    <Fragment>
      <div className='header'>
        <div onClick={() => toggleNavbar()}>
          <FiMenu className='navbar-icon' />
        </div>
        <div className="title-with-logo">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Book library app</h2>
        </div>
        <span className='filler'></span>
        <Navbar />
      </div>
    </Fragment>
  );
}
