// Database of Linguistic Assets
const evidence = {
    publications: [
        { id: 'pb-001', code: 'PB-IEEE', title: 'AUTOMATION IN DETECTION OF COLOR VISION DEFICIENCY USING MACHINE LEARNING', summary: 'IEEE Research Publication', desc: 'Published research on ML-based automated color vision deficiency detection.<br>Link: <a href="https://ieeexplore.ieee.org/document/11099802" target="_blank" class="text-blue-400 underline hover:text-blue-300">View on IEEE Xplore</a><br>Status: Verified.', image:'paper.png' },
        { id: 'pb-B001', code: 'PB-TK14', title: 'THE KNOWN FOURTEEN', summary: 'Urban Archivist Folklore', desc: "A haunting collection of fourteen urban legends from the city of Rudrakootam, presented as recovered fragments that infect the reader's memory.", image:'tk14.jpg' },
        { id: 'pb-B002', code: 'PB-FIL', title: 'FILED IN THE LIVING', summary: 'Urban Archivist Folklore', desc: "An investigator's personal descent into the city's archives, where he discovers he is no longer just documenting anomalies, but becoming one.", image:'fil.jpg' },
        // Add remaining 10 books following this pattern
        { id: 'pb-B003', code: 'PB-A55', title: 'ANOMALIES OF THE FIVE AND FIVE', summary: 'Urban Archivist Folklore', desc: 'A clinical yet chilling report on ten sensory malfunctions that suggest the city itself is a ritualistic machine designed to process human perception.', image:'ao55.jpg' },
        { id: 'pb-B004', code: 'PB-SSM', title: 'SHROUDS OF SHALMALI', summary: 'Bureaucratic Folk Horror', desc: "A disgraced investigator's failed case files from a town that doesn't just hide secrets, but systematically absorbs the memories of those who try to solve them.", image:'ssm.jpg' },
        { id: 'pb-B005', code: 'PB-SIL', title: 'SILENCE', summary: 'Speculative Sci-Fi', desc: 'Five astronauts return to a transformed Earth where human speech has vanished, replaced by a hauntingly beautiful and ancient system of symbols that rewrites the very nature of connection.', image:'sil.png' },
        { id: 'pb-B006', code: 'PB-TCH', title: 'THE CLUELESS HOMICIDE', summary: 'Forensic Memory Thriller', desc: "A seasoned investigator and a pathologist in Rudrakootam must read bones like scripture to solve Clueless Homicides—crimes where the victims' very identities have been systematically erased from human memory.", image:'tch.png' },
        { id: 'pb-B007', code: 'PB-LMBL', title: 'LET MEMORY BE THE LAW', summary: 'Legal Speculative Noir', desc: 'A former judge in a "remembering city" reconstructs the architecture of justice, proving that the law disintegrates when memory is denied and can only be reborn when the truth is reclaimed.', image:'lmbl.png' },
        { id: 'pb-B008', code: 'PB-RAV1', title: 'RAVAN FIRST SEAL: THE SEALS OF PROPHECY', summary: 'Mythic Martial Arts Fantasy', desc: 'A young boy named Ravan begins a journey of self-discovery and discipline in the forest of Rudrakootam, unaware that he is destined to awaken an ancient, sacred power within himself.', image:'ravan-1.jpg' },
        { id: 'pb-B009', code: 'PB-RAV2', title: 'RAVAN SECOND SEAL: THE WHISPERING WOUNDS', summary: 'Metaphysical Adventure', desc: 'As Ravan masters the second seal, he learns that true strength comes from healing and listening to the hidden rhythms of the world rather than seeking to command them.', image:'ravan-2.png' },
        { id: 'pb-B010', code: 'PB-RAV3', title: 'RAVAN THIRD SEAL: THE ILLUSION OF WIND', summary: 'Psychological Fantasy', desc: 'Ravan and his friends must navigate a world of shifting fogs and auditory illusions where a mysterious, predatory force hunts through the very things people choose to forget.', image:'ravan-3.png' },
        { id: 'pb-B011', code: 'PB-RAV4', title: 'RAVAN FOURTH SEAL: THE ROOTS OF THE WRATH', summary: 'Epic Fantasy', desc: 'The earth itself begins to throb and shift as Ravan encounters the "Root of Bhairava," forcing him to confront the ancestral weight of a god who has forgotten how to die.', image:'ravan-4.jpg' },
        { id: 'pb-B012', code: 'PB-RAV5', title: 'RAVAN FIFTH SEAL: THE TRINETRA VOID', summary: 'Academic Speculative Fantasy', desc: 'Within the structured Ganas of a mystical academy, Ravan must master the ultimate "Trinetra" power while navigating a strict system of elemental trials and ancient disciplinary laws.', image:'ravan-5.jpg' },
        { id: 'pb-B013', code: 'PB-SOS', title: 'SCRIPTURE OF SCARS', summary: 'Psychological Mythic Thriller', desc: 'Set in the rain-soaked city of Rudrakootam, an ACP must stop a brilliant scholar who is systematically executing virtuous citizens according to ancient Puranic blueprints of mythic retribution.', image:'sos.jpg' },
        { id: 'pb-B014', code: 'PB-TFL', title: 'THE FRACTAL LATTICE', summary: 'Techno-Financial Thriller', desc: 'A brilliant designer is pulled into a global counterfeit syndicate where he must use invisible, fractal codes to survive a shadowed war of control.<br><b>STATUS: FORTHCOMING RELEASE</b>', status: 'FORTHCOMING RELEASE', image:'tfl.png' }
    ],
operations: [
        { 
            id: 'op-001', code: 'OP-EDU', title: 'WISE: WEB-BASED INTELLIGENT SYSTEM FOR EXAMINATIONS', summary: 'ADAPTIVE PLATFORM', 
            desc: 'Online evaluation system with context-sensitive integrity safeguards.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/WISE-Web-based-Intelligent-System-for-Examinations.git', image: 'exam.png'
        },
        { 
            id: 'op-002', code: 'OP-HV', title: 'HARKVEIL', summary: 'SIGINT PROTOCOL', 
            desc: 'Real-time NLP analysis for emergency keyword detection.<br>Protection: Privacy-first trace logic.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/HarkVeil.git', image: 'hv.png' 
        },
        { 
            id: 'op-003', code: 'OP-ALS', title: 'ALS DETECTION', summary: 'MED-TECH', 
            desc: 'Deep learning models for predictive analysis of ALS progression, prognosis and detection of ALS through audio.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/ALS-Detection.git', image: 'als.png'
        },
        { 
            id: 'op-004', code: 'OP-RES', title: 'RESILIENT NETWORK', summary: 'AUTONOMOUS DEFENSE', 
            desc: 'AI-driven framework for dynamic fault detection and self-healing.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/Resilient-Network.git', image: 'res.png'
        },
        { 
            id: 'op-005', code: 'OP-GEO', title: 'LANDSLIDE VISUALIZER', summary: 'GEOSPATIAL UI', 
            desc: 'Advanced geospatial dashboard for risk assessment visualization.<br>Scope: UI/UX Prototype for Darjeeling Sector.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/LandSlide-Detection.git', image: 'land.png'
        },
        { 
            id: 'op-006', code: 'OP-LEG', title: 'AI-BASED LEGAL DOCUMENT GENERATOR', summary: 'AUTOMATED DRAFTING', 
            desc: 'Semantic analysis system for context-aware legal document synthesis.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/Legal-Document-Generator.git', image: 'agree.png'
        },
        { 
            id: 'op-007', code: 'OP-NLP', title: 'DATABASE CHATBOT', summary: 'SMART INTERFACE', 
            desc: 'Natural Language interface for intuitive database interrogation.',
            status: 'PHASE COMPLETE', accessLink: 'https://github.com/HemaVigneshV/DataBase-Chatbot.git', image: 'db.png'
        },
        { 
            id: 'op-alg-09', 
            code: 'CORE-VYRA', 
            title: 'VYRA: UNIFIED LANGUAGE ARCHITECTURE', 
            summary: 'MULTI-PARADIGM COMPILER DESIGN', 
            desc: 'Bespoke programming language designed to bridge the gap between high-level abstraction (Python) and low-level performance (C++).<br>Key Features:<br>- Optimized Memory Safety Protocols<br>- Native Concurrency Management<br>- Lean Syntax for Rapid Prototyping.',
            status: 'ACTIVE DEVELOPMENT',
            image: 'vyra.png'
        }
    ],
    /* --- RESEARCH & DEVELOPMENT: ALGORITHMIC SUITE --- */
    algos: [
    { 
        id: 'op-alg-01', code: 'PROT-TPM', title: 'TEMPORAL PROGRAMMING MATRIX', summary: 'FORENSIC EVENT ANALYSIS', 
        desc: 'Bespoke event-log analysis protocol.<br>Logic: Transforms discrete categorical timelines into feature matrices for automated forensic engineering.<br>Utility: High-fidelity audit trails.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'tpm.png'
    },
    { 
        id: 'op-alg-02', code: 'PROT-ASGD', title: 'ADAPTIVE SWARM GRADIENT DESCENT', summary: '3RD-ORDER OPTIMIZATION', 
        desc: 'Advanced swarm optimizer utilizing 3rd-order derivatives ("Jerk").<br>Theory: Stabilizes optimization paths in ultra-complex non-convex spaces.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'math', image: 'asgd.png'
    },
    { 
        id: 'op-alg-03', code: 'PROT-QPS', title: 'QUANTUM PARITY SHUFFLE', summary: 'ENTROPY-GUIDED SORT', 
        desc: 'Hybrid sorting model using entropy-based shuffling and parallel parity checks.<br>Implementation: Multiprocessing-optimized shuffle heuristics.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'quant.png'
    },
    { 
        id: 'op-alg-04', code: 'PROT-TEC', title: 'TECTONIC SORT', summary: 'DIVIDE & SHIFT PARADIGM', 
        desc: 'Novel block-sort variation utilizing "Plate Shifting" logic.<br>Efficiency: Optimized for parallel partitioning of large-scale data shards.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'tect.png'
    },
    { 
        id: 'op-alg-05', code: 'PROT-RIP', title: 'RIPPLE ALGORITHM', summary: 'CYCLE-SENSITIVE PATHFINDING', 
        desc: 'Optimized shortest-path protocol with integrated negative cycle detection.<br>Metaphor: Fluid-dynamics inspired unweighted graph navigation.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'ripple.png'
    },
    { 
        id: 'op-alg-06', code: 'PROT-PULSE', title: 'PULSE SORT', summary: 'CONTEXT-AWARE POSITIONING', 
        desc: 'Global-aware sorting protocol computing "Dynamic Priority Scores" based on element context.<br>Best Use: Streaming data and nearly-sorted arrays.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'pulse.png'
    },
    { 
        id: 'op-alg-07', code: 'PROT-EIS', title: 'ETHEREAL INTELLIGENCE SYSTEMS', summary: 'BIO-INSPIRED COMPUTING', 
        desc: 'Completely original physical simulation algorithm.<br>Logic: Uses "Frequency Fields" and "Energy Reservoirs" to stabilize data-heavy systems.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'bio', image: 'eis.png'
    },
    { 
        id: 'op-alg-08', code: 'PROT-CICR', title: 'COHESIVE CLUSTERING', summary: 'NON-STATIC CLUSTERING', 
        desc: 'Improvement on K-Means using "Periodic Random Redistribution."<br>Utility: Prevents local optima traps in high-noise datasets.',
        accessLink: 'https://drive.google.com/drive/folders/1XuDpQLo_Je3YaV0HgDZuC2NuSghzz1if?usp=sharing', category: 'logic', image: 'cc.png'
    }
],
    prizes: [
        { 
            id: 'fr-01', 
            code: 'FR-ISRO', 
            title: 'ISRO IMMERSION CHALLENGE PARTICIPANT', 
            summary: 'IIITH AND NRSC-ISRO', 
            desc: 'Participated in the national level ISRO Immersion Challenge conducted as a part of National Space Day Celebrations 2024.',
            image: 'isro.jpg',
            status: 'VERIFIED'  
        },
        { 
            id: 'fr-02', 
            code: 'FR-IITD', 
            title: 'MICROBE INNOVATION IDEATHON - 2025', 
            summary: 'IGEM CLUB IIT DELHI', 
            desc: 'Participated in the national level Microbe Innovation Ideathon at IIT Delhi (2025). Contributed to high-level solution design for biological and technological innovative idea.',
            image: 'mii.png',
            status: 'VERIFIED'  
        },
        { 
            id: 'fr-03', 
            code: 'FR-BITS', 
            title: 'EDUFORGE NATIONAL FINALIST', 
            summary: 'BITS PILANI, HYD CAMPUS - ICONWIL 2024', 
            desc: 'National finalist for the EduForge competition at BITS Pilani. Recognized for advanced institutional problem-solving and technical model design.',
            image: 'edu.jpg',
            status: 'VERIFIED'  
        },
        { 
            id: 'comm-04', 
            code: 'CERT-WBL', 
            title: 'WOOBLE: PROFIT & LEARN', 
            summary: 'FEATURED TALENT RECOGNITION', 
            desc: 'Professional citation presented for being recognized as a Featured Talent within the "Profit & Learn" initiative hosted by Wooble.',
            image: 'woob.png', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-05', 
            code: 'FR-IITM', 
            title: 'SHAASTRA PROGRAMMING CONTEST - 2023', 
            summary: 'IIT MADRAS', 
            desc: 'Participated in the national level Shaastra Programming Contest at IIT Madras (2023).',
            image: 'scc.jpg',
            status: 'VERIFIED'  
        },
        { 
            id: 'fr-06', 
            code: 'FR-INM', 
            title: '1ST PRIZE: INNOVATIVE MODEL', 
            summary: 'VR SIDDHARTHA ENGINEERING COLLEGE', 
            desc: 'Awarded 1st Prize for engineering excellence in the development of a functional innovative model.',
            image: 'id.jpg',
            status: 'VERIFIED'  
        },
        { 
            id: 'cert-07', 
            code: 'FR-NSS', 
            title: 'CYBER SECURITY INSTRUCTIONAL LEAD', 
            summary: 'SIDDHARTHA ACADEMY & NSS', 
            desc: 'Authorized instructional lead for the "Cyber Security Awareness Program" conducted across regional schools.',
            image: 'csa.jpeg', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-08', 
            code: 'FR-YP2324', 
            title: 'DISTRICT YOUTH PARLIAMENT', 
            summary: 'NEHRU YUVA KENDRA - GOVT. OF INDIA', 
            desc: 'Participated in the District Level Neighborhood Youth Parliament in the years 2023 and 2024. Organized by NYK, Ministry of Youth Affairs and Sports, Govt. of India. Focused on public policy and community discourse.',
            image: 'dlyp.png', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-09', 
            code: 'FR-CHR', 
            title: 'CHRYSERA-2025 LEAD', 
            summary: 'SIDDHARTHA ACADEMY GOLDEN JUBILEE', 
            desc: 'Managed critical event flows for the 50th-anniversary celebrations of Siddhartha Academy of General And Technical Education. Large-scale administrative coordination.',
            image: 'chrysera.jpeg', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-10', 
            code: 'FR-SIBM', 
            title: 'NIVAAN 2025', 
            summary: 'SIBM, PUNE', 
            desc: 'Participated in the national level Ecovate 2025 at Symbiosis Institute of Business Management (SIBM), Pune.',
            image: 'eco.jpg',
            status: 'VERIFIED'  
        },
        { 
            id: 'fr-11', 
            code: 'FR-COM-INT', 
            title: 'LITERARY & COMMUNICATIONS COMMAND', 
            summary: 'MULTIPLE COMMENDATIONS', 
            desc: 'Consolidated record of excellence in technical and creative communications.',
            image: 'litc.png', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-12', 
            code: 'FR-AFO1', 
            title: 'AFOSEC LITERARY LEAD', 
            summary: '2024 DEPLOYMENT', 
            desc: 'Coordinated literary events for the national-level fest AFOSEC-2024.',
            image: 'afo.jpeg', 
            status: 'VERIFIED' 
        },
        { 
            id: 'fr-13', // Unique ID check
            code: 'FR-NST', 
            title: 'CTRL+SPACE POWERED BY QUANTIQUE METADATA', 
            summary: 'NEWTON SCHOOL OF TECHNOLOGY', 
            desc: 'Participated in the national level Ctrl+Space event at Newton School of Technology.',
            image: 'Ctrl+Space.jpg',
            status: 'VERIFIED'  
        }

    ],
    // ... existing operations, publications, and prizes ...
    certificates: [
        /* INTERNSHIPS */
        { 
            id: 'cert-01', 
            code: 'CR-EH', 
            title: 'ETHICAL HACKING VIRTUAL INTERNSHIP', 
            summary: 'JUL-SEP 2025', 
            desc: 'Specialized in cybersecurity fundamentals and ethical hacking protocols as part of the National Internship Portal initiative.',
            image: 'ehv.png'
        },
        { 
            id: 'cert-02', 
            code: 'CR-AIML', 
            title: 'AI-ML VIRTUAL INTERNSHIP', 
            summary: 'JAN-MAR 2024', 
            desc: 'Completed intensive training in Artificial Intelligence and Machine Learning models supported by the Google India Edu Program.',
            image: 'aiml.png' 
        },
        { 
            id: 'cert-03', 
            code: 'CR-CLD', 
            title: 'CLOUD VIRTUAL INTERNSHIP', 
            summary: 'SEP-NOV 2023', 
            desc: 'Gained foundational expertise in cloud architecture, deployment, and management through the AWS Academy framework.',
            image: 'cv.png' 
        },
        /* PROFESSIONAL CERTIFICATIONS */
{ 
        id: 'cert-04', 
        code: 'CLR-HV-DS', 
        title: 'DATA SCIENCE WITH PYTHON', 
        summary: 'HARVARDX / EDX', 
        desc: 'Advanced validation in statistical inference, linear regression, and machine learning workflows using Python.',
        image: 'dsp.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-05', 
        code: 'CLR-NPT-EH', 
        title: 'ETHICAL HACKING', 
        summary: 'NPTEL / SWAYAM', 
        desc: 'Validated proficiency in vulnerability assessment, system penetration testing, and network-level defense strategies.',
        image: 'eh-2.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-06', 
        code: 'CLR-NPT-RS', 
        title: 'FOUNDATIONS OF R SOFTWARE', 
        summary: 'NPTEL / IIT MADRAS', 
        desc: 'Certification in statistical computing and data modeling using R for institutional-grade analytics.',
        image: 'r.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-07', 
        code: 'CLR-AWS-CC', 
        title: 'AWS CLOUD COMPUTING', 
        summary: 'AWS ACADEMY', 
        desc: 'Validated skill in cloud architecture, service deployment, and scalable infrastructure management.',
        image: 'awscc.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-08', 
        code: 'CLR-CSC-EH', 
        title: 'ETHICAL HACKER', 
        summary: 'CISCO NETACAD', 
        desc: 'Professional validation of offensive security techniques and countermeasure implementation.',
        image: 'eh.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-09', 
        code: 'CLR-CSC-ICS', 
        title: 'INTRODUCTION TO CYBERSECURITY', 
        summary: 'CISCO NETACAD', 
        desc: 'Validated knowledge in threat vectors, data confidentiality, and organizational security protocols.',
        image: 'ics.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-10', 
        code: 'CLR-CSC-CSE', 
        title: 'CYBERSECURITY ESSENTIALS', 
        summary: 'CISCO NETACAD', 
        desc: 'Advanced validation of security laws, digital forensics, and tactical risk mitigation.',
        image: 'cse.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-11', 
        code: 'CLR-CSC-NET', 
        title: 'INTRODUCTION TO NETWORKS', 
        summary: 'CISCO NETACAD', 
        desc: 'Core validation of switching, routing, and enterprise-level network infrastructure (CCNA Level).',
        image: 'ccna.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-12', 
        code: 'CLR-CSC-PY', 
        title: 'PROGRAMMING ESSENTIALS IN PYTHON', 
        summary: 'CISCO / PYTHON INSTITUTE', 
        desc: 'Validated proficiency in Pythonic logic, data structures, and algorithmic implementation.',
        image: 'pcap.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-13', 
        code: 'CLR-CSC-C', 
        title: 'PROGRAMMING ESSENTIALS IN C', 
        summary: 'CISCO NETACAD', 
        desc: 'Low-level architecture validation covering memory management, pointers, and optimized C execution.',
        image: 'cla.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-14', 
        code: 'CLR-CSC-LNX', 
        title: 'NDG LINUX ESSENTIALS', 
        summary: 'CISCO NETACAD', 
        desc: 'Professional validation in Linux command-line operations, file security, and system administration.',
        image: 'ndg.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-15', 
        code: 'CLR-HR-PS', 
        title: 'PROBLEM SOLVING (BASIC)', 
        summary: 'HACKERRANK', 
        desc: 'Validated proficiency in data structures (Arrays, Strings) and core algorithmic complexity.',
        image: 'psb.png',
        status: 'VERIFIED'
    },
    { 
        id: 'cert-16', 
        code: 'CLR-UIP-AE', 
        title: 'AUTOMATION EXPLORER', 
        summary: 'UI PATH', 
        desc: 'Certification in Robotic Process Automation (RPA) workflows and automated business logic.',
        image: 'uip.png',
        status: 'VERIFIED'
    }
    ],
    uplink: [
        { 
            id: 'contact-00', 
            code: 'INTEL-PDF-01', 
            title: 'CORE PERSONNEL DOSSIER', 
            summary: 'EXECUTIVE SUMMARY & CV', 
            desc: 'Comprehensive record of technical deployment, academic clearance, and strategic achievements.\nLink: <a href="https://drive.google.com/drive/folders/1ltnqmT6UNJspkk6Tc5QaeOsfEGqGx7Xw?usp=sharing" target="_blank" class="text-blue-400 font-bold uppercase hover:text-white">➔ Extract Personnel Dossier</a>', 
            status: 'VERIFIED'
        },
        { 
            id: 'contact-01', 
            code: 'SIGNAL-PH', 
            title: 'SECURE VOICE LINE', 
            summary: 'TELEPHONIC UPLINK', 
            desc: 'Direct line for urgent recruitment or technical consultation:<br>+91 8977041104', 
            status: 'ACTIVE'
        },
        { 
            id: 'contact-02', 
            code: 'SIGNAL-ML', 
            title: 'ENCRYPTED CORRESPONDENCE', 
            summary: 'DIRECT MAIL', 
            desc: 'Request technical documentation or mission briefings via official mail:\nvinjamurihemavignesh@gmail.com', 
            status: 'MONITORED'
        },
        { 
            id: 'contact-03', 
            code: 'INTEL-INSTA-01', 
            title: 'OPERATIVE DISPATCHES', 
            summary: 'PERSONAL INTELLIGENCE', 
            desc: 'Visual log of field activities and technical updates.\nLink: <a href="https://www.instagram.com/hemavigneshvinjamuri?igsh=Mjd0bWlsYnIxZWRl" target="_blank" class="text-blue-400">Access Personal Intel</a>', 
            status: 'PUBLIC'
        },
        { 
            id: 'contact-04', 
            code: 'INTEL-INSTA-02', 
            title: 'LITERARY DISPATCHES', 
            summary: 'AUTHOR INTELLIGENCE', 
            desc: 'Updates on the 13-volume cycle and linguistic research.\nLink: <a href="https://www.instagram.com/rudrakootamchronicles?igsh=cG4yamlubXJlZ3V6" target="_blank" class="text-blue-400">Access Author Intel</a>', 
            status: 'PUBLIC'
        }
    ]
};

