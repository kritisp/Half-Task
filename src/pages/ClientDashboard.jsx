import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

// MOCK DATA: Drivers
const MOCK_DRIVERS = [
  { id: 1, name: "Rahul Kumar", rating: 4.8, rate: 200, carType: "Sedan", allowsStickerAds: true, trips: 142, avatar: "R" },
  { id: 2, name: "Amit Singh", rating: 4.5, rate: 150, carType: "Hatchback", allowsStickerAds: false, trips: 89, avatar: "A" },
  { id: 3, name: "Priya Sharma", rating: 4.9, rate: 300, carType: "SUV", allowsStickerAds: true, trips: 210, avatar: "P" },
  { id: 4, name: "Vikram Das", rating: 4.2, rate: 180, carType: "Sedan", allowsStickerAds: true, trips: 45, avatar: "V" },
  { id: 5, name: "Suresh Pillai", rating: 4.7, rate: 400, carType: "Luxury", allowsStickerAds: false, trips: 120, avatar: "S" },
  { id: 6, name: "Anita Desai", rating: 4.6, rate: 160, carType: "Hatchback", allowsStickerAds: true, trips: 67, avatar: "AD" },
  { id: 7, name: "Kabir Khan", rating: 4.4, rate: 250, carType: "SUV", allowsStickerAds: false, trips: 93, avatar: "K" },
  { id: 8, name: "Meera Patel", rating: 4.9, rate: 220, carType: "Sedan", allowsStickerAds: true, trips: 310, avatar: "M" },
];

// MOCK DATA: Photographers
const MOCK_PHOTOGRAPHERS = [
  { id: 1, name: "Arjun Verma", rating: 4.9, rate: 3000, rateType: "Per Event", specialty: "Wedding", equipment: "Sony A7IV, Drone", avatar: "A", campaigns: 42 },
  { id: 2, name: "Sneha Rao", rating: 4.7, rate: 2000, rateType: "Hourly", specialty: "Product", equipment: "Canon R5, Studio Lights", avatar: "S", campaigns: 110 },
  { id: 3, name: "Ravi Teja", rating: 4.5, rate: 2000, rateType: "Full Day", specialty: "Event", equipment: "Nikon Z8", avatar: "R", campaigns: 28 },
  { id: 4, name: "Neha Gupta", rating: 4.8, rate: 5000, rateType: "Per Event", specialty: "Wedding", equipment: "Sony A7III, Gimbal", avatar: "N", campaigns: 65 },
  { id: 5, name: "Kunal Singh", rating: 4.6, rate: 2000, rateType: "Hourly", specialty: "Real Estate", equipment: "DJI Mavic 3, Canon 5D", avatar: "K", campaigns: 89 },
  { id: 6, name: "Pooja Hegde", rating: 4.9, rate: 3000, rateType: "Full Day", specialty: "Fashion", equipment: "Canon R6 Mark II", avatar: "P", campaigns: 54 },
];

