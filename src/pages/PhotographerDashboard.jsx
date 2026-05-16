import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_PROJECT_REQUESTS } from './ClientDashboard';

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
  
  // Bidding Flow State
  const [availableRequests, setAvailableRequests] = useState([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [quoteData, setQuoteData] = useState({ amount: '', message: '' });
  
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Raj Photography',
    location: 'Bhubaneswar, Odisha',
    specialization: 'Premium Wedding & Event Photographer',
    bio: 'With over 5 years of experience capturing timeless moments, my team and I specialize in candid wedding photography, cinematic videography, and grand event coverage. We believe in storytelling through our lenses.',
    photoUrl: null
  });

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
    
    // Filter Mock Requests for this photographer
    setAvailableRequests(INITIAL_PROJECT_REQUESTS.filter(r => r.serviceCategory === 'photographer' && r.status === 'open'));
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
          
          <div className="grid grid-cols-1 gap-4">
            {availableRequests.map(req => (
              <div key={req.id} className="bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand-photoAccent dark:hover:border-[#fbd38d] transition-all flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy dark:text-white">{req.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 capitalize"><i className="fa-solid fa-location-dot mr-1"></i> {req.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider h-fit">
                      Targeted Match
                    </span>
                  </div>
                  
                  <div className="my-4 p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Client Requirements</h4>
                    <p className="text-sm font-semibold text-brand-navy dark:text-slate-200">{req.requirements}</p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-semibold bg-slate-100 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                      <i className="fa-regular fa-clock"></i> Bids close: {req.biddingDeadline}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-semibold bg-slate-100 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                      <i className="fa-regular fa-calendar-check"></i> Results: {req.announcementDate}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-48 shrink-0 flex flex-col justify-end border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/5 pt-4 md:pt-0 md:pl-6">
                  <button 
                    onClick={() => { setSelectedRequest(req); setIsQuoteModalOpen(true); }} 
                    className="w-full py-3 bg-brand-photoAccent dark:bg-[#fbd38d] text-white dark:text-brand-darkBg text-sm font-bold rounded-xl hover:bg-opacity-90 transition-colors shadow-md shadow-brand-photoAccent/20"
                  >
                    Submit Quote
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-2 font-medium">Currently {req.quotes?.length || 0} competitors</p>
                </div>
              </div>
            ))}
            
            {availableRequests.length === 0 && (
              <div className="col-span-full py-12 text-center border border-dashed border-slate-200 dark:border-white/10 rounded-3xl bg-slate-50 dark:bg-brand-darkCard">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center mx-auto mb-3 text-slate-500">
                   <i className="fa-solid fa-camera"></i>
                </div>
                <h3 className="text-base font-bold text-brand-navy dark:text-white mb-1">No Targeted Requests</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">There are no client requests that match your current specialty and availability.</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (currentView === 'portfolio') {
      return (
        <div className="animate-fade-in space-y-6">
          {/* Cover & Profile */}
          <div className="relative bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
            <div className="h-32 md:h-48 bg-gradient-to-r from-brand-photoAccent/20 to-brand-photoAccent/5 dark:from-brand-photoAccent/30 dark:to-brand-photoAccent/10 w-full object-cover"></div>
            <div className="px-6 pb-6 pt-0 flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 md:-mt-16">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-brand-darkCard bg-brand-photoAccent text-white flex items-center justify-center text-4xl font-bold shadow-md shrink-0 overflow-hidden relative">
                {profileData.photoUrl ? (
                  <img src={profileData.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  profileData.name.charAt(0)
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-black text-brand-navy dark:text-white">{profileData.name}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{profileData.location} • {profileData.specialization}</p>
                  </div>
                  <button onClick={() => setIsEditingProfile(true)} className="px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-brand-navy dark:text-white rounded-full text-xs font-bold transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-pen"></i> Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Details */}
            <div className="space-y-6 lg:col-span-1">
              {/* About */}
              <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-brand-navy dark:text-white mb-3 uppercase tracking-wider">About Me</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              {/* Equipment */}
              <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-brand-navy dark:text-white mb-3 uppercase tracking-wider">Gear</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Cameras</span>
                    <span className="font-semibold text-brand-navy dark:text-slate-200 text-right">Sony A7IV, Canon R5</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Lenses</span>
                    <span className="font-semibold text-brand-navy dark:text-slate-200 text-right">Sigma 35mm f/1.4, Sony 85mm</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Drones</span>
                    <span className="font-semibold text-brand-navy dark:text-slate-200 text-right">DJI Mavic 3 Pro</span>
                  </li>
                </ul>
              </div>

              {/* Pricing Packages */}
              <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-brand-navy dark:text-white mb-3 uppercase tracking-wider">Starting Rates</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-brand-photoAccent/5 border border-brand-photoAccent/20 rounded-xl flex justify-between items-center">
                    <span className="text-xs font-semibold text-brand-photoAccent">Pre-Wedding</span>
                    <span className="font-bold text-brand-navy dark:text-white">₹15,000</span>
                  </div>
                  <div className="p-3 bg-brand-photoAccent/5 border border-brand-photoAccent/20 rounded-xl flex justify-between items-center">
                    <span className="text-xs font-semibold text-brand-photoAccent">Full Day Wedding</span>
                    <span className="font-bold text-brand-navy dark:text-white">₹50,000</span>
                  </div>
                  <div className="p-3 bg-brand-photoAccent/5 border border-brand-photoAccent/20 rounded-xl flex justify-between items-center">
                    <span className="text-xs font-semibold text-brand-photoAccent">Event Coverage</span>
                    <span className="font-bold text-brand-navy dark:text-white">₹10,000 / day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Gallery */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold text-brand-navy dark:text-white uppercase tracking-wider">Portfolio Gallery</h3>
                  <button className="text-xs text-brand-photoAccent font-bold hover:underline">Manage Photos</button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((img, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 relative group cursor-pointer border border-slate-200 dark:border-white/10">
                      <div className="absolute inset-0 bg-brand-photoAccent/10 flex items-center justify-center transition-all duration-300">
                        <i className="fa-solid fa-image text-4xl text-brand-photoAccent/40"></i>
                      </div>
                      <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="text-white text-xs font-bold px-3 py-1.5 border border-white/30 rounded-full">View Image</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonials/Stats */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:border-brand-photoAccent/50 transition-colors">
                    <div className="text-3xl font-black text-brand-photoAccent mb-1">4.9<span className="text-xl text-yellow-400 dark:text-yellow-500 ml-1">★</span></div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Average Rating</span>
                 </div>
                 <div className="bg-white dark:bg-brand-darkCard rounded-3xl border border-slate-200 dark:border-white/10 p-6 shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:border-brand-photoAccent/50 transition-colors">
                    <div className="text-3xl font-black text-brand-photoAccent mb-1">24+</div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Completed Projects</span>
                 </div>
              </div>
            </div>
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
              <button 
                onClick={() => { setCurrentView('bids'); setActiveTab('all'); }} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors w-full text-left ${currentView !== 'portfolio' && activeTab !== 'find' ? 'bg-brand-photoAccent text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                <i className={`fa-solid fa-house w-5 text-center ${currentView !== 'portfolio' && activeTab !== 'find' ? '' : 'text-brand-photoAccent dark:text-[#1db59b]'}`}></i>
                Dashboard
              </button>
              <button 
                onClick={() => { setCurrentView('bids'); setActiveTab('find'); }} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors w-full text-left ${currentView !== 'portfolio' && activeTab === 'find' ? 'bg-brand-photoAccent text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                <i className={`fa-solid fa-camera w-5 text-center ${currentView !== 'portfolio' && activeTab === 'find' ? '' : 'text-brand-photoAccent dark:text-[#1db59b]'}`}></i>
                Find Projects
              </button>
              <button 
                onClick={() => { setCurrentView('portfolio'); setActiveTab(''); }} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors w-full text-left ${currentView === 'portfolio' ? 'bg-brand-photoAccent text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                <i className={`fa-regular fa-image w-5 text-center ${currentView === 'portfolio' ? '' : 'text-brand-photoAccent dark:text-[#1db59b]'}`}></i>
                My Portfolio
              </button>
              <button onClick={() => alert('Messages coming soon')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-comment w-5 text-center text-brand-photoAccent dark:text-[#1db59b]"></i>
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
            {/* Conditionally Render Header and Stats */}
            {currentView !== 'portfolio' && (
              <>
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
              </>
            )}

            {/* Main Content Area */}
            {renderContent()}

          </div>
        </main>
      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-brand-darkCard rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 animate-fade-in-up">
            <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">Edit Profile</h2>
              <button onClick={() => setIsEditingProfile(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-brand-navy dark:hover:text-white transition-colors">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Profile Photo Upload */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full border-4 border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex items-center justify-center overflow-hidden relative group">
                  {profileData.photoUrl ? (
                    <img src={profileData.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl font-bold text-slate-300 dark:text-slate-600">
                      {profileData.name.charAt(0)}
                    </span>
                  )}
                  <label className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <i className="fa-solid fa-camera mb-1"></i>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Upload</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const url = URL.createObjectURL(e.target.files[0]);
                          setProfileData({...profileData, photoUrl: url});
                        }
                      }} 
                    />
                  </label>
                </div>
                <div className="text-xs text-slate-500">Click image to update profile photo</div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Display Name</label>
                <input 
                  type="text" 
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Location</label>
                <input 
                  type="text" 
                  value={profileData.location}
                  onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Specialization</label>
                <input 
                  type="text" 
                  value={profileData.specialization}
                  onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">About Me</label>
                <textarea 
                  rows="4"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-white/5 flex gap-3">
              <button onClick={() => setIsEditingProfile(false)} className="flex-1 py-3 rounded-xl font-bold text-sm bg-slate-100 dark:bg-white/5 text-brand-navy dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                Cancel
              </button>
              <button onClick={() => setIsEditingProfile(false)} className="flex-1 py-3 rounded-xl font-bold text-sm bg-brand-photoAccent text-white hover:bg-opacity-90 transition-colors shadow-md shadow-brand-photoAccent/20">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Quote Modal */}
      {isQuoteModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-brand-darkCard rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 animate-fade-in-up flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center shrink-0">
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">Submit Quote</h2>
              <button onClick={() => { setIsQuoteModalOpen(false); setSelectedRequest(null); }} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-brand-navy dark:hover:text-white transition-colors">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="bg-brand-photoAccent/5 dark:bg-[#fbd38d]/10 p-4 rounded-xl border border-brand-photoAccent/20 dark:border-[#fbd38d]/20">
                <h3 className="font-bold text-brand-navy dark:text-white text-sm mb-1">{selectedRequest.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{selectedRequest.requirements}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Your Bid Amount (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                  <input 
                    type="number" 
                    value={quoteData.amount}
                    onChange={(e) => setQuoteData({...quoteData, amount: e.target.value})}
                    placeholder="e.g. 5000"
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Cover Message (Optional)</label>
                <textarea 
                  rows="3"
                  value={quoteData.message}
                  onChange={(e) => setQuoteData({...quoteData, message: e.target.value})}
                  placeholder="Why should the client pick you?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white focus:outline-none focus:border-brand-photoAccent transition-colors resize-none text-sm"
                ></textarea>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-white/5 flex gap-3 shrink-0 bg-slate-50 dark:bg-white/5">
              <button onClick={() => { setIsQuoteModalOpen(false); setSelectedRequest(null); }} className="flex-1 py-3 rounded-xl font-bold text-sm bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 text-brand-navy dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Cancel
              </button>
              <button 
                onClick={() => {
                  if(!quoteData.amount) return alert("Please enter an amount");
                  alert("Quote submitted successfully!");
                  setIsQuoteModalOpen(false);
                  setSelectedRequest(null);
                  setQuoteData({ amount: '', message: '' });
                }} 
                className="flex-1 py-3 rounded-xl font-bold text-sm bg-brand-photoAccent dark:bg-[#fbd38d] text-white dark:text-brand-darkBg hover:bg-opacity-90 transition-colors shadow-md shadow-brand-photoAccent/20"
              >
                Send Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
