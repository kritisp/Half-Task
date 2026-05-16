import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-brand-mint to-white dark:from-brand-darkBg dark:to-brand-darkBg relative pb-12 transition-colors duration-300">
        <section className="w-full pt-16 pb-8 px-6 flex flex-col items-center text-center relative z-10 overflow-hidden">
          
          {/* Ambient Background Glows */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] flex justify-between opacity-30 dark:opacity-15 mix-blend-multiply dark:mix-blend-screen pointer-events-none -z-10 transition-opacity duration-300">
            <div className="w-72 h-72 bg-blue-200 dark:bg-brand-darkAccent rounded-full blur-[100px] animate-blob transition-colors duration-300"></div>
            <div className="w-72 h-72 bg-teal-200 dark:bg-brand-teal rounded-full blur-[100px] animate-blob animation-delay-2000 transition-colors duration-300"></div>
          </div>

          {/* System Status/Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 border border-brand-teal/20 dark:border-brand-darkAccent/20 text-brand-tealDark dark:text-brand-darkAccent text-xs font-semibold mb-8 shadow-sm cursor-pointer transition-colors duration-300">
            <i className="fa-solid fa-sparkles text-[10px]"></i>
            India's creator marketing marketplace
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in text-5xl md:text-7xl font-black text-brand-dark dark:text-white leading-[1.1] tracking-tighter max-w-5xl mb-6 transition-colors duration-300" style={{animationDelay: "0.1s"}}>
            Find the <span className="text-brand-teal dark:text-brand-darkAccent transition-colors duration-300">right people</span><br className="hidden md:block" />
            for every task.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-16 leading-relaxed font-normal transition-colors duration-300" style={{animationDelay: "0.2s"}}>
            Connect directly with trusted service providers. Post a task, receive bids, pick the best one. No middlemen. No hidden fees.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-3xl mx-auto animate-fade-in px-4 relative z-10" style={{animationDelay: "0.3s"}}>
            
            {/* LEFT CARD: HIRE */}
            <div className="flex-1 bg-white dark:bg-brand-darkCard rounded-[2rem] p-10 flex flex-col items-center text-center border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:to-blue-400/5 flex items-center justify-center mb-6 shadow-sm border border-blue-100/50 dark:border-blue-500/10">
                <i className="fa-solid fa-user-tie text-3xl text-brand-navy dark:text-blue-400"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-1 tracking-tight">Hire</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">I want to get something done</p>
              
              <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-slate-300 text-left w-full max-w-[220px]">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Post campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Book photographers & drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Secure in-platform chat</span>
                </li>
              </ul>
              
              <Link to="/client" className="mt-auto w-full max-w-[200px] py-3 rounded-full bg-brand-teal dark:bg-brand-darkAccent text-white dark:text-brand-darkBg font-bold text-sm transition-all hover:bg-brand-tealDark shadow-lg shadow-brand-teal/20 flex items-center justify-center gap-2 group">
                Get Started <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>

            {/* RIGHT CARD: WORK */}
            <div className="flex-1 bg-white dark:bg-brand-darkCard rounded-[2rem] p-10 flex flex-col items-center text-center border-2 border-brand-teal dark:border-brand-darkAccent shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-teal dark:bg-brand-darkAccent"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-500/20 dark:to-orange-400/5 flex items-center justify-center mb-6 shadow-sm border border-orange-100 dark:border-orange-500/10">
                <i className="fa-solid fa-bolt text-3xl text-orange-500"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-1 tracking-tight">Work</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">I have skills to offer</p>
              
              <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-slate-300 text-left w-full max-w-[220px]">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Browse & bid on work</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Set your own price</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                  <span>Build your portfolio</span>
                </li>
              </ul>
              
              <Link to="/service" className="mt-auto w-full max-w-[200px] py-3 rounded-full bg-white dark:bg-brand-darkCard border-2 border-brand-teal dark:border-brand-darkAccent text-brand-teal dark:text-brand-darkAccent font-bold text-sm transition-all hover:bg-brand-teal hover:text-white dark:hover:bg-brand-darkAccent dark:hover:text-brand-darkBg flex items-center justify-center gap-2 group-hover:shadow-lg shadow-brand-teal/20">
                Join Now <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-slate-500 dark:text-slate-300 text-sm animate-fade-in transition-colors duration-300" style={{animationDelay: "0.4s"}}>
            Already have an account? <Link to="/client" className="text-brand-teal dark:text-brand-darkAccent font-medium hover:underline transition-colors duration-300">Log in</Link>
          </div>
        </section>
      </div>

      {/* Popular Categories Mini Section */}
      <section className="w-full py-16 px-6 text-center bg-white dark:bg-brand-darkBg border-b border-gray-50 dark:border-white/5 transition-colors duration-300">
        <p className="text-xs font-bold text-brand-teal dark:text-brand-darkAccent uppercase tracking-widest mb-6 transition-colors duration-300">Popular Categories</p>
        <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
            <span className="px-5 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-white/10 text-sm font-medium text-brand-dark dark:text-slate-200 shadow-sm hover:border-brand-teal dark:hover:border-brand-darkAccent hover:text-brand-teal dark:hover:text-brand-darkAccent transition-all cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-camera opacity-70"></i> Photography
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-white/10 text-sm font-medium text-brand-dark dark:text-slate-200 shadow-sm hover:border-brand-teal dark:hover:border-brand-darkAccent hover:text-brand-teal dark:hover:text-brand-darkAccent transition-all cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-car opacity-70"></i> Drivers
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-white/10 text-sm font-medium text-brand-dark dark:text-slate-200 shadow-sm hover:border-brand-teal dark:hover:border-brand-darkAccent hover:text-brand-teal dark:hover:text-brand-darkAccent transition-all cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-video opacity-70"></i> Content Creators
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-white/10 text-sm font-medium text-brand-dark dark:text-slate-200 shadow-sm hover:border-brand-teal dark:hover:border-brand-darkAccent hover:text-brand-teal dark:hover:text-brand-darkAccent transition-all cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-tools opacity-70"></i> Local Services
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white dark:bg-brand-darkCard border border-gray-200 dark:border-white/10 text-sm font-medium text-brand-dark dark:text-slate-200 shadow-sm hover:border-brand-teal dark:hover:border-brand-darkAccent hover:text-brand-teal dark:hover:text-brand-darkAccent transition-all cursor-pointer flex items-center gap-2">
                <i className="fa-solid fa-bullhorn opacity-70"></i> Promotions
            </span>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="w-full py-24 px-6 bg-white dark:bg-brand-darkBg relative transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-xs font-bold text-brand-teal dark:text-brand-darkAccent uppercase tracking-widest mb-3 transition-colors duration-300">How It Works</p>
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark dark:text-white tracking-tight mb-4 transition-colors duration-300">Simple. Fast. Effective.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Step 1 */}
                <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-brand-darkAccent/10 hover:-translate-y-1 hover:border-brand-teal/30 dark:hover:border-brand-darkAccent/30 transition-all duration-300 flex flex-col md:flex-row gap-5 items-start group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 flex items-center justify-center text-brand-teal dark:text-brand-darkAccent font-bold text-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white dark:group-hover:bg-brand-darkAccent dark:group-hover:text-brand-darkBg">
                        01
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 transition-colors duration-300">Post your task</h3>
                        <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                            Describe what you need. Set your deadline and budget expectations.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-brand-darkAccent/10 hover:-translate-y-1 hover:border-brand-teal/30 dark:hover:border-brand-darkAccent/30 transition-all duration-300 flex flex-col md:flex-row gap-5 items-start group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 flex items-center justify-center text-brand-teal dark:text-brand-darkAccent font-bold text-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white dark:group-hover:bg-brand-darkAccent dark:group-hover:text-brand-darkBg">
                        02
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 transition-colors duration-300">Providers bid & quote</h3>
                        <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                            Real professionals apply with their own price. See their profile and past work.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-brand-darkCard border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-brand-darkAccent/10 hover:-translate-y-1 hover:border-brand-teal/30 dark:hover:border-brand-darkAccent/30 transition-all duration-300 flex flex-col md:flex-row gap-5 items-start group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 flex items-center justify-center text-brand-teal dark:text-brand-darkAccent font-bold text-lg shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white dark:group-hover:bg-brand-darkAccent dark:group-hover:text-brand-darkBg">
                        03
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 transition-colors duration-300">Select & collaborate</h3>
                        <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                            Pick the best provider, chat securely on HalfTask, and approve their work.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="w-full py-20 px-6 bg-white dark:bg-brand-darkBg text-center transition-colors duration-300">
        <p className="text-xs font-bold text-brand-teal dark:text-brand-darkAccent uppercase tracking-widest mb-4 transition-colors duration-300">Supported Platforms</p>
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy dark:text-white tracking-tight mb-12 transition-colors duration-300">Where creators create</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
            {/* Instagram Card */}
            <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-pink-500/10 hover:-translate-y-1 hover:border-pink-300 dark:hover:border-pink-500/30 transition-all duration-300 flex items-center gap-5 w-full md:w-1/2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 font-bold text-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-400 group-hover:text-white dark:group-hover:text-white shadow-sm">
                    IG
                </div>
                <div className="text-left">
                    <h4 className="text-lg font-bold text-brand-navy dark:text-white transition-colors">Instagram</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Reels, stories, posts & collabs</p>
                </div>
            </div>

            {/* YouTube Card */}
            <div className="bg-white dark:bg-brand-darkCard border border-slate-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-red-500/10 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-500/30 transition-all duration-300 flex items-center gap-5 w-full md:w-1/2 group cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-bold text-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white dark:group-hover:text-white shadow-sm">
                    YT
                </div>
                <div className="text-left">
                    <h4 className="text-lg font-bold text-brand-navy dark:text-white transition-colors">YouTube</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Videos, shorts, reviews & integrations</p>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="w-full px-6 pb-20 bg-white dark:bg-brand-darkBg transition-colors duration-300">
        <div className="max-w-6xl mx-auto bg-brand-teal dark:bg-brand-darkAccent rounded-[2rem] p-12 md:p-16 text-center text-white dark:text-brand-darkBg transition-colors duration-300">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">India's fastest growing creator platform</h2>
            <p className="text-white/80 dark:text-brand-darkBg/80 text-lg mb-16 font-medium max-w-2xl mx-auto">Trusted by hundreds of brands and thousands of creators across the country.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20 dark:divide-brand-darkBg/20">
                <div className="flex flex-col items-center pt-4 md:pt-0">
                    <span className="text-4xl md:text-5xl font-black mb-2">1</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-white/80 dark:text-brand-darkBg/80">Active Creators</span>
                </div>
                <div className="flex flex-col items-center pt-8 md:pt-0">
                    <span className="text-4xl md:text-5xl font-black mb-2">4</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-white/80 dark:text-brand-darkBg/80">Brands</span>
                </div>
                <div className="flex flex-col items-center pt-8 md:pt-0">
                    <span className="text-4xl md:text-5xl font-black mb-2">98%</span>
                    <span className="text-sm font-semibold uppercase tracking-wider text-white/80 dark:text-brand-darkBg/80">% Success Rate</span>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
