import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  User,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Type,
  Check,
  ArrowRight
} from 'lucide-react';
import { StartupStory } from '../types';

interface ArticleViewProps {
  story: StartupStory;
  allStories: StartupStory[];
  onBack: () => void;
  onSelectStory: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  story,
  allStories,
  onBack,
  onSelectStory,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSizeLarge, setFontSizeLarge] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const relatedStories = allStories
    .filter((s) => s.id !== story.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#F7F5F0] text-[#171717] pb-24">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-[#FF7A00] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Sticky Reading Subnav */}
      <div className="border-b border-[#E4DFD5] bg-[#F7F5F0]/90 backdrop-blur-md sticky top-[88px] z-30 py-2.5 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-[#0B1F3A] hover:text-[#FF7A00] font-bold cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Stories</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Font size toggle for long case studies */}
            <button
              onClick={() => setFontSizeLarge(!fontSizeLarge)}
              className="flex items-center gap-1 p-1.5 rounded-lg border border-[#E4DFD5] bg-white text-[#171717]/80 hover:text-[#0B1F3A] transition-colors cursor-pointer"
              title="Toggle Reading Font Size"
            >
              <Type className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">{fontSizeLarge ? 'A-' : 'A+'}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(story.slug)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#E4DFD5] bg-white text-[#0B1F3A] hover:bg-[#FFF4EB] transition-colors cursor-pointer"
              title="Save Story"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#FF7A00] text-[#FF7A00]' : ''}`} />
              <span className="text-[10px] font-bold">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#E4DFD5] bg-white text-[#0B1F3A] hover:bg-[#FFF4EB] transition-colors cursor-pointer"
              title="Copy Article Link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-[#138A4B]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="text-[10px] font-bold">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container strictly following Section 11 Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-8">
        
        {/* 1. CATEGORY KICKER (Unboxed, clean) */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-3">
          <span>{story.category}</span>
          <span className="text-[#171717]/40">·</span>
          <span>Case Study Archive</span>
          <span className="text-[#171717]/40">·</span>
          <span className="text-[#138A4B] font-semibold">{story.companyName}</span>
        </div>

        {/* 2. BIG BLOG HEADLINE */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.12] mb-4">
          {story.title}
        </h1>

        {/* 3. SHORT DESCRIPTION */}
        <p className="text-lg sm:text-xl text-[#171717]/85 font-normal leading-relaxed mb-6">
          {story.subtitle}
        </p>

        {/* 4. AUTHOR • DATE • READING TIME (Unboxed clean metadata) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#171717]/70 py-4 border-y border-[#E4DFD5] mb-8 font-medium">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>By <strong className="text-[#0B1F3A]">{story.author}</strong></span>
          </div>
          <span aria-hidden="true" className="text-[#171717]/30">·</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#171717]/50" />
            <span>Published {story.publishedDate}</span>
          </div>
          <span aria-hidden="true" className="text-[#171717]/30">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#171717]/50" />
            <span>{story.readTime}</span>
          </div>
          <span aria-hidden="true" className="text-[#171717]/30">·</span>
          <div className="text-[11px] text-[#171717]/60">
            Updated: {story.updatedDate}
          </div>
        </div>

        {/* 5. REAL HERO IMAGE (Image 1 of 3) */}
        <figure className="mb-10 bg-white p-2 rounded-2xl border border-[#E4DFD5] shadow-xs">
          <div className="relative h-72 sm:h-96 lg:h-[460px] rounded-xl overflow-hidden bg-[#0B1F3A]">
            <img
              src={story.images.hero.url}
              alt={story.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <figcaption className="p-3 text-xs text-[#171717]/75 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span>{story.images.hero.caption}</span>
            <span className="text-[11px] text-[#171717]/50 font-medium">
              Image credit: {story.images.hero.credit}
            </span>
          </figcaption>
        </figure>

        {/* 6. QUICK FACTS TABLE (Section 11 requirement) */}
        <div className="bg-white rounded-2xl border border-[#E4DFD5] p-6 sm:p-8 mb-12 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B1F3A] mb-4">
            <span className="w-2.5 h-2.5 bg-[#FF7A00] rounded-xs" />
            <span>Quick Facts Overview</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs">
            {story.quickFacts.map((fact, idx) => (
              <div key={idx} className="border-l-2 border-[#E4DFD5] pl-3 py-0.5">
                <span className="text-[10px] uppercase font-bold text-[#171717]/50 block">
                  {fact.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0B1F3A] leading-tight block mt-0.5">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. ARTICLE CONTENT SECTIONS */}
        <div className={`space-y-10 leading-relaxed ${fontSizeLarge ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}>
          
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Introduction
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.introduction}
            </div>
          </section>

          {/* The Beginning */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              The Beginning
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.theBeginning}
            </div>
          </section>

          {/* The Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              The Problem
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal bg-[#FFF4EB]/40 p-6 rounded-2xl border border-[#FF7A00]/20">
              {story.sections.theProblem}
            </div>
          </section>

          {/* IMAGE 2 — Founder Portrait (Section 12 requirement) */}
          <figure className="my-10 bg-white p-2 rounded-2xl border border-[#E4DFD5] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5 relative h-64 md:h-72 rounded-xl overflow-hidden bg-[#0B1F3A]">
                <img
                  src={story.images.founder.url}
                  alt={story.founders.join(', ')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 p-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
                  Founder Leadership Spotlight
                </span>
                <h3 className="text-xl font-black text-[#0B1F3A]">
                  {story.founders.join(' & ')}
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                  {story.images.founder.caption}
                </p>
                <p className="text-[11px] text-[#171717]/50 pt-2 border-t border-[#E4DFD5]">
                  Image credit: {story.images.founder.credit}
                </p>
              </div>
            </div>
          </figure>

          {/* Technology & Product */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Technology &amp; Product Architecture
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.technologyAndProduct}
            </div>
          </section>

          {/* Business Model */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Business Model &amp; Economics
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.businessModel}
            </div>
          </section>

          {/* IMAGE 3 — Product / Company / App / Office (Section 12 requirement) */}
          <figure className="my-10 bg-white p-2 rounded-2xl border border-[#E4DFD5] shadow-xs">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#0B1F3A]">
              <img
                src={story.images.product.url}
                alt="Product, platform or operations showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="p-3 text-xs text-[#171717]/75 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span>{story.images.product.caption}</span>
              <span className="text-[11px] text-[#171717]/50 font-medium">
                Image credit: {story.images.product.credit}
              </span>
            </figcaption>
          </figure>

          {/* Marketing Strategy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Marketing Strategy &amp; Growth Engine
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.marketingStrategy}
            </div>
          </section>

          {/* Challenges & Scaling */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Challenges &amp; Scaling Realities
            </h2>
            <div className="text-[#171717]/90 leading-relaxed whitespace-pre-line font-normal">
              {story.sections.challengesAndScaling}
            </div>
          </section>

          {/* Numbered Lessons for Aspiring Entrepreneurs (Section 11 requirement) */}
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl font-black text-[#0B1F3A] tracking-tight border-b border-[#E4DFD5] pb-2">
              Key Lessons for Entrepreneurs
            </h2>
            <div className="space-y-4">
              {story.sections.lessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#E4DFD5] shadow-xs flex items-start gap-4"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#0B1F3A] text-[#FF7A00] flex items-center justify-center font-black text-sm shrink-0 font-mono">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-[#0B1F3A]">
                      {lesson.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
                      {lesson.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final Takeaway */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0B1F3A] text-white space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#FF7A00]">
              Editorial Takeaway
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Final Takeaway
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {story.sections.finalTakeaway}
            </p>
          </section>

        </div>

        {/* 8. TRUST & VERIFICATION SYSTEM (Section 13 requirement) */}
        <div className="mt-14 bg-white rounded-2xl border border-[#E4DFD5] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-start gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-[#138A4B] shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-extrabold text-[#0B1F3A] flex items-center gap-2">
                <span>Editorial Research &amp; Integrity Standard</span>
                <ShieldCheck className="w-4 h-4 text-[#138A4B]" />
              </h3>
              <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed mt-1">
                This article was prepared using publicly available company information, government sources and independent reporting. Time-sensitive figures are presented with their relevant date.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E4DFD5] grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#138A4B]" />
                <span>Primary Sources Used:</span>
              </h4>
              <ul className="space-y-1.5 text-[#171717]/80">
                {story.sources
                  .filter((s) => s.type === 'primary')
                  .map((src, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#FF7A00] font-bold">•</span>
                      <span>{src.title} ({src.publisher})</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Independent Reporting Sources:</span>
              </h4>
              <ul className="space-y-1.5 text-[#171717]/80">
                {story.sources
                  .filter((s) => s.type === 'independent')
                  .map((src, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#FF7A00] font-bold">•</span>
                      <span>{src.title} ({src.publisher})</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E4DFD5] text-[11px] text-[#171717]/60">
            Notice an inaccuracy or outdated financial figure? Contact our research desk at <strong className="text-[#0B1F3A]">editorial@indianstartupstories.in</strong> for review within 24 business hours.
          </div>
        </div>

        {/* 9. RELATED STORIES (Section 11 requirement) */}
        <div className="mt-16 pt-10 border-t border-[#E4DFD5]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-[#0B1F3A] tracking-tight">
              Related Startup Stories
            </h3>
            <span className="text-xs text-[#171717]/60 font-medium">
              Continue reading
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedStories.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectStory(rel.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl border border-[#E4DFD5] overflow-hidden hover:border-[#FF7A00] transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 w-full bg-[#0B1F3A] overflow-hidden">
                    <img
                      src={rel.images.hero.url}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] font-bold text-[#FF7A00] uppercase tracking-wider mb-1">
                      {rel.category} · {rel.readTime}
                    </div>
                    <h4 className="text-sm font-extrabold text-[#0B1F3A] group-hover:text-[#FF7A00] transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                </div>
                <div className="p-4 pt-0 text-xs font-bold text-[#0B1F3A] flex items-center gap-1">
                  <span>Read Story</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-[#FF7A00]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};
