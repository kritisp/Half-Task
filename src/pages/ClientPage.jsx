import { Link } from 'react-router-dom';

export default function ClientPage() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-10 pb-16 px-5">
      
      {/* White/Dark Card Wrapper */}
      <div className="bg-white dark:bg-brand-darkCard w-full max-w-[540px] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 dark:border-white/10 p-7 md:p-10 mb-5 transition-colors duration-300">
          
          {/* Top Progress Lines */}
          <div className="flex gap-2 mb-8">
              <div className="h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-brand-teal dark:bg-brand-darkAccent rounded-full w-1/3"></div>
              <div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full w-1/3"></div>
          </div>

          {/* Header Section */}
          <header className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/20 text-brand-teal dark:text-brand-darkAccent text-xs font-bold tracking-wide mb-5 transition-colors">
                  <span>🏢</span>
                  Client Account
              </div>
              
              <h1 className="text-3xl font-extrabold text-brand-navy dark:text-white tracking-tight mb-3 transition-colors">Set up Client/Business' Profile</h1>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 border border-brand-teal/20 text-brand-teal dark:text-brand-darkAccent text-xs font-bold mb-4 transition-colors">
                  <i className="fa-solid fa-check"></i> 100% free — no platform fees
              </div>
              
              <p className="text-sm text-slate-500 dark:text-slate-300 transition-colors">Post campaigns and find creators for your brand</p>
          </header>

          <form action="#" method="POST" className="space-y-6">

              {/* ================= SECTION 1: ACCOUNT DETAILS ================= */}
              <section>
                  <div className="flex items-center py-6">
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                      <span className="mx-4 text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-400 uppercase">Account Details</span>
                      <div className="flex-grow border-t border-slate-200 dark:border-white/10 transition-colors"></div>
                  </div>

                  <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">First Name</label>
                              <input type="text" placeholder="Arjun" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Last Name</label>
                              <input type="text" placeholder="Sharma" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Business / Brand Name</label>
                          <input type="text" placeholder="e.g. Sharma Electronics" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Email</label>
                              <input type="email" placeholder="you@business.com" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Phone <span className="text-slate-400 font-medium normal-case">(Indian mobile)</span></label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 rounded-l-xl bg-slate-100 dark:bg-white/5 border border-r-0 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm transition-colors">+91</span>
                                  <input type="tel" placeholder="98765 43210" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-r-xl rounded-l-none px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                              </div>
                          </div>
                      </div>

                      <div>
                          <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">City</label>
                          <input type="text" placeholder="Bhubaneswar" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Password</label>
                              <input type="password" placeholder="Min. 8 chars" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pr-10 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                              <button type="button" className="absolute right-3 top-[34px] text-slate-400 hover:text-brand-teal transition-colors">
                                  <i className="fa-regular fa-eye"></i>
                              </button>
                          </div>
                          <div className="relative">
                              <label className="block text-xs font-bold text-brand-navy dark:text-slate-200 tracking-wider mb-2 uppercase transition-colors">Confirm</label>
                              <input type="password" placeholder="Repeat" className="custom-input w-full bg-brand-inputBg dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 pr-10 text-brand-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm transition-colors focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none" required />
                              <button type="button" className="absolute right-3 top-[34px] text-slate-400 hover:text-brand-teal transition-colors">
                                  <i className="fa-regular fa-eye"></i>
                              </button>
                          </div>
                      </div>
                  </div>
              </section>

              {/* ================= SUBMIT ================= */}
              <div className="pt-8 space-y-4">
                  <button type="submit" className="w-full py-4 rounded-full bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-bold text-sm hover:shadow-[0_0_20px_rgba(29,181,155,0.4)] dark:hover:shadow-[0_0_20px_rgba(75,212,188,0.4)] transition-all duration-300 hover:opacity-90">
                      Set up Client/Business' Profile
                  </button>
                  <button type="button" className="w-full py-4 rounded-full border border-brand-teal dark:border-brand-darkAccent bg-transparent text-brand-teal dark:text-brand-darkAccent font-bold text-sm hover:bg-brand-teal/5 dark:hover:bg-brand-darkAccent/10 transition-all duration-300">
                      Already have an account? Log In
                  </button>
                  <p className="text-center mt-4 text-xs text-slate-500 dark:text-slate-400 transition-colors">
                      Looking to create content? <Link to="/creator" className="text-brand-teal dark:text-brand-darkAccent hover:underline font-semibold">Join as Creator instead</Link>
                  </p>
              </div>

          </form>
      </div>
    </div>
  );
}