export default function ClientDashboard() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'active', 'find'
  const [selectedService, setSelectedService] = useState(null); // null, 'photographer', 'driver'
  
  // Data State
  const [drivers, setDrivers] = useState([]);
  const [photographers, setPhotographers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Driver Filter & Sort State
  const [driverSearchQuery, setDriverSearchQuery] = useState('');
  const [carTypeFilter, setCarTypeFilter] = useState('All');
  const [allowsStickerAds, setAllowsStickerAds] = useState(false);
  const [driverSortBy, setDriverSortBy] = useState('rating'); // 'rating', 'rate_asc', 'rate_desc'

  // Photographer Filter & Sort State
  const [photoSearchQuery, setPhotoSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [rateTypeFilter, setRateTypeFilter] = useState('All');
  const [photoSortBy, setPhotoSortBy] = useState('rating'); // 'rating', 'rate_asc', 'rate_desc'

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

  // MOCK API FETCH
  useEffect(() => {
    if (activeTab === 'find') {
      if (selectedService === 'driver' && drivers.length === 0) {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setDrivers(MOCK_DRIVERS);
          setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
      } else if (selectedService === 'photographer' && photographers.length === 0) {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setPhotographers(MOCK_PHOTOGRAPHERS);
          setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [activeTab, selectedService]);

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

  // Memoized filtered and sorted drivers
  const filteredDrivers = useMemo(() => {
    return drivers
      .filter(driver => {
        const matchesSearch = driver.name.toLowerCase().includes(driverSearchQuery.toLowerCase());
        const matchesCarType = carTypeFilter === 'All' || driver.carType === carTypeFilter;
        const matchesSticker = !allowsStickerAds || driver.allowsStickerAds;
        return matchesSearch && matchesCarType && matchesSticker;
      })
      .sort((a, b) => {
        if (driverSortBy === 'rate_asc') return a.rate - b.rate;
        if (driverSortBy === 'rate_desc') return b.rate - a.rate;
        return b.rating - a.rating; // default: rating
      });
  }, [drivers, driverSearchQuery, carTypeFilter, allowsStickerAds, driverSortBy]);

  // Memoized filtered and sorted photographers
  const filteredPhotographers = useMemo(() => {
    return photographers
      .filter(photo => {
        const matchesSearch = photo.name.toLowerCase().includes(photoSearchQuery.toLowerCase());
        const matchesSpecialty = specialtyFilter === 'All' || photo.specialty === specialtyFilter;
        const matchesRateType = rateTypeFilter === 'All' || photo.rateType === rateTypeFilter;
        return matchesSearch && matchesSpecialty && matchesRateType;
      })
      .sort((a, b) => {
        if (photoSortBy === 'rate_asc') return a.rate - b.rate;
        if (photoSortBy === 'rate_desc') return b.rate - a.rate;
        return b.rating - a.rating; // default: rating
      });
  }, [photographers, photoSearchQuery, specialtyFilter, rateTypeFilter, photoSortBy]);

  const renderTabContent = () => {
    if (activeTab === 'all') {
      return (
        <>
          <div className="mb-2">
            <p className="text-xs text-slate-500 dark:text-slate-400">Every task you have posted so far</p>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white mt-1">All Tasks</h2>
          </div>
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm mt-4 transition-colors">
            <div className="w-12 h-12 mb-4 relative">
              <i className="fa-solid fa-magnifying-glass text-4xl text-brand-teal dark:text-brand-darkAccent drop-shadow-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">No tasks yet</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
              Post a task to find the best talent.
            </p>
            <button onClick={() => alert('Post Task flow coming soon!')} className="px-6 py-2.5 bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-semibold text-sm rounded-full shadow-md shadow-brand-teal/20 dark:shadow-brand-darkAccent/20 hover:bg-brand-tealDark dark:hover:bg-brand-darkAccent/90 transition-all">
              Post a Task
            </button>
          </div>
        </>
      );
    }

    if (activeTab === 'active') {
      return (
        <>
          <div className="mb-2">
            <p className="text-xs text-slate-500 dark:text-slate-400">Talent currently working on your tasks</p>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white mt-1">Active Talent</h2>
          </div>
          <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm mt-4 transition-colors">
            <div className="w-12 h-12 mb-4 relative">
              <i className="fa-solid fa-users text-4xl text-brand-teal dark:text-brand-darkAccent drop-shadow-sm"></i>
            </div>
            <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">No active talent</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
              You haven't hired anyone yet.
            </p>
            <button 
              onClick={() => { setActiveTab('find'); setSelectedService(null); }}
              className="px-6 py-2.5 bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-semibold text-sm rounded-full shadow-md shadow-brand-teal/20 dark:shadow-brand-darkAccent/20 hover:bg-brand-tealDark dark:hover:bg-brand-darkAccent/90 transition-all"
            >
              Discover Talent
            </button>
          </div>
        </>
      );
    }

    if (activeTab === 'find') {
      // 1. SERVICE SELECTION VIEW
      if (!selectedService) {
        return (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="mb-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">What kind of talent do you need for your task?</p>
              <h2 className="text-lg font-bold text-brand-navy dark:text-white mt-1">Select a Service</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Creator Card */}
              <div 
                onClick={() => alert('Creator Marketplace coming soon!')}
                className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-creatorLight dark:bg-[#a78bfa]/20 text-brand-creatorAccent dark:text-[#a78bfa] flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Hire a Creator</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  Find influencers and content creators to promote your brand or products.
                </p>
                <div className="text-brand-creatorAccent dark:text-[#a78bfa] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse Creators <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>

              {/* Photographer Card */}
              <div 
                onClick={() => setSelectedService('photographer')}
                className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group ring-1 ring-transparent hover:ring-brand-photoAccent/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-photoLight dark:bg-[#fbd38d]/20 text-brand-photoAccent dark:text-[#fbd38d] flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-camera"></i>
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Hire a Photographer</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  Book professional photographers for events, weddings, products, and more.
                </p>
                <div className="text-brand-photoAccent dark:text-[#fbd38d] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse Photographers <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>

              {/* Driver Card */}
              <div 
                onClick={() => setSelectedService('driver')}
                className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group ring-1 ring-transparent hover:ring-brand-driverAccent/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-driverLight dark:bg-[#7dd3fc]/20 text-brand-driverAccent dark:text-[#7dd3fc] flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-car"></i>
                </div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Hire a Driver</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                  Find local and intercity drivers for daily duties, outstation trips, or commercial needs.
                </p>
                <div className="text-brand-driverAccent dark:text-[#7dd3fc] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse Drivers <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // 2. PHOTOGRAPHER MARKETPLACE
      if (selectedService === 'photographer') {
        return (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <button 
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-brand-photoAccent dark:hover:text-[#fbd38d] hover:border-brand-photoAccent dark:hover:border-[#fbd38d] transition-all shadow-sm"
              >
                <i className="fa-solid fa-arrow-left text-sm"></i>
              </button>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Discover top-tier visual artists</p>
                <h2 className="text-lg font-bold text-brand-navy dark:text-white mt-0.5">Photographers Marketplace</h2>
              </div>
            </div>

            {/* Filters & Sorting */}
            <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-5 shadow-sm transition-colors">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search */}
                <div className="relative w-full md:w-64 shrink-0">
                  <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                  <input 
                    type="text" 
                    placeholder="Search photographers..." 
                    value={photoSearchQuery}
                    onChange={(e) => setPhotoSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-brand-photoAccent focus:ring-1 focus:ring-brand-photoAccent dark:text-white transition-all"
                  />
                </div>

                {/* Filters Group */}
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                  {/* Specialty */}
                  <select 
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-photoAccent cursor-pointer transition-all appearance-none"
                  >
                    <option value="All">All Specialties</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Event">Event</option>
                    <option value="Product">Product</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>

                  {/* Rate Type */}
                  <select 
                    value={rateTypeFilter}
                    onChange={(e) => setRateTypeFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-photoAccent cursor-pointer transition-all appearance-none"
                  >
                    <option value="All">All Rate Types</option>
                    <option value="Hourly">Hourly</option>
                    <option value="Per Event">Per Event</option>
                    <option value="Full Day">Full Day</option>
                  </select>

                  {/* Sort */}
                  <select 
                    value={photoSortBy}
                    onChange={(e) => setPhotoSortBy(e.target.value)}
                    className="px-3 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-photoAccent cursor-pointer transition-all appearance-none ml-auto md:ml-4"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="rate_asc">Rate: Low to High</option>
                    <option value="rate_desc">Rate: High to Low</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Photographers Grid */}
            {isLoading ? (
              <div className="py-20 flex justify-center">
                <i className="fa-solid fa-circle-notch fa-spin text-3xl text-brand-photoAccent dark:text-[#fbd38d]"></i>
              </div>
            ) : filteredPhotographers.length === 0 ? (
              <div className="py-16 flex flex-col items-center text-center">
                <i className="fa-solid fa-camera text-4xl text-slate-300 dark:text-slate-600 mb-3 opacity-50"></i>
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400">No photographers found</h3>
                <p className="text-sm text-slate-400">Try adjusting your filters.</p>
                <button 
                  onClick={() => { setPhotoSearchQuery(''); setSpecialtyFilter('All'); setRateTypeFilter('All'); }}
                  className="mt-4 text-brand-photoAccent text-sm font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPhotographers.map(photo => (
                  <div key={photo.id} className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-photoAccent/30 dark:hover:border-[#fbd38d]/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-brand-photoLight dark:bg-[#fbd38d]/10 text-brand-photoAccent dark:text-[#fbd38d] flex items-center justify-center font-bold text-xl shrink-0 group-hover:bg-brand-photoAccent group-hover:text-white dark:group-hover:text-brand-darkBg transition-colors">
                        {photo.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-brand-navy dark:text-white leading-tight">{photo.name}</h3>
                        <div className="flex items-center gap-1 mt-1 text-xs font-medium">
                          <i className="fa-solid fa-star text-yellow-400"></i>
                          <span className="text-slate-700 dark:text-slate-200">{photo.rating}</span>
                          <span className="text-slate-400">({photo.campaigns} projects)</span>
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-col gap-2 mb-5 flex-1">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-xs font-semibold text-orange-600 dark:text-orange-400">
                          <i className="fa-solid fa-camera-retro opacity-70"></i> {photo.specialty}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300">
                          <i className="fa-solid fa-clock opacity-70"></i> {photo.rateType}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 mt-1">
                        <i className="fa-solid fa-toolbox mt-0.5 opacity-70"></i> {photo.equipment}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">Rate</span>
                        <span className="text-lg font-black text-brand-photoAccent dark:text-[#fbd38d] leading-none">₹{photo.rate.toLocaleString()}</span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Request sent to ${photo.name}!`);
                        }}
                        className="px-5 py-2 bg-brand-navy dark:bg-white text-white dark:text-brand-dark font-semibold text-sm rounded-xl hover:bg-brand-photoAccent dark:hover:bg-[#fbd38d] dark:hover:text-brand-darkBg transition-colors shadow-sm"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }

      // 3. DRIVER MARKETPLACE
      if (selectedService === 'driver') {
        return (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center gap-4 mb-2">
              <button 
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-brand-driverAccent dark:hover:text-[#7dd3fc] hover:border-brand-driverAccent dark:hover:border-[#7dd3fc] transition-all shadow-sm"
              >
                <i className="fa-solid fa-arrow-left text-sm"></i>
              </button>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Discover and hire the best drivers for your needs</p>
                <h2 className="text-lg font-bold text-brand-navy dark:text-white mt-0.5">Drivers Marketplace</h2>
              </div>
            </div>

            {/* Filters & Sorting */}
            <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-5 shadow-sm transition-colors">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search */}
                <div className="relative w-full md:w-64 shrink-0">
                  <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                  <input 
                    type="text" 
                    placeholder="Search drivers..." 
                    value={driverSearchQuery}
                    onChange={(e) => setDriverSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:border-brand-driverAccent focus:ring-1 focus:ring-brand-driverAccent dark:text-white transition-all"
                  />
                </div>

                {/* Filters Group */}
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                  {/* Car Type */}
                  <select 
                    value={carTypeFilter}
                    onChange={(e) => setCarTypeFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-driverAccent cursor-pointer transition-all appearance-none"
                  >
                    <option value="All">All Car Types</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Luxury">Luxury</option>
                  </select>

                  {/* Sticker Ads Toggle */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="sr-only" 
                        checked={allowsStickerAds}
                        onChange={(e) => setAllowsStickerAds(e.target.checked)}
                      />
                      <div className={`block w-10 h-6 rounded-full transition-colors ${allowsStickerAds ? 'bg-brand-driverAccent dark:bg-[#7dd3fc]' : 'bg-slate-200 dark:bg-white/10'}`}></div>
                      <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${allowsStickerAds ? 'transform translate-x-4' : ''}`}></div>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-brand-navy dark:group-hover:text-white transition-colors">
                      Sticker Ads OK
                    </span>
                  </label>

                  {/* Sort */}
                  <select 
                    value={driverSortBy}
                    onChange={(e) => setDriverSortBy(e.target.value)}
                    className="px-3 py-2 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-brand-driverAccent cursor-pointer transition-all appearance-none ml-auto md:ml-4"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="rate_asc">Rate: Low to High</option>
                    <option value="rate_desc">Rate: High to Low</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Drivers Grid */}
            {isLoading ? (
              <div className="py-20 flex justify-center">
                <i className="fa-solid fa-circle-notch fa-spin text-3xl text-brand-driverAccent dark:text-[#7dd3fc]"></i>
              </div>
            ) : filteredDrivers.length === 0 ? (
              <div className="py-16 flex flex-col items-center text-center">
                <i className="fa-solid fa-ghost text-4xl text-slate-300 dark:text-slate-600 mb-3 opacity-50"></i>
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400">No drivers found</h3>
                <p className="text-sm text-slate-400">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => { setDriverSearchQuery(''); setCarTypeFilter('All'); setAllowsStickerAds(false); }}
                  className="mt-4 text-brand-driverAccent text-sm font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDrivers.map(driver => (
                  <Link to="/driver/profile" key={driver.id} className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-driverAccent/30 dark:hover:border-[#7dd3fc]/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
                    {/* Driver Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-brand-driverLight dark:bg-[#7dd3fc]/10 text-brand-driverAccent dark:text-[#7dd3fc] flex items-center justify-center font-bold text-xl shrink-0 group-hover:bg-brand-driverAccent group-hover:text-white dark:group-hover:text-brand-darkBg transition-colors">
                        {driver.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-brand-navy dark:text-white leading-tight">{driver.name}</h3>
                        <div className="flex items-center gap-1 mt-1 text-xs font-medium">
                          <i className="fa-solid fa-star text-yellow-400"></i>
                          <span className="text-slate-700 dark:text-slate-200">{driver.rating}</span>
                          <span className="text-slate-400">({driver.trips} trips)</span>
                        </div>
                      </div>
                    </div>

                    {/* Driver Details Badges */}
                    <div className="flex flex-wrap gap-2 mb-5 flex-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <i className="fa-solid fa-car-side opacity-70"></i> {driver.carType}
                      </span>
                      {driver.allowsStickerAds && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
                          <i className="fa-solid fa-tag opacity-70"></i> Ads Accepted
                        </span>
                      )}
                    </div>

                    {/* Driver Footer (Rate & Action) */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">Rate</span>
                        <span className="text-lg font-black text-brand-driverAccent dark:text-[#7dd3fc] leading-none">₹{driver.rate}<span className="text-xs text-slate-400 font-medium">/hr</span></span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigating to profile when clicking Send Offer
                          alert(`Offer sent to ${driver.name}!`);
                        }}
                        className="px-5 py-2 bg-brand-navy dark:bg-white text-white dark:text-brand-dark font-semibold text-sm rounded-xl hover:bg-brand-driverAccent dark:hover:bg-[#7dd3fc] dark:hover:text-brand-darkBg transition-colors shadow-sm"
                      >
                        Send Offer
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      }
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
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Client Business</span>
            <div className="w-9 h-9 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm shadow-sm">
              C
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-brand-darkCard border-r border-[#e2f0ed] dark:border-white/5 flex flex-col shrink-0 transition-colors duration-300">
          <div className="p-8 flex flex-col items-center border-b border-[#e2f0ed] dark:border-white/5">
            <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-2xl shadow-sm mb-3">
              C
            </div>
            <h2 className="text-lg font-bold text-brand-navy dark:text-white text-center">Client Business</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Client Account</p>
          </div>
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="flex flex-col gap-1 px-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm w-full text-left ${activeTab === 'all' || activeTab === 'active' ? 'bg-brand-teal text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
              >
                <i className="fa-solid fa-house w-5 text-center"></i>
                Dashboard
              </button>
              <button 
                onClick={() => { setActiveTab('find'); setSelectedService(null); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm w-full text-left ${activeTab === 'find' ? 'bg-brand-teal text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
              >
                <i className={`fa-solid fa-magnifying-glass w-5 text-center ${activeTab === 'find' ? 'text-white' : 'text-brand-teal dark:text-brand-darkAccent'}`}></i>
                Discover Talent
              </button>
              <button onClick={() => alert('My Profile coming soon!')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-user w-5 text-center text-brand-teal dark:text-brand-darkAccent"></i>
                My Profile
              </button>
              <button onClick={() => alert('Messages coming soon!')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 font-medium text-sm transition-colors w-full text-left">
                <i className="fa-regular fa-comment w-5 text-center text-brand-teal dark:text-brand-darkAccent"></i>
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-2 flex items-center gap-2">
                Welcome, Client Business <span className="text-2xl animate-bounce">👋</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Track your posted tasks and discover talent</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div 
                onClick={() => setActiveTab('all')}
                className={`bg-[#eef8f6] dark:bg-brand-darkCard border border-[#d1ebe5] dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group ${activeTab === 'all' ? 'ring-2 ring-brand-teal ring-offset-2 dark:ring-offset-brand-darkBg' : ''}`}
              >
                <div className="w-8 h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full mb-6 transition-all duration-300 group-hover:w-12"></div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2">Active Tasks</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 group-hover:text-brand-teal dark:group-hover:text-brand-darkAccent transition-colors">
                  <i className="fa-regular fa-file-lines text-red-400"></i> Click to view & manage
                </p>
              </div>
              <div 
                onClick={() => setActiveTab('active')}
                className={`bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group ${activeTab === 'active' ? 'ring-2 ring-brand-teal ring-offset-2 dark:ring-offset-brand-darkBg' : ''}`}
              >
                <div className="w-8 h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full mb-6 transition-all duration-300 group-hover:w-12"></div>
                <h3 className="text-sm font-semibold text-brand-navy dark:text-slate-200 mb-2">Talent Hired</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 group-hover:text-brand-teal dark:group-hover:text-brand-darkAccent transition-colors">
                  <i className="fa-solid fa-chart-line text-purple-400"></i> Click to see breakdown
                </p>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => setActiveTab('all')}
                className={`flex-1 py-4 px-6 rounded-2xl border text-center font-semibold text-sm transition-all shadow-sm hover:-translate-y-0.5 ${
                  activeTab === 'all' 
                    ? 'bg-[#eef8f6] dark:bg-brand-darkCard border-[#d1ebe5] dark:border-brand-darkAccent/30 text-brand-teal dark:text-brand-darkAccent' 
                    : 'bg-white dark:bg-brand-darkCard/50 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-200 dark:hover:border-white/10'
                }`}
              >
                All Tasks
                {activeTab === 'all' && <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-teal text-white text-[10px] animate-fade-in">0</span>}
              </button>
              <button 
                onClick={() => setActiveTab('active')}
                className={`flex-1 py-4 px-6 rounded-2xl border text-center font-semibold text-sm transition-all shadow-sm hover:-translate-y-0.5 ${
                  activeTab === 'active' 
                    ? 'bg-[#eef8f6] dark:bg-brand-darkCard border-[#d1ebe5] dark:border-brand-darkAccent/30 text-brand-teal dark:text-brand-darkAccent' 
                    : 'bg-white dark:bg-brand-darkCard/50 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-200 dark:hover:border-white/10'
                }`}
              >
                Active Talent
                {activeTab === 'active' && <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-teal text-white text-[10px] animate-fade-in">0</span>}
              </button>
              <button 
                onClick={() => { setActiveTab('find'); setSelectedService(null); }}
                className={`flex-1 py-4 px-6 rounded-2xl border text-center font-semibold text-sm transition-all shadow-sm hover:-translate-y-0.5 ${
                  activeTab === 'find' 
                    ? 'bg-[#eef8f6] dark:bg-brand-darkCard border-[#d1ebe5] dark:border-brand-darkAccent/30 text-brand-teal dark:text-brand-darkAccent' 
                    : 'bg-white dark:bg-brand-darkCard/50 border-slate-100 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-slate-200 dark:hover:border-white/10'
                }`}
              >
                Discover Talent
              </button>
            </div>

            {/* Dynamic Content Rendering */}
            <div className="min-h-[400px]">
              {renderTabContent()}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
