export interface Character {
  id: string;
  name: string;
  title: string;
  role: string;
  age: string;
  gender: '남성' | '여성';
  specialty: string;
  signatureSpell: string;
  personality: string[];
  appearance: string;
  background: string;
  combatStyle: string;
  quote: string;
  tagline: string;
  color: string;
  image: string;
}

export interface Region {
  id: string;
  name: string;
  subtitle: string;
  dangerLevel: string;
  isExplored: boolean;
  description: string;
  keyLocations: string[];
  encounters: string[];
  loreNote: string;
  coordinates: { x: number; y: number };
}

export interface Monster {
  id: string;
  name: string;
  category: '초반형' | '중반형' | '심층형' | '정예형';
  danger: string;
  traits: string[];
  tactics: string;
  description: string;
}

export interface MagicTier {
  name: string;
  level: string;
  rarity: string;
  description: string;
  color: string;
  sigil: string;
  examples: string;
}

export const WORLD_OVERVIEW = {
  title: "30살 동정 낙제생이 최강?!",
  subTitle: "연금술 상점 알바생에서 시작되는 마왕 토벌 판타지",
  genres: ["정통 마법 판타지", "성장 RPG", "파티 모험", "블랙 코미디", "다크 판타지 & 로맨스"],
  oneLiner: "마법학교 낙제생으로 연금술 상점 알바생을 전전하던 30살 청년. 서른 번째 생일 밤, 체내의 잠재 마력이 상식을 벗어난 위력으로 깨어난다!",
  synopsis: `중세 유럽풍의 찬란한 왕국과 오랜 시간 대립해 온 마왕 세력. 마법은 체계적인 학문으로 존중받으며, 왕립 마법학교 출신의 엘리트 마법사들이 국가의 안위를 지켜왔습니다.

그러나 마법학교에서 낙제를 거듭해 결국 중퇴하고 만 주인공. 서른 살이 되도록 수도 뒷골목의 연금술 상점에서 먼지 쌓인 플라스크를 닦으며 알바생으로 살아가던 어느 날 밤, 몸속 깊숙이 잠들어 있던 마력이 믿을 수 없는 대폭발을 일으킵니다.

과거 자신을 차갑게 무시했던 전교 수석 '세레나', 능글맞은 공간술사 '루카스', 듬직한 방어술사 '가렌', 상냥한 치유사 '엘리시아'와 함께 결성된 마왕 토벌대. 그리고 어둠 속에서 토벌대를 주시하는 마계의 지배자, '밤의 여왕 아르마'의 치밀한 전략이 맞물리며 운명의 모험이 시작됩니다.`
};

