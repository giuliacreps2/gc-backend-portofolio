import drawSQLLanzi from "../assets/images/drawSQL-image-Lanzi-Orto-Urbano.jpg"

// --- TIPI ---

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  responseExample: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string | null;

  overview: string;
  problem: string;
  solution: string[];

  architecture: {
    systemFlow: string[];      // es. ["Client", "Controller", "Service", "Repository", "DB"]
    erdImage: string | null;
    dataDecisions: string[];
  };

  apiEndpoints: ApiEndpoint[];

  frontendIntegration: {
    description: string;
    loginImage: string | null;
    howItConnects: string[];
  } | null;

  challenges: string[];
  improvements: string[];
  results: string[];
}

// --- DATI ---

export const projects: Project[] = [
  {
    id: "lanzi-orto-urbano",
    title: "Lanzi Orto Urbano",
    shortDescription: "E-commerce backend con tracciabilità lotti, gestione B2B/B2C e sistema punti.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "E-commerce"],
    githubUrl: "https://github.com/giuliacreps2/Lanzi-Orto-Urbano-Management",
    image: null,

    overview: `Piattaforma e-commerce per la vendita di microgreens con gestione avanzata di ordini, utenti e magazzino. Il sistema integra un modello di tracciabilità basato su lotti di produzione, permettendo di seguire ogni prodotto dalla semina alla consegna.`,

    problem: `Gli e-commerce alimentari necessitano di sistemi affidabili per la gestione delle scorte e la tracciabilità dei prodotti. Inoltre, la coesistenza di clienti B2B e B2C introduce complessità nella gestione dei prezzi, degli ordini e della fidelizzazione.`,

     solution: [
    "Sistema di tracciabilità basato su lotti ed etichette",
    "Gestione multi-ruolo (ADMIN, B2B, B2C)",
    "Sistema punti condiviso tra segmenti",
    "Riordino automatico per clienti B2B",
    "Architettura REST scalabile con separazione dei layer",
  ],

    architecture: {
    systemFlow: ["Client", "Controller", "Service", "Repository", "PostgreSQL"],
    erdImage: drawSQLLanzi,
    dataDecisions: [
      "Lotti separati dai prodotti per garantire tracciabilità storica",
      "Relazione Orders ↔ Labels per associare ogni spedizione al lotto",
      "Sistema punti modellato come ledger (storico movimenti)",
    ],
  },

     apiEndpoints: [
    {
      method: "POST",
      path: "/api/ordini",
      description: "Crea un nuovo ordine",
      responseExample: `{
  "id": 10,
  "status": "CREATED"
}`,
    },
    {
      method: "POST",
      path: "/api/admin/lotti",
      description: "Crea un lotto di semina",
      responseExample: `{
  "numeroLotto": "MG-2024-001"
}`,
    },
  ],


    frontendIntegration: {
      description: "Il sistema espone un endpoint di login che restituisce un JWT. Il client lo salva e lo invia in ogni richiesta successiva nell'header Authorization.",
      loginImage: null,
      howItConnects: [
        "POST /api/auth/login → restituisce accessToken + refreshToken",
        "Il token viene salvato client-side (localStorage o cookie httpOnly)",
        "Ogni richiesta include: Authorization: Bearer <token>",
        "Endpoint protetti verificano il token e il ruolo prima di procedere",
      ],
    },

     challenges: [
    "Progettare un sistema di tracciabilità coerente e scalabile",
    "Gestire logiche diverse per B2B e B2C nello stesso dominio",
    "Mantenere consistenza del magazzino in operazioni concorrenti",
  ],

    improvements: [
    "Integrazione con scanner QR per etichette",
    "Caching per prodotti e disponibilità",
    "Event-driven architecture per notifiche",
  ],

     results: [
    "Dominio complesso modellato correttamente",
    "Sistema di tracciabilità completo",
    "Backend pronto per contesti reali",
  ],
  },

 {
  id: "bstudent",
  title: "BStudent",
  shortDescription: "Piattaforma e-learning con abbonamenti, contenuti premium e tracking progressi.",
  tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "E-learning"],
  githubUrl: "https://github.com/giuliacreps2/BStudent-Management",
  image: null,

  overview: `Piattaforma e-learning per lo studio del Latino e del Greco con contenuti premium, test di verifica e sistema di progress tracking. Integra logiche di abbonamento e gestione accessi basata su ruoli.`,

  problem: `Le piattaforme educative richiedono controllo degli accessi ai contenuti, gestione degli abbonamenti e tracciamento dei progressi. È necessario progettare un sistema scalabile che separi utenti free e premium senza duplicare logica.`,

  solution: [
    "Sistema di abbonamento con accesso premium",
    "Gestione contenuti protetti tramite ruolo",
    "Tracking progressi per utente e capitolo",
    "Integrazione con servizi esterni (Vimeo)",
  ],

  architecture: {
    systemFlow: ["Client", "Controller", "Service", "Repository", "PostgreSQL", "External APIs"],
    erdImage: null,
    dataDecisions: [
      "Separazione tra contenuti e accessi (authorization layer)",
      "Progress tracking per utente e capitolo",
      "Ruoli distinti: FREE, PREMIUM, ADMIN",
    ],
  },

  apiEndpoints: [
    {
      method: "GET",
      path: "/api/corsi/{id}",
      description: "Dettaglio corso",
      responseExample: `{
  "title": "Latino Base",
  "chapters": 10
}`,
    },
  ],

  frontendIntegration: {
    description: "Frontend React con controllo accessi basato su stato abbonamento.",
    loginImage: null,
    howItConnects: [
      "Login → JWT",
      "Verifica ruolo per accesso contenuti",
      "Blocchi UI per utenti FREE",
    ],
  },

  challenges: [
    "Gestire contenuti protetti senza esporli lato client",
    "Progettare sistema abbonamenti scalabile",
    "Integrare servizi esterni (video hosting)",
  ],

  improvements: [
    "Integrazione pagamento reale (Stripe)",
    "Gamification",
    "AI recommendation system",
  ],

  results: [
    "Sistema e-learning completo",
    "Gestione accessi robusta",
    "Struttura pronta per scalare",
  ],
},

  {
    id: "auth-service",
    title: "Auth Service",
    shortDescription: "Servizio di autenticazione con JWT, refresh token e gestione ruoli.",
    tags: ["Java", "Spring Security", "PostgreSQL"],
    githubUrl: "https://github.com/tuoprofilo/auth-service",
    image: null,

    overview: `Microservizio dedicato all'autenticazione e autorizzazione. Gestisce registrazione, login, refresh token e ruoli utente. Progettato per essere consumato da altri servizi.`,

    problem: `In architetture a microservizi, l'autenticazione deve essere centralizzata, stateless e sicura. Ogni servizio non dovrebbe gestire la propria logica di auth.`,

    solution: [
      "JWT con access token (15min) + refresh token (7gg)",
      "Rotazione automatica del refresh token",
      "Ruoli gerarchici con Spring Security",
      "Endpoint di validazione token per altri servizi",
    ],

    architecture: {
      systemFlow: ["Client", "Auth Controller", "Auth Service", "Token Repository", "PostgreSQL"],
      erdImage: "https://drawsql.app/teams/giulia-crepaldi/diagrams/lanzi-orto-urbano-management/embed",
      dataDecisions: [
        "RefreshToken salvato su DB per poter fare revoca",
        "Password hashata con BCrypt (cost factor 12)",
      ],
    },

    apiEndpoints: [
      {
        method: "POST",
        path: "/api/auth/login",
        description: "Login utente",
        responseExample: `{
  "accessToken": "eyJhbGci...",
  "refreshToken": "dGhpcyBp...",
  "expiresIn": 900
}`,
      },
      {
        method: "POST",
        path: "/api/auth/refresh",
        description: "Rinnova l'access token",
        responseExample: `{
  "accessToken": "eyJhbGci...",
  "expiresIn": 900
}`,
      },
    ],

    frontendIntegration: {
      description: "Il servizio è pensato per essere consumato da un frontend SPA o da altri microservizi.",
      loginImage: null,
      howItConnects: [
        "Login → riceve accessToken + refreshToken",
        "Ogni richiesta API include Authorization: Bearer <accessToken>",
        "Alla scadenza, il client usa /auth/refresh automaticamente",
        "Logout invalida il refreshToken lato server",
      ],
    },

    challenges: [
      "Gestire la revoca del token senza perdere la natura stateless del JWT",
      "Implementare la rotazione del refresh token in modo sicuro",
    ],

    improvements: [
      "OAuth2 / login con Google",
      "2FA con TOTP",
      "Rate limiting su endpoint di login",
    ],

    results: [
      "Autenticazione stateless e sicura",
      "Refresh token con revoca lato server",
      "Pronto per architetture a microservizi",
    ],
  },
];