import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// MOCK DATA
const ALL_BIDS = [
  { id: 1, title: "Summer Fashion Reel", brand: "Urban Styles", platform: "instagram", status: "pending", price: 5000, apply_by: "2026-05-20", result_on: "2026-05-25" },
  { id: 2, title: "Tech Gadget Review", brand: "ElectroTech", platform: "youtube", status: "selected", price: 15000, apply_by: "2026-05-10", result_on: "2026-05-15" },
  { id: 3, title: "Skincare Routine Video", brand: "GlowUp", platform: "instagram", status: "rejected", price: 3000, apply_by: "2026-05-01", result_on: "2026-05-05" },
];

const MY_ACTIVE_CAMPS = [
  { id: 2, title: "Tech Gadget Review", brand: "ElectroTech", platform: "youtube", status: "in_progress", bid_price: 15000, deliverable: "1x 5min YouTube Video" },
];

const ALL_CAMPS = [
  { id: 4, title: "Fitness Supplement Shoutout", brand: "FitLife", platform: "instagram", apply_by: "2026-06-01", category: "Fitness", closing_soon: false, deliverable: "1x Story, 1x Post" },
  { id: 5, title: "Travel Vlog Sponsorship", brand: "Wanderlust Travels", platform: "youtube", apply_by: "2026-05-18", category: "Travel", closing_soon: true, deliverable: "Dedicated 60s Integration" },
  { id: 6, title: "Gaming Keyboard Promo", brand: "Razer", platform: "both", apply_by: "2026-05-25", category: "Gaming", closing_soon: false, deliverable: "1x Reel, 1x Shorts" },
];

