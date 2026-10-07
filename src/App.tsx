/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedStory } from './components/FeaturedStory';
import { StartupStatistics } from './components/StartupStatistics';
import { IndustriesSection } from './components/IndustriesSection';
import { LaunchStoriesGrid } from './components/LaunchStoriesGrid';
import { FoundersSection } from './components/FoundersSection';
import { MarketingView } from './components/MarketingView';
import { FundingView } from './components/FundingView';
import { FailuresView } from './components/FailuresView';
import { AboutView } from './components/AboutView';
import { ArticleView } from './components/ArticleView';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

import { STARTUP_STORIES } from './data/startups';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeStorySlug, setActiveStorySlug] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => {
    try {
      const item = localStorage.getItem('iss_saved_stories');
      return item ? JSON.parse(item) : ['zerodha', 'nykaa'];
    } catch {
      return ['zerodha', 'nykaa'];
    }
  });

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('story/')) {
        const slug = hash.replace('story/', '');
        const storyExists = STARTUP_STORIES.some((s) => s.slug === slug);
        if (storyExists) {
          setActiveStorySlug(slug);
        }
      } else if (hash) {
        setActiveStorySlug(null);
        setCurrentTab(hash);
      } else {
        setActiveStorySlug(null);
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectStory = (slug: string) => {
    setActiveStorySlug(slug);
    window.location.hash = `story/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromStory = () => {
    setActiveStorySlug(null);
    window.location.hash = currentTab === 'home' ? '' : currentTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: string) => {
    setActiveStorySlug(null);
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustry(industryId);
    setActiveStorySlug(null);
    setCurrentTab('stories');
    window.location.hash = 'stories';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (slug: string) => {
    setSavedSlugs((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('iss_saved_stories', JSON.stringify(next));
      } catch (err) {
        console.error('Failed to save bookmark in local storage:', err);
      }
      return next;
    });
  };

  const handleClearAllBookmarks = () => {
    setSavedSlugs([]);
    try {
      localStorage.removeItem('iss_saved_stories');
    } catch (err) {
      console.error(err);
    }
  };

  const activeStory = STARTUP_STORIES.find((s) => s.slug === activeStorySlug);
  const featuredStory = STARTUP_STORIES.find((s) => s.featured) || STARTUP_STORIES[0];
  const savedStories = STARTUP_STORIES.filter((s) => savedSlugs.includes(s.slug));

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] flex flex-col font-sans selection:bg-[#FF7A00] selection:text-white">
      {/* Editorial Navbar */}
      <Navbar
        currentTab={activeStorySlug ? 'stories' : currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenBookmarks={() => setBookmarksOpen(true)}
        bookmarkedCount={savedSlugs.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeStory ? (
          /* Single Article View matching Section 11 & 12 layout */
          <ArticleView
            story={activeStory}
            allStories={STARTUP_STORIES}
            onBack={handleBackFromStory}
            onSelectStory={handleSelectStory}
            isBookmarked={savedSlugs.includes(activeStory.slug)}
            onToggleBookmark={handleToggleBookmark}
          />
        ) : currentTab === 'home' ? (
          /* Homepage Wireframe matching Section 6, 7, 8, 9, 10, 15, 23 */
          <>
            <Hero
              onExploreStories={() => handleSelectTab('stories')}
              onMeetFounders={() => handleSelectTab('founders')}
            />

            {/* Featured Story: Zerodha (Section 7) */}
            <FeaturedStory
              story={featuredStory}
              onReadStory={handleSelectStory}
              isBookmarked={savedSlugs.includes(featuredStory.slug)}
              onToggleBookmark={handleToggleBookmark}
            />

            {/* 10 Launch Stories Section (Section 10) */}
            <LaunchStoriesGrid
              stories={STARTUP_STORIES}
              onReadStory={handleSelectStory}
              savedSlugs={savedSlugs}
              onToggleBookmark={handleToggleBookmark}
            />

            {/* Explore Industries: 8 Visual Cards (Section 9) */}
            <IndustriesSection
              onSelectIndustry={handleSelectIndustry}
              selectedIndustry={selectedIndustry}
            />

            {/* Meet the Founders (Section 15) */}
            <FoundersSection
              onSelectStory={handleSelectStory}
              isFullPage={false}
            />

            {/* Startup Statistics with Oversized typography (Section 8) */}
            <StartupStatistics />

            {/* Newsletter Subscription (Section 23) */}
            <NewsletterSection />
          </>
        ) : currentTab === 'stories' ? (
          /* Dedicated All Stories view */
          <div className="pt-8">
            <LaunchStoriesGrid
              stories={STARTUP_STORIES}
              onReadStory={handleSelectStory}
              savedSlugs={savedSlugs}
              onToggleBookmark={handleToggleBookmark}
              initialFilter={selectedIndustry}
            />
            <NewsletterSection />
          </div>
        ) : currentTab === 'founders' ? (
          /* Dedicated Meet the Founders Page (Section 15) */
          <div className="pt-8">
            <FoundersSection
              onSelectStory={handleSelectStory}
              isFullPage={true}
            />
            <NewsletterSection />
          </div>
        ) : currentTab === 'industries' ? (
          /* Dedicated Industries Page (Section 9) */
          <div className="pt-8">
            <IndustriesSection
              onSelectIndustry={handleSelectIndustry}
              selectedIndustry={selectedIndustry}
            />
            <LaunchStoriesGrid
              stories={STARTUP_STORIES}
              onReadStory={handleSelectStory}
              savedSlugs={savedSlugs}
              onToggleBookmark={handleToggleBookmark}
              initialFilter={selectedIndustry}
            />
          </div>
        ) : currentTab === 'marketing' ? (
          /* Dedicated Marketing Teardown Page (Section 17) */
          <div className="pt-8">
            <MarketingView onSelectStory={handleSelectStory} />
            <NewsletterSection />
          </div>
        ) : currentTab === 'funding' ? (
          /* Dedicated Funding Tracker Page (Section 16) */
          <div className="pt-8">
            <FundingView onSelectStory={handleSelectStory} />
            <NewsletterSection />
          </div>
        ) : currentTab === 'failures' ? (
          /* Dedicated Failure Stories Page (Section 18) */
          <div className="pt-8">
            <FailuresView />
            <NewsletterSection />
          </div>
        ) : currentTab === 'about' ? (
          /* Dedicated About & Editorial Policy Page (Section 19 & 20) */
          <div className="pt-8">
            <AboutView />
            <NewsletterSection />
          </div>
        ) : null}
      </main>

      {/* Global Editorial Footer (Section 23) */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Global Interactive Search Modal (Section 14) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectStory={handleSelectStory}
        onSelectFounderStory={handleSelectStory}
        onSelectIndustry={handleSelectIndustry}
      />

      {/* Saved Bookmarks Drawer */}
      <BookmarksDrawer
        isOpen={bookmarksOpen}
        onClose={() => setBookmarksOpen(false)}
        savedStories={savedStories}
        onSelectStory={handleSelectStory}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />
    </div>
  );
}
