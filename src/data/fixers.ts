//src/data/fixers.ts

export interface LogEntry {
  designation: string; // Ejemplo: "ADDENDUM-2", "LOG_END", "WARNING"
  timestamp: string;   // Ejemplo: "2026.05"
  content: string;     // El texto de la nota
}

export interface Fixer {
  id: string;
  name: string;
  rank: string;
  association: string;
  office?: string;
  status: 'ACTIVE' | 'MIA' | 'RETIRED' | 'DECEASED' | 'UNKNOWN';
  threat_level: string;
  description: string;
  logs: LogEntry[];    
  equipment: string[];
}



export const FIXER_REGISTRY: Fixer[] = [
  { 
    id: 'F-003', 
    name: 'Min Lilowth, The Pink Guardian', 
    rank: 'COLOR GRADE', 
    association: 'Anti-Gank Association',
    office: 'Section 1 Director',
    status: 'ACTIVE', 
    threat_level: 'Grade 2',
    description: "A Fixer who has shown great potential, being the one to create the Anti-Gank Association using a rugged militia as it's base while being a Grade 1.",
    logs: [
        {
        designation: "ADDENDUM-1",
        timestamp: "2025.12",
        content: "Interview successful, contract types defined, and their role and duties are set. For a more detailed interview information, please refer to FILE-COLOR-INTERVIEW-001."
        },
        {
        designation: "ADDENDUM-2",
        timestamp: "2026.05",
        content: "The Fixer has attained Color Grade."
        },
        {
        designation: "LOG_END",
        timestamp: "SYSTEM_FINAL",
        content: "All information has been verified by Hana Administrators."
        }
    ],
    equipment: ["Unknown Weapon", "AGA Section 1 Director Uniform"]
  },
  // Puedo agregar mas Fixers
];