function openModule(moduleName) {
    const mainSection = document.getElementById('mission-briefing');
    const profileSection = document.getElementById('personnel_profile');
    const container = document.getElementById('data-container');
    const details = document.getElementById('data-details');

    details.classList.add('hidden');
    
    if (moduleName === 'personnel_profile') {
        profileSection.classList.remove('hidden');
        mainSection.classList.add('hidden');
    } else {
        profileSection.classList.add('hidden');
        mainSection.classList.remove('hidden');
        renderCards(moduleName);
    }

    document.getElementById('access-display').textContent = moduleName.toUpperCase().replace('_', ' ');
}

let currentModuleItems = [];
let currentIndex = 0;

function renderCards(moduleName) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    currentModuleItems = evidence[moduleName] || [];

    currentModuleItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "data-panel p-6 cursor-pointer hover:bg-slate-800 transition-all border border-slate-700 dossier-entry";
        card.onclick = () => showDetails(index);
        
        // Logical check: Use item.status if it exists, otherwise default to PHASE COMPLETE
        const displayStatus = item.status ? item.status : "PHASE COMPLETE";
        
        // Optional: Change color for "Forthcoming" to differentiate
        const statusColor = displayStatus === 'FORTHCOMING' ? 'text-yellow-500' : 'text-blue-500';

        card.innerHTML = `
            <h3 class="text-blue-400 mb-2 font-bold">${item.code}</h3>
            <p class="text-white text-sm font-bold uppercase">${item.title}</p>
            <p class="text-slate-400 text-xs mt-1">${item.summary}</p>
            <span class="${statusColor} text-[10px] mt-2 block font-bold uppercase">STATUS: ${displayStatus}</span>
        `;
        container.appendChild(card);
    });
}

