import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LoreSection } from './components/LoreSection';
import { CharactersSection } from './components/CharactersSection';
import { RegionsSection } from './components/RegionsSection';
import { BestiarySection } from './components/BestiarySection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c13] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Navigation (Zero Prompt Copy buttons) */}
      <Navbar onNavigate={scrollTo} />

      {/* Main Content Flow */}
      <main>
        {/* 01. Hero & Authentic Royal Parchment Dispatch Notice */}
        <HeroSection 
          onExploreWorld={() => scrollTo('lore')}
          onViewCharacters={() => scrollTo('characters')}
        />

        {/* 02. Magic 6-Tier Hierarchy with Visual Emblems */}
        <LoreSection />

        {/* 03. Characters: 토벌대 4인 & 밤의 여왕 (with portrait avatar slots beside name) */}
        <CharactersSection />

        {/* 04. 대륙 탐험 지도 (왕국수도 외 미탐험 ??? 상태) */}
        <RegionsSection />

        {/* 05. 던전 마물 도감 */}
        <BestiarySection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollTo} />
    </div>
  );
}
