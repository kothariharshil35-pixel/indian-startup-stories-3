import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Building2, User, Layers, FileText } from 'lucide-react';
import { STARTUP_STORIES } from '../data/startups';
import { FOUNDERS } from '../data/founders';
import { INDUSTRIES } from '../data/industries';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStory: (slug: string) => void;
  onSelectFounderStory: (slug: string) => void;
  onSelectIndustry: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectStory,
  onSelectFounderStory,
  onSelectIndustry,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search Startups / Articles
  const matchingStories = cleanQ
    ? STARTUP_STORIES.filter(
        (s) =>
          s.companyName.toLowerCase().includes(cleanQ) ||
          s.title.toLowerCase().includes(cleanQ) ||
          s.category.toLowerCase().includes(cleanQ) ||
          s.tags.some((t) => t.toLowerCase().includes(cleanQ)) ||
          s.founders.some((f) => f.toLowerCase().includes(cleanQ))
      )
    : [];

  // Search Founders
  const matchingFounders = cleanQ
    ? FOUNDERS.filter(
        (f) =>
          f.name.toLowerCase().includes(cleanQ) ||
          f.company.toLowerCase().includes(cleanQ) ||
          f.bio.toLowerCase().includes(cleanQ)
      )
    : [];

  // Search Industries
  const matchingIndustries = cleanQ
    ? INDUSTRIES.filter(
        (i) =>
          i.name.toLowerCase().includes(cleanQ) ||
          i.startups.some((s) => s.toLowerCase().includes(cleanQ)) ||
          i.description.toLowerCase().includes(cleanQ)
      )
    : [];

  const totalResults =
    matchingStories.length + matchingFounders.length + matchingIndustries.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div
        className="w-full max-w-2xl bg-[#F7F5F0] rounded-2xl border border-[#E4DFD5] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E4DFD5] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FF7A00] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, founders, industries..."
            className="w-full text-base sm:text-lg bg-transparent focus:outline-none text-[#0B1F3A] font-medium placeholder-[#171717]/40"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#171717]/50 hover:text-[#0B1F3A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F5F0] text-[#171717]/60 border border-[#E4DFD5]">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#171717]/50 hover:text-[#0B1F3A] sm:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!cleanQ ? (
            <div className="text-center py-8 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#171717]/50">
                Popular Search Queries
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['FinTech', 'Zerodha', 'Zomato', 'Deepinder Goyal', 'Nykaa', 'boAt', 'Physics Wallah'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#E4DFD5] text-xs font-medium text-[#0B1F3A] hover:border-[#FF7A00] cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-xs text-[#171717]/60">
              No results found for &ldquo;<strong>{query}</strong>&rdquo;. Try searching by startup name (e.g., Zerodha), founder (e.g., Nithin Kamath), or industry (e.g., FoodTech).
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Startups & Case Studies */}
              {matchingStories.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#0B1F3A] mb-2.5">
                    <FileText className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Startup Case Studies ({matchingStories.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingStories.map((story) => (
                      <div
                        key={story.id}
                        onClick={() => {
                          onSelectStory(story.slug);
                          onClose();
                        }}
                        className="p-3.5 bg-white rounded-xl border border-[#E4DFD5] hover:border-[#FF7A00] transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-[10px] font-bold text-[#FF7A00] uppercase">
                            {story.companyName} · {story.category}
                          </div>
                          <div className="text-sm font-extrabold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors">
                            {story.title}
                          </div>
                          <div className="text-xs text-[#171717]/60 line-clamp-1">
                            {story.subtitle}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#171717]/40 group-hover:translate-x-1 group-hover:text-[#FF7A00] transition-all shrink-0 ml-3" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Founders */}
              {matchingFounders.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#0B1F3A] mb-2.5">
                    <User className="w-3.5 h-3.5 text-[#138A4B]" />
                    <span>Founders ({matchingFounders.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingFounders.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => {
                          onSelectFounderStory(f.storySlug);
                          onClose();
                        }}
                        className="p-3 bg-white rounded-xl border border-[#E4DFD5] hover:border-[#138A4B] transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={f.image}
                            alt={f.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <div className="text-sm font-extrabold text-[#0B1F3A]">
                              {f.name}
                            </div>
                            <div className="text-xs text-[#171717]/70">
                              {f.role}, {f.company}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#FF7A00] flex items-center gap-1">
                          View Story <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries */}
              {matchingIndustries.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#0B1F3A] mb-2.5">
                    <Layers className="w-3.5 h-3.5 text-[#0B1F3A]" />
                    <span>Industries ({matchingIndustries.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchingIndustries.map((ind) => (
                      <div
                        key={ind.id}
                        onClick={() => {
                          onSelectIndustry(ind.id);
                          onClose();
                        }}
                        className="p-3 bg-white rounded-xl border border-[#E4DFD5] hover:border-[#0B1F3A] transition-colors cursor-pointer flex items-center gap-3"
                      >
                        <span className="text-xl">{ind.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A]">
                            {ind.name}
                          </div>
                          <div className="text-[10px] text-[#171717]/60 truncate">
                            {ind.startups.join(', ')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#EFECE6] border-t border-[#E4DFD5] text-[11px] text-[#171717]/60 flex items-center justify-between">
          <span>Search index includes all 10 launch case studies, founders &amp; sectors</span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-[#0B1F3A] hover:underline cursor-pointer"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
