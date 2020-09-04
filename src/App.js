import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Checkout from './components/checkout/Checkout';
import BookList from './components/books/BookList';
import Announcement from './components/banner/Announcement';
import Auth from './components/auth/Auth';
import { auth } from './firebase/util';
import { useStateValue } from './components/Context/StateProvider';

function App() {
  const [state, dispatch] = useStateValue();
  

  //if user loged in
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch({
          type: 'CREATE_USER',
          user: { email: userAuth.email, name: userAuth.displayName },
        });
        dispatch({ type: 'SET_AUTHENTICATED' });
      } else{
        dispatch({type: 'SET_LOGOUT'})
      }
    })
  }, []);


  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
        <Route 
          exact path='/login' 
          render={() => (state.authenticated ? <Redirect to='/' /> : <Auth />)} 
        />
        <Route exact path='/checkout' component={Checkout} />
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
