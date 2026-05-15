import { Link } from 'react-router-dom';

export default function PhotographyPage() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-10 pb-16 px-5">
      
      {/* White/Dark Card Wrapper */}
      <div className="bg-white dark:bg-brand-darkCard w-full max-w-[540px] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 dark:border-white/10 p-7 md:p-10 mb-5 transition-colors duration-300">
          
          {/* Top Progress Lines */}
          <div className="flex gap-2 mb-8">
              <div className="h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full w-1/3"></div>
          </div>

          {/* Header Section */}
          <header className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f0ff] dark:bg-[#6528F7]/20 text-[#6528F7] dark:text-[#b19df7] text-xs font-bold tracking-wide mb-5 transition-colors">
                  <i className="fa-solid fa-camera-retro"></i>
                  Photography Account
              </div>
              
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-3 transition-colors">Set up Photography Profile</h1>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-tealLight dark:bg-brand-darkAccent/10 border border-brand-teal/20 dark:border-brand-darkAccent/20 text-brand-tealDark dark:text-brand-darkAccent text-xs font-bold mb-4 transition-colors">
                  <i className="fa-solid fa-check"></i> 100% free — no platform fees
              </div>
              
              <p className="text-sm text-slate-500 dark:text-slate-300 transition-colors">Clients will see this when you bid on their photography projects</p>
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
                      {/* Studio Name */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Photography Studio / Name</label>
                          <input type="text" placeholder="e.g. RK Photography Studio" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          
                          {/* Helper Text */}
                          <div className="mt-2 flex items-start gap-2 bg-brand-tealLight dark:bg-brand-darkAccent/10 p-3 rounded-lg text-xs text-brand-tealDark dark:text-brand-darkAccent transition-colors">
                              <span>💡</span>
                              <p>Use your professional name or studio name — NOT your personal name if you represent a brand</p>
                          </div>
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Email</label>
                              <input type="email" placeholder="you@email.com" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Phone <span className="text-slate-400 font-medium normal-case">(Indian Mobile — 10 Digits)</span></label>
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

                      {/* Profile Photo Upload */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Profile Photo / Studio Logo</label>
                          <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center justify-center bg-brand-inputBg dark:bg-black/20 hover:border-brand-teal transition-all cursor-pointer">
                              <i className="fa-solid fa-camera text-2xl text-slate-400 mb-2"></i>
                              <span className="text-sm font-semibold text-brand-navy dark:text-white mb-1 transition-colors">Click to upload photo</span>
                              <span className="text-[10px] text-slate-500">JPG, PNG under 5MB</span>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 2: PROFESSIONAL DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Professional Info</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      {/* Professional Type */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Professional Type</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Freelance Photographer</button>
                              <button type="button" className="px-4 py-2 rounded-full border border-brand-photoAccent bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-bold transition-all">Photography Studio</button>
                              <button type="button" className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Wedding Photographer</button>
                              <button type="button" className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Videographer</button>
                              <button type="button" className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Drone Operator</button>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Experience Level */}
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Experience Level</label>
                              <div className="flex flex-wrap gap-2">
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Beginner</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Intermediate</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-brand-photoAccent bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-bold transition-all">Professional</button>
                              </div>
                          </div>
                          
                          {/* Years of Experience */}
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Years of Experience</label>
                              <input type="number" min="0" placeholder="e.g. 5" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>

                      {/* Team Size */}
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Team Size</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Solo</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-brand-photoAccent bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-bold transition-all">2–5 Members</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">5–10 Members</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">10+ Members</button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 3: SPECIALIZATIONS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Specializations</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div>
                      <div className="mb-3">
                          <label className="block text-xs font-bold text-brand-navy dark:text-white uppercase transition-colors mb-0.5">Photography Categories</label>
                          <p className="text-[10px] text-slate-500">Select categories (tap to pick multiple)</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                          <button type="button" className="px-3 py-1.5 rounded-full border border-brand-photoAccent bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-bold transition-all">Wedding Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-brand-photoAccent bg-brand-photoAccent/10 text-brand-photoAccent text-xs font-bold transition-all">Pre Wedding</button>
                          
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Event Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Fashion Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Product Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Food Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Real Estate Photography</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Drone Shoots</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Corporate Shoots</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Music Video Shoots</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-photoAccent hover:text-brand-photoAccent transition-all">Portrait Photography</button>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 4: PORTFOLIO ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Portfolio</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-[#f8fbfb] dark:bg-black/10 border border-slate-200 dark:border-white/5 rounded-2xl p-5 md:p-6 space-y-5 transition-colors">
                      
                      <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">Online Profiles</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <i className="fa-brands fa-instagram text-slate-400"></i>
                              </div>
                              <input type="url" placeholder="Instagram URL" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                          </div>
                          <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <i className="fa-brands fa-behance text-slate-400"></i>
                              </div>
                              <input type="url" placeholder="Behance URL" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                          </div>
                          <div className="relative md:col-span-2">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <i className="fa-solid fa-globe text-slate-400"></i>
                              </div>
                              <input type="url" placeholder="Website or Google Drive Portfolio Link" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                          </div>
                      </div>

                      <div className="border-t border-slate-200 dark:border-white/10 my-4 transition-colors"></div>

                      <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">Featured Work Upload</h3>
                      </div>

                      <div className="mt-1 mb-4 flex items-start gap-2 bg-brand-tealLight dark:bg-brand-darkAccent/10 p-3 rounded-lg text-xs text-brand-tealDark dark:text-brand-darkAccent transition-colors">
                          <span>📸</span>
                          <p>Upload your best work to attract more clients. High-quality grids perform best.</p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="aspect-square border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-teal transition-all cursor-pointer">
                              <i className="fa-solid fa-plus text-lg text-slate-400 mb-1"></i>
                              <span className="text-[10px] font-medium text-slate-500">Add Media</span>
                          </div>
                          <div className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 relative group overflow-hidden border border-slate-200 dark:border-white/5 transition-colors">
                              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Wedding" className="w-full h-full object-cover" />
                              <button type="button" className="absolute top-1.5 right-1.5 w-5 h-5 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] transition-colors">
                                  <i className="fa-solid fa-xmark"></i>
                              </button>
                          </div>
                      </div>

                  </div>
              </section>

              {/* ================= SECTION 5: SERVICE AREA ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Service Area</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Base City</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      <i className="fa-solid fa-location-dot text-brand-teal dark:text-brand-darkAccent"></i>
                                  </div>
                                  <input type="text" placeholder="e.g. Bhubaneswar, Odisha" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-3 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              </div>
                          </div>
                          
                          <div className="flex flex-col justify-center pt-2 md:pt-6">
                              <div className="flex items-center justify-between bg-brand-inputBg dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                                  <div>
                                      <span className="block text-xs font-bold text-brand-navy dark:text-white transition-colors">Available for Travel?</span>
                                      <span className="block text-[10px] text-slate-500">Will you travel for outstation shoots?</span>
                                  </div>
                                  <label className="flex items-center cursor-pointer relative">
                                      <input type="checkbox" id="travel-toggle" className="sr-only toggle-checkbox" defaultChecked />
                                      <div className="toggle-label block bg-slate-300 dark:bg-black/40 w-10 h-6 rounded-full border border-slate-300 dark:border-white/20 transition-colors duration-300 relative">
                                          <div className="dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition transform translate-x-4 shadow-sm"></div>
                                      </div>
                                  </label>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Availability Type</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Local Only</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-brand-teal dark:border-brand-darkAccent bg-brand-teal/10 dark:bg-brand-darkAccent/10 text-brand-teal dark:text-brand-darkAccent text-xs font-bold transition-all">Pan India</button>
                              <button type="button" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">International Projects</button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 6: PRICING ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Pricing & Services</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Starting Price Range</label>
                              <div className="flex flex-wrap gap-2">
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">₹5,000+</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">₹10,000+</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-brand-teal dark:border-brand-darkAccent bg-brand-teal/10 dark:bg-brand-darkAccent/10 text-brand-teal dark:text-brand-darkAccent text-xs font-bold transition-all">₹25,000+</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Custom</button>
                              </div>
                          </div>
                          
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Pricing Type</label>
                              <div className="flex flex-wrap gap-2">
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Hourly</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Per Event</button>
                                  <button type="button" className="px-3 py-2 rounded-lg border border-brand-teal dark:border-brand-darkAccent bg-brand-teal/10 dark:bg-brand-darkAccent/10 text-brand-teal dark:text-brand-darkAccent text-xs font-bold transition-all">Full Day</button>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Services Offered</label>
                          <div className="flex flex-wrap gap-2">
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-teal hover:text-brand-teal transition-all">Photography Only</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-teal dark:border-brand-darkAccent bg-brand-teal/10 dark:bg-brand-darkAccent/10 text-brand-teal dark:text-brand-darkAccent text-xs font-bold transition-all">Photography + Editing</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-brand-teal dark:border-brand-darkAccent bg-brand-teal/10 dark:bg-brand-darkAccent/10 text-brand-teal dark:text-brand-darkAccent text-xs font-bold transition-all">Full Production</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-teal hover:text-brand-teal transition-all">Drone Coverage</button>
                              <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-teal hover:text-brand-teal transition-all">Album Design</button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 7: ABOUT YOU ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">About You</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-5">
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Short Bio</label>
                          <textarea rows="3" placeholder="Tell clients about your photography style, equipment, and experience..." className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-none transition-colors"></textarea>
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

                  <div className="bg-brand-mint dark:bg-white/5 border border-brand-teal/20 dark:border-white/10 rounded-2xl p-5 md:p-6 transition-colors">

                      <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-[#6528F7]/10 flex items-center justify-center text-[#6528F7]">
                                  <i className="fa-brands fa-google-pay text-sm"></i>
                              </div>
                              <h3 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">UPI Payment Info</h3>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase">Optional</span>
                      </div>

                      <div className="mt-2 mb-4 flex items-start gap-2 bg-brand-tealLight dark:bg-brand-darkAccent/10 p-3 rounded-lg text-xs text-brand-tealDark dark:text-brand-darkAccent transition-colors">
                          <span>💡</span>
                          <p>Brands will use this to pay you after approving your delivery.</p>
                      </div>

                      <div className="space-y-4">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI ID</label>
                              <input type="text" placeholder="yourname@okicici" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>

                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI QR CODE <span className="text-slate-500 font-medium normal-case">(Optional)</span></label>
                              <div className="border border-dashed border-slate-300 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-teal transition-all cursor-pointer">
                                  <i className="fa-solid fa-qrcode text-lg text-slate-400 mb-1"></i>
                                  <span className="text-xs font-medium text-brand-teal mb-0.5">Click to upload QR</span>
                                  <span className="text-[10px] text-slate-500">JPG, PNG under 5MB</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SUBMIT ================= */}
              <div className="pt-8 space-y-4">
                  <button type="submit" className="w-full py-4 rounded-full bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-bold text-sm hover:shadow-lg transition-all duration-300">
                      Create Photography Profile
                  </button>
                  
                  <button type="button" className="w-full py-4 rounded-full border border-brand-teal dark:border-brand-darkAccent bg-transparent text-brand-teal dark:text-brand-darkAccent font-bold text-sm hover:bg-brand-tealLight dark:hover:bg-brand-darkAccent/10 transition-all duration-300">
                      Already have an account? Log In
                  </button>
              </div>

          </form>
      </div>
    </div>
  );
}
