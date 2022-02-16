import React, {useState, createContext, useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Toggle theme</button>
}

export default ThemeToggle;