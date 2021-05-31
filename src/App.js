import './styles/App.scss';
import Header from './components/common/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/common/Home';
import Book from './components/books/Book';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route>
            <Book />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
