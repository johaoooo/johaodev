// ════════════════════════════════════════════════════════════════
// useSEO.jsx — Données SEO (source unique)
//
// AVANT : hook + composant <SEOHead> basés sur react-helmet-async,
// qui injectait title/meta/OG/JSON-LD côté client uniquement — sans
// pipeline SSG pour les figer dans le HTML statique, donc peu fiable
// pour les crawlers (cause historique du problème d'indexation).
//
// MAINTENANT : ce fichier n'exporte plus que les DONNÉES. Elles sont
// consommées par src/app/layout.js via l'API Metadata native de
// Next.js (`export const metadata`) — vraiment rendues côté serveur
// dans le HTML renvoyé, donc lues par Google sans exécuter de JS.
//
// SEO_CONFIG et STRUCTURED_DATA.person / .localBusiness reprennent
// exactement les données déjà utilisées ici avant la migration.
// STRUCTURED_DATA.faq a été rapatrié depuis index.html (il n'existait
// qu'à cet endroit, jamais dans ce fichier) pour n'avoir plus qu'une
// seule source de vérité SEO dans tout le projet.
// ════════════════════════════════════════════════════════════════

export const SEO_CONFIG = {
  default: {
    title: "Joseph Dehazounde — Analyste Cybersécurité & Développeur Full Stack",
    description:
      "Joseph Dehazounde, analyste en cybersécurité et développeur full stack : audits de sécurité web (OWASP), pentest Burp Suite et développement d'applications résilientes React / Django REST.",
    keywords:
      "analyste cybersécurité Bénin, pentest web Cotonou, développeur full stack Bénin, OWASP Top 10, audit de sécurité web, développeur React Django, Joseph Dehazounde, JohaoDev",
    url: 'https://johaodev.vercel.app/',
    image: '/assets/images/hero-profile.webp',
  },
}

