import React from 'react';
import './App.css';
import Header from './Components/Header';


import {BrowserRouter as Router, Switch, Route } from'react-router-dom';
import Pink from './Components/Pink';


function App() {

  

  return (
    
   
    <Router>

    <Switch> 
    <div className="App">
      
      <Header />
      <Route path="/Pink" component={Pink} />
      
      
  







      
      
    </div>
    
    </Switch>
    </Router>
    
  );
}
  
      
    

export default App;

