import React, { useState, createContext, useContext, Children } from 'react';

const ThemeContext = createContext(null)
const ThemeContextToggle = createContext(null)

export const useTheme = () => useContext(ThemeContext)
export const useThemeToggle = () => useContext(ThemeContextToggle)


const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState(false);
    const toggleTheme = () => setTheme(prev => !prev)

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextToggle.Provider value={toggleTheme}>
                {children}
            </ ThemeContextToggle.Provider>
        </ ThemeContext.Provider>

    );
}

export default ThemeProvider;
