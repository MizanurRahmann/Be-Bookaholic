import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Checkout from './components/checkout/Checkout';
import BookList from './components/books/BookList';
import Announcement from './components/banner/Announcement';
import Auth from './components/auth/Auth';
import { auth } from './firebase/util';
import { useStateValue } from './components/Context/StateProvider';

function App() {
  
  const [state, dispatch] = useStateValue()
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
        dispatchEvent({type: 'SET_LOGOUT'})
      }
    })
  }, []);


  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
        <Route exact path='/login' component={Auth}></Route>
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
