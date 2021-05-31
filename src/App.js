import './styles/App.scss';
import Header from './components/common/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/common/Home';
import Book from './components/books/Book';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/book'>
            <Book />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
