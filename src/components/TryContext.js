import React, { useContext } from 'react';
import { useTheme, useThemeToggle } from '../ThemeContext'

const TryContext = () => {
    const theme = useTheme();
    const themeToggle = useThemeToggle();

    const themeStyle = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black',
    }

    return (
        <div style={themeStyle}>
            <button onClick={themeToggle}>change theme</button>
        </div>
    );
}

export default TryContext;