export const CHARACTERS: Character[] = [
  {
    id: "serena",
    name: "세레나 아르벨",
    title: "진홍의 뇌화 / 전교 수석 마법사",
    role: "토벌대 공격마법 특화",
    age: "30세",
    gender: "여성",
    specialty: "고위 화염 마법 · 고위 번개 마법 · 정밀 마력 제어",
    signatureSpell: "《작열의 뇌화포 (Flaming Thunder Cannon)》",
    personality: ["냉정함", "높은 자존심", "철저한 분석적 사고", "강한 경쟁심", "지적인 카리스마"],
    appearance: "허리까지 닿는 은백색 장발, 예리한 청회색 눈매, 고급 마법사 정복과 실전용 마도구.",
    background: "마법학교를 수석으로 졸업한 정통파 천재 마법사. 실패를 결코 용납하지 않는 완벽주의자로, 학창 시절 성적이 최하위였던 유저를 차갑게 무시하고 기억에서 지우려 했습니다.",
    combatStyle: "한 치의 오차도 없는 완벽한 계산과 수식 연산으로 펼치는 극대 화력의 마법 포격.",
    quote: "“마법은 피나는 수련과 엄밀한 수식의 결과물이야. 대체 무슨 짓을 했길래 그런 비상식적인 출력이 나오는 거지?”",
    tagline: "차가운 이성 뒤에 불타는 승부욕을 숨긴 은발의 수석 마도사.",
    color: "#ef4444",
    image: "https://cm28.chimul.uk/a.3.webp"
  },
  {
    id: "lucas",
    name: "루카스 베른",
    title: "차원의 길잡이",
    role: "토벌대 특수마법 & 참모",
    age: "30세",
    gender: "남성",
    specialty: "공간마법 《게이트》 · 전장 재배치 · 적 공격 굴절 · 고속 정찰",
    signatureSpell: "《쌍방향 차원 도약문 (Twin Gate Shift)》",
    personality: ["영리함", "능글맞음", "장난기 넘침", "얄미운 언행", "위기 시 냉철함"],
    appearance: "자연스럽게 흩날리는 짙은 갈색 단발, 호기심 가득한 눈빛, 활동적인 가죽 코트와 단검 파우치.",
    background: "마법학교 동기. 규칙에 얽매이지 않는 변칙 공간마법의 일인자이나, 학창 시절 내내 낙제생이던 유저를 은근히 깔보고 무시하던 인물입니다. 연금술 상점 알바생이던 유저의 갑작스러운 대각성에 배알이 꼴려 하면서도 겉으로는 얄밉게 실실 웃으며 떠봅니다.",
    combatStyle: "직접 타격보다는 적의 공격 투사체를 게이트로 튕겨내거나 아군을 유리한 고지로 순간이동시키는 전술 서포트.",
    quote: "“어라? 연금술 상점 알바생 녀석이 대체 무슨 짓을 벌인 거야? 말도 안 돼, 마법 기초도 못 떼서 쫓겨난 녀석이...”",
    tagline: "학창 시절 유저를 깔보았으나 기이한 각성에 당혹해하는 얄미운 공간술사.",
    color: "#8b5cf6",
    image: "https://cm28.chimul.uk/b.7.webp"
  },
  {
    id: "garen",
    name: "가렌 로웬",
    title: "철벽의 성채",
    role: "토벌대 수호 & 방어마법 담당",
    age: "30세",
    gender: "남성",
    specialty: "다층 결계 방벽 · 충격 분산 수호막 · 절대 방어 진형",
    signatureSpell: "《이지스의 거신방벽 (Bastion of Aegis)》",
    personality: ["정직함", "온화한 배려", "성실함", "따뜻한 성품", "의리"],
    appearance: "짧은 흑갈색 머리에 다부진 건장한 체격, 거대한 마법 타워 실드와 묵직한 중갑.",
    background: "마법학교 동기. 다른 엘리트 동기들이 낙제생인 유저를 비웃고 외면할 때도, 유일하게 차별 없이 따뜻한 미소로 말을 건네주고 챙겨주던 착하고 온화한 동기입니다.",
    combatStyle: "자신을 희생해서라도 파티원을 지키는 철벽의 수호자. 아군이 마음 놓고 공격에 전념할 수 있도록 전방의 모든 맹공을 막아냅니다.",
    quote: "“무사해서 정말 다행이야. 다들 네 힘에 놀라 떠들썩하지만... 난 네가 무사하다는 것만으로도 기뻐.”",
    tagline: "모두가 차갑게 대할 때 유일하게 유저를 따뜻하게 대해준 다정한 동기.",
    color: "#10b981",
    image: "https://cm28.chimul.uk/c.3.webp"
  },
  {
    id: "alicia",
    name: "엘리시아 벨",
    title: "성령의 숨결",
    role: "토벌대 치유 & 회복마법",
    age: "30세",
    gender: "여성",
    specialty: "고위 신성 치유 · 상태이상 정화 · 마력 순환 촉진 · 축복 부여",
    signatureSpell: "《새벽의 기적 (Dawn's Benediction)》",
    personality: ["상냥함", "따뜻한 배려심", "깊은 침착함", "다정함", "부드러운 강단"],
    appearance: "부드럽게 땋아 내린 밝은 갈색 장발, 다정한 꿀빛 눈동자, 흰색과 청색이 조화된 치유사 로브.",
    background: "마법학교 동기. 성정이 상냥하고 다정하여, 학창 시절 성적 때문에 늘 위축되어 있던 유저에게 먼저 다가와 따뜻하게 응원과 위로를 건네주던 치유사 동기 중 한 명입니다.",
    combatStyle: "지속적인 재생 결계와 해독, 멘탈 케어로 아군이 한계 이상의 기량을 발휘하도록 돕는 필수 지원가.",
    quote: "“다치신 곳은 없죠? 괜찮아요, 예전에도 지금도 넌 정말 착한 친구인걸요. 내가 옆에서 지켜줄게.”",
    tagline: "늘 곁에서 상냥한 미소와 온기를 건네주던 소중한 치유사 동기.",
    color: "#06b6d4",
    image: "https://cm28.chimul.uk/d.3.webp"
  },
  {
    id: "arma",
    name: "마왕 아르마",
    title: "밤의 여왕 (Queen of the Night)",
    role: "마족의 고대 지배자 · 최종 보스",
    age: "수천 년 이상",
    gender: "여성",
    specialty: "고대 암흑마법 · 중력 왜곡 · 차원 속박 · 환각술",
    signatureSpell: "《황혼의 영구암흑 (Eternal Twilight Abyss)》",
    personality: ["냉정함", "오만함", "극도로 지능적", "전략적 인내심", "자존심"],
    appearance: "신비로운 어두운 피부, 발끝까지 찰랑이는 흑발, 매혹적인 적자색 눈동자, 고대 마족의 뾰족한 귀와 화려한 보랏빛 드레스.",
    background: "인간 왕국과 수천 년 동안 전쟁을 치러온 마계의 정점. 단순한 파괴자가 아닌 냉혹한 정치가이자 대전략가입니다.",
    combatStyle: "전장을 한눈에 장악하고, 환각과 공간 왜곡으로 상대의 허점을 찔러 무너뜨리는 고대 마법의 정점.",
    quote: "“인간들의 토벌대라... 꽤나 흥미로운 힘이 섞여 있구나. 어디 내 옥좌까지 무사히 도달할 수 있는지 지켜보마.”",
    tagline: "압도적인 계략과 어둠의 지략으로 인간을 농락하는 마계의 여왕.",
    color: "#a855f7",
    image: "???"
  }
];