function showDetails(index) {
    currentIndex = index;
    const item = currentModuleItems[currentIndex];
    const detailPanel = document.getElementById('data-details');
    const background = document.getElementById('data-details-bg');
    
    document.getElementById('data-title').textContent = `INTEL REPORT: ${item.title}`;
    
    // Handle Image Display
    let imageHtml = item.image ? 
        `<div class="mb-4 border border-slate-700 p-1 bg-black">
            <img src="${item.image}" alt="Evidence" class="w-full h-auto max-h-48 object-contain">
         </div>` : '';

    // NEW: Handle Access Link Generation
    let linkButton = item.accessLink ? 
        `<div class="mt-4">
            <a href="${item.accessLink}" target="_blank" 
               class="block w-full text-center bg-blue-900 bg-opacity-20 border border-blue-500 p-2 text-[10px] text-blue-400 font-bold uppercase hover:bg-blue-800 hover:text-white transition-all tracking-widest">
                ➔ ACCESS TECHNICAL DOCUMENTATION
            </a>
         </div>` : '';

    document.getElementById('data-content').innerHTML = `
        <div class="space-y-4">
            ${imageHtml}
            <p class="text-white text-sm leading-relaxed whitespace-pre-line">
                <span class="text-yellow-500 font-bold uppercase">Brief:</span><br>${item.desc}
            </p>
            ${linkButton}
        </div>
        <div class="flex justify-between items-center mt-6 pt-4 border-t border-slate-700">
            <button onclick="changeDetail(-1)" class="text-blue-400 hover:text-white text-xs">« PREV ASSET</button>
            <span class="text-[10px] text-slate-500">${currentIndex + 1} / ${currentModuleItems.length}</span>
            <button onclick="changeDetail(1)" class="text-blue-400 hover:text-white text-xs">NEXT ASSET »</button>
        </div>
    `;

    detailPanel.classList.remove('hidden');
    background.style.display = 'block';
}

