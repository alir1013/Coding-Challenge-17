//Requirment 1: Root Component
import React from 'react';
import Gallery from './Gallery'; // Importing the Gallery components

const App = () => {
  return (
    <div>
     <h1><p>Tour Comparison App</p></h1>
       {/*Rendering Gallery Component*/}
      <Gallery />
    </div>
  );
};

export default App;
