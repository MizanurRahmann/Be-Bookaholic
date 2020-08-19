import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
