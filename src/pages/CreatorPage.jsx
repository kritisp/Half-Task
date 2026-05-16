import { Link, useNavigate } from 'react-router-dom';

export default function CreatorPage() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate successful registration
    navigate('/creator/dashboard');
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-10 pb-16 px-5">
      
      {/* White/Dark Card Wrapper */}
      <div className="bg-white dark:bg-brand-darkCard w-full max-w-[540px] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 dark:border-white/10 p-7 md:p-10 mb-5 transition-colors duration-300">
          
          {/* Top Progress Lines */}
          <div className="flex gap-2 mb-8">
              <div className="h-1 bg-brand-creatorAccent dark:bg-[#a78bfa] rounded-full w-1/3"></div>
              <div className="h-1 bg-brand-creatorAccent dark:bg-[#a78bfa] rounded-full w-1/3"></div>
              <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full w-1/3"></div>
          </div>

          {/* Header Section */}
          <header className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-creatorLight dark:bg-brand-creatorAccent/20 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold tracking-wide mb-5 transition-colors">
                  <span>🎬</span>
                  Creator Account
              </div>
              
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-3 transition-colors">Set up Creator Profile</h1>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-creatorLight dark:bg-brand-creatorAccent/10 border border-brand-creatorAccent/20 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold mb-4 transition-colors">
                  <i className="fa-solid fa-check"></i> 100% free — no platform fees
              </div>
              
              <p className="text-sm text-slate-500 dark:text-slate-300 transition-colors">Brands will see this when you bid on their campaigns</p>
          </header>

          <form onSubmit={handleRegister} className="space-y-6">

              {/* ================= SECTION 1: ACCOUNT DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Your Account</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Creator / Brand Name</label>
                          <input type="text" placeholder="e.g. YourName or YourBrandName" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          <div className="mt-2 flex items-start gap-2 bg-brand-creatorLight dark:bg-brand-creatorAccent/10 p-3 rounded-lg text-xs text-brand-creatorAccent dark:text-[#a78bfa] transition-colors">
                              <span>💡</span>
                              <p>Use your known name or brand name — NOT your @handle</p>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Email</label>
                              <input type="email" placeholder="you@email.com" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Phone <span className="text-slate-400 font-medium normal-case">(Indian mobile)</span></label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 rounded-l-xl bg-slate-100 dark:bg-white/5 border border-r-0 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm transition-colors">+91</span>
                                  <input type="tel" placeholder="98765 43210" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-r-xl rounded-l-none px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                              </div>
                          </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Password</label>
                              <input type="password" placeholder="Min. 8 chars" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Confirm</label>
                              <input type="password" placeholder="Repeat" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 2: CONTENT NICHE ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Content Niche</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Select categories (tap to pick)</label>
                      <div className="flex flex-wrap gap-2">
                          <button type="button" className="px-3 py-1.5 rounded-full border border-brand-creatorAccent bg-brand-creatorAccent/10 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold transition-all">Fashion & Lifestyle</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-brand-creatorAccent bg-brand-creatorAccent/10 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold transition-all">Tech & Gadgets</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-brand-creatorAccent bg-brand-creatorAccent/10 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold transition-all">Food & Cooking</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Fitness & Health</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Travel</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Comedy</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Beauty & Makeup</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Finance</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Gaming</button>
                          <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-brand-creatorAccent hover:text-brand-creatorAccent transition-all">Education</button>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 3: INSTAGRAM ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Instagram</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-[#f8fbfb] dark:bg-black/10 border border-slate-200 dark:border-white/5 rounded-2xl p-5 md:p-6 space-y-4 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">IG</div>
                              <h4 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">Instagram Details</h4>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded-full">Optional</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">@Handle</label>
                              <input type="text" placeholder="@yourhandle" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Followers</label>
                              <input type="number" placeholder="e.g. 25000" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Profile URL</label>
                              <input type="url" placeholder="https://instagram.com/..." className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Avg Reel Views</label>
                              <input type="number" placeholder="e.g. 8000" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 4: YOUTUBE ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">YouTube</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-[#f8fbfb] dark:bg-black/10 border border-slate-200 dark:border-white/5 rounded-2xl p-5 md:p-6 space-y-4 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs"><i className="fa-brands fa-youtube"></i></div>
                              <h4 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">YouTube Details</h4>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded-full">Optional</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Channel Name</label>
                              <input type="text" placeholder="My Channel" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Subscribers</label>
                              <input type="number" placeholder="e.g. 12000" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Channel URL</label>
                              <input type="url" placeholder="https://youtube.com/@..." className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">Avg Video Views</label>
                              <input type="number" placeholder="e.g. 5000" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 5: ABOUT YOUR AUDIENCE ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">About Your Audience</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Describe your followers</label>
                          <textarea rows="3" placeholder="e.g. Mostly 18-30 year olds from Odisha interested in tech..." className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-none transition-colors"></textarea>
                      </div>
                      
                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Primary Audience Location</label>
                          <div className="bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl p-4 transition-colors">
                              <input type="text" placeholder="Search cities..." className="custom-input w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-brand-navy dark:text-white mb-4" />
                              
                              <div className="mb-3">
                                  <div className="flex items-center gap-2 mb-2">
                                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">National / Global</span>
                                      <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-blue-300 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-medium transition-all">Pan India</button>
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">International</button>
                                  </div>
                              </div>
                              
                              <div className="mb-4">
                                  <div className="flex items-center gap-2 mb-2">
                                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Select Cities</span>
                                      <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                                  </div>
                                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Bhubaneswar, Odisha</button>
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Cuttack, Odisha</button>
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-brand-creatorAccent bg-brand-creatorAccent/10 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold transition-all">Delhi</button>
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-brand-creatorAccent bg-brand-creatorAccent/10 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold transition-all">Mumbai, Maharashtra</button>
                                      <button type="button" className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-300 transition-all">Bangalore, Karnataka</button>
                                  </div>
                              </div>
                              
                              <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                                  <span className="text-[10px] font-medium text-slate-500 mb-2 block">Selected locations:</span>
                                  <div className="flex flex-wrap gap-1.5">
                                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-creatorLight dark:bg-brand-creatorAccent/20 border border-brand-creatorAccent/30 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold rounded-full">Delhi <button type="button" className="hover:text-red-500 ml-1">&times;</button></span>
                                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-creatorLight dark:bg-brand-creatorAccent/20 border border-brand-creatorAccent/30 text-brand-creatorAccent dark:text-[#a78bfa] text-xs font-bold rounded-full">Mumbai, Maharashtra <button type="button" className="hover:text-red-500 ml-1">&times;</button></span>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="mt-2 flex gap-2">
                              <input type="text" placeholder="Type your city if not listed..." className="custom-input flex-1 bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-brand-navy dark:text-white transition-colors" />
                              <button type="button" className="px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 whitespace-nowrap transition-colors">+ Add City</button>
                          </div>
                          <span className="text-[10px] text-slate-500 mt-1 block">💡 Can't find your city? Type it above and click Add City.</span>
                      </div>
                  </div>
              </section>

              {/* ================= SECTION 6: BIO ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Bio</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Short Bio</label>
                      <textarea rows="3" placeholder="Tell brands about yourself and your content..." className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-none transition-colors"></textarea>
                  </div>
              </section>

              {/* ================= SECTION 7: PAYMENT DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Payment Details</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="bg-brand-mint dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 md:p-6 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                              <div style={{fontSize: "1.4rem"}}>💷</div>
                              <h3 className="text-sm font-bold text-brand-navy dark:text-white transition-colors">UPI Payment Info</h3>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase">Optional</span>
                      </div>

                      <div className="mt-2 mb-4 flex items-start gap-2 bg-brand-creatorLight dark:bg-brand-creatorAccent/10 p-3 rounded-lg text-xs text-brand-creatorAccent dark:text-[#a78bfa] transition-colors">
                          <span>💡</span>
                          <p>Brands will use this to pay you after approving your delivery. You can add or update this later from your profile.</p>
                      </div>

                      <div className="space-y-4">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI ID</label>
                              <input type="text" placeholder="yourname@okicici" className="custom-input w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-1 uppercase transition-colors">UPI QR Code <span className="text-slate-400 font-medium normal-case">(optional)</span></label>
                              <div className="border border-dashed border-slate-300 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center bg-white dark:bg-black/20 hover:border-brand-creatorAccent transition-all cursor-pointer">
                                  <i className="fa-solid fa-camera text-lg text-slate-400 mb-1"></i>
                                  <span className="text-xs font-medium text-brand-creatorAccent dark:text-[#a78bfa] mb-0.5">Click to upload QR</span>
                                  <span className="text-[10px] text-slate-500">JPG, PNG under 5MB</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SUBMIT ================= */}
              <div className="pt-8 space-y-4">
                  <button type="submit" className="w-full py-4 rounded-full bg-brand-creatorAccent text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:opacity-90">
                      Create Creator Profile
                  </button>
                  <Link to="/client/dashboard" className="w-full py-4 rounded-full border border-brand-creatorAccent dark:border-[#a78bfa] bg-transparent text-brand-creatorAccent dark:text-[#a78bfa] font-bold text-sm hover:bg-brand-creatorAccent/5 dark:hover:bg-[#a78bfa]/10 transition-all duration-300 flex justify-center items-center">
                      Already have an account? Log In
                  </Link>
                  <p className="text-center mt-4 text-xs text-slate-500 dark:text-slate-400 transition-colors">
                      Running a business? <Link to="/client" className="text-brand-creatorAccent dark:text-[#a78bfa] hover:underline font-semibold">Register as Business instead</Link>
                  </p>
              </div>

          </form>
      </div>
    </div>
  );
}
