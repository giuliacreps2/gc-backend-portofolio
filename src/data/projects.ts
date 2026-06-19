import drawSQLLanzi from "../assets/images/ERD-Lanzi-Orto-Urbano.png";
import backoffice from "../assets/images/Backoffice-Label-Lanzi-Orto-Urbano.png";

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
  githubUrl?: string;
  demoUrl?: string;
  image: string | null;

  overview: string;
  problem: string;
  solution: string[];

  architecture?: {
    systemFlow: string[]; // es. ["Client", "Controller", "Service", "Repository", "DB"]
    erdImage: string | null;
    dataDecisions: string[];
  };

  apiEndpoints?: ApiEndpoint[];

  frontendIntegration?: {
    description: string;
    loginImage: string | null;
    howItConnects: string[];
  } | null;

  challenges?: string[];
  improvements?: string[];
  results?: string[];

  developmentStatus?: {
    currentPhase: string;
    nextSteps: string[];
  };
}

// --- DATI ---

export const projects: Project[] = [
  {
    id: "lanzi-orto-urbano",
    title: "Lanzi Orto Urbano",
    shortDescription:
      "Infrastruttura e-commerce B2B/B2C con tracciabilità interna dei lotti e filtri dinamici.",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data Specification",
      "JWT",
      "SaaS Structure",
    ],
    githubUrl: "https://github.com/giuliacreps2/Lanzi-Orto-Urbano-Management",
    image: null,

    overview: `Applicazione gestionale ed e-commerce sviluppata per digitalizzare la produzione e la vendita di microgreens di un'azienda agricola locale. Il sistema traccia il ciclo di vita del prodotto generando l'etichetta di tracciabilità nell'istante in cui l'amministratore avvia la fase fisica di semina. Le informazioni dell'etichetta vengono persistite sul database per consentire il recupero immediato in caso di smarrimento fisico, mentre il backoffice frontend espone dinamicamente tutti i dettagli produttivi specifici ereditati dal prodotto agricolo.`,

    problem: `Far coesistere nello stesso database due flussi commerciali distinti: la vendita al dettaglio (B2C) con raccolta punti fedeltà e la vendita all'ingrosso (B2B) con listini dedicati e riordini automatici. L'esigenza principale era mantenere coerenti le scorte di magazzino ed evitare la rigidità dello schema relazionale di fronte alle specifiche variabili delle categorie di piante.`,

    solution: [
      "Implementazione di UUID come identificativo univoco per tutte le entità del dominio (utenti, prodotti, ordini)",
      "Sviluppo di flussi di registrazione condizionali: verifica email per i clienti B2C e validazione della Partita IVA con approvazione dell'amministratore per i profili B2B",
      "Integrazione del servizio Resend per la gestione automatizzata del flusso di email di verifica e delle notifiche di stato dell'ordine",
      "Utilizzo di Spring Data Specification per la costruzione di query dinamiche dedicate al filtraggio avanzato del catalogo prodotti",
      "Ingegnerizzazione del ciclo di vita dell'etichetta ancorato alla produzione: generazione automatica alla messa in semina, persistenza sul database PostgreSQL per il recupero in caso di smarrimento e proiezione dinamica di tutti i dettagli agricoli utili sulla dashboard di backoffice.",
    ],

    architecture: {
      systemFlow: [
        "Next.js (Client)",
        "Spring Security",
        "Controller",
        "Service",
        "Repository",
        "PostgreSQL",
      ],
      erdImage: drawSQLLanzi,
      dataDecisions: [
        "Uso di identificativi UUID per garantire la non-prevedibilità degli ID e semplificare l'eventuale portabilità dei dati",
        "Modellazione flessibile dei dettagli tecnici e delle varianti di prodotto tramite mappe di metadati (Map<String, Object>) salvate su PostgreSQL",
        "Gestione della sicurezza stateless con Spring Security e token JWT per la separazione netta dei ruoli (ADMIN, B2B, B2C)",
      ],
    },

    apiEndpoints: [
      {
        method: "POST",
        path: "/api/categories/new-cat",
        description:
          "Configura una macro-categoria con logiche di inventario (es. scarico componenti alla semina) e campi di tracciabilità personalizzati nei metadati.",
        responseExample: `{\n  "id": "e30129a0-3129-4b11-a885-b1a62d55f81d",\n  "nameProdCategory": "MICROGREENS",\n  "requiresBatchTracking": true\n}`,
      },
      {
        method: "POST",
        path: "/api/products/new-composite",
        description:
          "Endpoint ADMIN per la creazione simultanea di un prodotto e della sua variante (ProductFormDTO) con prezzi B2B/B2C differenziati, SKU, pesi e dettagli tecnici dinamici (Map).",
        responseExample: `{\n  "productName": "Ravanello Sangue di Toro",\n  "productCategoryId": "e30129a0-3129-4b11-a885-b1a62d55f81d",\n  "skuVariant": "RV-SANG-001",\n  "b2bPrice": 4.50,\n  "b2cPrice": 6.00\n}`,
      },
      {
        method: "POST",
        path: "/api/labels/new-lab",
        description:
          "Genera e registra a database una nuova etichetta (LabelDTO) agganciandola al lotto (batchId) e alla variante del prodotto (productVariantId).",
        responseExample: `{\n  "id": "7dec11d0-a765-4997-9095-21d7b1a62d55",\n  "barCodeGs1": "010801234567890110A1234B",\n  "inventoryDecremented": true\n}`,
      },
      {
        method: "GET",
        path: "/api/labels/{labelId}/label",
        description:
          "Generazione dinamica dell'etichetta fisica: recupera i dati dal database e restituisce direttamente lo stream binario dell'immagine del codice a barre GS1-128 (JPEG).",
        responseExample: `[Binary Data - Image JPEG (code 128 rendering)]`,
      },
    ],

    frontendIntegration: {
      description:
        "Il client in Next.js consuma le API REST del backend. L'interfaccia reagisce dinamicamente ai ruoli e alle informazioni estratte dal token JWT, modificando i flussi di checkout e i listini mostrati a schermo.",
      loginImage: backoffice,
      howItConnects: [
        "Chiamata all'endpoint /auth/login per l'autenticazione e la ricezione del JWT",
        "Iniezione del token nell'header di ogni richiesta (Authorization: Bearer <token>)",
        "Adattamento condizionale della UX in base al listino prezzi (standard B2C o dedicato B2B)",
      ],
    },

    challenges: [
      "Isolare le logiche di business B2B e B2C mantenendo il codice pulito e privo di ridondanze nello strato dei servizi",
      "Sincronizzare lo stato logico dell'etichetta sul database con l'avanzamento fisico della produzione in serra (dalla semina, al magazzino, fino all'associazione finale con l'ordine)",
      "Mantenere flessibile la struttura dati delle varianti dei microgreens senza ricorrere a continue alterazioni delle tabelle relazionali",
    ],

    improvements: [
      "Ottimizzazione delle letture sul database attraverso strategie di indicizzazione mirate sui campi UUID e sui metadati",
      "Predisposizione di una futura integrazione con API di messaggistica istantanea per l'invio delle notifiche di spedizione direttamente su mobile",
    ],

    results: [
      "Modellazione fedele di un flusso operativo reale basato sulle reali necessità del cliente",
      "Uso corretto e pulito dei filtri e delle specifiche di Spring Data JPA",
      "Codice backend strutturato, leggibile e privo di logiche di contorno superflue",
    ],
  },

  {
    id: "bstudent",
    title: "BStudent",
    shortDescription:
      "Ecosistema e-learning proprietario con logiche di gamification e tracciamento video on-demand (In Sviluppo).",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript"],
    githubUrl: "",
    image: null,

    overview: `Ecosistema didattico proprietario in fase di sviluppo, progettato per studenti delle scuole superiori. L'obiettivo del software è superare la fruizione passiva dei contenuti unendo un layer pubblico (Blog ottimizzato SEO per l'acquisizione del traffico) a un'area riservata che traccia l'apprendimento attivo attraverso dinamiche di gamification e un'interfaccia video on-demand (VOD).`,

    problem: `Abbandonare l'approccio dei classici portali di e-learning statici. La sfida logica risiede nella progettazione di un 'Core Loop' in cui l'interazione dello studente (tempo di visione dei video, completamento dei test) si converta fluidamente in metriche di progressione (XP, sblocco ricompense) senza sovraccaricare il database con scritture ridondanti.`,

    solution: [
      "Progettazione dell'architettura disaccoppiata: separazione netta tra l'infrastruttura di visualizzazione pubblica e il motore applicativo dell'area utente",
      "Definizione del modulo di Learning Validation: i test di verifica vengono strutturati a livello logico come 'sfide' necessarie per sbloccare i livelli successivi",
      "Studio del sistema di tracciamento video (checkpoint) per garantire il salvataggio dello stato di avanzamento della lezione",
      "Modellazione concettuale del sistema di ricompense basato sull'accumulo di valuta virtuale e punteggi di maestria per materia",
    ],

    architecture: {
      systemFlow: ["Next.js (Client)", "Spring Boot", "PostgreSQL"],
      erdImage: null,
      dataDecisions: [
        "Pianificazione di uno schema relazionale su PostgreSQL ottimizzato per serie temporali (tracciamento checkpoint dei video)",
        "Separazione logica dei domini: gestione delle anagrafiche studenti distinta dalle metriche di gioco (Gamification Engine)",
      ],
    },
    developmentStatus: {
      currentPhase: "Advanced Design & Conceptual Architecture",
      nextSteps: [
        "Definizione del diagramma ERD definitivo per la gestione delle relazioni molti-a-molti tra Studenti, Corsi e Badge",
        "Implementazione delle logiche di persistenza per lo stato dei video on-demand",
        "Sviluppo del motore di calcolo dei punteggi e degli algoritmi di validazione dei test",
      ],
    },
  },

  /* {
    id: "auth-service",
    title: "Auth Service",
    shortDescription:
      "Servizio di autenticazione con JWT, refresh token e gestione ruoli.",
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
      systemFlow: [
        "Client",
        "Auth Controller",
        "Auth Service",
        "Token Repository",
        "PostgreSQL",
      ],
      erdImage:
        "https://drawsql.app/teams/giulia-crepaldi/diagrams/lanzi-orto-urbano-management/embed",
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
      description:
        "Il servizio è pensato per essere consumato da un frontend SPA o da altri microservizi.",
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
  }, */
];
