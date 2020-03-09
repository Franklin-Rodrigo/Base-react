import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';



function App() {
  return (

  
    <BrowserRouter>
  
    <main className="text-justify">
       <Routes />
    </main>
   
    </BrowserRouter>
    
    
   
  );
}

export default App;
