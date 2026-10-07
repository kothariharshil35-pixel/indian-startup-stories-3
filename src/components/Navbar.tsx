import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarkedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenBookmarks,
  bookmarkedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'stories', label: 'STARTUP STORIES' },
    { id: 'founders', label: 'FOUNDERS' },
    { id: 'industries', label: 'INDUSTRIES' },
    { id: 'marketing', label: 'MARKETING' },
    { id: 'funding', label: 'FUNDING' },
    { id: 'failures', label: 'FAILURE STORIES' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E4DFD5]">
      {/* Top Editorial Ticker / Masthead metadata */}
      <div className="bg-[#0B1F3A] text-white/80 text-[11px] tracking-widest uppercase font-medium py-1.5 px-4 sm:px-8 border-b border-[#061324]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF7A00]" />
            <span className="font-semibold text-white">Indian Startup Stories</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-[#FFF4EB]/90 normal-case tracking-normal">
              Real Founders. Real Journeys. Real Stories.
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span className="hidden md:inline">Editorial Edition · Research-Backed Case Studies</span>
            <span className="text-[#FF7A00] font-semibold">Verified Sources</span>
          </div>
        </div>
      </div>

      {/* Main Masthead Banner & Brand Name */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-3 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
              INDIAN STARTUP STORIES
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#138A4B]" />
          </div>
          <p className="text-xs text-[#171717]/70 font-medium tracking-wide">
            Real Founders. Real Journeys. Real Stories.
          </p>
        </button>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E4DFD5] bg-white hover:border-[#0B1F3A] text-sm text-[#171717]/80 hover:text-[#0B1F3A] transition-all shadow-xs cursor-pointer"
            title="Search startups, founders, industries (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#FF7A00]" />
            <span className="hidden md:inline text-xs text-[#171717]/60 font-medium">Search startups, founders, industries...</span>
            <span className="hidden lg:inline text-[10px] font-mono bg-[#EFECE6] px-1.5 py-0.5 rounded text-[#171717]/70">⌘K</span>
          </button>

          <button
            onClick={onOpenBookmarks}
            className="relative flex items-center justify-center p-2 rounded-lg border border-[#E4DFD5] bg-white hover:border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#FFF4EB] transition-all cursor-pointer"
            title="Saved Reading List"
          >
            <Bookmark className="w-4 h-4 text-[#0B1F3A]" />
            {bookmarkedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF7A00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {bookmarkedCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#E4DFD5] bg-white text-[#0B1F3A]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar (Desktop) */}
      <nav className="hidden md:block border-t border-[#E4DFD5] bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <ul className="flex items-center gap-1 lg:gap-2 overflow-x-auto py-2.5 text-xs font-bold tracking-wider text-[#171717]/80">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                      isActive
                        ? 'text-[#0B1F3A] font-extrabold border-b-2 border-[#FF7A00] bg-white/60'
                        : 'hover:text-[#0B1F3A] hover:bg-white/40'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-[#138A4B]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B] animate-pulse" />
              10 Launch Case Studies Live
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E4DFD5] bg-[#F7F5F0] px-4 py-4 shadow-lg animate-in fade-in">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-bold tracking-wider rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white'
                        : 'text-[#171717] hover:bg-[#EFECE6]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#E4DFD5] flex items-center justify-between text-xs text-[#171717]/70 font-medium">
            <span>Real Founders · Real Journeys</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="text-[#FF7A00] font-bold flex items-center gap-1"
            >
              Search Index <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
