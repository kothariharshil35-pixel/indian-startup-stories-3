import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenSearch }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-[#061324] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white">
                INDIAN STARTUP STORIES
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#138A4B]" />
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF7A00]">
              Real Founders. Real Journeys. Real Stories.
            </p>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              An independent business editorial documenting the beginnings, product moats, unit economics, marketing strategies, and hard lessons behind India&apos;s boldest companies.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#138A4B] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
              <span>Grounded in official regulatory filings &amp; verified sources</span>
            </div>
          </div>

          {/* Editorial Sections */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-[#FF7A00]">
              Publication Sections
            </div>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('stories');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All 10 Launch Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('founders');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Meet the Founders Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('industries');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Explore 8 Sectors &amp; Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('marketing');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Startup Marketing Playbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('funding');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Startup Funding Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('failures');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lessons From Failure Post-Mortems
                </button>
              </li>
            </ul>
          </div>

          {/* For Students & Researchers */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-[#FF7A00]">
              Academic &amp; Policy
            </div>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    scrollToTop();
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Editorial Policy &amp; Ethics
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSearch}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Index Search
                </button>
              </li>
              <li>
                <span className="text-white/50">For BBA / MBA Coursework</span>
              </li>
              <li>
                <span className="text-white/50">Citation Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Social Channels (Section 23 Wireframe) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-[#FF7A00]">
              Connect &amp; Social
            </div>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF7A00] transition-colors"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF7A00] transition-colors"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF7A00] transition-colors"
                >
                  YOUTUBE
                </a>
              </li>
              <li>
                <a
                  href="mailto:editorial@indianstartupstories.in"
                  className="hover:text-[#FF7A00] transition-colors"
                >
                  CONTACT RESEARCH DESK
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} Indian Startup Stories. Dedicated to the builders, students, and dreamers of India.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#FF7A00] fill-[#FF7A00]" /> for Indian Entrepreneurship
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#FF7A00] transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
