import './styles/App.scss';
import Header from './components/common/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/common/Home';
import Book from './components/books/Book';
import AddBook from './components/books/AddBook';
import User from './components/users/User';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import EditBook from './components/books/EditBook';
import DetailBook from './components/books/DetailBook';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/book'>
            <Book />
          </Route>
          <Route exact path='/book/add'>
            <AddBook />
          </Route>
          <Route exact path='/book/edit/:id'>
            <EditBook />
          </Route>
          <Route exact path='/book/detail/:id'>
            <DetailBook />
          </Route>
          <Route exact path='/user'>
            <User />
          </Route>
          <Route exact path='/user/add'>
            <AddUser />
          </Route>
          <Route exact path='/user/edit/:_id'>
            <EditUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
