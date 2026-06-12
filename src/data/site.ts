export const languages = ["en", "fr"] as const;

export type Lang = (typeof languages)[number];

export type LinkItem = {
  label: string;
  url: string;
  kind?: "github" | "external" | "pdf" | "build";
};

export type MediaSlot = {
  type: "placeholder" | "image" | "video";
  label: string;
  caption: Record<Lang, string>;
  src?: string;
  poster?: string;
  restrictedToJournal?: boolean;
};

export type JournalEntry = {
  date: string;
  title: string;
  body: string;
  tags: string[];
};

export type ProjectContent = {
  title: string;
  eyebrow: string;
  pitch: string;
  role: string;
  context: string;
  built: string[];
  highlights: string[];
  learned: string[];
  journalIntro: string;
};

export type Project = {
  slug: string;
  year: string;
  type: "featured" | "archive";
  discipline: "game" | "web" | "software" | "graphics";
  tools: string[];
  accent: "mint" | "amber" | "rose" | "blue" | "green" | "steel";
  links: LinkItem[];
  media: MediaSlot[];
  content: Record<Lang, ProjectContent>;
  journal: Record<Lang, JournalEntry[]>;
};

export const contact = {
  email: "jalloulmohamadnajib@gmail.com",
  github: "https://github.com/Montorin",
  linkedin: "https://www.linkedin.com/in/mohamad-najib-jalloul-6571702aa/",
};

export const ui = {
  en: {
    langName: "English",
    otherLang: "Francais",
    skip: "Skip to content",
    nav: {
      home: "Home",
      projects: "Case Studies",
      journal: "Development Journal",
      archive: "Archive",
      about: "About / Contact",
    },
    home: {
      title: "Mohamad-Najib Jalloul",
      description:
        "A bilingual software developer portfolio spanning game systems, full-stack web apps, Java applications, and C++ prototypes.",
      kicker: "General software developer",
      headline: "Building game systems, web tools, and software foundations.",
      intro:
        "I work across interactive games, full-stack applications, and object-oriented software. This portfolio is organized around project evidence: what I built, how I iterated, and what each system taught me.",
      featured: "Newest featured project",
      featuredCta: "Read the Dollhouse case study",
      journalCta: "Open the Dollhouse journal",
      selected: "Featured work",
      skills: "Core tools and skills",
      archiveCta: "Browse archived projects",
    },
    projects: {
      title: "Project Case Studies",
      description:
        "Selected project case studies focused on role, implementation, technical highlights, and lessons learned.",
      intro:
        "These are the projects that best show my current range across games, web development, Java applications, and C++ systems.",
    },
    journal: {
      title: "Development Journal",
      description:
        "Curated development logs for each featured portfolio project.",
      intro:
        "Each journal summarizes the meaningful milestones behind a project instead of listing every raw commit.",
      viewProject: "View case study",
    },
    archive: {
      title: "Archive",
      description:
        "Earlier projects, prototypes, and learning work that provide extra context.",
      intro:
        "These projects are useful background material. They can be promoted into full case studies later if screenshots, builds, or deeper notes are added.",
    },
    about: {
      title: "About / Contact",
      description:
        "About Mohamad-Najib Jalloul and ways to get in touch.",
      headline: "A software developer with a game-systems spine.",
      body:
        "My work sits between game development and general software engineering: camera systems, interaction prototypes, procedural generation, full-stack apps, Java client-server tools, and C++ combat logic. I like projects where a system has to feel good and still be understandable under the hood.",
      contact: "Contact",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      note: "Use the links above to get in touch or view my public profiles.",
    },
    common: {
      tools: "Tools",
      role: "Role and context",
      built: "What I built",
      highlights: "Technical highlights",
      learned: "What I learned",
      media: "Media",
      links: "Links",
      journal: "Development journal",
      noMedia:
        "Designed placeholder for now. Screenshots and videos can be uploaded later.",
      ownRole: "Focus: my own role",
      readCaseStudy: "Read case study",
      readJournal: "Read journal",
    },
  },
  fr: {
    langName: "Francais",
    otherLang: "English",
    skip: "Aller au contenu",
    nav: {
      home: "Accueil",
      projects: "Etudes de cas",
      journal: "Journal de developpement",
      archive: "Archives",
      about: "A propos / Contact",
    },
    home: {
      title: "Mohamad-Najib Jalloul",
      description:
        "Portfolio bilingue de developpeur logiciel: systemes de jeu, applications web, applications Java et prototypes C++.",
      kicker: "Developpeur logiciel generaliste",
      headline: "Je construis des systemes de jeu, des outils web et des bases logicielles solides.",
      intro:
        "Je travaille autant sur des jeux interactifs que sur des applications full-stack et des logiciels orientes objet. Ce portfolio met l'accent sur les preuves de projet: ce que j'ai construit, comment j'ai itere, et ce que chaque systeme m'a appris.",
      featured: "Projet le plus recent",
      featuredCta: "Lire l'etude de cas Dollhouse",
      journalCta: "Ouvrir le journal Dollhouse",
      selected: "Projets en vedette",
      skills: "Outils et competences",
      archiveCta: "Voir les archives",
    },
    projects: {
      title: "Etudes de cas",
      description:
        "Etudes de cas selectionnees, centrees sur mon role, l'implementation, les points techniques et les apprentissages.",
      intro:
        "Ces projets montrent le mieux mon eventail actuel: jeux, developpement web, applications Java et systemes C++.",
    },
    journal: {
      title: "Journal de developpement",
      description:
        "Journaux de developpement organises pour chaque projet principal du portfolio.",
      intro:
        "Chaque journal resume les etapes importantes du projet au lieu de lister tous les commits bruts.",
      viewProject: "Voir l'etude de cas",
    },
    archive: {
      title: "Archives",
      description:
        "Anciens projets, prototypes et travaux d'apprentissage qui ajoutent du contexte.",
      intro:
        "Ces projets servent de contexte. Ils pourront devenir des etudes de cas completes si des captures, des builds ou des notes plus detaillees sont ajoutes.",
    },
    about: {
      title: "A propos / Contact",
      description:
        "A propos de Mohamad-Najib Jalloul et moyens de contact.",
      headline: "Un developpeur logiciel avec une base solide en systemes de jeu.",
      body:
        "Mon travail se situe entre le developpement de jeux et le genie logiciel general: cameras, interactions, generation procedurale, applications full-stack, outils client-serveur Java et logique de combat C++. J'aime les projets ou un systeme doit etre agreable a utiliser tout en restant clair sous le capot.",
      contact: "Contact",
      email: "Courriel",
      github: "GitHub",
      linkedin: "LinkedIn",
      note:
        "Utilisez les liens ci-dessus pour me contacter ou consulter mes profils publics.",
    },
    common: {
      tools: "Outils",
      role: "Role et contexte",
      built: "Ce que j'ai construit",
      highlights: "Points techniques",
      learned: "Ce que j'ai appris",
      media: "Medias",
      links: "Liens",
      journal: "Journal de developpement",
      noMedia:
        "Visuel temporaire pour l'instant. Les captures et videos pourront etre ajoutees plus tard.",
      ownRole: "Focus: mon propre role",
      readCaseStudy: "Lire l'etude de cas",
      readJournal: "Lire le journal",
    },
  },
} as const;