export const REGIONS: Region[] = [
  {
    id: "capital",
    name: "왕국수도",
    subtitle: "Royal Capital",
    dangerLevel: "안전",
    isExplored: true,
    description: "인간 왕국의 심장이자 정치, 경제의 중심지. 거대한 백색 성벽과 연금술 상점 골목, 왕립 마력 측정소 및 토벌대 모집 광장이 위치한 모험의 출발점입니다.",
    keyLocations: ["연금술 상점 골목", "중앙 마력 측정소", "왕실 근위대 사령부", "토벌대 소집 광장"],
    encounters: ["연금술 재료 상인", "왕국 토벌대 모집관", "왕실 마도 경비병", "마법학교 동기들"],
    loreNote: "평범했던 연금술 상점 알바생의 방에서 시작된 전례 없는 마력 파동이 수도 전체의 경보 결계를 뒤흔들었습니다.",
    coordinates: { x: 67, y: 48 }
  },
  {
    id: "academy",
    name: "마법 학교",
    subtitle: "Royal Magic Academy",
    dangerLevel: "안전 구역",
    isExplored: true,
    description: "유저가 낙제를 거듭하다 결국 중퇴했던 애증의 모교입니다. 대륙 최고의 마도 수재들이 모여드는 상아탑으로, 거대한 원소 실습 투기장과 수천 권의 비전서가 보관된 대도서관이 자리하고 있습니다. 유저의 기이한 대각성 소식이 전해진 후, 과거 유저를 무시했던 교수진과 동기들 사이에 큰 파문이 일고 있습니다.",
    keyLocations: ["원소 마법 실습 투기장", "대도서관 금서 구역", "수석 연구실", "추억의 낙제생 강의실"],
    encounters: ["오만한 엘리트 학도들", "학창 시절을 기억하는 마도 교수", "학구열에 불타는 연구생들"],
    loreNote: "세레나가 수석을 차지하고 유저가 쫓겨나듯 떠났던 곳. 유저의 각성 소식에 마법학교 전체가 술렁이고 있습니다.",
    coordinates: { x: 44, y: 35 }
  },
  {
    id: "dungeon",
    name: "던전",
    subtitle: "Ancient Dungeon",
    dangerLevel: "???",
    isExplored: false,
    description: "아직 탐험되지 않은 미지의 지역입니다. 토벌대의 발걸음이 닿기 전까지 그 어떤 정보도 밝혀지지 않았습니다.",
    keyLocations: ["???"],
    encounters: ["???"],
    loreNote: "???",
    coordinates: { x: 30, y: 64 }
  },
  {
    id: "deep_forest",
    name: "깊은 숲",
    subtitle: "Deep Forest",
    dangerLevel: "???",
    isExplored: false,
    description: "아직 탐험되지 않은 미지의 지역입니다. 토벌대의 발걸음이 닿기 전까지 그 어떤 정보도 밝혀지지 않았습니다.",
    keyLocations: ["???"],
    encounters: ["???"],
    loreNote: "???",
    coordinates: { x: 26, y: 40 }
  },
  {
    id: "ancient_ruins",
    name: "고대 유적",
    subtitle: "Ancient Ruins",
    dangerLevel: "???",
    isExplored: false,
    description: "아직 탐험되지 않은 미지의 지역입니다. 토벌대의 발걸음이 닿기 전까지 그 어떤 정보도 밝혀지지 않았습니다.",
    keyLocations: ["???"],
    encounters: ["???"],
    loreNote: "???",
    coordinates: { x: 36, y: 78 }
  },
  {
    id: "demon_citadel",
    name: "마왕성",
    subtitle: "Demon Citadel",
    dangerLevel: "???",
    isExplored: false,
    description: "아직 탐험되지 않은 미지의 지역입니다. 토벌대의 발걸음이 닿기 전까지 그 어떤 정보도 밝혀지지 않았습니다.",
    keyLocations: ["???"],
    encounters: ["???"],
    loreNote: "???",
    coordinates: { x: 82, y: 72 }
  }
];

