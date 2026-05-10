import React, { useState, useEffect } from "react";
import { 
  Shield, 
  ArrowRight, 
  Lock, 
  Phone, 
  Search, 
  Eye, 
  Zap, 
  Award, 
  Info,
  CheckCircle2,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Briefcase,
  Users,
  Target,
  FileText,
  ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const base = import.meta.env.BASE_URL;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm h-20" : "bg-transparent h-24"}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-wsp-navy flex items-center justify-center">
            <Shield size={20} className="text-wsp-signal" />
          </div>
          <span className={`font-black text-2xl uppercase tracking-tighter italic ${scrolled ? "text-wsp-navy" : "text-white"}`}>WSP</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {["Leistungen", "Über Uns", "Partner", "Jobs", "Kontakt"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${scrolled ? "text-slate-400 hover:text-wsp-navy" : "text-white/60 hover:text-white"}`}>
              {item}
            </a>
          ))}
          <button className="btn-emergency px-8 h-12 shadow-lg shadow-wsp-signal/20">
            NOTRUF 24/7
          </button>
        </div>
        
        <button className={`md:hidden ${scrolled ? "text-wsp-navy" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {["Leistungen", "Über Uns", "Partner", "Jobs", "Kontakt"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-wsp-navy"
                >
                  {item}
                </a>
              ))}
              <button className="btn-emergency w-full h-14">
                NOTRUF 24/7
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={`${base}hero.png`} 
        alt="WSP Team" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-wsp-obsidian/85 md:bg-wsp-obsidian/75"></div>
    </div>

    <div className="section-container relative z-10 pt-24 text-white">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-wsp-signal inline-block px-4 py-1 mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-wsp-obsidian">
            EST. 2018 | Westfalen
          </span>
        </div>
        <h1 className="text-[clamp(2.5rem,10vw,9rem)] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic break-words max-w-[90vw]">
          Sicherheit <br /> <span className="text-wsp-signal">durch</span> <br /> Struktur.
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-16">
          Präzision in der Bewachung. Kompromisslose Funktionalität. 
          Wir definieren Sicherheit neu durch <span className="text-white font-bold underline decoration-wsp-signal decoration-4 underline-offset-8">klinische Exzellenz</span> und operative Stärke.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
          <button className="btn-primary min-w-[280px] md:min-w-[320px] group border-wsp-signal">
            Leistung Anfordern <ArrowRight size={24} />
          </button>
          <a href="#leistungen" className="h-20 px-12 border-2 border-white/20 font-black uppercase tracking-widest text-xs hover:border-wsp-signal transition-colors text-white flex items-center justify-center">
            Unsere Spezifikationen
          </a>
        </div>
      </motion.div>
    </div>
  </header>
);

const ServiceDetail = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
        <button 
          onClick={onClose}
          className="mb-16 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-wsp-navy transition-colors"
        >
          <ArrowLeft size={16} /> Zurück zur Übersicht
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-wsp-signal mb-12"></div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-12">{service.title}</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium mb-16 whitespace-pre-line">
              {service.fullDescription}
            </p>

            <div className="bg-slate-50 p-12 border border-slate-100">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-wsp-navy mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-wsp-signal"></span> Unsere Leistungen umfassen
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600 uppercase italic">
                    <CheckCircle2 size={18} className="text-wsp-signal flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="btn-primary w-full mt-12 border-wsp-signal">
              Diese Leistung Anfragen <ArrowRight size={24} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden border border-slate-100 shadow-2xl">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-wsp-signal/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay, onOpen }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="clinical-card group flex flex-col h-full cursor-pointer"
    onClick={onOpen}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-1 bg-wsp-signal transition-all duration-500 group-hover:w-24"></div>
      <div className="p-2 bg-slate-50 border border-slate-100 group-hover:bg-wsp-navy group-hover:text-wsp-signal transition-all duration-500 flex-shrink-0">
        <Icon size={20} />
      </div>
    </div>
    <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight leading-tight mb-6">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
      {description}
    </p>
    <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-wsp-navy group-hover:text-wsp-alert transition-colors">
      Spezifikation Einsehen <ChevronRight size={14} />
    </div>
  </motion.div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      id: "objekt",
      icon: Shield, 
      title: "Objektschutz", 
      img: `${base}s_objekt.png`,
      description: "Klinische Überwachung industrieller Komplexe. Reduzierung auf das Wesentliche: Sicherheit.", 
      fullDescription: "Durch unsere Bewachung gewährleisten wir die Sicherheit von Kunden und Objekten rund um die Uhr. Es geht um den Schutz und die Bewachung von Unternehmen oder Privateigentum!\n\nWir bieten Ihnen gerne unsere Sicherheitsdienste an. Zu unseren Tätigkeiten gehören die Kontrolle der Zutritts- und Zufahrtslegitimation, die Kontrolle von Geländen und der Schutz vor Spionage, Vandalismus und Diebstahl. Dabei spielt die Ausbildung, die Erfahrung und die Kompetenz unserer Mitarbeiter eine große Rolle.",
      points: ["Bewachung von Gebäuden/Firmen", "Öffnungs- und Schließdienste", "Verschlusskontrollen", "Wachpersonal für Einkaufscenter", "Doormen / Doorman", "Schlüsselüberwachung", "Zugangskontrollen", "Kaufhausdetektion"],
      delay: 0.1 
    },
    { 
      id: "event",
      icon: Zap, 
      title: "Veranstaltungen", 
      img: `${base}s_event.png`,
      description: "Strukturiertes Sicherheitsmanagement für Großevents. Präzision in jeder Situation.", 
      fullDescription: "Jede Veranstaltung ist potentiellen Risiken ausgesetzt. Schäden, sowohl Verstöße gegen die Rechtsordnung, wirtschaftliche Schäden, Reputationsschäden, sowie Gefahren für Rechtsgüter wie Leib, Leben oder Gesundheit sind bei Veranstaltungen wichtige Aspekte.\n\nDabei ist es egal, ob es sich um eine kleine Party oder eine Großveranstaltung handelt. Jede Veranstaltung ist auf die richtige Sicherheit angewiesen. Daher erstellen wir passend zu jeder Veranstaltung eine entsprechende Risikoanalyse und ein dazugehöriges Sicherheitskonzept.",
      points: ["Einlass-, Zugangs- und Zufahrtskontrollen", "Sicherung Backstage, Bühnen, Hallen", "Garderobendienst / Kassendienst", "Bewachung und Absicherung", "Präventionsmaßnahmen / Deeskalation", "Bühnenabsicherung", "Parkplatzordnung", "Ordnerdienst"],
      delay: 0.2 
    },
    { 
      id: "fire",
      icon: Lock, 
      title: "Brandschutz", 
      img: `${base}s_fire.png`,
      description: "Vermeidung von Gefahren für Leben und Eigentum. Vorbeugende Konzepte mit VdS-Standard.", 
      fullDescription: "Wesentliche Schutzziele des Brandschutzes sind es Leben, Gesundheit, Eigentum, Besitz und Umwelt zu schützen. Im bauordnungsrechtlichen Sinne dient der Brandschutz dem Schutz von Leib und Leben, der Umwelt und der öffentlichen Sicherheit.\n\nHierfür gibt es spezielle Brandmeldesysteme, um den Brand schnellstmöglich zu melden. Wir gewährleisten, dass im Falle eines Brandes mit technischem Defekt der Brandmeldesysteme eine Brandmeldung durch einen dafür ausgebildeten Mitarbeiter durchgeführt werden kann.",
      points: ["Allgemeine Ordnung", "Meldung des Brandes im Brandfall", "Sicherung des Rauchverbots", "Freihalten der Fluchtwege", "Flucht- und Rettungswegbeleuchtung"],
      delay: 0.3 
    },
    { 
      id: "build",
      icon: Search, 
      title: "Baustellen", 
      img: `${base}s_build.png`,
      description: "Schutz vor Vandalismus und Diebstahl. Lückenlose Kontrolle Ihrer Ressourcen.", 
      fullDescription: "Jede Baustelle verlangt ein gewisses Maß an Sicherheit und Schutz vor kriminellem Missbrauch. Baustellen sind bevorzugte Angriffsziele für Kriminelle jeglicher Art. Besonders im Bereich des Vandalismus sind Baustellen oft beteiligte Schauplätze.\n\nWir bieten Schutz für Baustellen aller Art, wie Neubau, Altbausanierung, Umbau oder Erweiterungen an. Für einen reibungslosen Ablauf sorgt unser geschultes Personal, besonders im Bereich Präventiv- und Interventionsmaßnahmen.",
      points: ["Schutz vor kriminellem Missbrauch", "Vandalismus-Prävention", "Diebstahlschutz", "Areal-Sicherung", "Materialkontrolle", "Eingangsüberwachung"],
      delay: 0.4 
    },
    { 
      id: "patrol",
      icon: Clock, 
      title: "Revierdienst", 
      img: `${base}s_patrol.png`,
      description: "Mobile Kontrolle und Verschlussdienste. Präsenz zeigen, wenn es darauf ankommt.", 
      fullDescription: "Im Gegensatz zu stationärem Objektschutz, umfasst die Tätigkeit eines Revierfahrers die Bewachung von mehreren Objekten, Gebäuden oder Außenanlagen. Diese erfolgt laut einem festgelegten Revierplan.\n\nUnser Revierfahrer fährt jedes Objektziel an und führt eine umfassende Kontrolle and Besichtigung durch. Je nach Wunsch kann auch das Verschließen und das Öffnen Ihrer Firma oder Ihrer Gebäude zu unseren Aufgaben zählen. Auch die Überwachung von hochwertigen Maschinen gehört dazu.",
      points: ["Kontrollgänge und Bestreifung", "Schließ- und Öffnungsdienst", "Verschlusskontrollen von Toren", "Alarmierung bei Beschädigung", "Freihaltung von Fluchtwegen", "Kontrolle unbefugter Personen", "Überfallkontrolle"],
      delay: 0.5 
    },
    { 
      id: "personal",
      icon: Award, 
      title: "Personenschutz", 
      img: `${base}hero.png`,
      description: "Diskretion und operative Überlegenheit für Ihren persönlichen Freiraum.", 
      fullDescription: "Operativer Schutz für exponierte Persönlichkeiten. Wir gewährleisten Ihre physische Integrität durch lückenlose Planung und diskrete Präsenz. Unsere Experten analysieren Gefahrenlagen in Echtzeit und agieren proaktiv.\n\nSicherheit ist kein Zufall, sondern das Ergebnis klinischer Präzision.",
      points: ["Gefährdungsanalyse", "Personenschutz im In- und Ausland", "Begleitschutz bei Veranstaltungen", "Diskrete operative Begleitung", "Transport-Sicherung"],
      delay: 0.6 
    },
  ];

  return (
    <section id="leistungen" className="bg-white">
      <div className="section-container">
        <div className="flex items-baseline gap-6 mb-24 border-b border-wsp-obsidian pb-8">
          <span className="text-4xl font-black opacity-10 tracking-tighter">01</span>
          <h2 className="text-4xl font-black uppercase tracking-tight">Leistungsspektrum</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} onOpen={() => setSelectedService(s)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="über-uns" className="bg-wsp-navy text-white py-40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-wsp-signal/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex items-baseline gap-6 mb-24 border-b border-white/20 pb-8">
          <span className="text-4xl font-black opacity-10 tracking-tighter">02</span>
          <h2 className="text-4xl font-black uppercase tracking-tight">Über Uns</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h3 className="text-wsp-signal text-3xl font-black uppercase italic tracking-tight leading-tight">
              Sicherheit ist Vertrauenssache. <br /> Wir sind Ihr Partner in Wuppertal.
            </h3>
            <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
              <p>
                Der Westfälischer Sicherheitspartner ist ein in Wuppertal ansässiges Dienstleistungsunternehmen in der Bewachungsbranche. 
                Vertrauen, Transparenz und Wertschätzung sind uns wichtig. Als Grundlage für unsere Zusammenarbeit, für die Zufriedenheit unserer Kunden und für den gegenseitigen Erfolg.
              </p>
              <p>
                Wir haben uns auf Objektschutz, Veranstaltungsschutz sowie Messeschutz spezialisiert. Genauso bieten wir auch hervorragende Revierdienste, Fahrerservice sowie Personenschutz an.
              </p>
              <p>
                Unser Unternehmen besteht aus vielen hochqualifizierten und erfahrenen Sicherheitsmitarbeitern mit langjähriger Berufserfahrung.
              </p>
              <p>
                Die Zufriedenheit unserer Kunden ist unser Kernziel. Deshalb sorgen wir dafür, dass unsere Mitarbeiter regelmäßig geschult und weitergebildet werden. Wir legen hohen Wert auf Pünktlichkeit, Motivation, Höflichkeit sowie eine gepflegte Erscheinung.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Vertrauen", text: "Die Basis jeder operativen Partnerschaft." },
              { title: "Transparenz", text: "Klare Kommunikation und messbare Resultate." },
              { title: "Wertschätzung", text: "Respektvoller Umgang mit Kunden und Mitarbeitern." },
              { title: "Qualität", text: "Regelmäßige Schulung und VdS-Zertifizierung." }
            ].map((p, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 hover:border-wsp-signal transition-colors group">
                <h4 className="text-wsp-signal text-xl font-black uppercase italic mb-4 group-hover:translate-x-2 transition-transform">{p.title}</h4>
                <p className="text-slate-500 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    "IHK", "MESSE ESSEN", "DIAMOND", "GARTENSTADT HAAN", "HERDECKE", "VBG", "BEWACHER-REGISTER", "SPARKASSE", "RONSDORF"
  ];

  return (
    <section id="partner" className="bg-slate-50 py-32 border-y border-slate-100">
      <div className="section-container">
        <h3 className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16">Unsere Partner & Zertifizierungen</h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map(p => (
            <span key={p} className="text-lg md:text-2xl font-black uppercase tracking-tighter italic border-b-4 border-slate-200 px-3 hover:border-wsp-signal transition-colors cursor-default">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Jobs = () => (
  <section id="jobs" className="bg-white">
    <div className="section-container">
      <div className="flex items-baseline gap-6 mb-24 border-b border-wsp-obsidian pb-8">
        <span className="text-4xl font-black opacity-10 tracking-tighter">03</span>
        <h2 className="text-4xl font-black uppercase tracking-tight">Karriere</h2>
      </div>
      
      <div className="clinical-card max-w-4xl border-l-8 border-l-wsp-signal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h3 className="text-3xl font-black uppercase italic mb-2">Sicherheitskräfte (m/w/d)</h3>
            <p className="text-wsp-navy font-bold text-sm">Standort: Wuppertal & Umgebung</p>
          </div>
          <div className="bg-wsp-navy text-white px-6 py-2 text-xs font-black uppercase tracking-widest italic">Jetzt Bewerben</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Target size={12} className="text-wsp-signal" /> Qualifikationsprofil
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-wsp-signal"></div> Sachkundeprüfung §34a GewO</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-wsp-signal"></div> Einwandfreies Führungszeugnis</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-wsp-signal"></div> Professionelles Auftreten</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-wsp-signal"></div> Schichtbereitschaft</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Briefcase size={12} className="text-wsp-signal" /> Einsatzbereiche
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Objektschutz", "Events", "Brandschutz", "Logistik", "Mobile Streife"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-[9px] font-black uppercase tracking-widest border border-slate-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Mail className="text-wsp-signal" size={20} />
            <p className="text-slate-500 text-xs font-bold">kontakt@wsp-sicherheit.de</p>
          </div>
          <button className="btn-primary min-w-[280px]">
            Direkt Bewerben <Briefcase size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="kontakt" className="bg-slate-50 border-t border-slate-100">
    <div className="section-container">
      <div className="flex items-baseline gap-6 mb-24 border-b border-wsp-obsidian pb-8">
        <span className="text-4xl font-black opacity-10 tracking-tighter">04</span>
        <h2 className="text-4xl font-black uppercase tracking-tight">Kommandozentrale</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h3 className="text-4xl font-black uppercase italic mb-8">Direktkontakt</h3>
          <div className="space-y-12">
            {[
              { icon: MapPin, label: "Zentrale", val: "Simonsstr. 47, 42117 Wuppertal" },
              { icon: Phone, label: "Mobil", val: "01514 5960347", link: true },
              { icon: Mail, label: "E-Mail", val: "kontakt@wsp-sicherheit.de" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <item.icon className="text-wsp-signal mt-1 transition-transform group-hover:scale-110" size={24} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</h4>
                  <p className={`font-bold text-xl italic ${item.link ? "underline decoration-wsp-signal underline-offset-4" : ""} text-wsp-navy`}>
                    {item.val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-1 bg-wsp-signal"></div>
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Name*</label>
                <input type="text" placeholder="IHR NAME" className="w-full bg-slate-50 border border-slate-200 h-16 px-6 focus:border-wsp-navy outline-none transition-all placeholder:text-slate-300 italic font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email*</label>
                <input type="email" placeholder="IHRE EMAIL" className="w-full bg-slate-50 border border-slate-200 h-16 px-6 focus:border-wsp-navy outline-none transition-all placeholder:text-slate-300 italic font-bold" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Telefon</label>
                <input type="tel" placeholder="IHRE NUMMER" className="w-full bg-slate-50 border border-slate-200 h-16 px-6 focus:border-wsp-navy outline-none transition-all placeholder:text-slate-300 italic font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Grund</label>
                <input type="text" placeholder="ANLIEGEN" className="w-full bg-slate-50 border border-slate-200 h-16 px-6 focus:border-wsp-navy outline-none transition-all placeholder:text-slate-300 italic font-bold" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ihre Nachricht*</label>
              <textarea placeholder="WIE KÖNNEN WIR IHNEN HELFEN?" className="w-full bg-slate-50 border border-slate-200 h-40 p-6 focus:border-wsp-navy outline-none transition-all resize-none placeholder:text-slate-300 italic font-bold"></textarea>
            </div>
            <button className="btn-primary w-full border-wsp-signal">
              NACHRICHT ÜBERMITTELN <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white">
    <div className="section-container flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-wsp-navy flex items-center justify-center">
            <Shield size={16} className="text-wsp-signal" />
          </div>
          <span className="font-black text-xl uppercase tracking-tighter italic text-wsp-navy">WSP</span>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-loose">
          Westfälischer Sicherheitspartner <br />
          Spezifikation 2026 / Rev. 4.2.1 <br />
          © 2018-2026 All Rights Reserved
        </p>
      </div>
      
      <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
        {["Impressum", "Datenschutz", "VdS Richtlinien"].map(link => (
          <a key={link} href="#" className="hover:text-wsp-navy border-b border-transparent hover:border-wsp-signal transition-all">
            {link}
          </a>
        ))}
      </div>
      
      <div className="text-[10px] font-mono text-slate-300 italic">
        [ COORDINATES: 51.2562° N, 7.1508° E ]
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-wsp-signal font-sans">
      <Nav />
      <Hero />
      <Services />
      <AboutUs />
      <Partners />
      <Jobs />
      <Contact />
      <Footer />
    </div>
  );
}