function changeDetail(direction) {
    currentIndex += direction;
    if (currentIndex >= currentModuleItems.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentModuleItems.length - 1;
    showDetails(currentIndex);
}

function closeDetails() {
    document.getElementById('data-details').classList.add('hidden');
    const background = document.getElementById('data-details-bg');
    if (background) background.style.display = 'none';
}

function closeDetails() {
    document.getElementById('data-details').classList.add('hidden');
}

function openModule(moduleName) {
    const briefing = document.getElementById('mission-briefing');
    const profile = document.getElementById('personnel_profile');

    // Hide everything
    if (briefing) { briefing.classList.add('hidden'); briefing.style.display = 'none'; }
    if (profile) { profile.classList.add('hidden'); profile.style.display = 'none'; }

    if (moduleName === 'personnel_profile') {
        profile.classList.remove('hidden');
        profile.style.display = 'block';
    } else {
        briefing.classList.remove('hidden');
        briefing.style.display = 'block';
        document.getElementById('access-display').textContent = moduleName.toUpperCase().replace('_', ' ');
        renderCards(moduleName);
    }
}
// Ensure Home loads on start
window.onload = () => {
    openModule('personnel_profile'); 
};

function openModule(moduleName) {
    const briefing = document.getElementById('mission-briefing');
    const profile = document.getElementById('personnel_profile');
    const home = document.getElementById('home_dashboard');

    // 1. Hide all main sections
    [briefing, profile, home].forEach(section => {
        if (section) {
            section.classList.add('hidden');
            section.style.display = 'none';
        }
    });

    // 2. Show the targeted section
    if (moduleName === 'home') {
        home.classList.remove('hidden');
        home.style.display = 'block';
    } 
    else if (moduleName === 'personnel_profile') {
        profile.classList.remove('hidden');
        profile.style.display = 'block';
    } 
    else {
        // Handle all grid modules
        briefing.classList.remove('hidden');
        briefing.style.display = 'block';
        document.getElementById('access-display').textContent = moduleName.toUpperCase().replace('_', ' ');
        renderCards(moduleName);
    }

}

