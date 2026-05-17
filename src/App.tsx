import { useState, useEffect } from 'react';
// Importamos los datos iniciales de tu archivo externo
import { ASSOCIATION_CONFIG, type AssocID } from './data/associations';
import { SYNDICATE_CONFIG, type SyndicateID } from './data/syndicates';
import { FIXER_REGISTRY, type Fixer } from './data/fixers';


// --- COMPONENTE: DETALLE DE ASOCIACIÓN (SÓLO LECTURA) ---
const AssociationDetail = ({ 
  assoc, 
  onClose 
}: { 
  assoc: any, // Cambiado de 'assoc' a 'id' para mayor consistencia
  onClose: () => void
}) => {
  // Extraemos la data directamente de tu configuración global usando el ID

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-black border-2 border-hana-gold w-full max-w-4xl shadow-[0_0_60px_rgba(212,175,55,0.3)] relative overflow-hidden animate-expand">
        
        {/* LÍNEA DE ESCANEO ESTÉTICA */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-hana-gold/15 to-transparent -translate-y-full animate-[scan_2.5s_ease-out_forwards]"></div>
        </div>

        {/* Etiqueta superior */}
        <div className="absolute -top-[1px] left-[-1px] bg-hana-gold text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest border-b border-r border-hana-gold z-30">
          DATA_VIEW_MODE // {assoc.id}
        </div>

        <header className="p-6 pt-12 border-b border-hana-gold/30 flex justify-between items-start bg-hana-gold/5 relative z-10">
          <div className="flex gap-6 items-center">
            <div className="w-20 h-20 border border-hana-gold/40 bg-black flex items-center justify-center relative group animate-in zoom-in duration-700 delay-300">
              <div className="absolute inset-0 bg-hana-gold/5 animate-pulse"></div>
              {/* Usamos un placeholder o logo basado en el ID */}
              <img 
                src={assoc.logo_url} 
                alt="Assoc Logo" 
                className="w-16 h-16 object-contain filter brightness-110 grayscale"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                {assoc.name}
              </h2>
              <p className="text-hana-gold text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Global Operations Network</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-hana-gold hover:text-black hover:bg-hana-gold font-bold px-4 py-1 border border-hana-gold transition-all cursor-pointer text-xs z-30 uppercase"
          >
            [ Close File ]
          </button>
        </header>

        <div className="p-8 grid md:grid-cols-3 gap-8 font-mono relative z-10">
          
          {/* INFO TÉCNICA (Columna izquierda) */}
          <div className="md:col-span-1 space-y-6 border-r border-white/10 pr-6">
            <div className="animate-in fade-in duration-700 delay-500">
              <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Registry ID</p>
              <p className="text-white text-sm font-bold">HANA-DB-SYS-ASSOC-{assoc.assocId}-2026</p>
            </div>

            {/* Fila 1: Status y Priority */}
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-700 delay-700">
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Status</p>
                <p className="text-green-500 text-lg font-black uppercase italic animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
                  {assoc.status}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Danger Level</p>
                <p className="text-white text-lg font-black uppercase italic">{assoc.priority}</p>
              </div>
            </div>

            {/* Fila 2: Members y Offices (Corregido: Ahora está fuera del grid anterior) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 animate-in fade-in duration-700 delay-800">
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Members</p>
                <p className="text-white text-xl font-black tracking-tighter">
                  {assoc.members}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Offices</p>
                <p className="text-white text-xl font-black tracking-tighter">
                  {assoc.offices}
                </p>
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN (SÓLO LECTURA) */}
          <div className="md:col-span-2 space-y-6">
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-800">
              <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-2 tracking-widest">Specialization Profile</p>
              <p className="text-hana-gold font-black text-lg bg-hana-gold/5 p-2 border-l-2 border-hana-gold">
                {assoc.spec}
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-700 delay-1000">
              <p className="text-[10px] text-white/40 uppercase font-bold mb-2 tracking-widest">Database Record</p>
              <div className="bg-white/5 border border-white/10 text-gray-300 text-sm leading-relaxed italic p-4 min-h-[100px]">
                {assoc.desc}
              </div>
            </div>
          </div>
        </div>

        <footer className="p-4 bg-hana-gold/5 border-t border-hana-gold/20 text-center relative z-10">
          <p className="text-[9px] text-hana-gold/40 font-bold uppercase tracking-[0.5em]">
            HANA ASSOCIATION INTERNAL DATABASE - READ ONLY ACCESS
          </p>
        </footer>
      </div>
    </div>
  );
};

