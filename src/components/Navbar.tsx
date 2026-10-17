import React, { useState } from 'react';
import { Menu, X, Sparkles, Scroll, Compass } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0c13]/90 backdrop-blur-md border-b border-amber-900/30 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-tight text-white font-fantasy-title hover:text-cyan-200 transition-all whitespace-nowrap shrink-0 group"
        >
          <div className="w-6 h-6 rounded-lg bg-indigo-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 text-xs shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform">
            ✦
          </div>
          <span className="text-slate-100 font-extrabold group-hover:text-white transition-colors">
            30살 동정 낙제생이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">최강?!</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('notice')} 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Scroll className="w-3.5 h-3.5 text-amber-500/80" />
            <span>토벌대 모집 공고</span>
          </button>
          <button 
            onClick={() => scrollTo('lore')} 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            세계관 & 마법 체계
          </button>
          <button 
            onClick={() => scrollTo('characters')} 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            토벌대 & 밤의 여왕
          </button>
          <button 
            onClick={() => scrollTo('regions')} 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-amber-500/80" />
            <span>대륙 탐험 지도</span>
          </button>
          <button 
            onClick={() => scrollTo('bestiary')} 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            몬스터 도감
          </button>
        </nav>

        {/* Zone 3: Quick Kingdom Status Tag (NO COPY BUTTON) */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-amber-400/90 font-mono tracking-wider shrink-0 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>ROYAL DISPATCH ACTIVE</span>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-900/30 bg-[#0d101a] px-6 py-4 space-y-3">
          <button
            onClick={() => scrollTo('notice')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400 font-medium"
          >
            📜 토벌대 모집 공고
          </button>
          <button
            onClick={() => scrollTo('lore')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400"
          >
            세계관 & 마법 체계
          </button>
          <button
            onClick={() => scrollTo('characters')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400"
          >
            토벌대 4인 & 밤의 여왕
          </button>
          <button
            onClick={() => scrollTo('regions')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400"
          >
            대륙 탐험 지도
          </button>
          <button
            onClick={() => scrollTo('bestiary')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-amber-400"
          >
            몬스터 도감
          </button>
        </div>
      )}
    </header>
  );
};
