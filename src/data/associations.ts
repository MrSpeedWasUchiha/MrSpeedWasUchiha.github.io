// src/data/associations.ts
import agaLogo from '../assets/AGA-LogoV2.png';

export const ASSOCIATION_CONFIG = {
  HANA: { 
    name: 'Hana Association',
    assocId: '001', 
    spec: 'Administration / Fixer Grading', 
    members: '???', 
    offices: '???',
    desc: 'Focuses on management of the other Associations of the City, and in general of everything related to the Fixer system.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Hana_Logo.png?d142ca&format=original',
    status: 'ACTIVE',
    priority: "LOW"
  },

  LIU: { 
    name: 'Liu Association',
    assocId: '002', 
    spec: 'Direct Combat / War', 
    members: '???', 
    offices: '???',
    desc: 'Specialized in frontal combat and waging war.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Liu_Logo.png?2c5f2f&20250614200443',
    status: 'ACTIVE',
    priority: "HIGH"
  },
  ZWEI: { 
    name: 'Zwei Association',
    assocId: '003', 
    spec: 'Protection / Defense', 
    members: '???', 
    offices: '???',
    desc: 'Focuses on public safety and the protection of high-value assets.',
    logo_url: 'https://limbuscompany.wiki.gg/images/thumb/Zwei_Logo.png/1024px-Zwei_Logo.png?d218a7',
    status: 'ACTIVE',
    priority: "LOW"
  },

  OUFI: { 
    name: 'Öufi Association',
    assocId: '004', 
    spec: 'Contracts / Business Deals', 
    members: '???', 
    offices: '???',
    desc: 'They focus in overseeing and mediating contracts, and punishing those who have failed to comply to contract regulations.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Oufi_Logo.webp?c3b753&20251105220641',
    status: 'ACTIVE',
    priority: "LOW"
  },

  SHI: { 
    name: 'Shi Association',
    assocId: '005', 
    spec: 'Stealth / Assassination', 
    members: '???', 
    offices: '???',
    desc: 'Focuses in covert assassination requests. Considering these are quite common in The City, they stand out solely for their ability to complete them silently without leaving any witnesses.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Shi_Logo.png?1679f3&20251009181002',
    status: 'ACTIVE',
    priority: "VERY HIGH"
  },

  CINQ: { 
    name: 'Cinq Association',
    assocId: '006', 
    spec: 'Duels / 1-on-1 Combat', 
    members: '???', 
    offices: '???',
    desc: 'Focuses on 1-on-1 combat and organizing duel requests from the denizens of The City, they also can fight for one of the people in the duel.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Cinq_West_Logo.png?987726&20241229150930',
    status: 'ACTIVE',
    priority: "MEDIUM"
  },

  SEVEN: { 
    name: 'Seven Association',
    assocId: '007', 
    spec: 'Intelligence / Analysis', 
    members: '???', 
    offices: '???',
    desc: 'Focuses in investigation, and can be described most similarly to detectives or private investigators. However, they will also actively solve the problems they are contracted to investigate, such as executing the criminal behind a murder. Their main form of trade is Information.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Seven_Logo.webp?fd1be7&format=original',
    status: 'ACTIVE',
    priority: "LOW"
  },

  DEVYAT: { 
    name: 'Devyat Association',
    assocId: '008', 
    spec: 'Courier / Deliveries', 
    members: '???', 
    offices: '???',
    desc: 'Focuses in the delivery of items. Due to the costs involved however, they are usually tasked with the delivery of high-value objects, or for delivery through rough terrain or climates to any part of The City.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Devyat%27_Logo.png?69447d&format=original',
    status: 'ACTIVE',
    priority: "LOW"
  },

  DIECI: { 
    name: 'Dieci Association',
    assocId: '009', 
    spec: 'Knowledge Collection', 
    members: '???', 
    offices: '???',
    desc: 'Focuses on the collection and research of knowledge. They also run orphanages, taking in children from the streets and raising them into joining their Association, they also own very large libraries for their Fixers to acquire more knowledge.',
    logo_url: 'https://limbuscompany.wiki.gg/images/Dieci_Logo_Small.png?b8ae66&format=original',
    status: 'ACTIVE',
    priority: "LOW"
  },

    AGA: { 
    name: 'Anti-Gank Association',
    assocId: '010', 
    spec: 'War / Protection', 
    members: '123', 
    offices: '1',
    desc: 'Focuses on preventing the art of "Ganking" across The City and waging war on the groups of people who participate in this very act, a relatively new Association formed from a rugged militia by the newly appointed color "The Pink Guardian" that grew because of the intention in the movement.',
    logo_url: agaLogo,
    status: 'ACTIVE',
    priority: "LOW"
  },

  // Simplemente tengo que agregar lineas aqui para agregar mas
} as const;

export type AssocID = keyof typeof ASSOCIATION_CONFIG;