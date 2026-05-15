export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-brand-darkBg pt-16 pb-8 px-6 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <a href="/" className="flex flex-col mb-4">
              <span className="text-xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-none transition-colors">Half<span className="text-brand-teal dark:text-brand-darkAccent">Task</span></span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              India's leading creator marketing marketplace. Connecting brands with authentic creators.
            </p>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-brand-navy dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-brand-navy dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:halftask054@gmail.com" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">halftask054@gmail.com</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-teal dark:hover:text-brand-darkAccent transition-colors">Help & FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 dark:bg-white/10 mb-8 transition-colors"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
            © 2026 HalfTask India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
