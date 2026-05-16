import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DriverProfile() {
  const [isDark, setIsDark] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#f3f9f8] dark:bg-brand-darkBg flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="h-16 bg-[#eaf5f3] dark:bg-brand-darkCard border-b border-[#d1ebe5] dark:border-white/5 flex items-center justify-between px-6 shrink-0 transition-colors duration-300">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="text-brand-teal dark:text-brand-darkAccent group-hover:scale-105 transition-transform duration-300">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-brand-teal dark:text-white tracking-tight leading-none">HALFTASK</span>
            <span className="text-[8px] text-brand-teal dark:text-brand-darkAccent font-bold tracking-wider uppercase mt-0.5">Velocity through simplicity</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-brand-darkAccent border border-slate-200 dark:border-white/10 transition shadow-sm hover:bg-slate-50 dark:hover:bg-white/10"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Rahul Kumar</span>
            <div className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm shadow-sm">
              R
            </div>
          </div>
        </div>
      </nav>

      {/* Sub-header Back Link */}
      <div className="bg-white dark:bg-brand-darkCard border-b border-slate-100 dark:border-white/5 py-3 px-6 md:px-12 transition-colors duration-300">
        <Link to="/client/dashboard" className="text-sm font-medium text-slate-500 hover:text-brand-teal dark:text-slate-400 dark:hover:text-brand-darkAccent flex items-center gap-2 w-max transition-colors">
          <i className="fa-solid fa-arrow-left"></i>
          Client Dashboard
        </Link>
      </div>

      {/* Main Profile Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 animate-fade-in">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

          {/* Header Card */}
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm transition-colors flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-3xl shadow-md relative shrink-0">
                R
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-white dark:bg-brand-darkCard rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full border border-white dark:border-brand-darkCard"></div>
                </div>
              </div>
              <div className="mt-2 sm:mt-1">
                <h1 className="text-2xl font-bold text-brand-navy dark:text-white leading-tight">Rahul Kumar</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-2">
                  Driver Account <span className="w-1 h-1 bg-slate-300 rounded-full"></span> Top Rated
                </p>
              </div>
            </div>
            <button onClick={() => alert('Edit Profile modal coming soon!')} className="px-5 py-2.5 bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-semibold text-sm rounded-full shadow-md shadow-brand-teal/20 dark:shadow-brand-darkAccent/20 hover:bg-brand-tealDark dark:hover:bg-brand-darkAccent/90 transition-all flex items-center gap-2">
              <i className="fa-solid fa-pen text-xs"></i> Edit Profile
            </button>
          </div>

          {/* Stats Card */}
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm transition-colors">
            <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-5">Your Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#eef8f6] dark:bg-brand-darkBg/50 border border-[#d1ebe5] dark:border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-brand-teal dark:text-brand-darkAccent mb-1">142</span>
                <span className="text-[10px] uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Trips Done</span>
              </div>
              <div className="bg-[#eef8f6] dark:bg-brand-darkBg/50 border border-[#d1ebe5] dark:border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-brand-teal dark:text-brand-darkAccent mb-1">4.8</span>
                <span className="text-[10px] uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Avg Rating</span>
              </div>
              <div className="bg-[#eef8f6] dark:bg-brand-darkBg/50 border border-[#d1ebe5] dark:border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-brand-teal dark:text-brand-darkAccent mb-1">1,250</span>
                <span className="text-[10px] uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Distance (km)</span>
              </div>
              <div className="bg-[#eef8f6] dark:bg-brand-darkBg/50 border border-[#d1ebe5] dark:border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl font-bold text-brand-teal dark:text-brand-darkAccent mb-1">0%</span>
                <span className="text-[10px] uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Cancel Rate</span>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm transition-colors">
            <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-5 border-b border-slate-100 dark:border-white/5 pb-3">Basic Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Name</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white">Rahul Kumar</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">City</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white">Bhubaneswar</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Email</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white">rahul.driver@example.com</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Phone</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white">+91 98765 43210</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Bio</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed block">
                  Professional driver with 5+ years of experience. I know the city routes inside out and guarantee a safe, comfortable, and timely ride. Available for outstation trips and regular daily duties.
                </span>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-sm transition-colors mb-10">
            <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-5 border-b border-slate-100 dark:border-white/5 pb-3">Vehicle Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Car Model</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white">Maruti Suzuki Dzire (2022)</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Car Type</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 mt-0.5">
                  <i className="fa-solid fa-car-side opacity-70"></i> Sedan
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Condition</span>
                <span className="text-sm font-semibold text-brand-navy dark:text-white flex items-center gap-2">
                  <i className="fa-solid fa-snowflake text-brand-teal dark:text-brand-darkAccent opacity-80"></i> Fully AC Maintained
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Sticker Ads Accepted?</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mt-0.5">
                  <i className="fa-solid fa-check-circle opacity-70"></i> Yes, Open to branding
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