const SyndicateDetail = ({ 
  syndicate, 
  onClose 
}: { 
  syndicate: any, // Cambiado de 'assoc' a 'id' para mayor consistencia
  onClose: () => void
}) => {
  // Extraemos la data directamente de tu configuración global usando el ID

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-black border-2 border-hana-gold w-full max-w-4xl shadow-[0_0_60px_rgba(212,175,55,0.3)] relative overflow-hidden animate-expand">
        
        {/* LÍNEA DE ESCANEO ESTÉTICA */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-hana-gold/15 to-transparent -translate-y-full animate-[scan_2.5s_ease-out_forwards]"></div>
        </div>

        {/* Etiqueta superior */}
        <div className="absolute -top-[1px] left-[-1px] bg-hana-gold text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest border-b border-r border-hana-gold z-30">
          DATA_VIEW_MODE // {syndicate.id}
        </div>

        <header className="p-6 pt-12 border-b border-hana-gold/30 flex justify-between items-start bg-hana-gold/5 relative z-10">
          <div className="flex gap-6 items-center">
            <div className="w-20 h-20 border border-hana-gold/40 bg-black flex items-center justify-center relative group animate-in zoom-in duration-700 delay-300">
              <div className="absolute inset-0 bg-hana-gold/5 animate-pulse"></div>
              {/* Usamos un placeholder o logo basado en el ID */}
              <img 
                src={syndicate.logo_url} 
                alt="Assoc Logo" 
                className="w-16 h-16 object-contain filter brightness-110 grayscale"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                {syndicate.name}
              </h2>
              <p className="text-hana-gold text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Global Operations Network</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-hana-gold hover:text-black hover:bg-hana-gold font-bold px-4 py-1 border border-hana-gold transition-all cursor-pointer text-xs z-30 uppercase"
          >
            [ Close File ]
          </button>
        </header>

        <div className="p-8 grid md:grid-cols-3 gap-8 font-mono relative z-10">
          
          {/* INFO TÉCNICA (Columna izquierda) */}
          <div className="md:col-span-1 space-y-6 border-r border-white/10 pr-6">
            <div className="animate-in fade-in duration-700 delay-500">
              <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Registry ID</p>
              <p className="text-white text-sm font-bold">HANA-DB-SYS-FINGER-{syndicate.assocId}-2026</p>
            </div>

            {/* Fila 1: Status y Priority */}
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-700 delay-700">
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Status</p>
                <p className={`text-xl font-black uppercase italic ${
                  syndicate.status === 'ACTIVE' ? 'text-green-500 animate-pulse' : 'text-red-500 animate-pulse'
                }`}>
                  {syndicate.status}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Danger Level</p>
                <p className="text-white text-lg font-black uppercase italic">{syndicate.priority}</p>
              </div>
            </div>

            {/* Fila 2: Members y Offices (Corregido: Ahora está fuera del grid anterior) */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 animate-in fade-in duration-700 delay-800">
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Members</p>
                <p className="text-white text-xl font-black tracking-tighter">
                  {syndicate.members}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-1">Groups</p>
                <p className="text-white text-xl font-black tracking-tighter">
                  {syndicate.offices}
                </p>
              </div>
            </div>
          </div>

          {/* DESCRIPCIÓN (SÓLO LECTURA) */}
          <div className="md:col-span-2 space-y-6">
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-800">
              <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-2 tracking-widest">Specialization Profile</p>
              <p className="text-hana-gold font-black text-lg bg-hana-gold/5 p-2 border-l-2 border-hana-gold">
                {syndicate.spec}
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-700 delay-1000">
              <p className="text-[10px] text-white/40 uppercase font-bold mb-2 tracking-widest">Database Record</p>
              <div className="bg-white/5 border border-white/10 text-gray-300 text-sm leading-relaxed italic p-4 min-h-[100px]">
                {syndicate.desc}
              </div>
            </div>
          </div>
        </div>

        <footer className="p-4 bg-hana-gold/5 border-t border-hana-gold/20 text-center relative z-10">
          <p className="text-[9px] text-hana-gold/40 font-bold uppercase tracking-[0.5em]">
            HANA ASSOCIATION INTERNAL DATABASE - READ ONLY ACCESS
          </p>
        </footer>
      </div>
    </div>
  );
};

const FixerDetail = ({ 
  fixer, 
  onClose 
}: { 
  fixer: Fixer, // Asegúrate de que tu interfaz Fixer incluya 'logs' y 'equipment'
  onClose: () => void 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-500 font-mono">
      <div className="bg-black border-2 border-hana-gold w-full max-w-4xl h-[600px] shadow-[0_0_60px_rgba(212,175,55,0.2)] relative overflow-hidden flex flex-col animate-expand">
        
        {/* LÍNEA DE ESCANEO */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-hana-gold/10 to-transparent -translate-y-full animate-[scan_3s_linear_infinite]"></div>
        </div>

        {/* ETIQUETA SUPERIOR */}
        <div className="absolute top-0 left-0 bg-hana-gold text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest z-30">
          PERSONNEL_FILE // {fixer.id}
        </div>

        {/* HEADER */}
        <header className="p-6 pt-10 border-b border-hana-gold/30 bg-hana-gold/5 flex justify-between items-center relative z-10">
          <div className="flex gap-6 items-center">
            <div className="w-16 h-16 border border-hana-gold/40 bg-black flex items-center justify-center relative shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <span className="text-hana-gold font-black text-3xl opacity-60 italic">{fixer.name.charAt(0)}</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-hana-gold"></div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                {fixer.name}
              </h2>
              <p className="text-hana-gold text-[10px] font-bold tracking-[0.3em] uppercase mt-1 opacity-70">
                CURRENT_EMPLOYER // {fixer.association}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="group relative px-6 py-2 border border-hana-gold text-hana-gold text-xs font-bold uppercase transition-all hover:bg-hana-gold hover:text-black active:scale-95"
          >
            [ Close File ]
          </button>
        </header>

        <div className="flex-grow flex overflow-hidden relative z-10">
          
          {/* COLUMNA IZQUIERDA: Info Estática */}
          <div className="w-1/3 p-8 border-r border-white/10 space-y-8 bg-black">
            <section className="animate-in fade-in slide-in-from-left duration-700 delay-200">
              <p className="text-[10px] text-hana-gold uppercase font-bold opacity-40 mb-1 tracking-widest">Registry ID</p>
              <p className="text-white text-xs font-bold font-mono">HANA-DB-FIXER-{fixer.id}-2026</p>
            </section>

            <section className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-40 mb-1 tracking-widest">Status</p>
                <p className={`text-xl font-black uppercase italic ${
                  fixer.status === 'ACTIVE' ? 'text-green-500 animate-pulse' : 'text-red-500'
                }`}>
                  {fixer.status}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-40 mb-1 tracking-widest">File Clearance</p>
                <p className="text-white text-lg font-black uppercase tracking-tight">{fixer.threat_level}</p>
              </div>
              <div>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-40 mb-1 tracking-widest">Current Grade</p>
                <p className="text-hana-gold text-3xl font-black italic tracking-tighter">
                  {fixer.rank}
                </p>
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA: Scrolleable (Aquí ocurre la magia) */}
          <div className="w-2/3 overflow-y-auto custom-scrollbar p-8 bg-white/[0.02]">
            <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
              
              {/* Afiliación */}
              <section>
                <p className="text-[10px] text-hana-gold uppercase font-bold opacity-50 mb-3 tracking-widest">Primary Affiliation</p>
                <div className="bg-hana-gold/10 border-l-4 border-hana-gold p-4">
                   <p className="text-hana-gold font-black text-xl uppercase tracking-widest">
                    {fixer.office || "Independent / Unaffiliated"}
                  </p>
                </div>
              </section>

              {/* MÚLTIPLES ADDENDUMS Y LOGS */}
              <section>
                <p className="text-[10px] text-white/40 uppercase font-bold mb-3 tracking-widest">Intelligence Remarks</p>
                <div className="bg-white/5 border border-white/10 p-5 text-gray-300 text-sm leading-relaxed italic space-y-6">
                  {/* Párrafo de descripción principal */}
                  <p className="text-white">"{fixer.description}"</p>

                  {/* Mapeo dinámico de Logs y Addendums */}
                  {fixer.logs && fixer.logs.map((log, index) => (
                    <div key={index} className="pt-4 border-t border-white/5 space-y-2 group">
                      <p className="text-[11px] text-hana-gold/50 font-bold tracking-tighter transition-colors group-hover:text-hana-gold">
                        [ {log.designation} {log.timestamp} ]:
                      </p>
                      <p className="text-[12px] text-gray-400 pl-3 border-l border-white/10 group-hover:border-hana-gold/30 transition-colors">
                        {log.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* EQUIPAMIENTO DINÁMICO */}
              <section className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-white/40 uppercase font-bold mb-3 tracking-widest">Equipped Gear // Tech-Level</p>
                <div className="grid grid-cols-2 gap-2">
                  {fixer.equipment && fixer.equipment.map((item, index) => (
                    <div key={index} className="p-2 border border-white/5 bg-white/5 text-[10px] text-hana-gold/60 font-mono hover:bg-hana-gold/5 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="p-4 bg-hana-gold/10 border-t border-hana-gold/20 text-center relative z-10">
          <p className="text-[9px] text-hana-gold/40 font-black uppercase tracking-[0.6em]">
            HANA ASSOCIATION PERSONNEL DATABASE - SECURE ACCESS ONLY
          </p>
        </footer>
      </div>
    </div>
  );
};

// --- LOGIN AUTOMÁTICO RECONSTRUIDO ---
const LoginBox = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [status, setStatus] = useState("AWAITING CREDENTIALS...");

  const targetUser = "HANA_ADMINISTRATOR_01";
  const targetPass = "******************";

  useEffect(() => {
    const typeSequence = async () => {
      await new Promise(r => setTimeout(r, 500));
      for (let i = 0; i <= targetUser.length; i++) {
        setUser(targetUser.slice(0, i));
        await new Promise(r => setTimeout(r, 70));
      }
      await new Promise(r => setTimeout(r, 400));
      for (let i = 0; i <= targetPass.length; i++) {
        setPass(targetPass.slice(0, i));
        await new Promise(r => setTimeout(r, 50));
      }
      await new Promise(r => setTimeout(r, 500));
      setStatus("VERIFYING LINK WITH DATABASE...");
      await new Promise(r => setTimeout(r, 1000));
      setStatus("ACCESS GRANTED");
      await new Promise(r => setTimeout(r, 1300));
      setStatus("WELCOME TO THE HANA ASSOCIATION'S TERMINAL");
      await new Promise(r => setTimeout(r, 1200));
      onLoginSuccess();
    };
    typeSequence();
  }, [onLoginSuccess]);

  return (
    <div className="border-2 border-hana-gold p-8 bg-black w-85 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in duration-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-10 text-[40px] font-black italic select-none">HANA</div>
      <h2 className="text-hana-gold text-center font-black mb-8 tracking-[0.2em] uppercase italic border-b border-hana-gold/30 pb-2">Terminal Authentication</h2>
      <div className="space-y-5">
        <div>
          <label className="text-[10px] text-hana-gold block mb-1 uppercase font-bold tracking-widest opacity-70">User</label>
          <div className="bg-white/5 border border-hana-gold/30 p-2.5 text-white font-mono text-sm h-10 flex items-center">
            {user}<span className="w-1.5 h-4 bg-hana-gold animate-pulse ml-1"></span>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-hana-gold block mb-1 uppercase font-bold tracking-widest opacity-70">Password</label>
          <div className="bg-white/5 border border-hana-gold/30 p-2.5 text-white font-mono text-sm h-10 flex items-center">{pass}</div>
        </div>
        <div className="pt-4 text-center">
          <p className={`text-[10px] font-black tracking-[0.2em] transition-colors duration-300 ${status === "WELCOME TO THE HANA ASSOCIATION'S TERMINAL" ? "text-green-500" : "text-hana-gold"}`}>{status}</p>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const App = () => {
  const [logoUrl, setLogoUrl] = useState("https://libraryofruina.wiki.gg/images/HanaAssociationIcon.png?960033");
  const [step, setStep] = useState<'booting' | 'login' | 'terminal'>('booting');
  const [activeTab, setActiveTab] = useState('CONSOLE');
  const [selectedAssocId, setSelectedAssocId] = useState<string | null>(null);
  const [selectedSyndicateId, setSelectedSyndicateId] = useState<string | null>(null);

  const tabs = [
    { id: 'CONSOLE', label: 'System Console' },
    { id: 'CONTRACTS', label: 'Contract History' },
    { id: 'LOGS', label: 'Incident Logs' },
    { id: 'ASSOCIATIONS', label: 'Associations' },
    { id: 'FIXERS', label: 'Fixer Registry' },
    { id: 'FINGERS', label: 'The Five Fingers' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setStep('login'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const selectedAssoc = selectedAssocId ? ASSOCIATION_CONFIG[selectedAssocId as AssocID] : null;
  const selectedSyndicate = selectedSyndicateId ? SYNDICATE_CONFIG[selectedSyndicateId as SyndicateID] : null;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFixer, setSelectedFixer] = useState<Fixer | null>(null);

  return (
    <>
      <div className="crt-overlay" />
      <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-12 font-mono selection:bg-hana-gold selection:text-black">
        
        {step === 'booting' && (
          <div className="text-center animate-pulse">
            <p className="text-hana-gold tracking-[0.4em] uppercase text-sm">Establishing secure link...</p>
            <div className="mt-6 h-[2px] w-48 bg-gray-900 mx-auto overflow-hidden">
               <div className="h-full bg-hana-gold animate-[progress_2s_infinite]"></div>
            </div>
          </div>
        )}

        {step === 'login' && <LoginBox onLoginSuccess={() => setStep('terminal')} />}

        {step === 'terminal' && (
          <div className="w-full max-w-6xl bg-black border-2 border-hana-gold shadow-[0_0_40px_rgba(212,175,55,0.2)] relative animate-expand">
            
            <div className="absolute -top-[34px] left-[-2px] bg-hana-gold text-black px-6 py-1.5 text-xs font-bold uppercase tracking-widest border-t-2 border-l-2 border-r-2 border-hana-gold">
              Hana-Terminal: #772-B
            </div>

            <div className="animate-in fade-in duration-500 delay-500 flex flex-col h-full">
              <header className="p-6 border-b-2 border-hana-gold flex flex-col md:flex-row justify-between items-center gap-6 bg-black">
                <div className="flex items-center gap-6">
                  <img src={logoUrl} alt="Hana Logo" className="w-20 h-20 object-contain filter brightness-110" onError={() => setLogoUrl('https://via.placeholder.com/150?text=HANA')} />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic text-white">Hana <span className="text-hana-gold">Association</span></h1>
                    <div className="flex gap-4 mt-1">
                      <span className="text-[9px] bg-hana-gold text-black px-2 py-0.5 font-bold">SECTION 1</span>
                      <span className="text-[9px] border border-hana-gold text-hana-gold px-2 py-0.5 font-bold uppercase">GRADE 1</span>
                    </div>
                  </div>
                </div>
                <div className="text-right border-l-2 border-hana-gold pl-6 hidden md:block">
                  <p className="text-[10px] font-bold text-hana-gold uppercase italic tracking-widest">City's State</p>
                  <p className="text-xl font-black text-white leading-tight uppercase tracking-tighter">Urban Myth</p>
                </div>
              </header>

              <main className="p-6 grid md:grid-cols-4 gap-6 bg-black flex-grow">
                <section className="md:col-span-1 space-y-4">
                  <div className="border border-hana-gold/30 bg-white/5 p-2">
                    <p className="text-[10px] text-hana-gold font-black mb-3 uppercase px-2 tracking-widest border-b border-hana-gold/20 pb-1">Database</p>
                    <nav className="flex flex-col gap-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`text-left px-3 py-2 text-[10px] font-bold transition-all duration-200 uppercase tracking-tighter border-l-2 cursor-pointer ${
                            activeTab === tab.id
                              ? "bg-hana-gold text-black border-white translate-x-1"
                              : "text-gray-500 border-transparent hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </section>

                <section className="md:col-span-3">
                  <div className="bg-[#050505] border border-hana-gold/20 p-6 relative overflow-hidden h-full min-h-[400px]">
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]"></div>
                    
                    <div className="relative z-10 font-mono animate-in fade-in slide-in-from-right-4 duration-300" key={activeTab}>
                      <h2 className="text-lg font-black text-white italic uppercase border-b border-hana-gold/30 mb-4 pb-1">
                        {activeTab.replace('_', ' ')}
                      </h2>

                      {activeTab === 'CONSOLE' && (
                        <div className="text-sm space-y-2 text-gray-300">
                          <p className="text-hana-gold opacity-50 text-[10px] mb-4 tracking-[0.3em]">HANA_OS v4.0.1_STABLE</p>
                          <p className="flex gap-2"><span className="text-hana-gold font-bold">$</span><span className="text-white">system.identity_check()</span></p>
                          <p className="text-green-500 font-bold ml-4">{" >> "} IDENTITY CONFIRMED: HANA_ADMINISTRATOR_01</p>
                          <p className="text-blue-400 ml-4">{" >> "} ASSOCIATION: HANA (BRANCH-01)</p>
                          <div className="flex items-center gap-2 mt-4">
                            <span className="text-hana-gold font-bold">$</span>
                            <span className="inline-block w-2.5 h-5 bg-hana-gold animate-pulse"></span>
                          </div>
                        </div>
                      )}

                      {activeTab === 'ASSOCIATIONS' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(ASSOCIATION_CONFIG).map(([id, assoc]) => (
                            <button
                              key={id}
                              onClick={() => setSelectedAssocId(id as AssocID)}
                              className="group relative border border-hana-gold/20 bg-white/5 p-4 text-left hover:bg-hana-gold/10 transition-all cursor-pointer"
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-hana-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-white font-black italic uppercase tracking-tighter text-sm">
                                    {assoc.name}
                                  </h3>
                                  <p className="text-[9px] text-gray-500 uppercase mt-1">
                                    Speciality: <span className="text-hana-gold/80">{assoc.spec}</span>
                                  </p>
                                </div>
                                <span className="text-[8px] text-hana-gold/30 font-mono">
                                  [ REF-{id}-001 ]
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {activeTab === 'FINGERS' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Object.entries(SYNDICATE_CONFIG).map(([id, assoc]) => (
                            <button
                              key={id}
                              onClick={() => setSelectedSyndicateId(id as SyndicateID)}
                              className="group relative border border-hana-gold/20 bg-white/5 p-4 text-left hover:bg-hana-gold/10 transition-all cursor-pointer"
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-hana-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-white font-black italic uppercase tracking-tighter text-sm">
                                    {assoc.name}
                                  </h3>
                                  <p className="text-[9px] text-gray-500 uppercase mt-1">
                                    Speciality: <span className="text-hana-gold/80">{assoc.spec}</span>
                                  </p>
                                </div>
                                <span className="text-[8px] text-hana-gold/30 font-mono">
                                  [ REF-{id}-001 ]
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* CONTRACTS Y LOGS RESTAURADOS */}
                      {activeTab === 'CONTRACTS' && (
                        <div className="space-y-3">
                          {[
                            { id: '882', task: 'TETH Distortion Suppression', status: 'COMPLETED', color: 'text-green-500' },
                            { id: '885', task: 'Vacate Rats from a Premise', status: 'IN PROCESS', color: 'text-hana-gold' },
                            { id: '871', task: 'Distortion Investigation', status: 'FAILED', color: 'text-red-500' }
                          ].map(c => (
                            <div key={c.id} className="p-3 border border-white/10 bg-white/5 flex justify-between items-center text-[11px]">
                              <span><span className="text-hana-gold">#CNTR-{c.id}</span> | <span className="text-white">{c.task}</span></span>
                              <span className={`font-black ${c.color}`}>{c.status}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === 'LOGS' && (
                        <div className="text-[11px] space-y-1 text-blue-300/80">
                          <p>[04:12:01] Accesing Archives of District 12...</p>
                          <p>[04:12:05] <span className="text-red-500">WARNING:</span> Distortion Phenomena Detected in the Area.</p>
                          <p>[04:12:10] Distortion Category: <span className="text-red-500">WAW</span>.</p>
                          <p>[04:12:25] Sending Grade 1 Fixers to engage.</p>
                          <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse mt-2"></span>
                        </div>
                      )}

                      {activeTab === 'FIXERS' && (
                        <div className="flex flex-col h-[500px] space-y-4 animate-in fade-in duration-500">
                          
                          {/* HEADER DE LA DB */}
                          <div className="flex justify-between items-center border-b border-hana-gold/20 pb-2">
                            <span className="text-[10px] text-hana-gold/50 tracking-widest font-mono uppercase">
                              Querying: HANA_DB_FIXER_NET
                            </span>
                            <span className="text-[10px] text-white/30 font-mono">
                              RESULTS: {FIXER_REGISTRY.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).length}
                            </span>
                          </div>

                          {/* INPUT DE BÚSQUEDA */}
                          <div className="relative group">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-hana-gold font-bold text-xs">$</div>
                            <input 
                              type="text"
                              placeholder="ENTER_FIXER_NAME_TO_LOCATE..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full bg-hana-gold/5 border border-hana-gold/30 py-2.5 pl-8 pr-4 text-xs text-white focus:border-hana-gold/60 focus:bg-hana-gold/10 focus:outline-none transition-all font-mono italic"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-hana-gold/20 animate-pulse"></div>
                          </div>

                          {/* LISTA SCROLLEABLE (Referencia: image_57ca17.png) */}
                          <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-2">
                            {FIXER_REGISTRY
                              .filter(fixer => fixer.name.toLowerCase().includes(searchTerm.toLowerCase()))
                              .map((fixer) => (
                                <div 
                                  key={fixer.id}
                                  
                                  onClick={() => setSelectedFixer(fixer)} 
                                  className="group flex items-center justify-between p-3 border border-white/5 bg-white/2 hover:bg-hana-gold/10 hover:border-hana-gold/30 transition-all cursor-pointer relative overflow-hidden"
                                >
                                  {/* Efecto visual de selección (barra lateral) */}
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-hana-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                                  <div className="flex flex-col">
                                    <span className="text-[9px] text-hana-gold/40 font-bold font-mono">{fixer.id}</span>
                                    <p className="text-white font-bold text-sm tracking-tighter uppercase group-hover:text-hana-gold transition-colors">
                                      {fixer.name}
                                    </p>
                                    <p className="text-[9px] text-white/40 uppercase">
                                      {fixer.association} {fixer.office ? `// ${fixer.office}` : ''}
                                    </p>
                                  </div>
                                  
                                  <div className="text-right">
                                    <p className="text-hana-gold font-black italic text-sm">{fixer.rank}</p>
                                    <div className="flex items-center justify-end gap-2 mt-1">
                                      <span className={`text-[8px] font-bold px-1 border ${
                                        fixer.status === 'ACTIVE' ? 'border-green-500/50 text-green-500' : 'border-red-500/50 text-red-500'
                                      } opacity-70`}>
                                        {fixer.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}

                            {/* FALLBACK SI NO HAY RESULTADOS */}
                            {FIXER_REGISTRY.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                              <div className="text-center py-12 border border-dashed border-white/10 opacity-30">
                                <p className="text-xs font-mono uppercase">[ Error: Identity not found in Registry ]</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </main>

              <footer className="p-4 bg-black border-t border-hana-gold/20 flex justify-between items-center">
                 <p className="text-[9px] text-gray-600 uppercase tracking-widest">© 2026 Hana Association / Central Office</p>
                 <span className="text-[9px] text-hana-gold/50 font-bold tracking-tighter uppercase">Keter-Class Protocol Active</span>
              </footer>
            </div>
          </div>
        )}
      </div>

      {/* MODAL DETALLE (SÓLO LECTURA) */}
      {selectedAssocId && selectedAssoc && (
        <AssociationDetail 
          assoc={selectedAssoc} 
          onClose={() => setSelectedAssocId(null)} 
        />
      )}

      {selectedSyndicateId && selectedSyndicate && (
        <SyndicateDetail 
          syndicate={selectedSyndicate} 
          onClose={() => setSelectedSyndicateId(null)} 
        />
      )}

      {selectedFixer && (
        <FixerDetail 
          fixer={selectedFixer} 
          onClose={() => setSelectedFixer(null)} 
        />
      )}
    </>
  );
};

export default App;