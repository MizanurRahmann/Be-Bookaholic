import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Checkout from './components/checkout/Checkout';
import BookList from './components/books/BookList';
import Announcement from './components/banner/Announcement';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/checkout' component={Checkout}></Route>
        <Route exact path='/'>
            <main>
              <Announcement />
              <BookList />
            </main>
          </Route>
      </Router>
    </div>
  );
}

export default App;
