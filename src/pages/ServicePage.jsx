import { Link } from 'react-router-dom';

export default function ServicePage() {
  return (
    <>
      {/* Ambient Futuristic Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-70 dark:opacity-15 transition-opacity duration-300">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal/30 dark:bg-brand-darkAccent/30 blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/30 dark:bg-brand-darkAccent/20 blur-[120px] animate-blob" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[700px] h-[700px] rounded-full bg-purple-300/30 dark:bg-brand-teal/20 blur-[120px] animate-blob" style={{animationDuration: "15s"}}></div>
      </div>

      <div className="relative z-10 w-full pt-10 pb-24 px-6 flex flex-col items-center">
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 dark:bg-brand-darkAccent/10 border border-brand-teal/20 dark:border-brand-darkAccent/20 text-brand-teal dark:text-brand-darkAccent text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal dark:bg-brand-darkAccent shadow-[0_0_8px_rgba(29,181,155,0.6)] dark:shadow-[0_0_8px_rgba(75,212,188,0.6)]"></span>
                Provider Ecosystem
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy dark:text-white tracking-tight mb-5 leading-tight transition-colors duration-300">
                Choose Your <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-500 dark:from-brand-darkAccent dark:to-teal-300">Service Category</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                Select how you want to grow with HALFTASK and unlock new opportunities tailored to your skills.
            </p>
        </header>

        {/* Category Grid */}
        <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto group/container">
            
            {/* CREATOR MODULE CARD */}
            <div className="category-card group/card relative bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col overflow-hidden animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white dark:hover:bg-[#196e5e] hover:border-fuchsia-400/30 dark:hover:border-fuchsia-400/50 hover:shadow-[0_20px_40px_-10px_rgba(217,70,239,0.15)] dark:hover:shadow-[0_20px_40px_-10px_rgba(217,70,239,0.25)] group-hover/container:not(:hover):opacity-60 group-hover/container:not(:hover):scale-95 group-hover/container:not(:hover):blur-[1px]" style={{animationDelay: "0.1s"}}>
                {/* Internal dynamic glow */}
                <div className="card-glow absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-purple-100 via-fuchsia-50 to-cyan-50 dark:from-purple-500/10 dark:via-fuchsia-500/10 dark:to-cyan-500/10 blur-3xl opacity-0 group-hover/card:opacity-80 dark:group-hover/card:mix-blend-screen transition-opacity duration-500 pointer-events-none rounded-full"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-100 dark:border-fuchsia-500/20 flex items-center justify-center text-fuchsia-500 dark:text-fuchsia-400 mb-6 transition-all duration-300 group-hover/card:bg-gradient-to-br group-hover/card:from-[#d946ef] group-hover/card:to-[#06b6d4] group-hover/card:text-white group-hover/card:border-transparent group-hover/card:shadow-[0_10px_20px_-5px_rgba(217,70,239,0.4)]">
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </div>
                    
                    {/* Text */}
                    <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-3 transition-colors duration-300">I am a Creator</h2>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-8 transition-colors duration-300">
                        Connect with brands, promote campaigns, and grow your audience through real opportunities.
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-10 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-fuchsia-500 dark:text-fuchsia-400 mt-0.5"></i>
                            Brand collaborations
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-fuchsia-500 dark:text-fuchsia-400 mt-0.5"></i>
                            Campaign bidding
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-fuchsia-500 dark:text-fuchsia-400 mt-0.5"></i>
                            Portfolio showcase
                        </li>
                    </ul>
                    
                    {/* CTA */}
                    <Link to="/creator" className="w-full py-3.5 rounded-xl border border-fuchsia-200 dark:border-fuchsia-500/30 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 font-semibold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-md flex items-center justify-center gap-2 group/btn">
                        Continue
                        <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/btn:translate-x-1"></i>
                    </Link>
                </div>
            </div>

            {/* PHOTOGRAPHY MODULE CARD */}
            <div className="category-card group/card relative bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col overflow-hidden animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white dark:hover:bg-[#196e5e] hover:border-brand-teal/30 dark:hover:border-brand-teal/50 hover:shadow-[0_20px_40px_-10px_rgba(29,181,155,0.15)] dark:hover:shadow-[0_20px_40px_-10px_rgba(29,181,155,0.25)] group-hover/container:not(:hover):opacity-60 group-hover/container:not(:hover):scale-95 group-hover/container:not(:hover):blur-[1px]" style={{animationDelay: "0.2s"}}>
                {/* Internal dynamic glow */}
                <div className="card-glow absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-brand-teal/20 via-brand-teal/10 to-blue-50 dark:from-brand-teal/10 dark:via-brand-darkAccent/10 dark:to-blue-500/10 blur-3xl opacity-0 group-hover/card:opacity-80 dark:group-hover/card:mix-blend-screen transition-opacity duration-500 pointer-events-none rounded-full"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 dark:bg-brand-teal/20 border border-brand-teal/20 dark:border-brand-teal/30 flex items-center justify-center text-brand-teal dark:text-brand-darkAccent mb-6 transition-all duration-300 group-hover/card:bg-gradient-to-br group-hover/card:from-brand-teal group-hover/card:to-brand-darkAccent group-hover/card:text-white group-hover/card:border-transparent group-hover/card:shadow-[0_10px_20px_-5px_rgba(29,181,155,0.4)]">
                        <i className="fa-solid fa-camera-retro text-2xl"></i>
                    </div>
                    
                    {/* Text */}
                    <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-3 transition-colors duration-300">I am a Photographer</h2>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-8 transition-colors duration-300">
                        Showcase your portfolio, receive photography projects, and connect with clients directly.
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-10 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                            Portfolio showcase
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                            Event & wedding projects
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-brand-teal dark:text-brand-darkAccent mt-0.5"></i>
                            Professional profile
                        </li>
                    </ul>
                    
                    {/* CTA */}
                    <Link to="/photography" className="w-full py-3.5 rounded-xl border border-brand-teal/20 dark:border-brand-teal/30 bg-brand-teal/5 dark:bg-brand-teal/10 text-brand-teal dark:text-brand-darkAccent font-semibold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-darkAccent hover:text-white hover:border-transparent hover:shadow-md flex items-center justify-center gap-2 group/btn">
                        Continue
                        <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/btn:translate-x-1"></i>
                    </Link>
                </div>
            </div>

            {/* DRIVER MODULE CARD */}
            <div className="category-card group/card relative bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 rounded-3xl p-8 flex flex-col overflow-hidden animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white dark:hover:bg-[#196e5e] hover:border-sky-400/30 dark:hover:border-sky-400/50 hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.25)] group-hover/container:not(:hover):opacity-60 group-hover/container:not(:hover):scale-95 group-hover/container:not(:hover):blur-[1px]" style={{animationDelay: "0.3s"}}>
                {/* Internal dynamic glow */}
                <div className="card-glow absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-blue-100 via-sky-50 to-green-50 dark:from-sky-500/10 dark:via-blue-500/10 dark:to-green-500/10 blur-3xl opacity-0 group-hover/card:opacity-80 dark:group-hover/card:mix-blend-screen transition-opacity duration-500 pointer-events-none rounded-full"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-500/10 border border-sky-100 dark:border-sky-500/20 flex items-center justify-center text-sky-500 dark:text-sky-400 mb-6 transition-all duration-300 group-hover/card:bg-gradient-to-br group-hover/card:from-[#0ea5e9] group-hover/card:to-[#10b981] group-hover/card:text-white group-hover/card:border-transparent group-hover/card:shadow-[0_10px_20px_-5px_rgba(14,165,233,0.4)]">
                        <i className="fa-solid fa-car-side text-2xl"></i>
                    </div>
                    
                    {/* Text */}
                    <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-3 transition-colors duration-300">I am a Driver</h2>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed mb-8 transition-colors duration-300">
                        Find local and intercity driving opportunities and connect directly with customers.
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-10 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-sky-500 dark:text-sky-400 mt-0.5"></i>
                            Local ride opportunities
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-sky-500 dark:text-sky-400 mt-0.5"></i>
                            Intercity bookings
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-200 font-medium transition-colors duration-300">
                            <i className="fa-solid fa-circle-check text-sky-500 dark:text-sky-400 mt-0.5"></i>
                            Flexible work options
                        </li>
                    </ul>
                    
                    {/* CTA */}
                    <Link to="/driver" className="w-full py-3.5 rounded-xl border border-sky-200 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-300 font-semibold text-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-500 hover:to-brand-teal hover:text-white hover:border-transparent hover:shadow-md flex items-center justify-center gap-2 group/btn">
                        Continue
                        <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover/btn:translate-x-1"></i>
                    </Link>
                </div>
            </div>

        </div>

        {/* Coming Soon Bottom Section */}
        <section className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10 w-full max-w-5xl mx-auto text-center animate-fade-in-up transition-colors duration-300" style={{animationDelay: "0.5s"}}>
            <p className="text-xs font-bold text-slate-400 dark:text-brand-darkAccent/80 uppercase tracking-widest mb-6 transition-colors duration-300">More service categories coming soon</p>
            <div className="flex flex-wrap justify-center items-center gap-3 px-4">
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-500 dark:text-slate-300 flex items-center gap-2 hover:border-slate-300 dark:hover:bg-white/5 transition-colors shadow-sm cursor-default">
                    <i className="fa-solid fa-video text-slate-400 dark:text-slate-400"></i> Videography
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-500 dark:text-slate-300 flex items-center gap-2 hover:border-slate-300 dark:hover:bg-white/5 transition-colors shadow-sm cursor-default">
                    <i className="fa-solid fa-tools text-slate-400 dark:text-slate-400"></i> Local Services
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-500 dark:text-slate-300 flex items-center gap-2 hover:border-slate-300 dark:hover:bg-white/5 transition-colors shadow-sm cursor-default">
                    <i className="fa-solid fa-bullhorn text-slate-400 dark:text-slate-400"></i> Event Promotions
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-500 dark:text-slate-300 flex items-center gap-2 hover:border-slate-300 dark:hover:bg-white/5 transition-colors shadow-sm cursor-default">
                    <i className="fa-solid fa-laptop-code text-slate-400 dark:text-slate-400"></i> Technical Services
                </span>
                <span className="px-4 py-2 rounded-lg bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-500 dark:text-slate-300 flex items-center gap-2 hover:border-slate-300 dark:hover:bg-white/5 transition-colors shadow-sm cursor-default">
                    <i className="fa-solid fa-briefcase text-slate-400 dark:text-slate-400"></i> Freelancing
                </span>
            </div>
        </section>

      </div>
    </>
  );
}