export const STRUCTURED_DATA = {
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Joseph Dehazounde — Portfolio Cybersécurité & Dev',
    alternateName: 'JohaoDev',
    url: 'https://johaodev.vercel.app/',
    inLanguage: 'fr-FR',
    description: SEO_CONFIG.default.description,
    publisher: { '@id': 'https://github.com/johaoooo#person' },
    potentialAction: {
      '@type': 'ContactAction',
      target: 'mailto:josephdehazounde@gmail.com',
      name: 'Contacter Joseph Dehazounde',
    },
  },
  webPage: {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: SEO_CONFIG.default.title,
    url: SEO_CONFIG.default.url,
    inLanguage: 'fr-FR',
    description: SEO_CONFIG.default.description,
    isPartOf: { '@id': 'https://github.com/johaoooo#website' },
    about: { '@id': 'https://github.com/johaoooo#person' },
    mainEntity: { '@id': 'https://github.com/johaoooo#person' },
  },
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://github.com/johaoooo#person',
    name: "Joseph Dehazounde",
    alternateName: 'johaoooo',
    url: 'https://github.com/johaoooo',
    image: '/assets/images/hero-profile.webp',
    jobTitle: 'Analyste Cybersécurité & Développeur Full Stack',
    description:
      "Analyste en cybersécurité et développeur full stack basé au Bénin, spécialisé en audit web OWASP, pentest Burp Suite et applications React / Django REST.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto-Novo',
      addressCountry: 'BJ',
    },
    email: 'mailto:josephdehazounde@gmail.com',
    telephone: '+229-01-62-10-86-94',
    worksFor: {
      '@type': 'Organization',
      name: 'JohaoDev',
      url: 'https://github.com/johaoooo',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'Cisco — Cybersecurity & Networking' },
      { '@type': 'EducationalOccupationalCredential', name: 'FORCE-N via Université Cheikh Amidou Kane — IA, Marketing Digital, Informatique & Internet' },
      { '@type': 'EducationalOccupationalCredential', name: 'Bootcamp Cybersécurité OIF / D-CLIC' },
      { '@type': 'EducationalOccupationalCredential', name: 'OpenClassrooms & Coursera — Développement web & Sécurité' },
    ],
    sameAs: [
      'https://github.com/johaoooo',
      'https://linkedin.com/in/dehazounde-joseph',
    ],
    knowsAbout: [
      'Cybersécurité',
      'Audit Web',
      'OWASP Top 10',
      'Burp Suite',
      'Kali Linux',
      'React.js',
      'Next.js',
      'Django REST Framework',
      'Python',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://github.com/johaoooo#business',
    name: 'JohaoDev — Cybersécurité & Solutions Web',
    founder: {
      '@type': 'Person',
      name: "Joseph Dehazounde",
    },
    url: 'https://github.com/johaoooo',
    logo: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1789143433/WhatsApp_Image_2026-09-11_at_17.16.04_oljqqs.png',
    image: '/assets/images/hero-profile.webp',
    description:
      "Audit de sécurité web (OWASP Top 10), tests d'intrusion Burp Suite et développement d'applications web sécurisées et résilientes (React, Django REST Framework).",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Porto-Novo',
      addressCountry: 'BJ',
    },
    areaServed: {
      '@type': 'Country',
      name: "Bénin",
    },
    priceRange: '100 000 – 1 200 000 FCFA',
    telephone: '+229-01-62-10-86-94',
    email: 'josephdehazounde@gmail.com',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Cybersécurité & Développement JohaoDev',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Portfolio Web',
            description: 'Portfolio moderne animé — 3 à 14 jours, dès 100 000 FCFA',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Vitrine',
            description: "Site vitrine professionnel — 5 à 14 jours, dès 220 000 FCFA",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce',
            description: "Boutique en ligne Mobile Money — dès 450 000 FCFA",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Application SaaS',
            description: 'Application web sur devis, Django + React',
          },
        },
      ],
    },
  },

  // Rapatrié depuis index.html (n'existait qu'à cet endroit avant la migration)
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment se déroule le paiement de mon site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le paiement se fait en deux fois : 50% à la commande pour démarrer le projet, et les 50% restants à la livraison, juste avant de recevoir les fichiers finaux et les accès.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi un acompte est-il demandé avant de commencer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'acompte confirme votre commande et me permet de démarrer le développement immédiatement, de récupérer vos contenus (logo, textes, photos) et de vous garantir le délai annoncé. Sans acompte, le projet n'est pas priorisé dans mon planning.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quels moyens de paiement acceptez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orange Money, MTN Mobile Money, Wave ou virement bancaire. Vous précisez votre moyen préféré au moment de la commande et je vous envoie les coordonnées correspondantes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le délai pour recevoir mon site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cela dépend du pack choisi : 3 à 5 jours pour un portfolio simple, davantage pour une vitrine, une boutique e-commerce ou une application plus complexe. Le délai exact est précisé dans le devis et démarre dès réception de l\'acompte et de vos contenus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quand mon site est-il mis en ligne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une fois le solde réglé. Avant cela, je vous partage un lien de prévisualisation pour valider le design et le contenu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je voir mon site avant qu\'il soit en ligne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, toujours. Vous recevez un lien de prévisualisation pour tester le site, faire vos retours et demander des ajustements avant la mise en ligne officielle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de modifications sont incluses ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les petites corrections — textes, couleurs, ajustements visuels — sont incluses pendant la phase de validation. Les modifications majeures, comme un changement de structure ou l\'ajout de pages, font l\'objet d\'un devis complémentaire.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel pack choisir pour mon projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tout dépend de vos besoins : portfolio, vitrine, boutique e-commerce ou application plus complexe type SaaS. Je vous conseille gratuitement lors du brief initial pour identifier le pack le plus adapté.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le nom de domaine et l\'hébergement sont-ils vraiment gratuits ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, la première année est offerte sur tous les packs. Après cette période, vous payez simplement le renouvellement — environ 15 000 à 30 000 FCFA par an selon le domaine — et je vous envoie un rappel avant l\'expiration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels contenus dois-je fournir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Votre logo, vos photos, vos textes de présentation et vos informations de contact. Plus ces éléments arrivent vite, plus le développement avance rapidement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Je n\'ai pas de logo ni de textes, pouvez-vous m\'aider ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Je peux proposer un logo simple, utiliser des visuels libres de droits adaptés à votre activité, ou rédiger une trame de textes professionnels que vous ajustez ensuite. Ces services s\'ajoutent au devis initial.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qui gère mon site après la livraison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous. Je vous transmets tous les accès — administration, hébergement, nom de domaine — ainsi qu\'un tutoriel simple pour modifier vos textes et images sans dépendre de moi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Que se passe-t-il si le délai annoncé n\'est pas respecté ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C\'est rare, mais si cela arrive de mon fait, une pénalité s\'applique sur le montant total et vous pouvez demander l\'annulation du projet avec un remboursement partiel. Ces conditions figurent dans le devis signé.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mon site a un bug après la livraison, que faites-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Je corrige gratuitement tout bug lié à mon développement pendant le mois suivant la livraison — inclus dans le pack Premium, possible en option sur les autres packs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment commander mon site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trois étapes : on échange sur votre projet et le pack adapté, je vous envoie un devis avec l\'acompte de 50%, puis dès réception du paiement je démarre le développement.',
        },
      },
    ],
  },
}
