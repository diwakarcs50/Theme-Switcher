import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import type { ReactNode } from 'react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getLayoutClasses = () => {
    switch (theme) {
      case 'theme-minimal':
        return 'max-w-4xl mx-auto px-4';
      case 'theme-dark':
        return 'ml-[var(--sidebar-width)] w-[var(--content-width)]';
      case 'theme-colorful':
        return 'max-w-4xl mx-auto px-4';
      default:
        return '';
    }
  };

  const getSidebarClasses = () => {
    if (theme === 'theme-dark') {
      return 'bg-secondary';
    }
    if (theme === 'theme-colorful') {
      return 'bg-gradient-to-br from-accent/20 to-secondary/40 backdrop-blur-md';
    }
    return '';
  };

  return (
    <div className="min-h-screen flex">
      
      {(theme === 'theme-dark' || theme === 'theme-colorful') && (
        <>
          {theme === 'theme-colorful' && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="fixed left-4 top-24 z-50 bg-accent text-white p-2 rounded-full 
                       shadow-lg hover:shadow-xl transform hover:scale-110 
                       transition-all duration-300"
            >
              {isSidebarOpen ? '×' : '☰'}
            </button>
          )}
          <aside 
            className={`
              fixed left-0 top-0 h-screen pt-24 px-4 shadow-xl z-40
              transition-all duration-500 ease-in-out
              ${getSidebarClasses()}
              ${theme === 'theme-dark' ? 'w-[var(--sidebar-width)]' : ''}
              ${theme === 'theme-colorful' 
                ? `w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
                : ''}
            `}
          >
            <nav className="space-y-4">
              <h2 className="font-display text-xl mb-4">Navigation</h2>
              <a href="/" 
                className={`block transition-all duration-300 ${
                  theme === 'theme-colorful' 
                    ? 'hover:text-accent hover:pl-2' 
                    : 'hover:text-accent'
                }`}
              >
                Home
              </a>
              <a href="/about" 
                className={`block transition-all duration-300 ${
                  theme === 'theme-colorful' 
                    ? 'hover:text-accent hover:pl-2' 
                    : 'hover:text-accent'
                }`}
              >
                About
              </a>
              <a href="/contact" 
                className={`block transition-all duration-300 ${
                  theme === 'theme-colorful' 
                    ? 'hover:text-accent hover:pl-2' 
                    : 'hover:text-accent'
                }`}
              >
                Contact
              </a>
            </nav>
          </aside>
        </>
      )}

    
      <main 
        className={`
          transition-all duration-300 ease-in-out w-full
          ${getLayoutClasses()}
          ${theme !== 'theme-dark' ? 'pt-24' : ''}
        `}
      >
        {theme === 'theme-colorful' ? (
          <div className="space-y-6">
            {React.Children.map(children, child => (
              <div className="bg-white/80 backdrop-blur-sm rounded-lg 
                           shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                           transition-all duration-300 p-6">
                {child}
              </div>
            ))}
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}