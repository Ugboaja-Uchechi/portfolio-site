import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from "./component/About";

function App() {
  return (
    <>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
    </Routes> 
    </>
  );
}

export default App;
