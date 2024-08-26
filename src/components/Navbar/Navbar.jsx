import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  const className = darkMode ? 'dark' : 'light';

  return (
    <>
      <div className={`navbar-${className}`}>
        <span className={`logo-${className}`}>eTech</span>
        <label className='switch'>
          <input
            type='checkbox'
            onChange={() => {
              toggleDarkMode();
            }}
            value={darkMode}
          />
        </label>
      </div>
    </>
  );
};

export default Navbar;
