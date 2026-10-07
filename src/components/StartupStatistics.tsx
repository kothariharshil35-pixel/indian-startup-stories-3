import React from 'react';
import { TrendingUp, MapPin, Award, ExternalLink } from 'lucide-react';

export const StartupStatistics: React.FC = () => {
  return (
    <section className="py-14 bg-[#0B1F3A] text-white border-y border-[#061324] relative overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FF7A00_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF7A00] rounded-xs" />
              <span>Official Government & Ecosystem Data</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              India&apos;s Startup Ecosystem
            </h2>
          </div>
          <div className="text-xs text-white/60 max-w-sm">
            Figures compiled from official Department for Promotion of Industry and Internal Trade (DPIIT) disclosures and National Startup Day releases.
          </div>
        </div>

        {/* 3 Visual Metric Cards with Oversized Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stat 1: 200,000+ */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#061324]/80 border border-white/10 relative group hover:border-[#FF7A00]/50 transition-colors">
            <div className="flex items-center justify-between text-[#FF7A00] mb-4">
              <Award className="w-6 h-6" />
              <span className="text-[11px] font-mono tracking-wider text-white/50 uppercase">
                Metric 01
              </span>
            </div>
            {/* Oversized typography */}
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2 font-headline group-hover:text-[#FF7A00] transition-colors">
              200,000+
            </div>
            <h3 className="text-base font-bold text-white/95 mb-1">
              DPIIT-recognised startups
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Formally registered under the Startup India initiative, making India the 3rd largest startup ecosystem globally.
            </p>
          </div>

          {/* Stat 2: 53% */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#061324]/80 border border-white/10 relative group hover:border-[#138A4B]/50 transition-colors">
            <div className="flex items-center justify-between text-[#138A4B] mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-[11px] font-mono tracking-wider text-white/50 uppercase">
                Metric 02
              </span>
            </div>
            {/* Oversized typography */}
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2 font-headline group-hover:text-[#138A4B] transition-colors">
              53%
            </div>
            <h3 className="text-base font-bold text-white/95 mb-1">
              Startups from Tier 2/3 cities
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              More than half of emerging ventures originate beyond the traditional metro epicenters, demonstrating regional grassroots innovation.
            </p>
          </div>

          {/* Stat 3: 32 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#061324]/80 border border-white/10 relative group hover:border-[#FF7A00]/50 transition-colors">
            <div className="flex items-center justify-between text-[#FF7A00] mb-4">
              <TrendingUp className="w-6 h-6" />
              <span className="text-[11px] font-mono tracking-wider text-white/50 uppercase">
                Metric 03
              </span>
            </div>
            {/* Oversized typography */}
            <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2 font-headline group-hover:text-[#FF7A00] transition-colors">
              32
            </div>
            <h3 className="text-base font-bold text-white/95 mb-1">
              States &amp; UTs with startup policies
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Dedicated institutional frameworks offering state seed grants, public procurement preferences, and incubator networks.
            </p>
          </div>

        </div>

        {/* Mandatory Date & Source Citation Banner (Section 8 requirement) */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#138A4B]" />
            <span>
              <strong>Verified Source Citation:</strong> DPIIT / Startup India Official Dossier, published for National Startup Day (January 2024 – 2025 releases).
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#FF7A00] font-semibold">
            <span>Statistics subject to periodic statutory updates</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </section>
  );
};
