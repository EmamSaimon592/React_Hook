import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //  state তৈরি
  const [theme, setTheme] = useState('light');

  //  প্রথমে চেক করবো আগের থিম LocalStorage এ আছে কিনা
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  //  থিম পরিবর্তনের ফাংশন
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme); // LocalStorage এ সেভ
  };

  return (
    <div className="app">
      <h1> React Theme Toggle App</h1>
      <p>
        Current Theme: <strong>{theme.toUpperCase()}</strong>
      </p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;
