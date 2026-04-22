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
    id: "order-management",
    title: "Order Management System",
    shortDescription: "REST API per la gestione degli ordini con ruoli utente e autenticazione JWT.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/tuoprofilo/order-management",
    demoUrl: undefined,
    image: null,

    overview: `Sistema backend per la gestione completa degli ordini e-commerce. Espone una REST API consumabile da qualsiasi frontend o client mobile. Gestisce utenti con ruoli differenziati (ADMIN, USER), autenticazione JWT e operazioni CRUD complete su ordini e prodotti.`,

    problem: `Le applicazioni e-commerce necessitano di un layer backend solido che gestisca ordini concorrenti, sicurezza degli endpoint per ruolo, e coerenza dei dati anche in scenari di errore. Molte implementazioni naive non separano correttamente i layer o non gestiscono l'autenticazione in modo stateless.`,

    solution: [
      "REST API con endpoints semantici e response uniformi",
      "JWT stateless: nessuna sessione server-side",
      "Separazione netta in Controller → Service → Repository",
      "Gestione errori centralizzata con @ControllerAdvice",
      "Validazione input con Bean Validation (@Valid)",
    ],

    architecture: {
      systemFlow: ["Client", "Controller", "Service", "Repository", "PostgreSQL"],
      erdImage: null,
      dataDecisions: [
        "Users ↔ Roles (many-to-many tramite tabella ponte)",
        "Orders ↔ Items (one-to-many, cascade delete)",
        "Products separati dagli OrderItems per storicizzare i prezzi",
      ],
    },

    apiEndpoints: [
      {
        method: "GET",
        path: "/api/orders/{id}",
        description: "Recupera un ordine per ID",
        responseExample: `{
  "id": 1,
  "status": "SHIPPED",
  "createdAt": "2024-01-15T10:30:00",
  "items": [
    { "productId": 42, "quantity": 2, "price": 29.99 }
  ]
}`,
      },
      {
        method: "POST",
        path: "/api/orders",
        description: "Crea un nuovo ordine",
        responseExample: `{
  "id": 2,
  "status": "PENDING",
  "createdAt": "2024-01-16T08:00:00"
}`,
      },
      {
        method: "PUT",
        path: "/api/orders/{id}/status",
        description: "Aggiorna lo status di un ordine (solo ADMIN)",
        responseExample: `{
  "id": 1,
  "status": "DELIVERED"
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
      "Implementare RBAC (Role-Based Access Control) granulare con Spring Security",
      "Mantenere la clean architecture senza leakage tra i layer",
      "Garantire coerenza dei dati durante operazioni multi-step con @Transactional",
    ],

    improvements: [
      "Aggiungere caching con Redis per prodotti e ordini frequenti",
      "Implementare paginazione e filtri avanzati sulle liste",
      "Passare ad architettura event-driven con Kafka per notifiche",
    ],

    results: [
      "API design RESTful con endpoints intuitivi e documentati",
      "Data modeling relazionale con vincoli di integrità",
      "Struttura backend scalabile e manutenibile",
    ],
  },

  {
    id: "task-manager",
    title: "Task Manager API",
    shortDescription: "API per la gestione delle attività con utenti, scadenze e priorità.",
    tags: ["Java", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/tuoprofilo/task-manager",
    image: null,

    overview: `API per la gestione di task personali e di team. Supporta assegnazione utenti, priorità, scadenze e stati del task. Usa MongoDB per la flessibilità dello schema.`,

    problem: `I sistemi di task management richiedono strutture dati flessibili (i task possono avere attributi variabili) e query efficienti per filtri multipli (per utente, priorità, scadenza).`,

    solution: [
      "MongoDB per schema flessibile e query su campi annidati",
      "Filtri combinabili tramite query params",
      "Assegnazione task a più utenti",
      "Notifiche scadenza (base)",
    ],

    architecture: {
      systemFlow: ["Client", "Controller", "Service", "Repository", "MongoDB"],
      erdImage: null,
      dataDecisions: [
        "Document-based: ogni task contiene gli assignees embedded",
        "Indici su dueDate e priority per query performanti",
      ],
    },

    apiEndpoints: [
      {
        method: "GET",
        path: "/api/tasks",
        description: "Lista task con filtri opzionali",
        responseExample: `[
  {
    "id": "abc123",
    "title": "Fix login bug",
    "priority": "HIGH",
    "dueDate": "2024-02-01",
    "status": "IN_PROGRESS"
  }
]`,
      },
    ],

    frontendIntegration: null,

    challenges: [
      "Progettare query flessibili con filtri multipli combinabili",
      "Gestire la consistenza in assenza di transazioni ACID native",
    ],

    improvements: [
      "WebSocket per aggiornamenti real-time",
      "Sistema di notifiche email per scadenze",
    ],

    results: [
      "API flessibile con MongoDB",
      "Filtri multipli combinabili",
      "Schema adattabile a requisiti variabili",
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
      erdImage: null,
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