export const routeMap = {
  en: {
    home: "/en/",
    projects: "/en/projects/",
    projectBase: "/en/projects",
    journal: "/en/journal/",
    journalBase: "/en/journal",
    archive: "/en/archive/",
    about: "/en/about/",
  },
  fr: {
    home: "/fr/",
    projects: "/fr/projets/",
    projectBase: "/fr/projets",
    journal: "/fr/journal/",
    journalBase: "/fr/journal",
    archive: "/fr/archives/",
    about: "/fr/a-propos/",
  },
} as const;

export function getOtherLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}

export function projectPath(lang: Lang, slug: string): string {
  return `${routeMap[lang].projectBase}/${slug}/`;
}

export function journalPath(lang: Lang, slug: string): string {
  return `${routeMap[lang].journalBase}/${slug}/`;
}

export function localizedStaticPath(lang: Lang, key: keyof typeof routeMap.en): string {
  return routeMap[lang][key];
}

export const projects: Project[] = [
  {
    slug: "dollhouse",
    year: "2025-2026",
    type: "featured",
    discipline: "game",
    tools: ["Unreal Engine", "Blueprints", "Perforce", "Game cameras", "Input systems"],
    accent: "mint",
    links: [
      {
        label: "Perforce change report",
        url: "/portfolio_project_inventory.md",
        kind: "pdf",
      },
    ],
    media: [
      {
        type: "video",
        label: "Dollhouse announcement video",
        src: "https://dms.licdn.com/playlist/vid/v2/D4E05AQFVrq258oa7qw/mp4-720p-30fp-crf28/B4EZ3PFMhxIgB8-/0/1777295744155?e=2147483647&v=beta&t=ReXtA0-0gpMjkswCPfxGxvtAPr7ZB05FDYRzUvSJ8UQ",
        poster: "https://media.licdn.com/dms/image/v2/D4E05AQFVrq258oa7qw/videocover-high/B4EZ3PFMhxIgBM-/0/1777295741597?e=2147483647&v=beta&t=qNzMSl4BA-qvKoKlnawXAXQgWLp3T9sPeUJMTDadwc8",
        restrictedToJournal: true,
        caption: {
          en: "Announcement video for Dollhouse, shared from the LinkedIn post.",
          fr: "Video d'annonce de Dollhouse, partagee depuis la publication LinkedIn.",
        },
      },
    ],
    content: {
      en: {
        title: "Dollhouse",
        eyebrow: "Unreal Engine puzzle systems",
        pitch:
          "A room-based Unreal Engine puzzle project built around camera transitions, controller interactions, and mirror-light mechanics.",
        role: "Gameplay systems contributor focused on input, cameras, interaction logic, mirror puzzle behavior, and polish.",
        context:
          "Dollhouse is the newest and deepest project in this portfolio. The current evidence comes from 46 Perforce changelists spanning October 2025 to May 2026.",
        built: [
          "Room camera and follow camera logic for navigating a dollhouse-style level.",
          "Controller-focused joystick minigame with rumble, randomized directions, and dot product scoring.",
          "Mirror/light puzzle actors including light source, mirror, receiver, rotation controls, deadzones, and trace fixes.",
          "Polish work across puzzle levels, VFX, missing asset warnings, and brightness settings UI.",
        ],
        highlights: [
          "Iterated camera systems from early room camera prototypes to follow camera behavior and level integration.",
          "Built mirror interaction so the player can enter a focused interaction mode, rotate mirrors, and return to movement.",
          "Improved trace reliability by fixing infinite calls and actor ignore-array logic.",
        ],
        learned: [
          "How to iterate gameplay systems across Blueprint assets, maps, input bindings, and UI.",
          "How camera behavior changes the feel and readability of puzzle spaces.",
          "How to translate rough changelist history into a readable development story.",
        ],
        journalIntro:
          "Dollhouse has the richest journal because it is backed by the Perforce history recovered from the older chat.",
      },
      fr: {
        title: "Dollhouse",
        eyebrow: "Systemes de puzzle dans Unreal Engine",
        pitch:
          "Un projet de puzzle Unreal Engine base sur des transitions de camera, des interactions a la manette et des mecaniques de lumiere avec miroirs.",
        role: "Contributeur gameplay concentre sur les entrees, les cameras, la logique d'interaction, les miroirs et le polissage.",
        context:
          "Dollhouse est le projet le plus recent et le plus complet du portfolio. Les preuves actuelles viennent de 46 changelists Perforce entre octobre 2025 et mai 2026.",
        built: [
          "Logique de camera de chambre et de camera suiveuse pour naviguer dans un niveau de type maison de poupee.",
          "Mini-jeu de joystick pense pour la manette avec vibration, directions aleatoires et score par produit scalaire.",
          "Acteurs de puzzle lumiere/miroir: source, miroir, recepteur, rotation, deadzones et corrections de line trace.",
          "Polissage des niveaux de puzzle, VFX, avertissements d'assets manquants et option de luminosite.",
        ],
        highlights: [
          "Iteration des cameras depuis les premiers prototypes jusqu'a l'integration dans les niveaux.",
          "Creation d'un mode d'interaction miroir ou le joueur peut ajuster les miroirs puis revenir au deplacement.",
          "Amelioration de la fiabilite des traces en corrigeant les appels infinis et la logique d'acteurs ignores.",
        ],
        learned: [
          "Iterer des systemes gameplay entre Blueprints, maps, entrees et UI.",
          "Comprendre l'impact de la camera sur la lisibilite des espaces de puzzle.",
          "Transformer un historique Perforce brut en histoire de developpement claire.",
        ],
        journalIntro:
          "Dollhouse a le journal le plus riche parce qu'il s'appuie sur l'historique Perforce recupere dans l'ancien chat.",
      },
    },
    journal: {
      en: [
        {
          date: "2025-10",
          title: "Input and camera foundations",
          body:
            "Started by saving thumbstick values, adding visual input debugging, and building early room camera logic.",
          tags: ["Input", "Camera", "Blueprints"],
        },
        {
          date: "2025-10 - 2025-11",
          title: "Joystick minigame iteration",
          body:
            "Implemented a playable joystick minigame, added rumble feedback, randomized held directions, and tracked joystick accuracy with a dot product average.",
          tags: ["Controller", "Minigame", "Feedback"],
        },
        {
          date: "2026-01 - 2026-02",
          title: "Mirror-light puzzle prototype",
          body:
            "Added light source, mirror, and receiver actors. Built mirror interaction, rotation, deadzones, and movement lockout while interacting.",
          tags: ["Puzzle", "Interaction", "Mirror"],
        },
        {
          date: "2026-02 - 2026-03",
          title: "Room and follow camera work",
          body:
            "Created follow camera variants, fixed assigned rooms, corrected startup camera behavior, and integrated camera fixes into levels.",
          tags: ["Camera", "Level integration"],
        },
        {
          date: "2026-03 - 2026-04",
          title: "Trace reliability and VFX polish",
          body:
            "Fixed mirror infinite-call behavior, refined actor ignore arrays, corrected follow camera movement, and polished mirror VFX.",
          tags: ["Debugging", "VFX", "Performance"],
        },
        {
          date: "2026-05",
          title: "Brightness and settings polish",
          body:
            "Added a brightness option through pause/settings UI and updated lighting-related sublevels.",
          tags: ["UI", "Settings", "Polish"],
        },
      ],
      fr: [
        {
          date: "2025-10",
          title: "Bases des entrees et des cameras",
          body:
            "Debut avec la sauvegarde des valeurs de joystick, un affichage de debug des entrees et la premiere logique de camera de chambre.",
          tags: ["Entrees", "Camera", "Blueprints"],
        },
        {
          date: "2025-10 - 2025-11",
          title: "Iteration du mini-jeu de joystick",
          body:
            "Mise en place d'un mini-jeu jouable, ajout de vibration, directions aleatoires et mesure de precision avec une moyenne de produit scalaire.",
          tags: ["Manette", "Mini-jeu", "Feedback"],
        },
        {
          date: "2026-01 - 2026-02",
          title: "Prototype du puzzle lumiere/miroir",
          body:
            "Ajout des acteurs source lumineuse, miroir et recepteur. Creation de l'interaction, de la rotation, des deadzones et du blocage du mouvement pendant l'interaction.",
          tags: ["Puzzle", "Interaction", "Miroir"],
        },
        {
          date: "2026-02 - 2026-03",
          title: "Travail sur les cameras de chambre et de suivi",
          body:
            "Creation de variantes de camera suiveuse, correction des chambres assignees, de la camera initiale et integration dans les niveaux.",
          tags: ["Camera", "Integration niveau"],
        },
        {
          date: "2026-03 - 2026-04",
          title: "Fiabilite des traces et polissage VFX",
          body:
            "Correction des appels infinis du miroir, amelioration des tableaux d'acteurs ignores, correction du mouvement de camera et polissage des VFX.",
          tags: ["Debug", "VFX", "Performance"],
        },
        {
          date: "2026-05",
          title: "Luminosite et polissage des options",
          body:
            "Ajout d'une option de luminosite dans le menu pause/parametres et mise a jour des sous-niveaux d'eclairage.",
          tags: ["UI", "Options", "Polissage"],
        },
      ],
    },
  },
  {
    slug: "student-survivors",
    year: "2022",
    type: "featured",
    discipline: "game",
    tools: ["Unity", "C#", "Object pooling", "WebGL", "2D gameplay"],
    accent: "amber",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Montorin/StudentSurvivors",
        kind: "github",
      },
    ],
    media: [],
    content: {
      en: {
        title: "StudentSurvivors",
        eyebrow: "Unity survivor game",
        pitch:
          "A Unity top-down survivor game with enemy waves, weapon upgrades, pickups, UI feedback, and WebGL build work.",
        role: "Gameplay programmer focused on player systems, weapons, enemies, UI feedback, and build preparation.",
        context:
          "A LaSalle College Unity project that demonstrates early game-loop, progression, and WebGL deployment work.",
        built: [
          "Enemy spawning and object pooling for repeated wave pressure.",
          "Player health, invincibility, movement, weapon activation, and upgrade-influenced stats.",
          "Weapon scripts for katana, scythe, shield, vortex, pool, hot wheel, cooldowns, durations, and spawners.",
          "UI systems for timer, coins, EXP, HP, death text, boss text, and upgrade feedback.",
        ],
        highlights: [
          "Used object pooling to keep repeated enemy/weapon spawning manageable.",
          "Connected saved progression data to player choice, HP, speed, and starting weapons.",
          "Prepared final changes for a WebGL build.",
        ],
        learned: [
          "How Unity scene, script, UI, and animation systems connect in a complete gameplay loop.",
          "Why pooling matters in arcade-style games with lots of repeated objects.",
          "How build targets affect project polish and testing.",
        ],
        journalIntro:
          "The journal summarizes the progression from core gameplay to WebGL-oriented polish.",
      },
      fr: {
        title: "StudentSurvivors",
        eyebrow: "Jeu survivor Unity",
        pitch:
          "Un jeu survivor top-down dans Unity avec vagues d'ennemis, ameliorations d'armes, objets a ramasser, UI et travail WebGL.",
        role: "Programmeur gameplay concentre sur le joueur, les armes, les ennemis, les retours UI et la preparation du build.",
        context:
          "Projet Unity realise a LaSalle College, utile pour montrer une boucle de jeu, une progression et un deploiement WebGL.",
        built: [
          "Apparition d'ennemis et object pooling pour maintenir la pression des vagues.",
          "Sante du joueur, invincibilite, mouvement, activation d'armes et statistiques influencees par les ameliorations.",
          "Scripts d'armes pour katana, faux, bouclier, vortex, pool, hot wheel, cooldowns, durees et spawners.",
          "UI pour minuterie, pieces, EXP, HP, mort, boss et ameliorations.",
        ],
        highlights: [
          "Utilisation de l'object pooling pour gerer les apparitions repetees.",
          "Connexion des donnees sauvegardees au choix du joueur, HP, vitesse et armes de depart.",
          "Preparation des changements finaux pour un build WebGL.",
        ],
        learned: [
          "Relier scenes, scripts, UI et animations Unity dans une boucle de jeu complete.",
          "Comprendre l'importance du pooling dans les jeux d'arcade avec beaucoup d'objets repetes.",
          "Voir comment une cible de build influence le polissage et les tests.",
        ],
        journalIntro:
          "Le journal resume le passage du gameplay de base au polissage pour WebGL.",
      },
    },
    journal: {
      en: [
        {
          date: "Prototype",
          title: "Core survivor loop",
          body:
            "Built the central loop around player movement, enemies, pickups, timer, coins, and survival pressure.",
          tags: ["Unity", "Gameplay loop"],
        },
        {
          date: "Systems",
          title: "Weapons and progression",
          body:
            "Added multiple weapon behaviors, upgrade-driven player stats, EXP variables, and UI feedback for progression.",
          tags: ["Weapons", "Progression"],
        },
        {
          date: "Build",
          title: "WebGL preparation",
          body:
            "Final commits focused on making the game easier to play and preparing WebGL build output.",
          tags: ["WebGL", "Polish"],
        },
      ],
      fr: [
        {
          date: "Prototype",
          title: "Boucle survivor de base",
          body:
            "Construction de la boucle principale: mouvement, ennemis, objets, minuterie, pieces et pression de survie.",
          tags: ["Unity", "Boucle de jeu"],
        },
        {
          date: "Systemes",
          title: "Armes et progression",
          body:
            "Ajout de plusieurs comportements d'armes, statistiques modifiees par les ameliorations, variables d'EXP et retours UI.",
          tags: ["Armes", "Progression"],
        },
        {
          date: "Build",
          title: "Preparation WebGL",
          body:
            "Les derniers commits visaient a rendre le jeu plus facile a jouer et a preparer la sortie WebGL.",
          tags: ["WebGL", "Polissage"],
        },
      ],
    },
  },
  {
    slug: "project-u",
    year: "2025-2026",
    type: "featured",
    discipline: "game",
    tools: ["Godot", "GDScript", "Procedural generation", "2D gameplay"],
    accent: "green",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Montorin/Project-U",
        kind: "github",
      },
    ],
    media: [],
    content: {
      en: {
        title: "Project-U",
        eyebrow: "Godot procedural dungeon prototype",
        pitch:
          "A Godot 2D prototype exploring generated dungeons, critical paths, room discovery, camera movement, and simple player control.",
        role: "Gameplay and systems programmer focused on dungeon generation, room behavior, camera movement, and player controls.",
        context:
          "A compact Godot project that shows procedural thinking and readable gameplay scripting.",
        built: [
          "Configurable dungeon dimensions, start position, critical path length, branch count, and branch length.",
          "Room spawning and player spawning from PackedScene references.",
          "Room trigger behavior that marks discovery, sets the current room, and moves the camera.",
          "Exit blocking/unblocking based on neighboring generated rooms.",
        ],
        highlights: [
          "Exposed generation parameters so the dungeon can be tuned in the editor.",
          "Separated player, room, weapon, and dungeon scripts for clear iteration.",
          "Used room triggers to connect exploration state and camera state.",
        ],
        learned: [
          "How to shape procedural generation with constraints instead of pure randomness.",
          "How Godot scenes, exported variables, and scripts support fast prototyping.",
          "How camera position can reinforce room-based exploration.",
        ],
        journalIntro:
          "The Project-U journal focuses on procedural generation and room exploration.",
      },
      fr: {
        title: "Project-U",
        eyebrow: "Prototype Godot de donjon procedural",
        pitch:
          "Un prototype 2D dans Godot explorant les donjons generes, chemins critiques, decouverte de salles, camera et controles du joueur.",
        role: "Programmeur gameplay et systemes, concentre sur la generation de donjon, les salles, la camera et les controles.",
        context:
          "Un projet Godot compact qui montre une pensee procedurale et du scripting gameplay lisible.",
        built: [
          "Dimensions du donjon, position de depart, longueur du chemin critique, branches et longueur des branches configurables.",
          "Apparition des salles et du joueur a partir de PackedScenes.",
          "Declencheurs de salle pour marquer la decouverte, definir la salle courante et deplacer la camera.",
          "Blocage ou ouverture des sorties selon les salles voisines generees.",
        ],
        highlights: [
          "Parametres exposes dans l'editeur pour ajuster la generation.",
          "Separation claire entre scripts de joueur, salle, arme et donjon.",
          "Utilisation des triggers pour relier exploration et camera.",
        ],
        learned: [
          "Guider la generation procedurale avec des contraintes plutot que du hasard pur.",
          "Utiliser scenes, variables exportees et scripts Godot pour prototyper rapidement.",
          "Renforcer l'exploration par le positionnement de la camera.",
        ],
        journalIntro:
          "Le journal Project-U se concentre sur la generation procedurale et l'exploration par salles.",
      },
    },
    journal: {
      en: [
        {
          date: "Initial prototype",
          title: "Grid and critical path",
          body:
            "Set up a configurable dungeon grid with an entrance and critical path toward a final room.",
          tags: ["Procedural generation", "Grid"],
        },
        {
          date: "Iteration",
          title: "Branches and room spawning",
          body:
            "Expanded generation with branch candidates, variable branch length, room spawning, and player spawning.",
          tags: ["Rooms", "Spawning"],
        },
        {
          date: "Exploration",
          title: "Room camera and exits",
          body:
            "Connected room triggers to camera movement and configured exits based on neighboring generated rooms.",
          tags: ["Camera", "Exploration"],
        },
      ],
      fr: [
        {
          date: "Prototype initial",
          title: "Grille et chemin critique",
          body:
            "Mise en place d'une grille de donjon configurable avec entree et chemin critique vers une salle finale.",
          tags: ["Generation procedurale", "Grille"],
        },
        {
          date: "Iteration",
          title: "Branches et apparition des salles",
          body:
            "Ajout des branches, longueur variable, apparition des salles et apparition du joueur.",
          tags: ["Salles", "Spawn"],
        },
        {
          date: "Exploration",
          title: "Camera de salle et sorties",
          body:
            "Connexion des triggers de salle au mouvement de camera et configuration des sorties selon les salles voisines.",
          tags: ["Camera", "Exploration"],
        },
      ],
    },
  },
  {
    slug: "restaurant-recommender",
    year: "2025",
    type: "featured",
    discipline: "web",
    tools: ["React", "Express", "Node.js", "Google Places API", "Axios", "Geolocation"],
    accent: "rose",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Montorin/Restaurant-Recommender",
        kind: "github",
      },
    ],
    media: [],
    content: {
      en: {
        title: "Restaurant-Recommender",
        eyebrow: "Full-stack recommendation app",
        pitch:
          "A React and Express app that recommends nearby restaurants using location, cuisine, price, diet, radius, and place type filters.",
        role: "Full-stack developer focused on form flow, backend API integration, filtering, and results presentation.",
        context:
          "A practical web app prototype built around user preferences and the Google Places API.",
        built: [
          "React frontend with a recommendation form and results display.",
          "Browser geolocation flow to populate latitude and longitude.",
          "Express backend route for restaurant search.",
          "Diet, price, radius, cuisine, and place-type filtering.",
          "Distance calculation with geolib and results formatted for the UI.",
        ],
        highlights: [
          "Separated frontend interaction from backend API calls.",
          "Mapped user-friendly diet and price inputs to API-ready parameters.",
          "Presented location-aware results with distance, rating, and price data.",
        ],
        learned: [
          "How client-side forms and server-side API calls fit together in a full-stack app.",
          "How external APIs shape data validation and user feedback.",
          "How deployment setup changes when a project has separate frontend and backend folders.",
        ],
        journalIntro:
          "The journal follows the path from initial app setup to backend API fixes and deployment preparation.",
      },
      fr: {
        title: "Restaurant-Recommender",
        eyebrow: "Application de recommandation full-stack",
        pitch:
          "Une application React et Express qui recommande des restaurants proches selon la position, cuisine, prix, regime, rayon et type de lieu.",
        role: "Developpeur full-stack concentre sur le formulaire, l'API backend, les filtres et l'affichage des resultats.",
        context:
          "Prototype web pratique construit autour des preferences utilisateur et de l'API Google Places.",
        built: [
          "Frontend React avec formulaire de recommandation et affichage des resultats.",
          "Geolocalisation du navigateur pour remplir latitude et longitude.",
          "Route backend Express pour la recherche de restaurants.",
          "Filtres de regime, prix, rayon, cuisine et type de lieu.",
          "Calcul de distance avec geolib et formatage des resultats pour l'UI.",
        ],
        highlights: [
          "Separation entre interactions frontend et appels API backend.",
          "Conversion des choix utilisateur en parametres utilisables par l'API.",
          "Affichage de resultats avec distance, note et prix.",
        ],
        learned: [
          "Relier formulaires client et appels serveur dans une application full-stack.",
          "Comprendre comment une API externe influence validation et feedback.",
          "Voir les enjeux de deploiement avec frontend et backend separes.",
        ],
        journalIntro:
          "Le journal suit le passage de la mise en place initiale aux corrections backend et a la preparation du deploiement.",
      },
    },
    journal: {
      en: [
        {
          date: "Setup",
          title: "React form and results flow",
          body:
            "Created the frontend structure around a recommendation form and reusable results display.",
          tags: ["React", "UI"],
        },
        {
          date: "Backend",
          title: "Places API integration",
          body:
            "Built an Express route that receives filters, calls Google Places, maps price and diet options, and returns restaurants.",
          tags: ["Express", "API"],
        },
        {
          date: "Deployment prep",
          title: "Server fixes and Procfile",
          body:
            "Commits show backend fixes and a Procfile for deployment-oriented setup.",
          tags: ["Deploy", "Backend"],
        },
      ],
      fr: [
        {
          date: "Mise en place",
          title: "Formulaire React et resultats",
          body:
            "Creation de la structure frontend autour d'un formulaire de recommandation et d'un affichage de resultats.",
          tags: ["React", "UI"],
        },
        {
          date: "Backend",
          title: "Integration de l'API Places",
          body:
            "Creation d'une route Express qui recoit les filtres, appelle Google Places, convertit les prix/regimes et retourne les restaurants.",
          tags: ["Express", "API"],
        },
        {
          date: "Preparation deploiement",
          title: "Corrections serveur et Procfile",
          body:
            "Les commits montrent des corrections backend et un Procfile pour preparer le deploiement.",
          tags: ["Deploiement", "Backend"],
        },
      ],
    },
  },
  {
    slug: "inf-111-tp2",
    year: "2026",
    type: "featured",
    discipline: "software",
    tools: ["Java", "Maven", "Swing", "Client-server", "Observer pattern"],
    accent: "blue",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Montorin/INF-111-travail-pratique-2",
        kind: "github",
      },
    ],
    media: [],
    content: {
      en: {
        title: "INF-111 Travail Pratique 2",
        eyebrow: "Java delivery management app",
        pitch:
          "A Java client-server delivery manager expanded with a Swing interface, controller layer, and observer-driven updates.",
        role: "Software developer focused on delivery management logic, UI integration, and project fixes within a team assignment.",
        context:
          "A Java coursework project that evolved the first delivery server into a richer desktop application.",
        built: [
          "Client and server modules with shared event and connection classes.",
          "Swing interface with panels for deliveries, couriers, console output, and dialogs.",
          "Controller listeners for menu actions and courier list interactions.",
          "Observer pattern so delivery state changes can update the UI.",
          "File path fix for courier data loading.",
        ],
        highlights: [
          "Moved beyond console/server logic into a desktop UI architecture.",
          "Used model/controller/view-style separation around delivery management.",
          "Extended delivery state with traces, initialization, and observable updates.",
        ],
        learned: [
          "How Java desktop UI code connects to domain logic.",
          "How observer patterns help keep views synchronized with model changes.",
          "How team projects require clear boundaries between features and fixes.",
        ],
        journalIntro:
          "This journal highlights the shift from delivery data structures to a UI-backed Java application.",
      },
      fr: {
        title: "INF-111 Travail Pratique 2",
        eyebrow: "Gestionnaire de livraisons en Java",
        pitch:
          "Un gestionnaire de livraisons client-serveur en Java enrichi avec une interface Swing, une couche controleur et des mises a jour par observateurs.",
        role: "Developpeur logiciel concentre sur la logique de livraison, l'integration UI et les corrections dans un travail d'equipe.",
        context:
          "Projet de cours Java qui transforme le premier serveur de livraison en application desktop plus complete.",
        built: [
          "Modules client et serveur avec classes partagees pour evenements et connexions.",
          "Interface Swing avec panneaux de livraisons, livreurs, console et dialogues.",
          "Controleurs pour les actions de menu et interactions avec la liste de livreurs.",
          "Patron observateur pour mettre a jour l'UI lorsque l'etat des livraisons change.",
          "Correction du chemin de fichier pour charger les donnees de livreurs.",
        ],
        highlights: [
          "Passage d'une logique serveur/console a une architecture d'interface desktop.",
          "Separation de type modele/controleur/vue autour de la gestion des livraisons.",
          "Ajout de traces, initialisation et mises a jour observables.",
        ],
        learned: [
          "Relier une interface Java desktop a la logique metier.",
          "Utiliser le patron observateur pour synchroniser les vues et le modele.",
          "Travailler avec des limites claires entre fonctionnalites et corrections dans un projet d'equipe.",
        ],
        journalIntro:
          "Ce journal montre le passage des structures de donnees de livraison vers une application Java avec interface.",
      },
    },
    journal: {
      en: [
        {
          date: "Base",
          title: "Client-server foundation",
          body:
            "Built on the delivery management client/server structure with couriers, deliveries, event messages, and connections.",
          tags: ["Java", "Client-server"],
        },
        {
          date: "UI",
          title: "Swing application layer",
          body:
            "Added the main Swing window, panels, dialogs, and controller listeners to expose server state visually.",
          tags: ["Swing", "MVC"],
        },
        {
          date: "Architecture",
          title: "Observer updates and fixes",
          body:
            "Connected observable delivery state to UI updates and fixed file path handling for courier data.",
          tags: ["Observer", "Fixes"],
        },
      ],
      fr: [
        {
          date: "Base",
          title: "Fondation client-serveur",
          body:
            "Travail base sur la structure client/serveur avec livreurs, livraisons, messages d'evenement et connexions.",
          tags: ["Java", "Client-serveur"],
        },
        {
          date: "UI",
          title: "Couche d'application Swing",
          body:
            "Ajout de la fenetre principale, panneaux, dialogues et controleurs pour rendre l'etat du serveur visible.",
          tags: ["Swing", "MVC"],
        },
        {
          date: "Architecture",
          title: "Observateurs et corrections",
          body:
            "Connexion de l'etat observable des livraisons aux mises a jour UI et correction du chemin de fichier des livreurs.",
          tags: ["Observateur", "Corrections"],
        },
      ],
    },
  },
  {
    slug: "project-aeneid",
    year: "2025",
    type: "featured",
    discipline: "software",
    tools: ["C++", "Visual Studio", "OOP", "Console app", "Combat systems"],
    accent: "steel",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Montorin/Project-Andeid",
        kind: "github",
      },
    ],
    media: [],
    content: {
      en: {
        title: "Project Aeneid / Project-Andeid",
        eyebrow: "C++ combat prototype",
        pitch:
          "A C++ console RPG combat prototype with characters, initiative checks, defend/attack flow, mana, and polymorphic crystal abilities.",
        role: "C++ systems programmer focused on object-oriented combat structure and prototype flow.",
        context:
          "A Visual Studio C++ project useful for showing object-oriented design and turn-based systems thinking.",
        built: [
          "Player and enemy character classes with shared attributes.",
          "Combat loop with player and enemy turns.",
          "Initiative checks that can skip turns.",
          "Attack, defend, damage, alive checks, mana, and crystal usage.",
          "Abstract crystal class with Light and Void crystal specializations.",
        ],
        highlights: [
          "Used inheritance to share character behavior across player and enemy types.",
          "Used polymorphism for crystal effects.",
          "Kept the combat prototype small enough to reason about and extend.",
        ],
        learned: [
          "How class boundaries shape gameplay systems in C++.",
          "How a small console prototype can validate combat rules before engine work.",
          "How naming consistency matters across repositories, solution files, and portfolio presentation.",
        ],
        journalIntro:
          "The journal frames the C++ prototype as a systems-design learning project.",
      },
      fr: {
        title: "Project Aeneid / Project-Andeid",
        eyebrow: "Prototype de combat en C++",
        pitch:
          "Un prototype RPG de combat en console C++ avec personnages, initiative, attaque/defense, mana et capacites polymorphes par cristaux.",
        role: "Programmeur systemes C++ concentre sur la structure orientee objet du combat et le flux du prototype.",
        context:
          "Projet C++ Visual Studio utile pour montrer le design oriente objet et la conception de systemes tour par tour.",
        built: [
          "Classes joueur et ennemi avec attributs partages.",
          "Boucle de combat avec tours du joueur et de l'ennemi.",
          "Tests d'initiative pouvant faire passer un tour.",
          "Attaque, defense, degats, verification de vie, mana et utilisation de cristaux.",
          "Classe abstraite Crystal avec specialisations Light et Void.",
        ],
        highlights: [
          "Utilisation de l'heritage pour partager le comportement des personnages.",
          "Utilisation du polymorphisme pour les effets de cristaux.",
          "Prototype volontairement compact pour rester facile a comprendre et a etendre.",
        ],
        learned: [
          "Comment les limites de classes influencent les systemes gameplay en C++.",
          "Comment un prototype console peut valider des regles de combat avant un moteur.",
          "Pourquoi la coherence des noms compte entre repo, solution et portfolio.",
        ],
        journalIntro:
          "Le journal presente le prototype C++ comme un projet d'apprentissage en design de systemes.",
      },
    },
    journal: {
      en: [
        {
          date: "Structure",
          title: "Character model",
          body:
            "Defined shared character attributes and behavior for health, damage, initiative, attacking, defending, and mana.",
          tags: ["C++", "OOP"],
        },
        {
          date: "Combat",
          title: "Turn loop",
          body:
            "Added a loop that alternates player and enemy actions until one side is defeated.",
          tags: ["Combat", "Prototype"],
        },
        {
          date: "Abilities",
          title: "Crystal system",
          body:
            "Introduced an abstract Crystal type and specialized Light/Void crystals to explore polymorphic abilities.",
          tags: ["Polymorphism", "Abilities"],
        },
      ],
      fr: [
        {
          date: "Structure",
          title: "Modele de personnage",
          body:
            "Definition des attributs et comportements partages: vie, degats, initiative, attaque, defense et mana.",
          tags: ["C++", "OOP"],
        },
        {
          date: "Combat",
          title: "Boucle de tours",
          body:
            "Ajout d'une boucle alternant joueur et ennemi jusqu'a la defaite d'un des deux.",
          tags: ["Combat", "Prototype"],
        },
        {
          date: "Capacites",
          title: "Systeme de cristaux",
          body:
            "Ajout d'un type abstrait Crystal et de cristaux Light/Void pour explorer les capacites polymorphes.",
          tags: ["Polymorphisme", "Capacites"],
        },
      ],
    },
  },
];

