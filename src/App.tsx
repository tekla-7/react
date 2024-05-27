// import componentsImg from './assets/components.png'
import {Fragment } from "react";
import Header from "./components/Header.js";
import CoreConcepts from "./components/CoreConcepts.js";
import Example from "./components/Examples.js";


function App() {
 
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
   <Example />
       
      </main>
    </Fragment>
  );
}

export default App;
