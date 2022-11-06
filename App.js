import React, { useEffect } from "react";
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {

useEffect(() => {
  // will only run once when the app component loads...
}, [])

  return (
    <Router>
     <div className="app">
      
      <Routes> 
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />} ></Route>
      </Routes>
     </div>
    </Router>
  );
}

export default App;
