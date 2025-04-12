
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      style={{
        background: theme === 'light' ? '#E2D1C3' : '#3A3A3A',
        borderColor: theme === 'light' ? '#A89382' : '#5A5A5A',
        borderWidth: '2px'
      }}
    >
      {theme === 'light' ? (
        <Sun className="text-vintage-dark-brown" size={20} />
      ) : (
        <Moon className="text-white" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