export const archiveProjects: Project[] = [
  {
    slug: "creativejam2024",
    year: "2025",
    type: "archive",
    discipline: "game",
    tools: ["Unreal Engine 5.4", "Blueprints", "Game jam", "VFX"],
    accent: "mint",
    links: [],
    media: [],
    content: {
      en: {
        title: "CreativeJam2024",
        eyebrow: "Unreal Engine game jam",
        pitch:
          "A local Unreal Engine 5.4 game jam project with haunted-house maps, blueprints, characters, UI, sound, and VFX assets.",
        role: "Project contributor; exact role can be refined when screenshots or build notes are available.",
        context:
          "Found in the local Unreal Projects folder and best kept as an archive item until more media is added.",
        built: ["Haunted-house themed Unreal project structure.", "Blueprints for rooms, camera, NPCs, switches, UI, and game mode."],
        highlights: ["Useful game jam context and Unreal asset organization."],
        learned: ["Further Unreal project and rapid-prototype experience."],
        journalIntro: "Archive notes based on local project structure.",
      },
      fr: {
        title: "CreativeJam2024",
        eyebrow: "Game jam Unreal Engine",
        pitch:
          "Projet local de game jam Unreal Engine 5.4 avec cartes de maison hantee, Blueprints, personnages, UI, son et VFX.",
        role: "Contributeur au projet; le role exact pourra etre precise avec captures ou notes de build.",
        context:
          "Trouve dans le dossier Unreal Projects local et garde en archive jusqu'a l'ajout de medias.",
        built: ["Structure de projet Unreal a theme maison hantee.", "Blueprints pour salles, camera, NPCs, interrupteurs, UI et mode de jeu."],
        highlights: ["Contexte utile de game jam et organisation d'assets Unreal."],
        learned: ["Experience supplementaire avec Unreal et le prototypage rapide."],
        journalIntro: "Notes d'archive basees sur la structure locale du projet.",
      },
    },
    journal: { en: [], fr: [] },
  },
  {
    slug: "inf111-tp1",
    year: "2026",
    type: "archive",
    discipline: "software",
    tools: ["Java", "Maven", "Client-server", "Data structures"],
    accent: "blue",
    links: [{ label: "GitHub", url: "https://github.com/Montorin/INF111_TP1", kind: "github" }],
    media: [],
    content: {
      en: {
        title: "INF111_TP1",
        eyebrow: "Java client-server delivery app",
        pitch:
          "The first Java delivery management assignment, focused on client-server communication, courier authentication, delivery queues, and tests.",
        role: "Team project contributor, with focus presented around my own technical work.",
        context: "Archived as the foundation for the later TP2 project.",
        built: ["Client/server modules.", "Courier and delivery data structures.", "Priority queue and tests."],
        highlights: ["Good foundation for Java networking and data structures."],
        learned: ["How a delivery domain model can be split across client/server responsibilities."],
        journalIntro: "Archive notes for the first delivery manager assignment.",
      },
      fr: {
        title: "INF111_TP1",
        eyebrow: "Application Java client-serveur",
        pitch:
          "Premier travail Java de gestion de livraisons, axe sur la communication client-serveur, authentification des livreurs, files de livraison et tests.",
        role: "Contributeur dans un projet d'equipe, avec focus sur mon propre travail technique.",
        context: "Archive comme fondation du projet TP2.",
        built: ["Modules client/serveur.", "Structures de donnees pour livreurs et livraisons.", "File de priorite et tests."],
        highlights: ["Bonne base pour reseau Java et structures de donnees."],
        learned: ["Decouper un domaine de livraison entre responsabilites client et serveur."],
        journalIntro: "Notes d'archive pour le premier gestionnaire de livraisons.",
      },
    },
    journal: { en: [], fr: [] },
  },
  {
    slug: "opengl",
    year: "2025",
    type: "archive",
    discipline: "graphics",
    tools: ["C++", "OpenGL", "GLFW", "GLAD", "Visual Studio"],
    accent: "steel",
    links: [],
    media: [],
    content: {
      en: {
        title: "OpenGL",
        eyebrow: "Graphics setup project",
        pitch:
          "A C++ OpenGL setup project that initializes GLFW/GLAD, creates a window, handles resize, and renders a clear loop.",
        role: "Graphics programming learner focused on the OpenGL startup pipeline.",
        context: "Kept as a smaller technical archive item.",
        built: ["GLFW initialization.", "OpenGL 3.3 core profile window.", "GLAD loading, viewport resize, and render loop."],
        highlights: ["Shows the first layer of graphics programming setup."],
        learned: ["How a native OpenGL application boots and owns its render loop."],
        journalIntro: "Archive notes for the OpenGL learning project.",
      },
      fr: {
        title: "OpenGL",
        eyebrow: "Projet de base graphique",
        pitch:
          "Projet C++ OpenGL qui initialise GLFW/GLAD, cree une fenetre, gere le resize et lance une boucle de rendu.",
        role: "Apprenant en programmation graphique, concentre sur le demarrage d'une application OpenGL.",
        context: "Garde comme petit element technique d'archive.",
        built: ["Initialisation GLFW.", "Fenetre OpenGL 3.3 core profile.", "Chargement GLAD, viewport responsive et boucle de rendu."],
        highlights: ["Montre la premiere couche d'un projet graphique natif."],
        learned: ["Comment une application OpenGL native demarre et gere sa boucle de rendu."],
        journalIntro: "Notes d'archive pour le projet OpenGL.",
      },
    },
    journal: { en: [], fr: [] },
  },
  {
    slug: "tank-shooter",
    year: "2023",
    type: "archive",
    discipline: "game",
    tools: ["Unreal Engine", "C++", "Blueprints"],
    accent: "green",
    links: [],
    media: [],
    content: {
      en: {
        title: "Tank Shooter",
        eyebrow: "Unreal tank prototype",
        pitch:
          "A tank shooting prototype with a movable tank, turret enemies, and smooth aiming/movement.",
        role: "Gameplay developer on an Unreal/C++ learning project.",
        context: "Recovered from the previous local portfolio site.",
        built: ["Movable tank.", "Turret enemies.", "Smooth aiming and movement."],
        highlights: ["Connected Unreal C++ classes and Blueprints."],
        learned: ["Unreal classes, engine libraries, and C++/Blueprint relationships."],
        journalIntro: "Archive notes from the old portfolio writeup.",
      },
      fr: {
        title: "Tank Shooter",
        eyebrow: "Prototype de tank Unreal",
        pitch:
          "Prototype de tir avec tank deplacable, tourelles ennemies et visee/deplacement fluides.",
        role: "Developpeur gameplay sur un projet d'apprentissage Unreal/C++.",
        context: "Recupere de l'ancien portfolio local.",
        built: ["Tank deplacable.", "Tourelles ennemies.", "Visee et mouvement fluides."],
        highlights: ["Connexion entre classes C++ Unreal et Blueprints."],
        learned: ["Classes Unreal, bibliotheques du moteur et relation C++/Blueprints."],
        journalIntro: "Notes d'archive de l'ancien portfolio.",
      },
    },
    journal: { en: [], fr: [] },
  },
  {
    slug: "solaris-assault",
    year: "2023",
    type: "archive",
    discipline: "game",
    tools: ["Unity", "C#", "Object pooling", "2D gameplay"],
    accent: "amber",
    links: [],
    media: [],
    content: {
      en: {
        title: "Solaris Assault",
        eyebrow: "2D bullet-hell prototype",
        pitch:
          "A top-down 2D bullet-hell project with multiple enemies, player abilities, and a boss encounter.",
        role: "Gameplay developer on a Unity learning project.",
        context: "Recovered from the previous local portfolio site.",
        built: ["Multiple enemies.", "Multiple player abilities.", "Boss at the end of the level."],
        highlights: ["Object pooling and Unity gameplay pipeline practice."],
        learned: ["Unity engine workflow, Unity libraries, and object pooling."],
        journalIntro: "Archive notes from the old portfolio writeup.",
      },
      fr: {
        title: "Solaris Assault",
        eyebrow: "Prototype bullet hell 2D",
        pitch:
          "Projet bullet hell top-down 2D avec plusieurs ennemis, capacites de joueur et combat de boss.",
        role: "Developpeur gameplay sur un projet d'apprentissage Unity.",
        context: "Recupere de l'ancien portfolio local.",
        built: ["Plusieurs ennemis.", "Plusieurs capacites joueur.", "Boss a la fin du niveau."],
        highlights: ["Pratique de l'object pooling et du pipeline Unity."],
        learned: ["Workflow Unity, bibliotheques Unity et object pooling."],
        journalIntro: "Notes d'archive de l'ancien portfolio.",
      },
    },
    journal: { en: [], fr: [] },
  },
  {
    slug: "zombie-arcade",
    year: "2023",
    type: "archive",
    discipline: "game",
    tools: ["Unreal Engine", "Line tracing", "Gameplay loops"],
    accent: "rose",
    links: [],
    media: [],
    content: {
      en: {
        title: "Zombie Arcade",
        eyebrow: "Round-based zombie prototype",
        pitch:
          "A zombie arcade project inspired by Call of Duty Zombies, with responsive gameplay, round progression, menu, and death screen.",
        role: "Gameplay developer on an arcade shooter learning project.",
        context: "Recovered from the previous local portfolio site.",
        built: ["Responsive gameplay.", "Round-based enemy progression.", "Main menu and death screen."],
        highlights: ["Used Unreal, imported assets, and line tracing."],
        learned: ["Unreal workflow, Quixel/importing files, and line tracing."],
        journalIntro: "Archive notes from the old portfolio writeup.",
      },
      fr: {
        title: "Zombie Arcade",
        eyebrow: "Prototype zombie par manches",
        pitch:
          "Projet arcade de zombies inspire de Call of Duty Zombies, avec gameplay reactif, progression par manches, menu et ecran de mort.",
        role: "Developpeur gameplay sur un projet d'apprentissage de shooter arcade.",
        context: "Recupere de l'ancien portfolio local.",
        built: ["Gameplay reactif.", "Progression des ennemis par manches.", "Menu principal et ecran de mort."],
        highlights: ["Utilisation d'Unreal, import d'assets et line tracing."],
        learned: ["Workflow Unreal, Quixel/importation de fichiers et line tracing."],
        journalIntro: "Notes d'archive de l'ancien portfolio.",
      },
    },
    journal: { en: [], fr: [] },
  },
];

export const allProjects = [...projects, ...archiveProjects];

export function getProject(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects;
}

export function getArchiveProjects(): Project[] {
  return archiveProjects;
}

export const skillGroups = {
  en: [
    "Gameplay systems",
    "Developer tooling",
    "Procedural generation",
    "Full-stack web applications",
    "Client-server architecture",
    "Object-oriented systems design",
  ],
  fr: [
    "Systemes gameplay",
    "Outils de developpement",
    "Generation procedurale",
    "Applications web full-stack",
    "Architecture client-serveur",
    "Design de systemes orientes objet",
  ],
};
