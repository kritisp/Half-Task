import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    if (root.classList.contains('dark')) {
      localStorage.theme = 'dark';
      setIsDark(true);
    } else {
      localStorage.theme = 'light';
      setIsDark(false);
    }
  };

  // Determine active accent color based on route
  const getAccentColor = () => {
    if (location.pathname === '/photography') return 'text-brand-photoAccent hover:text-brand-photoAccent';
    if (location.pathname === '/driver') return 'text-brand-driverAccent hover:text-brand-driverAccent';
    if (location.pathname === '/creator') return 'text-brand-creatorAccent hover:text-brand-creatorAccent';
    return 'text-brand-teal hover:text-brand-teal';
  };

  const getActiveTextAccent = () => {
    if (location.pathname === '/photography') return 'text-brand-photoAccent dark:text-brand-photoAccent';
    if (location.pathname === '/driver') return 'text-brand-driverAccent dark:text-brand-driverAccent';
    if (location.pathname === '/creator') return 'text-brand-creatorAccent dark:text-[#a78bfa]';
    return 'text-brand-teal dark:text-brand-darkAccent';
  };

  return (
    <nav className="w-full nav-glass py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 transition-all duration-300">
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <div className={`relative flex items-center justify-center ${getActiveTextAccent()} group-hover:scale-105 transition-transform duration-300`}>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-none transition-colors">HALFTASK</span>
          <span className={`text-[9px] ${getActiveTextAccent()} font-bold tracking-wider uppercase mt-0.5 transition-colors`}>Velocity through simplicity</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
        <Link to="/" className={`transition-colors ${getAccentColor()}`}>Home</Link>
        <Link to="/service" className={`relative group cursor-pointer flex items-center gap-1 font-semibold transition-colors ${getActiveTextAccent()}`}>
          Browse
          <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </Link>
        <a href="/#how-it-works" className="hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">How it Works</a>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-brand-darkAccent border border-slate-200 dark:border-white/10 transition shadow-sm hover:bg-slate-50 dark:hover:bg-white/10"
        >
          <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
        </button>
        <Link to="/client" className="hidden sm:flex px-5 py-2 rounded-full border border-brand-teal dark:border-brand-darkAccent text-brand-teal dark:text-brand-darkAccent font-semibold text-sm hover:bg-brand-teal/5 dark:hover:bg-brand-darkAccent/10 transition-colors">
          Login
        </Link>
        <Link to="/service" className="hidden sm:flex px-5 py-2 rounded-full bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-semibold text-sm hover:bg-brand-tealDark dark:hover:bg-brand-darkAccent/90 transition-colors shadow-sm shadow-brand-teal/20 dark:shadow-brand-darkAccent/20">
          Register
        </Link>
      </div>
    </nav>
  );
}
