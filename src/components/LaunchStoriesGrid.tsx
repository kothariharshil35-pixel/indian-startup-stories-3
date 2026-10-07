import React, { useState } from 'react';
import { ArrowRight, Bookmark, Clock, CheckCircle } from 'lucide-react';
import { StartupStory } from '../types';

interface LaunchStoriesGridProps {
  stories: StartupStory[];
  onReadStory: (slug: string) => void;
  savedSlugs: string[];
  onToggleBookmark: (slug: string) => void;
  initialFilter?: string | null;
}

export const LaunchStoriesGrid: React.FC<LaunchStoriesGridProps> = ({
  stories,
  onReadStory,
  savedSlugs,
  onToggleBookmark,
  initialFilter = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter || 'all');

  const categories = [
    { id: 'all', label: 'All 10 Stories' },
    { id: 'FinTech', label: 'FinTech' },
    { id: 'FoodTech', label: 'FoodTech' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'EdTech', label: 'EdTech' },
    { id: 'Consumer Tech', label: 'Consumer Tech' },
    { id: 'Hospitality', label: 'Hospitality' },
  ];

  const filteredStories =
    activeFilter === 'all'
      ? stories
      : stories.filter((s) => s.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-14 border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-1">
              <span className="w-2.5 h-2.5 bg-[#FF7A00] rounded-xs" />
              <span>Full Launch Edition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              10 Startup Stories
            </h2>
            <p className="text-sm text-[#171717]/70 mt-1 max-w-xl">
              Exhaustively researched journeys uncovering early iterations, product moats, unit economics, and founder mindsets.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0B1F3A] shadow-xs'
                      : 'text-[#171717]/70 hover:text-[#0B1F3A] hover:bg-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => {
            const isSaved = savedSlugs.includes(story.slug);
            return (
              <article
                key={story.id}
                className="bg-white rounded-2xl border border-[#E4DFD5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Real Image Thumbnail */}
                  <div
                    onClick={() => onReadStory(story.slug)}
                    className="relative h-52 w-full overflow-hidden cursor-pointer bg-[#0B1F3A]"
                  >
                    <img
                      src={story.images.hero.url}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Top unboxed overlay label */}
                    <div className="absolute top-3 left-3 text-[11px] font-bold text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                      {story.companyName} · {story.foundedYear}
                    </div>

                    {/* Bookmark quick button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(story.slug);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-xs text-white hover:text-[#FF7A00] transition-colors cursor-pointer"
                      title={isSaved ? 'Remove Bookmark' : 'Bookmark Story'}
                      aria-label="Bookmark this story"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isSaved ? 'fill-[#FF7A00] text-[#FF7A00]' : ''}`}
                      />
                    </button>

                    {/* Image Credit bottom tag */}
                    <div className="absolute bottom-2 left-3 right-3 text-[10px] text-white/80 truncate">
                      {story.images.hero.caption}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Clean Unboxed Metadata with Typographic Separator (Zero-Pill Rule) */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#171717]/60 mb-2.5">
                      <span className="text-[#FF7A00] font-bold uppercase tracking-wider">
                        {story.category}
                      </span>
                      <span aria-hidden="true" className="text-[#171717]/30">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#171717]/50" />
                        {story.readTime}
                      </span>
                      <span aria-hidden="true" className="text-[#171717]/30">·</span>
                      <span>{story.fundingStage}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onReadStory(story.slug)}
                      className="text-xl font-extrabold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors cursor-pointer leading-snug tracking-tight mb-2.5"
                    >
                      {story.title}
                    </h3>

                    {/* Subtitle / Excerpt */}
                    <p className="text-xs text-[#171717]/75 line-clamp-3 leading-relaxed mb-4">
                      {story.subtitle}
                    </p>

                    {/* Founders info line */}
                    <div className="pt-3 border-t border-[#E4DFD5] text-[11px] text-[#171717]/70 flex items-center justify-between">
                      <span>Founders: <strong className="text-[#0B1F3A]">{story.founders.join(' & ')}</strong></span>
                      <span className="text-[#138A4B] font-semibold flex items-center gap-0.5">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onReadStory(story.slug)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#F7F5F0] hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
