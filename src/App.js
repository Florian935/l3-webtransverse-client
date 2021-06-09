import './styles/App.scss';
import Header from './components/common/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/common/Home';
import Book from './components/books/Book';
import AddBook from './components/books/AddBook';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
