import React from 'react';
import useTheme from '@/hooks/useTheme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none focus:ring"
        >
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} className="text-white w-5 h-5" />
            ) : (
                <FontAwesomeIcon icon={faMoon} className="text-blue-700 w-5 h-5" />
            )}
        </button>
    );
}
