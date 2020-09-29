import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Checkout from './components/checkout/Checkout';
import BookList from './components/books/BookList';
import BookDetail from './components/books/BookDetail';
import BookCategoryView from './components/books/BookCategoryView';
import Announcement from './components/banner/Announcement';
import Auth from './components/auth/Auth';
import { auth, db } from './firebase/util';
import { useStateValue } from './components/Context/StateProvider';
import Profile from './components/profile/Profile';

function App() {
  const [state, dispatch] = useStateValue();


  //if user loged in
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch({
          type: 'CREATE_USER',
          user: { 
            id: userAuth.uid,
            email: userAuth.email, 
            name: userAuth.displayName,
            imageURL: userAuth.photoURL
          },
        });

        dispatch({ type: 'SET_AUTHENTICATED' });
        
        db.collection('Users').doc(userAuth.uid).get()
          .then(doc => {
              //if user profile exist set profile
              if (doc.exists) {
                dispatch({ type: 'SET_USER_PROFILE', address: doc.data() });
              }
              //if user prfile doesn't exist createa doc with empty value
              else {
                db.collection("Users").doc(userAuth.uid).set({
                  District: "",
                  Division: "",
                  Phone: "",
                  Thana: "",
                  Village: "",
                  Wishlist: [],
                  Basket: []
                })
                  .then(() => { console.log("Document successfully written!"); })
                  .catch(error => { console.error("Error writing document: ", error); });
              }
          })
          .catch(error => { console.error("Error writing document: ", error); })

      } else {
        dispatch({ type: 'SET_LOGOUT' })
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
        <Route
          exact path='/profile'
          render={() => (!state.authenticated ? <Auth /> : <Profile />)}
        />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/details/:id' component={BookDetail} />
        <Route exact path='/view/:category' component={BookCategoryView} />
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
