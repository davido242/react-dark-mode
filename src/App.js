import useLocalStorage from 'use-local-storage';
import Square from './components/square/Square';
import React from 'react';
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <span>LOGO</span>
      <h2>Thanks for your Time David</h2>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <Square />
    </div>
  );
}

export default App;