export const MAGIC_TIERS: MagicTier[] = [
  {
    name: "초급 (Novice)",
    level: "1단계",
    rarity: "기초 입문",
    description: "작은 불씨, 기초적인 수류 조작, 생활 보조 마법. 마법학교 입학생이나 초보자가 구사합니다.",
    color: "#64748b",
    sigil: "✦",
    examples: "불꽃 피우기, 물방울 모으기, 미풍 소환"
  },
  {
    name: "중급 (Adept)",
    level: "2단계",
    rarity: "일반 마법사",
    description: "기초 전투가 가능한 실전 마법. 일반 용병이나 하위 모험가들이 주로 구사하는 전술 마법입니다.",
    color: "#38bdf8",
    sigil: "◆",
    examples: "파이어볼, 에어 커터, 라이트 쉴드"
  },
  {
    name: "고급 (Expert)",
    level: "3단계",
    rarity: "상위 15% 정예",
    description: "대다수 엘리트 마법사들이 도달하는 실전 최고선. 던전 토벌의 주력 화력입니다.",
    color: "#34d399",
    sigil: "▲",
    examples: "연쇄 번개, 대지 융기, 정화의 기도"
  },
  {
    name: "상급 (Master)",
    level: "4단계",
    rarity: "국가급 전략 인재",
    description: "왕국 전체를 통틀어 수십 명에 불과한 국가급 최고 인재. 세레나 아르벨이 속한 경지입니다.",
    color: "#f59e0b",
    sigil: "★",
    examples: "작열의 뇌화포, 차원 도약 게이트, 다층 성벽 결계"
  },
  {
    name: "대마법 (Archmage)",
    level: "5단계",
    rarity: "대륙 최상위 극소수",
    description: "전황 전체를 뒤바꿀 수 있는 전략 병기급 마법. 복잡한 의식과 대규모 촉매가 필요합니다.",
    color: "#a855f7",
    sigil: "✸",
    examples: "메테오 폴, 절대 영도 결계, 군단 일괄 치유"
  },
  {
    name: "초월 (Transcendent)",
    level: "신화급",
    rarity: "전설의 신화 영역",
    description: "세계의 법칙과 마력의 한계를 아득히 뛰어넘은 절대의 경지. 마왕 아르마와 미지의 각성자가 도달한 영역입니다.",
    color: "#ec4899",
    sigil: "❂",
    examples: "법칙 왜곡, 무한 출력 마력포, 황혼의 영구암흑"
  }
];

