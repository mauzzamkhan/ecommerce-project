import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Home2 from './components/Home2';
import App1 from './components/slider';



function App() {
  return (
<>
<div className="App">
      <Header/>   
      {/* <Home2/> */}
      
      
    </div>



    </>

  );
}

export default App;
