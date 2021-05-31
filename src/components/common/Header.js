import { Fragment } from 'react';
import Navbar from './Navbar';
import '../../styles/Header.scss';

export default function Header(props) {
  return (
    <Fragment>
      <div className='header'>
        <h2>Book library App</h2>
        <Navbar />
      </div>
    </Fragment>
  );
}
