import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import './index.css'

function App() {
  return (
    <>
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
       <Route exact path="/projects" element={<Projects />} />
       <Route exact path="/contact" element={<Contact />} />
    </Routes> 
    </>
  );
}

export default App;