export const MONSTERS: Monster[] = [
  {
    id: "goblin",
    name: "고블린 & 홉고블린",
    category: "초반형",
    danger: "★☆☆☆☆ ~ ★★☆☆☆",
    traits: ["집단 기습", "독침/함정", "은신 기동", "후방 교란"],
    tactics: "개체는 약하나 좁은 통로에 함정을 파고 독침을 쏘아댐. 루카스의 정찰이나 가렌의 전방 방벽으로 손쉽게 대처 가능.",
    description: "던전 상층부에 군집하는 비열한 마물들. 초보 모험가들에게는 위협적이나 정예 토벌대 앞에서는 가볍게 정리됩니다."
  },
  {
    id: "shadow_wolf",
    name: "그림자늑대 (Shadow Wolf)",
    category: "초반형",
    danger: "★★☆☆☆",
    traits: ["그림자 잠수", "초고속 돌진", "시야 차단", "목덜미 기습"],
    tactics: "빛이 닿지 않는 어둠 속을 헤엄치듯 이동하여 취약한 후열(치유사/마법사)을 노림.",
    description: "세레나의 번개 마법이나 광역 발광 마력으로 그림자를 밝혀버리면 무력화됩니다."
  },
  {
    id: "orc_ogre",
    name: "오크 전사 & 바위 오우거",
    category: "중반형",
    danger: "★★★☆☆",
    traits: ["거대한 완력", "피부 재생력", "광역 둔기 공격", "마법 취약"],
    tactics: "강철 도끼와 철퇴를 휘두르는 중장갑 마물. 오우거는 부상을 입어도 고속으로 재생하므로 일격 분쇄가 필요함.",
    description: "가렌이 방패로 진격을 저지하고 강력한 마력창으로 관통하여 산산조각 냅니다."
  },
  {
    id: "gargoyle",
    name: "가고일 & 석상 수호병",
    category: "중반형",
    danger: "★★★☆☆",
    traits: ["공중 비행", "물리 저항", "석화 피부", "낙하 충격"],
    tactics: "천장에 잠복해 있다가 급강하하며 파티를 분단시킴. 단단한 석화 피부로 통상 물리 공격을 튕겨냄.",
    description: "고위 화염 폭발이나 게이트 낙하 반사 전술로 격추할 수 있습니다."
  },
  {
    id: "lich",
    name: "고위 사령술사 리치 (Lich)",
    category: "심층형",
    danger: "★★★★☆",
    traits: ["고위 언데드", "죽음의 저주", "마력 흡수", "불사성"],
    tactics: "전사한 모험가들의 영혼을 구속하고 광역 즉사 저주를 난사함. 통상 마법사의 마력을 흡수하여 스스로를 강화함.",
    description: "지하 깊은 곳에서 언데드 군단을 통솔하는 언데드의 지배자."
  },
  {
    id: "mimic",
    name: "고대 보물상자 미믹",
    category: "심층형",
    danger: "★★★☆☆",
    traits: ["완벽한 위장", "끈끈한 혓바닥", "산성 소화액", "깜짝 기습"],
    tactics: "진귀한 마도구 보물상자로 둔갑하여 모험가의 손길을 유인. 루카스가 항상 의심하며 찔러보는 감초 몬스터.",
    description: "긴장된 던전 탐험 속에서 모험가들을 깜짝 놀라게 하는 위험한 위장형 마수."
  },
  {
    id: "black_knight",
    name: "마왕군 정예 흑기사 (Black Knight)",
    category: "정예형",
    danger: "★★★★★",
    traits: ["마도 장갑", "전술적 연계", "고위 검술", "암흑 충격파"],
    tactics: "마왕 아르마의 직속 친위대. 마법을 튕겨내는 마도 갑옷을 입고 일사불란한 포메이션으로 파티를 압박함.",
    description: "국가급 상급 마법사조차 일대일로 상대하기 벅찬 상대로, 토벌대의 긴밀한 연계 플레이가 요구됩니다."
  }
];
