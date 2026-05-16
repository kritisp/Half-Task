import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MOCK DATA
const ALL_BOOKINGS = [
  { id: 1, title: "Airport Drop (T2)", client: "Rajiv M.", type: "One-way", status: "completed", price: 800, date: "2026-05-15", time: "05:00 AM" },
  { id: 2, title: "City Tour (8 Hours)", client: "Sarah W.", type: "Full Day", status: "selected", price: 2500, date: "2026-05-18", time: "09:00 AM" },
  { id: 3, title: "Outstation: Pune", client: "Amit K.", type: "Round Trip", status: "rejected", price: 4500, date: "2026-05-10", time: "06:30 AM" },
];

const MY_ACTIVE_RIDES = [
  { id: 2, title: "City Tour (8 Hours)", client: "Sarah W.", type: "Full Day", status: "in_progress", bid_price: 2500, carRequired: "SUV/Sedan" },
];

const ALL_RIDES = [
  { id: 4, title: "Weekly Office Drop", client: "Neha S.", distance: "12 km", type: "Recurring", closing_soon: false, required: "Sedan" },
  { id: 5, title: "Wedding Event Duty", client: "Karan Johar", distance: "Local", type: "Full Day", closing_soon: true, required: "Luxury" },
  { id: 6, title: "Intercity: Surat", client: "Priya R.", distance: "280 km", type: "One-way", closing_soon: false, required: "Any" },
];

