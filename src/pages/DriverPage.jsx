import { Link } from 'react-router-dom';

export default function DriverPage() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-10 pb-16 px-5">
      
      {/* White/Dark Card Wrapper */}
      <div className="bg-white dark:bg-brand-darkCard w-full max-w-[540px] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 dark:border-white/10 p-7 md:p-10 mb-5 transition-colors duration-300">
          
          {/* Top Progress Lines */}
          <div className="flex gap-2 mb-8">
              <div className="h-1 bg-brand-driverAccent dark:bg-brand-driverAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-brand-driverAccent dark:bg-brand-driverAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full w-1/3"></div>
          </div>

          {/* Header Section */}
          <header className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-driverLight dark:bg-brand-driverAccent/20 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold tracking-wide mb-5 transition-colors">
                  <i className="fa-solid fa-taxi"></i>
                  Driver Account
              </div>
              
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-3 transition-colors">Set up Driver Profile</h1>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-driverLight dark:bg-brand-driverAccent/10 border border-brand-driverAccent/20 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold mb-4 transition-colors">
                  <i className="fa-solid fa-check"></i> 100% free — no platform fees
              </div>
              
              <p className="text-sm text-slate-500 dark:text-slate-300 transition-colors">Customers will see this when you bid on driving requests</p>
          </header>

          <form action="#" method="POST" className="space-y-6">

              {/* ================= SECTION 1: ACCOUNT DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Your Account</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      {/* Name */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Driver / Agency Name</label>
                          <input type="text" placeholder="e.g. Odisha Travels or Raj Driver Services" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          <div className="mt-2 flex items-start gap-2 bg-brand-driverLight dark:bg-brand-driverAccent/10 p-3 rounded-lg text-xs text-brand-driverAccent dark:text-[#7dd3fc] transition-colors">
                              <span>💡</span>
                              <p>Use your professional or business name</p>
                          </div>
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Email</label>
                              <input type="email" placeholder="you@email.com" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Phone <span className="text-slate-400 font-medium normal-case">(Indian Mobile)</span></label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 rounded-l-xl bg-slate-100 dark:bg-white/5 border border-r-0 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm transition-colors">+91</span>
                                  <input type="tel" placeholder="98765 43210" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-r-xl rounded-l-none px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              </div>
                          </div>
                      </div>

                      {/* Password Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Password</label>
                              <input type="password" placeholder="Min. 8 chars" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              <i className="fa-regular fa-eye absolute right-4 top-10 text-slate-400 cursor-pointer hover:text-brand-navy dark:hover:text-white transition-colors"></i>
                          </div>
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Confirm</label>
                              <input type="password" placeholder="Repeat" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              <i className="fa-regular fa-eye absolute right-4 top-10 text-slate-400 cursor-pointer hover:text-brand-navy dark:hover:text-white transition-colors"></i>
                          </div>
                      </div>

                      {/* Profile Photo */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Profile Photo / Agency Logo</label>
                          <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center justify-center bg-brand-inputBg dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                              <i className="fa-solid fa-camera text-2xl text-slate-400 mb-2"></i>
                              <span className="text-sm font-semibold text-brand-navy dark:text-white mb-1 transition-colors">Click to upload photo</span>
                              <span className="text-[10px] text-slate-500">JPG, PNG under 5MB</span>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 2: DRIVER DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Driver Details</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      {/* Driver Type */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Driver Type</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Individual Driver</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Taxi Service</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Intercity Driver</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Tourist Driver</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Local Cab Service</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Rental Vehicle Provider</button>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Experience Level */}
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Experience Level</label>
                              <div className="flex flex-wrap gap-2">
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Beginner</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Experienced</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Professional</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">5+ Years</button>
                              </div>
                          </div>
                          
                          {/* Years of Experience */}
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Years of Experience</label>
                              <input type="number" min="0" placeholder="e.g. 5" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>

                      {/* License Type */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">License Type</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">LMV</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Commercial</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Tourist Permit</button>
                          </div>
                      </div>

                      {/* Languages */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Driving Languages</label>
                          <input type="text" placeholder="e.g. Hindi, English, Odia" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 3: VEHICLE DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Vehicle Information</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      {/* Vehicle Type */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Vehicle Type</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Sedan</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">SUV</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Hatchback</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Luxury Car</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Tempo Traveller</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Mini Bus</button>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Vehicle Brand & Model</label>
                              <input type="text" placeholder="e.g. Swift Dzire 2022" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Registration Number</label>
                              <input type="text" placeholder="e.g. OD-02-AB-1234" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors uppercase" />
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Seating Capacity</label>
                              <input type="number" min="1" placeholder="e.g. 4" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div className="flex flex-col justify-center pt-2 md:pt-6">
                              <div className="flex items-center justify-between bg-brand-inputBg dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                                  <div>
                                      <span className="block text-xs font-bold text-brand-navy dark:text-white transition-colors">AC Available?</span>
                                  </div>
                                  <label className="flex items-center cursor-pointer relative">
                                      <input type="checkbox" className="sr-only toggle-checkbox" defaultChecked />
                                      <div className="toggle-label block bg-slate-300 dark:bg-black/40 w-10 h-6 rounded-full border border-slate-300 dark:border-white/20 transition-colors duration-300 relative">
                                          <div className="dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition transform translate-x-4 shadow-sm"></div>
                                      </div>
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 4: SERVICE AREA ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Service Availability</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Primary Service Location</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <i className="fa-solid fa-location-dot text-brand-driverAccent"></i>
                                  </div>
                                  <input type="text" placeholder="Search Cities..." className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              </div>
                          </div>
                          
                          <div className="flex flex-col justify-center pt-2 md:pt-6">
                              <div className="flex items-center justify-between bg-brand-inputBg dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                                  <div>
                                      <span className="block text-xs font-bold text-brand-navy dark:text-white transition-colors">Outstation Travel?</span>
                                      <span className="block text-[10px] text-slate-500">Available for intercity trips?</span>
                                  </div>
                                  <label className="flex items-center cursor-pointer relative">
                                      <input type="checkbox" className="sr-only toggle-checkbox" defaultChecked />
                                      <div className="toggle-label block bg-slate-300 dark:bg-black/40 w-10 h-6 rounded-full border border-slate-300 dark:border-white/20 transition-colors duration-300 relative">
                                          <div className="dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition transform translate-x-4 shadow-sm"></div>
                                      </div>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Available For</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Local Rides</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Intercity Travel</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Airport Pickup</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Tourist Travel</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-driverAccent hover:text-brand-driverAccent transition-all">Event Transportation</button>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Availability Range</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Local Only</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Odisha Wide</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Pan India</button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 5: PRICING ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Pricing Details</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Pricing Model</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-3 py-2 rounded-lg border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Per KM</button>
                              <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Per Hour</button>
                              <button type="button" className="px-3 py-2 rounded-lg border border-brand-driverAccent bg-brand-driverAccent/10 text-brand-driverAccent dark:text-[#7dd3fc] text-xs font-bold transition-all">Full Day</button>
                              <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Negotiable</button>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Base Pricing</label>
                              <input type="text" placeholder="e.g. ₹15/km or ₹2000/day" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Special Charges <span className="text-slate-400 font-medium normal-case">(Optional)</span></label>
                              <input type="text" placeholder="e.g. Night charge ₹300" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 6: ABOUT ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">About Your Services</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Short Bio</label>
                      <textarea rows="3" placeholder="Tell customers about your driving experience and services..." className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-none transition-colors"></textarea>
                  </div>
              </section>

              {/* ================= SECTION 7: DOCUMENTS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Verification Documents</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-brand-mint dark:bg-white/5 border border-brand-teal/20 dark:border-white/10 rounded-2xl p-5 md:p-6 space-y-4 transition-colors">
                      <div className="mt-1 mb-4 flex items-start gap-2 bg-brand-driverLight dark:bg-brand-driverAccent/10 p-3 rounded-lg text-xs text-brand-driverAccent dark:text-[#7dd3fc] transition-colors">
                          <span>🔒</span>
                          <p>Documents are securely verified for trust and safety.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                          <div className="aspect-video border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                              <i className="fa-solid fa-id-card text-lg text-slate-400 mb-1"></i>
                              <span className="text-[10px] font-medium text-slate-500 text-center">Driving License</span>
                          </div>
                          <div className="aspect-video border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                              <i className="fa-solid fa-file-contract text-lg text-slate-400 mb-1"></i>
                              <span className="text-[10px] font-medium text-slate-500 text-center">Vehicle RC</span>
                          </div>
                          <div className="aspect-video border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                              <i className="fa-solid fa-shield-halved text-lg text-slate-400 mb-1"></i>
                              <span className="text-[10px] font-medium text-slate-500 text-center">Insurance</span>
                          </div>
                          <div className="aspect-video border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                              <i className="fa-solid fa-file-lines text-lg text-slate-400 mb-1"></i>
                              <span className="text-[10px] font-medium text-slate-500 text-center">Permit (Optional)</span>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 8: PAYMENT DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Payment Details</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-[#f8fbfb] dark:bg-black/10 border border-slate-200 dark:border-white/10 rounded-2xl p-5 md:p-6 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                              <div style={{fontSize: "1.4rem"}}>💷</div>
                              <h3 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">Payment Details</h3>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase">Optional</span>
                      </div>

                      <div className="mt-2 mb-4 flex items-start gap-2 bg-brand-driverLight dark:bg-brand-driverAccent/10 p-3 rounded-lg text-xs text-brand-driverAccent dark:text-[#7dd3fc] transition-colors">
                          <span>💡</span>
                          <p>Customers can use this for direct payments after booking approval.</p>
                      </div>

                      <div className="space-y-4">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI ID</label>
                              <input type="text" placeholder="yourname@okicici" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI QR CODE</label>
                              <div className="border border-dashed border-slate-300 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-driverAccent transition-all cursor-pointer">
                                  <i className="fa-solid fa-qrcode text-lg text-slate-400 mb-1"></i>
                                  <span className="text-xs font-medium text-brand-driverAccent mb-0.5">Click to upload QR</span>
                                  <span className="text-[10px] text-slate-500">JPG, PNG under 5MB</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SUBMIT ================= */}
              <div className="pt-8 space-y-4">
                  <button type="submit" className="w-full py-4 rounded-full bg-brand-driverAccent text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 hover:opacity-90">
                      Create Driver Profile
                  </button>
                  <button type="button" className="w-full py-4 rounded-full border border-brand-driverAccent bg-transparent text-brand-driverAccent dark:text-[#7dd3fc] font-bold text-sm hover:bg-brand-driverLight dark:hover:bg-brand-driverAccent/10 transition-all duration-300">
                      Already have an account? Log In
                  </button>
              </div>

          </form>
      </div>
    </div>
  );
}
