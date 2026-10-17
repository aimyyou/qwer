import React, { useState } from 'react';
import { ChevronRight, X, ZoomIn, ZoomOut, HelpCircle, Eye } from 'lucide-react';
import { CHARACTERS, Character } from '../data/loreData';

export const CharactersSection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'party' | 'demon'>('all');
  
  // Image Lightbox zoom state: stores image URL and name when zoomed in
  const [zoomedImage, setZoomedImage] = useState<{ url: string; name: string } | null>(null);

  const filteredCharacters = CHARACTERS.filter((c) => {
    if (activeFilter === 'party') return c.id !== 'arma';
    if (activeFilter === 'demon') return c.id === 'arma';
    return true;
  });

  const handleImageClick = (e: React.MouseEvent, char: Character) => {
    e.stopPropagation(); // Prevent opening the detail modal when clicking directly on image
    if (char.image === '???') {
      setZoomedImage({ url: '???', name: char.name });
    } else {
      setZoomedImage({ url: char.image, name: char.name });
    }
  };

  return (
    <section id="characters" className="py-20 md:py-28 bg-[#0c0e14] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-amber-400 tracking-wider mb-2 font-medium">
            02. EXPEDITION MEMBERS &amp; NIGHT QUEEN
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-cinzel text-balance mb-4">
            토벌대 4인과 밤의 여왕
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            마왕 토벌을 위해 소집된 마법학교 동기 4인과 베일에 싸인 밤의 여왕입니다. 
            <span className="text-amber-300 font-medium ml-1">초상화 이미지를 클릭하면 큰 화면으로 확대되고, 다시 누르면 닫힙니다.</span>
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-2 mb-8 p-1 bg-slate-900/90 rounded-lg w-fit border border-amber-900/40">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            전체 ({CHARACTERS.length})
          </button>
          <button
            onClick={() => setActiveFilter('party')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeFilter === 'party'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            토벌대 4인
          </button>
          <button
            onClick={() => setActiveFilter('demon')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeFilter === 'demon'
                ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            밤의 여왕 (마왕)
          </button>
        </div>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((char) => {
            const isArma = char.id === 'arma';
            const isMysteryImage = char.image === '???';

            return (
              <div
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  isArma
                    ? 'bg-gradient-to-br from-purple-950/30 via-slate-900/70 to-slate-900 border-purple-500/40 hover:border-purple-400'
                    : 'bg-slate-900/50 border-slate-800 hover:border-amber-400/60'
                }`}
              >
                <div>
                  {/* Top line role metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-amber-400">{char.role}</span>
                    <span>{char.age} · {char.gender}</span>
                  </div>

                  {/* Character Name & Portrait Image Slot side-by-side */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-800/80">
                    {/* Portrait Image Container with Zoom Affordance */}
                    <div 
                      onClick={(e) => handleImageClick(e, char)}
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-amber-500/40 group-hover:border-amber-400 shadow-md shrink-0 bg-slate-950 cursor-zoom-in transition-transform hover:scale-105"
                      title="클릭하여 이미지 확대"
                    >
                      {isMysteryImage ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-950/80 to-slate-950 text-purple-300 font-cinzel">
                          <span className="text-xl font-bold tracking-widest animate-pulse">???</span>
                          <span className="text-[9px] text-purple-400/80 mt-0.5 font-mono">베일의 여왕</span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={char.image}
                            alt={char.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="w-4 h-4 text-amber-300" />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Name & Title */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-white font-cinzel group-hover:text-amber-300 transition-colors truncate">
                        {char.name}
                      </h3>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {char.title}
                      </p>
                      <div className="mt-1 text-[11px] text-amber-400/90 font-medium">
                        {char.signatureSpell}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                    <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-2">
                      {char.quote}
                    </p>
                  </div>

                  {/* Specialties & Background snippet */}
                  <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                    <div>
                      <span className="text-slate-500">특기:</span> {char.specialty}
                    </div>
                    <p className="text-slate-400 line-clamp-2">
                      {char.background}
                    </p>
                  </div>
                </div>

                {/* Bottom line: Personality & Detail trigger */}
                <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 line-clamp-1">
                    {char.personality.join(' · ')}
                  </div>
                  <span className="text-xs text-amber-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                    상세보기 <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enlarged Image Lightbox (확대/축소 기능) */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
          title="클릭하면 다시 작아집니다"
        >
          {/* Top Bar with Dismiss */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700">
              클릭하여 닫기
            </span>
            <button
              onClick={() => setZoomedImage(null)}
              className="p-2 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            onClick={() => setZoomedImage(null)}
            className="max-w-2xl max-h-[85vh] w-full flex flex-col items-center justify-center"
          >
            {zoomedImage.url === '???' ? (
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-b from-purple-950 via-[#190d29] to-slate-950 border-2 border-purple-500/60 p-8 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                <div className="w-24 h-24 rounded-full bg-purple-900/40 border border-purple-400/50 flex items-center justify-center mb-6">
                  <span className="text-4xl font-extrabold text-purple-300 font-cinzel animate-pulse">???</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-cinzel mb-2">
                  {zoomedImage.name}
                </h3>
                <p className="text-xs text-purple-300/80 leading-relaxed max-w-xs">
                  밤의 여왕 아르마의 진정한 모습은 심연의 마왕성 옥좌에 도달하기 전까지 짙은 어둠의 베일에 싸여 있습니다.
                </p>
                <div className="mt-6 text-[11px] text-slate-500">
                  (화면을 클릭하면 창이 닫힙니다)
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.25)] bg-slate-950">
                <img
                  src={zoomedImage.url}
                  alt={zoomedImage.name}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
                />
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-base font-bold text-white font-cinzel">
                    {zoomedImage.name}
                  </span>
                  <span className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                    <ZoomOut className="w-3.5 h-3.5" />
                    <span>클릭 시 원래대로 축소</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121622] border border-amber-900/60 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div 
                onClick={(e) => handleImageClick(e, selectedCharacter)}
                className="w-20 h-20 rounded-xl overflow-hidden border-2 border-amber-500 shrink-0 shadow-lg cursor-zoom-in group/thumb relative"
                title="클릭하여 확대"
              >
                {selectedCharacter.image === '???' ? (
                  <div className="w-full h-full flex items-center justify-center bg-purple-950 text-purple-300 font-cinzel text-xl font-bold">
                    ???
                  </div>
                ) : (
                  <>
                    <img
                      src={selectedCharacter.image}
                      alt={selectedCharacter.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium mb-1">
                  <span>{selectedCharacter.role}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{selectedCharacter.age}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{selectedCharacter.gender}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel">
                  {selectedCharacter.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {selectedCharacter.title}
                </p>
              </div>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-900/30 mb-6">
              <p className="text-sm text-amber-200/90 italic leading-relaxed">
                {selectedCharacter.quote}
              </p>
            </div>

            {/* Detailed Info (No relationship dynamics) */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-6">
              <div>
                <strong className="text-white block mb-1">외형 묘사:</strong>
                <p className="text-slate-400">{selectedCharacter.appearance}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">인물 배경:</strong>
                <p className="text-slate-400 leading-relaxed">{selectedCharacter.background}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">전투 방식 &amp; 마법 스타일:</strong>
                <p className="text-slate-400 leading-relaxed">{selectedCharacter.combatStyle}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">특기 및 필살 마법:</strong>
                <p className="text-slate-400">
                  <span className="text-amber-400 font-medium">{selectedCharacter.signatureSpell}</span>
                  {' '}({selectedCharacter.specialty})
                </p>
              </div>

              <div>
                <strong className="text-white block mb-1">성격 키워드:</strong>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedCharacter.personality.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedCharacter(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
