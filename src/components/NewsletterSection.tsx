import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-[#0B1F3A] text-white border-b border-[#061324] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FF7A00_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Weekly Editorial Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Get the Startup Story of the Week
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          One deeply researched Indian startup case study delivered every Sunday morning. No press release fluff, no sponsor spam—just real numbers, unit economics, and founder lessons.
        </p>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-[#061324] border border-[#138A4B] max-w-md mx-auto text-center space-y-2 animate-in zoom-in-95">
            <CheckCircle2 className="w-8 h-8 text-[#138A4B] mx-auto" />
            <h3 className="text-base font-bold text-white">You&apos;re Subscribed!</h3>
            <p className="text-xs text-white/70">
              Welcome to Indian Startup Stories. You&apos;ll receive our next Sunday deep dive directly in your inbox.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your college or work email..."
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#FF7A00] focus:bg-white/15 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#138A4B]" />
            Strictly zero spam
          </span>
          <span>·</span>
          <span>Curated for BBA, MBA &amp; Tech Enthusiasts</span>
          <span>·</span>
          <span>Unsubscribe anytime in 1-click</span>
        </div>
      </div>
    </section>
  );
};
