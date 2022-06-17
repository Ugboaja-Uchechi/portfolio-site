import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import './index.css';

// export const ThemeContext = createContext(null);

function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light" ))
//   };

// const Switch = () => {
//     return (
//       <label className="switch">
//         {theme === "light" ? "Light Mode" : "Dark Mode"}
//         <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
//         <span className="slider"></span>
//       </label>
//     )
//   }
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div id={theme}>
    //     <Switch />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes> 
    //   </div>
    // </ThemeContext.Provider>
  );
}

export default App;
