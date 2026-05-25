export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg text-[#0a0a0a]">Craft Mode</p>
            <p className="text-sm text-[#555555] mt-1">
              AI-powered creative studio for modern businesses.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-6 flex-wrap">
            {["Services", "Process", "Work", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#555555] hover:text-[#0a0a0a] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#e5e5e5]">
          <p className="text-xs text-[#555555]">
            © {new Date().getFullYear()} Craft Mode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