export default function DriverDashboard() {
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState('bids'); // 'bids' (bookings), 'earned'
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
      case 'selected': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Confirmed</span>;
      case 'rejected': return <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs font-semibold">Declined</span>;
      case 'completed': return <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-semibold">Completed</span>;
      default: return <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-400 text-xs font-semibold">{status}</span>;
    }
  };

  const renderContent = () => {
    if (currentView === 'earned') {
      const earnedRides = ALL_BOOKINGS.filter(b => b.status === 'selected' || b.status === 'completed');
      const totalEarned = earnedRides.reduce((sum, b) => sum + b.price, 0);

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">Earnings Breakdown</h3>
          <div className="bg-brand-driverAccent/10 dark:bg-[#0ea5e9]/10 border border-brand-driverAccent dark:border-[#0ea5e9] rounded-2xl p-5 mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-brand-driverAccent dark:text-[#0ea5e9]">🚗 {earnedRides.length} rides confirmed</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Total across all completed rides</div>
            </div>
            <div className="text-2xl font-black text-brand-driverAccent dark:text-[#0ea5e9]">₹{totalEarned.toLocaleString()}</div>
          </div>
          {earnedRides.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex items-center justify-between shadow-sm">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.client} • Date: {b.date}</div>
              </div>
              <div className="font-black text-brand-driverAccent dark:text-[#0ea5e9]">₹{b.price.toLocaleString()}</div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'all') {
      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">All Bookings</h3>
          {ALL_BOOKINGS.map(b => (
            <div key={b.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-4 mb-3 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:border-brand-driverAccent dark:hover:border-[#0ea5e9] transition-colors cursor-pointer group">
              <div>
                <div className="font-semibold text-brand-navy dark:text-white text-sm">{b.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{b.client} • {b.type} • {b.date} {b.time}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-black text-brand-driverAccent dark:text-[#0ea5e9]">₹{b.price.toLocaleString()}</div>
                {getStatusBadge(b.status)}
                <span className="text-xs font-semibold text-brand-driverAccent dark:text-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'won') {
      const inpCount = MY_ACTIVE_RIDES.filter(c => c.status === 'in_progress').length;
      const doneCount = MY_ACTIVE_RIDES.filter(c => c.status === 'completed').length;

      let filteredCamps = [];
      if (wonSubTab === 'inprogress') filteredCamps = MY_ACTIVE_RIDES.filter(c => c.status === 'in_progress');
      else if (wonSubTab === 'completed') filteredCamps = MY_ACTIVE_RIDES.filter(c => c.status === 'completed');

      return (
        <div className="animate-fade-in">
          <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-4">My Rides</h3>
          
          <div className="flex gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl w-fit mb-6">
            <button onClick={() => setWonSubTab('inprogress')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'inprogress' ? 'bg-white dark:bg-brand-darkCard text-brand-driverAccent dark:text-[#0ea5e9] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Upcoming <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'inprogress' ? 'bg-brand-driverAccent text-white' : 'bg-brand-driverAccent/10 text-brand-driverAccent'}`}>{inpCount}</span>
            </button>
            <button onClick={() => setWonSubTab('completed')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${wonSubTab === 'completed' ? 'bg-white dark:bg-brand-darkCard text-brand-driverAccent dark:text-[#0ea5e9] shadow-sm' : 'text-slate-500 hover:text-brand-navy dark:hover:text-white'}`}>
              Completed <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${wonSubTab === 'completed' ? 'bg-brand-driverAccent text-white' : 'bg-brand-driverAccent/10 text-brand-driverAccent'}`}>{doneCount}</span>
            </button>
          </div>

          {filteredCamps.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl text-slate-500 text-sm">
              No rides in this status.
            </div>
          ) : (
            filteredCamps.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 mb-3 shadow-sm hover:border-brand-driverAccent dark:hover:border-[#0ea5e9] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.client} • {c.type} • {c.carRequired}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-brand-driverAccent/10 text-brand-driverAccent text-xs font-semibold">Upcoming</span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                  <div className="text-xs text-slate-500">Agreed Rate: <span className="font-bold text-brand-driverAccent dark:text-[#0ea5e9]">₹{c.bid_price.toLocaleString()}</span></div>
                  <div className="text-xs font-semibold text-brand-driverAccent dark:text-[#0ea5e9] flex items-center gap-1 group-hover:gap-2 transition-all">Start Ride →</div>
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
            <h3 className="text-lg font-bold text-brand-navy dark:text-white">Find Rides</h3>
            <button className="text-xs font-semibold text-brand-driverAccent dark:text-[#0ea5e9] hover:underline">View All →</button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {ALL_RIDES.map(c => (
              <div key={c.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-brand-driverAccent dark:hover:border-[#0ea5e9] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-brand-navy dark:text-white text-sm">{c.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{c.client}</div>
                  </div>
                  {c.closing_soon && <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wide">Urgent</span>}
                </div>
                
                <div className="flex gap-2 my-3">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                    {c.type}
                  </span>
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    Requires: {c.required}
                  </span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 mb-4 flex items-center gap-1.5">
                  📍 Distance: {c.distance}
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-white/5">
                  <button onClick={(e) => { e.stopPropagation(); alert('Accept Ride modal coming soon!'); }} className="w-full py-2 bg-brand-driverAccent dark:bg-[#0ea5e9] text-white dark:text-brand-darkBg text-xs font-bold rounded-full hover:bg-opacity-90 transition-colors">
                    Accept Request
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
    <div className="min-h-screen bg-[#f2f8fc] dark:bg-brand-darkBg flex flex-col font-sans transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="h-16 bg-white dark:bg-brand-darkCard border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-6 shrink-0 transition-colors duration-300">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="text-brand-driverAccent dark:text-[#0ea5e9] group-hover:scale-105 transition-transform duration-300">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-brand-driverAccent dark:text-white tracking-tight leading-none">HALFTASK</span>
            <span className="text-[8px] text-brand-driverAccent dark:text-[#0ea5e9] font-bold tracking-wider uppercase mt-0.5">Velocity through simplicity</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-[#0ea5e9] border border-slate-200 dark:border-white/10 transition shadow-sm hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Driver</span>
            <div className="w-9 h-9 rounded-full bg-brand-driverAccent text-white flex items-center justify-center font-bold text-sm shadow-sm">
              D
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-brand-darkCard border-r border-slate-200 dark:border-white/5 flex flex-col shrink-0 transition-colors duration-300">
          <div className="p-8 flex flex-col items-center border-b border-slate-100 dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-brand-driverAccent text-white flex items-center justify-center font-bold text-2xl shadow-sm mb-3">
              D
            </div>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white text-center">Driver</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Driver Account</p>
          </div>
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col gap-1 px-4">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm w-full text-left bg-brand-driverAccent text-white">
                <i className="fa-solid fa-house w-5 text-center"></i>
                Dashboard
              </button>
              <button onClick={() => { setCurrentView('bids'); setActiveTab('find'); }} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-solid fa-car w-5 text-center text-brand-driverAccent dark:text-[#0ea5e9]"></i>
                Find Rides
              </button>
              <button onClick={() => alert('Profile coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-user w-5 text-center text-brand-driverAccent dark:text-[#0ea5e9]"></i>
                My Profile
              </button>
              <button onClick={() => alert('Messages coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-comment w-5 text-center text-brand-driverAccent dark:text-[#0ea5e9]"></i>
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
                Welcome, Driver <span className="text-2xl animate-bounce">👋</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your bookings and discover new rides</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                onClick={() => setCurrentView('bids')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'bids' ? 'border-brand-driverAccent dark:border-[#0ea5e9] ring-2 ring-brand-driverAccent/20 dark:ring-[#0ea5e9]/20 bg-brand-driverAccent/5 dark:bg-[#0ea5e9]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-driverAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-driverAccent dark:text-[#0ea5e9] mb-1">{ALL_BOOKINGS.length}</div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200">Total Bookings</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <i className="fa-solid fa-list"></i> Click to view & filter
                </p>
              </div>
              <div 
                onClick={() => setCurrentView('earned')}
                className={`bg-white dark:bg-brand-darkCard border rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 cursor-pointer ${currentView === 'earned' ? 'border-brand-driverAccent dark:border-[#0ea5e9] ring-2 ring-brand-driverAccent/20 dark:ring-[#0ea5e9]/20 bg-brand-driverAccent/5 dark:bg-[#0ea5e9]/10' : 'border-slate-200 dark:border-white/10 hover:border-brand-driverAccent/50'}`}
              >
                <div className="text-3xl font-black text-brand-driverAccent dark:text-[#0ea5e9] mb-1">
                  ₹{ALL_BOOKINGS.filter(b => b.status === 'selected' || b.status === 'completed').reduce((sum, b) => sum + b.price, 0).toLocaleString()}
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
                        ? 'bg-brand-driverAccent/10 border-brand-driverAccent text-brand-driverAccent dark:bg-[#0ea5e9]/10 dark:border-[#0ea5e9] dark:text-[#0ea5e9]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-driverAccent/50'
                    }`}
                  >
                    All Bookings
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'all' ? 'bg-brand-driverAccent text-white dark:bg-[#0ea5e9]' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{ALL_BOOKINGS.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('won')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs transition-all ${
                      activeTab === 'won' 
                        ? 'bg-brand-driverAccent/10 border-brand-driverAccent text-brand-driverAccent dark:bg-[#0ea5e9]/10 dark:border-[#0ea5e9] dark:text-[#0ea5e9]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-driverAccent/50'
                    }`}
                  >
                    My Rides
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'won' ? 'bg-brand-driverAccent text-white dark:bg-[#0ea5e9]' : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'}`}>{MY_ACTIVE_RIDES.length}</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('find')}
                    className={`flex-1 py-3 px-2 rounded-xl border text-center flex flex-col items-center gap-1 font-bold text-xs justify-center transition-all ${
                      activeTab === 'find' 
                        ? 'bg-brand-driverAccent/10 border-brand-driverAccent text-brand-driverAccent dark:bg-[#0ea5e9]/10 dark:border-[#0ea5e9] dark:text-[#0ea5e9]' 
                        : 'bg-white dark:bg-brand-darkCard border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-brand-driverAccent/50'
                    }`}
                  >
                    Find Rides
                  </button>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {activeTab === 'all' && 'Every ride request you have received or booked'}
                  {activeTab === 'won' && 'Rides you are scheduled for'}
                  {activeTab === 'find' && 'Browse open client requests for drivers'}
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
