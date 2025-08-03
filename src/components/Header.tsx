// filepath: d:\SWITCHER\switcher\src\components\Header.tsx
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary shadow-md z-50 transition-all duration-500 ease-in-out">
      <div className="layout-container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="font-display text-2xl transform transition-all duration-500 hover:scale-105">
            Theme Switcher
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
              About
            </Link>
            <Link to="/contact" className="hover:text-accent transition-all duration-300 hover:-translate-y-0.5">
              Contact
            </Link>
          </nav>
        </div>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="px-4 py-2 rounded bg-bgColor border border-accent cursor-pointer
                     transition-all duration-300 hover:shadow-lg focus:ring-2 
                     focus:ring-accent focus:ring-opacity-50 outline-none"
        >
          <option value="theme-minimal">Minimal Theme</option>
          <option value="theme-dark">Dark Theme</option>
          <option value="theme-colorful">Colorful Theme</option>
        </select>
      </div>
      <nav className="md:hidden border-t border-accent/20">
        <div className="layout-container py-2 flex justify-around">
          <Link to="/" className="hover:text-accent transition-all duration-300 hover:scale-105">
            Home
          </Link>
          <Link to="/about" className="hover:text-accent transition-all duration-300 hover:scale-105">
            About
          </Link>
          <Link to="/contact" className="hover:text-accent transition-all duration-300 hover:scale-105">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}