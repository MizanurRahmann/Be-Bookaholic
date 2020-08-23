import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Checkout from './components/checkout/Checkout';
import Banner from './components/banner/Banner';
import BookList from './components/books/BookList';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/checkout' component={Checkout}></Route>
        <Route exact path='/'>
            <main>
              <Banner />
              <BookList />
            </main>
          </Route>
      </Router>
    </div>
  );
}

export default App;
