//Requirment 1: Root Component
import React from 'react';
import Gallery from './Gallery'; // Importing the Gallery components

const App = () => {
  return (
    <div>
      <h1>Tour Comparison App</h1>
       {/*Rendering Gallery Component*/}
      <Gallery />
    </div>
  );
};

export default App;
