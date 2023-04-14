import React from 'react';

import './App.css';
import HomeView from './home';


function App() {
  const sign = {test:any} =>{
    alert(test);
  }
  return (
   <HomeView alert=(sign) param='passando um texto para um testComponents'/>
  );
}

export default App;
