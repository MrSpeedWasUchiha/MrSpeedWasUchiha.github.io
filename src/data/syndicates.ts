// src/data/syndicates.ts

export const SYNDICATE_CONFIG = {
  THUMB: { 
    name: 'The Thumb',
    assocId: '001', 
    spec: 'Strictness / Obedience', 
    members: '???', 
    offices: '???',
    desc: 'The Thumb is a large Syndicate with a unique culture and creed that all members follow fervently. In particular, their members value politeness and respect to ones superiors above all else. The Thumb itself is composed of a number of smaller groups typically referred to as families, or Famiglie. Adding to this, any action that demonstrates a lack of respect for higher authority will be met with immediate punishment. Depending on the mistake, the consequence may extend past the rule breaker, to even their blameless comrades.',
    logo_url: 'https://limbuscompany.wiki.gg/images/The_Thumb_Logo.png?4f32c8',
    status: 'ACTIVE',
    priority: "HIGH"
  },

  INDEX: { 
    name: 'The Index',
    assocId: '002', 
    spec: 'Prescripts / Religious', 
    members: '???', 
    offices: '???',
    desc: 'The Index is a large Syndicate with a unique culture and creed that all members follow fervently. Said culture centers around Prescripts, which are commands that are sent out from an unknown source and delivered through various means, whose contents range from mundane, to utterly cruel and bizarre, to outright impossible or indecipherable. Members of the Index, as well as Backstreets citizens looking for the Index protection, are required to follow the Prescripts they receive. Said Backstreets citizens will lose the Index protection if they do not do as the Prescript instructs.',
    logo_url: 'https://limbuscompany.wiki.gg/images/The_Index_Logo.png?c58679&format=original',
    status: 'ACTIVE',
    priority: "MEDIUM"
  },

  MIDDLE: { 
    name: 'The Middle',
    assocId: '003', 
    spec: 'Family / Vengeance', 
    members: '???', 
    offices: '???',
    desc: 'The Middle is a large Syndicate with a unique culture and creed that all members follow fervently. Members operate on an extremely tight-knit "familial" structure, enjoying close fraternal ties with one another. Any "sin" committed against a member of the Middle, their loved ones, or property is recorded in the "Book of Vengeance" so that the perpetrator might be punished for the deed. The Middle is well-known for never letting go of unfulfilled grudges, and members may spend years chasing down its enemies to enact justice.',
    logo_url: 'https://limbuscompany.wiki.gg/images/The_Middle_Logo.png?414fef&format=original',
    status: 'ACTIVE',
    priority: "HIGH"
  },

  RING: { 
    name: 'The Ring',
    assocId: '004', 
    spec: 'Macabre Art', 
    members: '???', 
    offices: '???',
    desc: 'The Ring is a large Syndicate with a unique culture and creed that all members follow fervently. Their focus is on art. Members of the Ring are eccentric artisans enamored with art reflecting the human condition, which they pursue by causing and exhibiting human suffering. Their artwork takes a wide variety of forms, from sculptures made of corpses to massacres painted out of someones mind. It has been confirmed that this Syndicate manages galleries featuring their works, and will at times auction them off.',
    logo_url: 'https://limbuscompany.wiki.gg/images/The_Ring_Logo.png?a067b3',
    status: 'ACTIVE',
    priority: "HIGH"
  },

  PINKY: { 
    name: 'The Pinky',
    assocId: '005', 
    spec: 'Unknown', 
    members: '???', 
    offices: '???',
    desc: 'We genuinely have no information regarding The Pinky other than their theorized logo, any information regarding The Pinky will be well-rewarded.',
    logo_url: 'https://limbuscompany.wiki.gg/images/The_Pinky_Logo.png?ab1ef8',
    status: 'UNKNOWN',
    priority: "UNKNOWN"
  },

  // Simplemente tengo que agregar lineas aqui para agregar mas
} as const;

export type SyndicateID = keyof typeof SYNDICATE_CONFIG;