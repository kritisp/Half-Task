import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MOCK DATA
const ALL_PROPOSALS = [
  { id: 1, title: "Pre-Wedding Shoot", client: "Vikram & Anjali", type: "Full Day", status: "pending", price: 5000, date: "2026-06-15" },
  { id: 2, title: "Product Launch Event", client: "TechNova", type: "Per Event", status: "selected", price: 3000, date: "2026-05-20" },
  { id: 3, title: "Corporate Headshots", client: "Acme Corp", type: "Hourly", status: "rejected", price: 2000, date: "2026-05-05" },
];

const MY_ACTIVE_BOOKINGS = [
  { id: 2, title: "Product Launch Event", client: "TechNova", type: "Per Event", status: "in_progress", bid_price: 3000, requirements: "Raw + Edited (48hrs)" },
];

const ALL_PROJECTS = [
  { id: 4, title: "Fashion Catalog Shoot", client: "Zara India", budget: "₹5,000", type: "Full Day", closing_soon: false, category: "Fashion" },
  { id: 5, title: "Real Estate Property", client: "Lodha Group", budget: "₹2,000", type: "Hourly", closing_soon: true, category: "Real Estate" },
  { id: 6, title: "Birthday Party Coverage", client: "Rahul S.", budget: "₹3,000", type: "Per Event", closing_soon: false, category: "Event" },
];

