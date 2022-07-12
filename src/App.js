import React from "react";
import Home from './component/Home';
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
    <>
      <Home />
    </>

    //   </div>
    // </ThemeContext.Provider>
  );
}

export default App;
