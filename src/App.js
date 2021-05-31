import './styles/App.css';
import Header from './components/common/Header';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/common/Home';
import Book from './components/books/Book';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Navbar />
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
