import React from 'react';
import { X, Trash2, ArrowRight, Bookmark, BookOpen } from 'lucide-react';
import { StartupStory } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedStories: StartupStory[];
  onSelectStory: (slug: string) => void;
  onRemoveBookmark: (slug: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedStories,
  onSelectStory,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5F0] border-l border-[#E4DFD5] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E4DFD5] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#FF7A00]" />
              <h2 className="text-base font-extrabold text-[#0B1F3A]">
                Saved Reading List ({savedStories.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#171717]/60 hover:text-[#0B1F3A] hover:bg-[#F7F5F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of saved stories */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {savedStories.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <BookOpen className="w-12 h-12 text-[#171717]/30 mx-auto" />
                <h3 className="text-sm font-bold text-[#0B1F3A]">
                  Your reading list is empty
                </h3>
                <p className="text-xs text-[#171717]/60 max-w-xs mx-auto leading-relaxed">
                  Click the bookmark icon on any startup case study to save it here for class discussions, projects, or offline study.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedStories.map((story) => (
                  <div
                    key={story.id}
                    className="p-4 bg-white rounded-xl border border-[#E4DFD5] shadow-xs flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-[#FF7A00] uppercase mb-1">
                        <span>{story.companyName} · {story.category}</span>
                        <span className="text-[#171717]/50">{story.readTime}</span>
                      </div>
                      <h4
                        onClick={() => {
                          onSelectStory(story.slug);
                          onClose();
                        }}
                        className="text-sm font-extrabold text-[#0B1F3A] hover:text-[#FF7A00] transition-colors cursor-pointer leading-snug"
                      >
                        {story.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E4DFD5] text-xs">
                      <button
                        onClick={() => {
                          onSelectStory(story.slug);
                          onClose();
                        }}
                        className="font-bold text-[#0B1F3A] hover:text-[#FF7A00] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onRemoveBookmark(story.slug)}
                        className="text-[#171717]/40 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer actions */}
          {savedStories.length > 0 && (
            <div className="p-4 border-t border-[#E4DFD5] bg-white flex items-center justify-between text-xs">
              <span className="text-[#171717]/60">Saved locally in browser</span>
              <button
                onClick={onClearAll}
                className="text-rose-600 font-bold hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
