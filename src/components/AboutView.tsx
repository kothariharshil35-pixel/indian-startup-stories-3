import React from 'react';
import { ShieldCheck, CheckCircle2, BookOpen, Users, Compass, Mail } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-8">
      
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4EB] border border-[#FF7A00]/30 text-xs font-bold text-[#FF7A00] uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>About Indian Startup Stories</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
          Real Founders. Real Journeys. Real Stories.
        </h1>
        <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-normal">
          An independent editorial publication dedicated to documenting the authentic decisions, business models, and economic realities shaping India&apos;s startup ecosystem.
        </p>
      </div>

      {/* Mission Section (Section 19) */}
      <section className="bg-white rounded-2xl border border-[#E4DFD5] p-8 sm:p-12 mb-12 shadow-sm space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
            <span>Section 19</span>
            <span className="text-[#171717]/40">·</span>
            <span>Manifesto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Mission
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[#171717]/90 leading-relaxed font-medium">
          Indian Startup Stories exists to document the people, ideas and decisions behind India&apos;s startup ecosystem.
        </p>

        <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed">
          We believe that startup stories should be much more than celebratory valuation headlines or corporate press releases. Behind every company are:
        </p>

        {/* 6 Core Editorial Tenets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
          {[
            { word: 'Ideas.', desc: 'The initial spark and customer pain point.' },
            { word: 'Experiments.', desc: 'The early trials, betas, and prototypes.' },
            { word: 'Failures.', desc: 'The costly missteps and market rejections.' },
            { word: 'Pivots.', desc: 'The courageous shifts when plans fell apart.' },
            { word: 'People.', desc: 'The co-founders, operators, and riders.' },
            { word: 'Decisions.', desc: 'The tradeoffs that defined long-term survival.' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F7F5F0] border border-[#E4DFD5] text-left">
              <span className="text-lg font-black text-[#0B1F3A] block mb-1 font-headline">
                {item.word}
              </span>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base text-[#171717]/85 leading-relaxed pt-2">
          Our goal is to make those journeys accessible to college students, aspiring entrepreneurs, and anyone curious about the mechanics of building enduring businesses in India.
        </p>
      </section>

      {/* Editorial Policy (Section 20) */}
      <section className="bg-[#0B1F3A] text-white rounded-2xl border border-[#061324] p-8 sm:p-12 mb-12 shadow-md space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
            <span>Integrity &amp; Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Editorial Policy
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            What we believe and how every article on this platform is researched and maintained:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-5 rounded-xl bg-[#061324]/80 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-[#FF7A00]">
              <CheckCircle2 className="w-4 h-4" />
              <span>We Verify.</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Important claims, financials, and milestones should be checked against reliable primary sources like regulatory filings, stock exchange disclosures, and verified audited records.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#061324]/80 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-[#138A4B]">
              <CheckCircle2 className="w-4 h-4" />
              <span>We Cite.</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Readers should always be able to inspect where information came from. Every case study contains an itemized list of primary and independent sources.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#061324]/80 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-[#FF7A00]">
              <CheckCircle2 className="w-4 h-4" />
              <span>We Update.</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Startup ecosystems move fast. Time-sensitive metrics (such as DPIIT registration figures, funding rounds, and market share data) display clear publication and update dates.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#061324]/80 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-[#138A4B]">
              <CheckCircle2 className="w-4 h-4" />
              <span>We Distinguish Fact from Analysis.</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Company PR statements and independent editorial analysis are never conflated. Readers know exactly when data ends and business interpretation begins.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#061324]/80 border border-white/10 space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-black text-white">
              <CheckCircle2 className="w-4 h-4 text-[#FF7A00]" />
              <span>We Correct.</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              If an error is discovered or brought to our attention by readers, the article is promptly audited, corrected, and stamped with an updated revision date.
            </p>
          </div>

        </div>
      </section>

      {/* Target Audience Section (Section 3) */}
      <section className="bg-white rounded-2xl border border-[#E4DFD5] p-8 sm:p-12 shadow-sm space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FF7A00] uppercase mb-2">
            <Users className="w-4 h-4 text-[#FF7A00]" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Designed for Learners &amp; Builders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF7A00]" />
              <span>Primary Audience: College Students</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed mb-3">
              Crafted specifically as comprehensive reference case studies for undergraduate and postgraduate students studying:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#0B1F3A]">
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· BBA / BMS</div>
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· MBA / PGDM</div>
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· Digital Business</div>
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· Marketing &amp; Brand</div>
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· Entrepreneurship</div>
              <div className="p-2.5 rounded-lg bg-[#F7F5F0] border border-[#E4DFD5]">· Corporate Finance</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#138A4B]" />
              <span>Secondary Audience</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B]" />
                <span>Aspiring founders exploring product-market fit models</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B]" />
                <span>Digital marketers studying authentic community engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B]" />
                <span>Business researchers and strategy analysts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138A4B]" />
                <span>Startup enthusiasts curious about Indian innovation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="pt-6 border-t border-[#E4DFD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#171717]/70">
          <span>Editorial inquiries &amp; factual corrections: <strong>editorial@indianstartupstories.in</strong></span>
          <div className="flex items-center gap-1 text-[#FF7A00] font-bold">
            <Mail className="w-4 h-4" />
            <span>Open Submissions</span>
          </div>
        </div>

      </section>

    </div>
  );
};
