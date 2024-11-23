//Requirment 1: Root Component

import { useState } from 'react'
import Gallery from './Gallery.jsx'; //Importing Gallery Component
import './App.css'

function App() {
  const [app, setApp] = useState({});   

  return (

 

    <div>

    <header>

        <h1>Tour Comparison App</h1>

    </header>

    <main>

   {/*Rendering Gallery Component*/}
        <Gallery/>

    </main>

</div>
);
}

export default App