export default function CreatorDashboard() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState('bids'); // 'bids', 'earned'
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'won', 'find'
  const [wonSubTab, setWonSubTab] = useState('inprogress'); // 'inprogress', 'pending', 'completed'

  useEffect(() => {
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

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending': return <span className="px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 text-xs font-semibold">Pending</span>;
      case 'selected': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Won</span>;
      case 'rejected': return <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs font-semibold">Not Selected</span>;
      case 'completed': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Completed</span>;
      default: return <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-400 text-xs font-semibold">{status}</span>;
    }
  };

  const renderContent = () => {
    if (currentView === 'earned') {
      const earnedBids = ALL_BIDS.filter(b => b.status === 'selected' || b.status === 'completed');
      const totalEarned = earnedBids.reduce((sum, b) => sum + b.price, 0);

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">Earnings Breakdown</h3>
          <div className="bg-brand-creatorAccent/10 dark:bg-[#a78bfa]/10 border border-brand-creatorAccent dark:border-[#a78bfa] rounded-2xl p-5 mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-brand-creatorAccent dark:text-[#a78bfa]">🏆 {earnedBids.length} campaigns won</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total across all won campaigns</div>
            </div>
            <div className="text-2xl font-black text-brand-creatorAccent dark:text-[#a78bfa]">₹{totalEarned.toLocaleString()}</div>
          </div>
          {earnedBids.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex items-center justify-between shadow-sm">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.brand} • Result: {b.result_on}</div>
              </div>
              <div className="font-black text-brand-creatorAccent dark:text-[#a78bfa]">₹{b.price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'all') {
      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">All Bids</h3>
          {ALL_BIDS.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:border-brand-creatorAccent dark:hover:border-[#a78bfa] transition-colors cursor-pointer group">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.brand} • {b.platform} • Result: {b.result_on}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-black text-brand-creatorAccent dark:text-[#a78bfa]">₹{b.price.toLocaleString()}</div>
                {getStatusBadge(b.status)}
                <span className="text-xs font-semibold text-brand-creatorAccent dark:text-[#a78bfa] opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'won') {
      const inpCount = MY_ACTIVE_CAMPS.filter(c => c.status === 'in_progress').length;
      const penCount = MY_ACTIVE_CAMPS.filter(c => c.status === 'delivered' || c.status === 'revision_requested').length;
      const doneCount = MY_ACTIVE_CAMPS.filter(c => c.status === 'completed').length;

      let filteredCamps = [];
      if (wonSubTab === 'inprogress') filteredCamps = MY_ACTIVE_CAMPS.filter(c => c.status === 'in_progress');
      else if (wonSubTab === 'pending') filteredCamps = MY_ACTIVE_CAMPS.filter(c => c.status === 'delivered' || c.status === 'revision_requested');
      else if (wonSubTab === 'completed') filteredCamps = MY_ACTIVE_CAMPS.filter(c => c.status === 'completed');

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">Won Campaigns</h3>
          
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl w-fit mb-6">
            <button onClick={() => setWonSubTab('inprogress')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'inprogress' ? 'bg-white dark:bg-brand-darkCard text-brand-creatorAccent dark:text-[#a78bfa] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              In Progress <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'inprogress' ? 'bg-brand-creatorAccent text-white' : 'bg-brand-creatorAccent/10 text-brand-creatorAccent'}`}>{inpCount}</span>
            </button>
            <button onClick={() => setWonSubTab('pending')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'pending' ? 'bg-white dark:bg-brand-darkCard text-brand-creatorAccent dark:text-[#a78bfa] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Pending <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'pending' ? 'bg-brand-creatorAccent text-white' : 'bg-brand-creatorAccent/10 text-brand-creatorAccent'}`}>{penCount}</span>
            </button>
            <button onClick={() => setWonSubTab('completed')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'completed' ? 'bg-white dark:bg-brand-darkCard text-brand-creatorAccent dark:text-[#a78bfa] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Completed <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'completed' ? 'bg-brand-creatorAccent text-white' : 'bg-brand-creatorAccent/10 text-brand-creatorAccent'}`}>{doneCount}</span>
            </button>
          </div>

          {filteredCamps.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl text-slate-500 text-sm">
              No campaigns in this status.
            </div>
          ) : (
            filteredCamps.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 mb-3 shadow-sm hover:border-brand-creatorAccent dark:hover:border-[#a78bfa] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.brand} • {c.platform} • {c.deliverable}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-brand-creatorAccent/10 text-brand-creatorAccent text-xs font-semibold">In Progress</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="text-xs text-slate-500">Your bid: <span className="font-bold text-brand-creatorAccent dark:text-[#a78bfa]">₹{c.bid_price.toLocaleString()}</span></div>
                  <div className="text-xs font-semibold text-brand-creatorAccent dark:text-[#a78bfa] flex items-center gap-1 group-hover:gap-2 transition-all">Submit delivery →</div>
                </div>
              </div>
            ))
          )}
        </div>
      );
    }

    if (activeTab === 'find') {
      return (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-brand-navy dark:text-white">Find Campaigns</h3>
            <button className="text-xs font-semibold text-brand-creatorAccent dark:text-[#a78bfa] hover:underline">View All →</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ALL_CAMPS.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-brand-creatorAccent dark:hover:border-[#a78bfa] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.brand}</div>
                  </div>
                  {c.closing_soon && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wide">Closing Soon</span>}
                </div>
                
                <div className="flex gap-2 my-3">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${c.platform === 'instagram' ? 'bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400' : c.platform === 'youtube' ? 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400' : 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'}`}>
                    {c.platform === 'both' ? 'Both Platforms' : c.platform}
                  </span>
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {c.category}
                  </span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 mb-4 flex items-center gap-1.5">
                  📦 {c.deliverable}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="text-xs text-slate-500">Apply by <span className="font-bold text-brand-navy dark:text-white">{c.apply_by}</span></div>
                  <button onClick={(e) => { e.stopPropagation(); alert('Bid modal coming soon!'); }} className="px-4 py-1.5 bg-brand-creatorAccent dark:bg-[#a78bfa] text-white dark:text-brand-darkBg text-xs font-bold rounded-full hover:bg-opacity-90 transition-colors">
                    Bid Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6fb] dark:bg-brand-darkBg flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="h-16 bg-white dark:bg-brand-darkCard border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 shrink-0 transition-colors duration-300">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="text-brand-creatorAccent dark:text-[#a78bfa] group-hover:scale-105 transition-transform duration-300">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-brand-creatorAccent dark:text-white tracking-tight leading-none">HALFTASK</span>
            <span className="text-[8px] text-brand-creatorAccent dark:text-[#a78bfa] font-bold tracking-wider uppercase mt-0.5">Velocity through simplicity</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-[#a78bfa] border border-slate-200 dark:border-white/10 transition shadow-sm hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Creator User</span>
            <div className="w-9 h-9 rounded-full bg-brand-creatorAccent text-white flex items-center justify-center font-bold text-sm shadow-sm">
              C
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-brand-darkCard border-r border-slate-200 dark:border-white/5 flex flex-col shrink-0 transition-colors duration-300">
          <div className="p-8 flex flex-col items-center border-b border-slate-100 dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-brand-creatorAccent text-white flex items-center justify-center font-bold text-2xl shadow-sm mb-3">
              C
            </div>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white text-center">Creator</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Creator Account</p>
          </div>
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col gap-1 px-4">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm w-full text-left bg-brand-creatorAccent text-white">
                <i className="fa-solid fa-house w-5 text-center"></i>
                Dashboard
              </button>
              <button onClick={() => { setCurrentView('bids'); setActiveTab('find'); }} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-solid fa-magnifying-glass w-5 text-center text-brand-creatorAccent dark:text-[#a78bfa]"></i>
                Browse Campaigns
              </button>
              <button onClick={() => alert('Profile coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-user w-5 text-center text-brand-creatorAccent dark:text-[#a78bfa]"></i>
                My Profile
              </button>
              <button onClick={() => alert('Messages coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-comment w-5 text-center text-brand-creatorAccent dark:text-[#a78bfa]"></i>
                Messages
              </button>
            </nav>
            <div className="mt-8 px-8">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Account</h3>
              <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400 font-medium text-sm transition-colors -mx-4 w-full text-left">
                <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center text-orange-400"></i>
                Logout
              </Link>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-10 relative">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-2 flex items-center gap-2">
                Welcome, Creator <span className="text-2xl animate-bounce">👋</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Track your bids and active campaigns</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                onClick={() => setCurrentView('bids')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'bids' ? 'border-brand-creatorAccent dark:border-[#a78bfa] ring-2 ring-brand-creatorAccent/20 dark:ring-[#a78bfa]/20 bg-brand-creatorAccent/5 dark:bg-[#a78bfa]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-creatorAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-creatorAccent dark:text-[#a78bfa] mb-1">{ALL_BIDS.length}</div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200">Bids Sent</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-file-lines"></i> Click to view & filter
                </p>
              </div>
              <div 
                onClick={() => setCurrentView('earned')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'earned' ? 'border-brand-creatorAccent dark:border-[#a78bfa] ring-2 ring-brand-creatorAccent/20 dark:ring-[#a78bfa]/20 bg-brand-creatorAccent/5 dark:bg-[#a78bfa]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-creatorAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-creatorAccent dark:text-[#a78bfa] mb-1">
                  ₹{ALL_BIDS.filter(b => b.status === 'selected' || b.status === 'completed').reduce((sum, b) => sum + b.price, 0).toLocaleString()}
                </div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200">₹ Earned</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-chart-line"></i> Click to see breakdown
                </p>
              </div>
            </div>

            {/* Sub Tabs (Only for bids view) */}
            {currentView === 'bids' && (
              <>
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => setActiveTab('all')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs transition-all ${
                      activeTab === 'all' 
                        ? 'bg-brand-creatorAccent/10 border-brand-creatorAccent text-brand-creatorAccent dark:bg-[#a78bfa]/10 dark:border-[#a78bfa] dark:text-[#a78bfa]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-creatorAccent/50'
                    }`}
                  >
                    All Bids
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'all' ? 'bg-brand-creatorAccent text-white dark:bg-[#a78bfa]' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{ALL_BIDS.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('won')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs transition-all ${
                      activeTab === 'won' 
                        ? 'bg-brand-creatorAccent/10 border-brand-creatorAccent text-brand-creatorAccent dark:bg-[#a78bfa]/10 dark:border-[#a78bfa] dark:text-[#a78bfa]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-creatorAccent/50'
                    }`}
                  >
                    My Wins
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'won' ? 'bg-brand-creatorAccent text-white dark:bg-[#a78bfa]' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{MY_ACTIVE_CAMPS.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('find')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs justify-center transition-all ${
                      activeTab === 'find' 
                        ? 'bg-brand-creatorAccent/10 border-brand-creatorAccent text-brand-creatorAccent dark:bg-[#a78bfa]/10 dark:border-[#a78bfa] dark:text-[#a78bfa]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-creatorAccent/50'
                    }`}
                  >
                    Find Campaigns
                  </button>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {activeTab === 'all' && 'Every bid you have placed so far'}
                  {activeTab === 'won' && 'Campaigns you have won and are working on'}
                  {activeTab === 'find' && 'Browse open campaigns and place your bid'}
                </div>
              </>
            )}

            {/* Main Content Area */}
            {renderContent()}

          </div>
        </main>
      </div>
    </div>
  );
}
