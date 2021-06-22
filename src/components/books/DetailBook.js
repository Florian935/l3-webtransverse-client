import { Fragment } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../../styles/DetailBook.scss';

export default function DetailBook(props) {
  let {
    state: { book },
  } = useLocation();
  const bookDetail = book;

  return (
    <Fragment>
      <div class='DetailBook'>
        <h2>Book details:</h2>
        <div class='details-container'>
          <div>
            <strong>Title:</strong> {book.name}
          </div>
          <div>
            <strong>Description:</strong> {book.description}
          </div>
        </div>
        <div className='link-back-container'>
          <Link to='/book' className='link'>
            Back to list
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
