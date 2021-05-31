import { Fragment } from 'react';
import Navbar from './Navbar';
import '../../styles/Header.scss';

export default function Header(props) {
  return (
    <Fragment>
      <div className='header'>
        <h2>Book library app</h2>
        <span className='filler'></span>
        <Navbar />
      </div>
    </Fragment>
  );
}
