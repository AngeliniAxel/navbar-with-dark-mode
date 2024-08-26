import React from 'react';
import Products from '../Products';
import { useThemeContext } from '../../context/ThemeContext';
import './Panel.css';

export const Panel = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className={`panel-${darkMode ? 'dark' : 'light'}`}>
      <Products />
    </div>
  );
};
