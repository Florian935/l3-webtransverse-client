import { Fragment } from 'react';
import { useLocation } from 'react-router';

export default function DetailBook(props) {
  let {
    state: { book },
  } = useLocation();
  const bookDetail = book;

  return (
    <Fragment>
      <div>Hello {bookDetail.name}</div>
    </Fragment>
  );
}