export default function PhotographerDashboard() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState('bids'); // 'bids', 'earned'
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'won', 'find'
  const [wonSubTab, setWonSubTab] = useState('inprogress'); // 'inprogress', 'completed'

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
      case 'selected': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Booked</span>;
      case 'rejected': return <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs font-semibold">Declined</span>;
      case 'completed': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Completed</span>;
      default: return <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-400 text-xs font-semibold">{status}</span>;
    }
  };

  const renderContent = () => {
    if (currentView === 'earned') {
      const earnedProposals = ALL_PROPOSALS.filter(b => b.status === 'selected' || b.status === 'completed');
      const totalEarned = earnedProposals.reduce((sum, b) => sum + b.price, 0);

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">Earnings Breakdown</h3>
          <div className="bg-brand-photoAccent/10 dark:bg-[#fbd38d]/10 border border-brand-photoAccent dark:border-[#fbd38d] rounded-2xl p-5 mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-brand-photoAccent dark:text-[#fbd38d]">📸 {earnedProposals.length} bookings secured</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total across all completed projects</div>
            </div>
            <div className="text-2xl font-black text-brand-photoAccent dark:text-[#fbd38d]">₹{totalEarned.toLocaleString()}</div>
          </div>
          {earnedProposals.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex items-center justify-between shadow-sm">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.client} • Date: {b.date}</div>
              </div>
              <div className="font-black text-brand-photoAccent dark:text-[#fbd38d]">₹{b.price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'all') {
      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">All Proposals</h3>
          {ALL_PROPOSALS.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:border-brand-photoAccent dark:hover:border-[#fbd38d] transition-colors cursor-pointer group">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.client} • {b.type} • {b.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-black text-brand-photoAccent dark:text-[#fbd38d]">₹{b.price.toLocaleString()}</div>
                {getStatusBadge(b.status)}
                <span className="text-xs font-semibold text-brand-photoAccent dark:text-[#fbd38d] opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'won') {
      const inpCount = MY_ACTIVE_BOOKINGS.filter(c => c.status === 'in_progress').length;
      const doneCount = MY_ACTIVE_BOOKINGS.filter(c => c.status === 'completed').length;

      let filteredCamps = [];
      if (wonSubTab === 'inprogress') filteredCamps = MY_ACTIVE_BOOKINGS.filter(c => c.status === 'in_progress');
      else if (wonSubTab === 'completed') filteredCamps = MY_ACTIVE_BOOKINGS.filter(c => c.status === 'completed');

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">My Bookings</h3>
          
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl w-fit mb-6">
            <button onClick={() => setWonSubTab('inprogress')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'inprogress' ? 'bg-white dark:bg-brand-darkCard text-brand-photoAccent dark:text-[#fbd38d] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Upcoming <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'inprogress' ? 'bg-brand-photoAccent text-white dark:text-brand-darkBg' : 'bg-brand-photoAccent/10 text-brand-photoAccent'}`}>{inpCount}</span>
            </button>
            <button onClick={() => setWonSubTab('completed')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'completed' ? 'bg-white dark:bg-brand-darkCard text-brand-photoAccent dark:text-[#fbd38d] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Completed <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'completed' ? 'bg-brand-photoAccent text-white dark:text-brand-darkBg' : 'bg-brand-photoAccent/10 text-brand-photoAccent'}`}>{doneCount}</span>
            </button>
          </div>

          {filteredCamps.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl text-slate-500 text-sm">
              No bookings in this status.
            </div>
          ) : (
            filteredCamps.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 mb-3 shadow-sm hover:border-brand-photoAccent dark:hover:border-[#fbd38d] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.client} • {c.type}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-semibold">Upcoming</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 my-3 pb-3 border-b border-slate-100 dark:border-white/5">
                  📝 {c.requirements}
                </div>
                <div className="flex justify-between items-center pt-1">
                  <div className="text-xs text-slate-500">Agreed Rate: <span className="font-bold text-brand-photoAccent dark:text-[#fbd38d]">₹{c.bid_price.toLocaleString()}</span></div>
                  <div className="text-xs font-semibold text-brand-photoAccent dark:text-[#fbd38d] flex items-center gap-1 group-hover:gap-2 transition-all">Submit Work →</div>
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
            <h3 className="text-lg font-bold text-brand-navy dark:text-white">Find Projects</h3>
            <button className="text-xs font-semibold text-brand-photoAccent dark:text-[#fbd38d] hover:underline">View All →</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ALL_PROJECTS.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-brand-photoAccent dark:hover:border-[#fbd38d] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.client}</div>
                  </div>
                  {c.closing_soon && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wide">Urgent</span>}
                </div>
                
                <div className="flex gap-2 my-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                    {c.category}
                  </span>
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {c.type}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-white/5 mt-4">
                  <div className="text-xs text-slate-500">Budget: <span className="font-bold text-brand-navy dark:text-white">{c.budget}</span></div>
                  <button onClick={(e) => { e.stopPropagation(); alert('Send Proposal modal coming soon!'); }} className="px-4 py-1.5 bg-brand-photoAccent dark:bg-[#fbd38d] text-white dark:text-brand-darkBg text-xs font-bold rounded-full hover:bg-opacity-90 transition-colors">
                    Send Proposal
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
    <div className="min-h-screen bg-[#fffdf8] dark:bg-brand-darkBg flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="h-16 bg-white dark:bg-brand-darkCard border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 shrink-0 transition-colors duration-300">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="text-brand-photoAccent dark:text-[#fbd38d] group-hover:scale-105 transition-transform duration-300">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-brand-photoAccent dark:text-white tracking-tight leading-none">HALFTASK</span>
            <span className="text-[8px] text-brand-photoAccent dark:text-[#fbd38d] font-bold tracking-wider uppercase mt-0.5">Velocity through simplicity</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-[#fbd38d] border border-slate-200 dark:border-white/10 transition shadow-sm hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Photographer</span>
            <div className="w-9 h-9 rounded-full bg-brand-photoAccent text-white flex items-center justify-center font-bold text-sm shadow-sm">
              P
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-brand-darkCard border-r border-slate-200 dark:border-white/5 flex flex-col shrink-0 transition-colors duration-300">
          <div className="p-8 flex flex-col items-center border-b border-slate-100 dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-brand-photoAccent text-white flex items-center justify-center font-bold text-2xl shadow-sm mb-3">
              P
            </div>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white text-center">Photographer</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pro Account</p>
          </div>
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col gap-1 px-4">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm w-full text-left bg-brand-photoAccent text-white">
                <i className="fa-solid fa-house w-5 text-center"></i>
                Dashboard
              </button>
              <button onClick={() => { setCurrentView('bids'); setActiveTab('find'); }} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-solid fa-camera w-5 text-center text-brand-photoAccent dark:text-[#fbd38d]"></i>
                Find Projects
              </button>
              <button onClick={() => alert('Portfolio coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-image w-5 text-center text-brand-photoAccent dark:text-[#fbd38d]"></i>
                My Portfolio
              </button>
              <button onClick={() => alert('Messages coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-comment w-5 text-center text-brand-photoAccent dark:text-[#fbd38d]"></i>
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
                Welcome, Photographer <span className="text-2xl animate-bounce">👋</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your proposals and discover new projects</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                onClick={() => setCurrentView('bids')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'bids' ? 'border-brand-photoAccent dark:border-[#fbd38d] ring-2 ring-brand-photoAccent/20 dark:ring-[#fbd38d]/20 bg-brand-photoAccent/5 dark:bg-[#fbd38d]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-photoAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-photoAccent dark:text-[#fbd38d] mb-1">{ALL_PROPOSALS.length}</div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200">Proposals Sent</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-file-lines"></i> Click to view & filter
                </p>
              </div>
              <div 
                onClick={() => setCurrentView('earned')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'earned' ? 'border-brand-photoAccent dark:border-[#fbd38d] ring-2 ring-brand-photoAccent/20 dark:ring-[#fbd38d]/20 bg-brand-photoAccent/5 dark:bg-[#fbd38d]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-photoAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-photoAccent dark:text-[#fbd38d] mb-1">
                  ₹{ALL_PROPOSALS.filter(b => b.status === 'selected' || b.status === 'completed').reduce((sum, b) => sum + b.price, 0).toLocaleString()}
                </div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200">₹ Earned</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-chart-line"></i> Click to see breakdown
                </p>
              </div>
            </div>

            {/* Sub Tabs */}
            {currentView === 'bids' && (
              <>
                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => setActiveTab('all')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs transition-all ${
                      activeTab === 'all' 
                        ? 'bg-brand-photoAccent/10 border-brand-photoAccent text-brand-photoAccent dark:bg-[#fbd38d]/10 dark:border-[#fbd38d] dark:text-[#fbd38d]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-photoAccent/50'
                    }`}
                  >
                    All Proposals
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'all' ? 'bg-brand-photoAccent text-white dark:text-brand-darkBg' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{ALL_PROPOSALS.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('won')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs transition-all ${
                      activeTab === 'won' 
                        ? 'bg-brand-photoAccent/10 border-brand-photoAccent text-brand-photoAccent dark:bg-[#fbd38d]/10 dark:border-[#fbd38d] dark:text-[#fbd38d]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-photoAccent/50'
                    }`}
                  >
                    My Bookings
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'won' ? 'bg-brand-photoAccent text-white dark:text-brand-darkBg' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{MY_ACTIVE_BOOKINGS.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('find')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs justify-center transition-all ${
                      activeTab === 'find' 
                        ? 'bg-brand-photoAccent/10 border-brand-photoAccent text-brand-photoAccent dark:bg-[#fbd38d]/10 dark:border-[#fbd38d] dark:text-[#fbd38d]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-photoAccent/50'
                    }`}
                  >
                    Find Projects
                  </button>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {activeTab === 'all' && 'Every project proposal you have sent'}
                  {activeTab === 'won' && 'Projects you have secured'}
                  {activeTab === 'find' && 'Browse open client requests for photographers'}
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
