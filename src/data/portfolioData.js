// ════════════════════════════════════════════════════════════════
// src/data/portfolioData.js
// Source de vérité unique pour le portfolio de Joseph Dehazounde
// Partagé entre App.jsx (desktop), Appmobile.jsx, et Win95Portfolio.jsx
// ════════════════════════════════════════════════════════════════

import { cld } from '../lib/cloudinary.js'

// ─── Identité / contact ────────────────────────────────────────
export const CONTACT = {
  name: "Joseph Dehazounde",
  shortName: 'Joseph',
  short: 'Joseph D.',
  title: 'Analyste en cybersécurité, développeur web fullstack et marketeur',
  tagline: "Analyste en cybersécurité, développeur web fullstack et marketeur",
  agency: 'JohaoDev',
  agencyUrl: 'https://github.com/johaoooo',
  site: 'https://github.com/johaoooo',
  location: "Porto-Novo, Bénin",
  email: 'josephdehazounde@gmail.com',
  phone: '+229 01 62 10 86 94',
  whatsapp: '+229 01 62 10 86 94',
  whatsappUrl: 'https://wa.me/2290162108694',
  github: 'https://github.com/johaoooo',
  linkedin: 'https://linkedin.com/in/dehazounde-joseph',
  facebook: 'https://facebook.com',
  photo: '/assets/images/hero-profile.webp',
  heroPhoto: '/assets/images/hero-profile.webp',
  cv: '/assets/CV_DEHAZOUNDE_Joseph.pdf',
}

// ─── Projets ────────────────────────────────────────────────────
// Ordre = ordre d'affichage : AVS + Saveurs d'Agojiés en premier (mis en avant).
export const PROJECTS = [
  {
    id: 7,
    title: 'Agro Véto Services',
    sub: 'Santé animale, Provenderie & Excellence QHSE',
    cat: 'en-ligne',
    img: cld('/assets/images/projects/avs-preview.webp'),
    responsive: cld('/assets/images/projects/avs-responsive.webp'),
    imgFb: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1789147484/avs_dslfdb.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Mobile Money'],
    url: 'https://avs-wine.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Plateforme complète pour Agro Véto Services Congo à Pointe-Noire : clinique vétérinaire 24/7, provenderie certifiée, boutique d'intrants (poussins Cobb 500), formations fermes-écoles et management QHSE.",
    year: '2026',
    problem: "Entreprise pluridisciplinaire sans vitrine digitale unifiée pour ses 6 pôles (santé animale, QHSE, agroalimentaire, cosmétique, formation, événementiel) et prise de commande manuelle.",
    solution: "Site Next.js déployé sur Vercel avec boutique et tarifs, prise de rendez-vous clinique, catalogue formations, blog conseils d'élevage et contact WhatsApp direct.",
    result: "Vitrine unique qui centralise clients éleveurs, commandes de poussins et inscriptions aux formations, avec demande de devis QHSE pour les PME."
  },
  {
    id: 4,
    title: "Saveurs d'Agojiés",
    sub: 'E-Boutique Gastronomique & Terroir Béninois',
    cat: 'en-ligne',
    img: cld('/assets/images/projects/saveurs-preview.webp'),
    responsive: cld('/assets/images/projects/saveurs-responsive.webp'),
    imgFb: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1789147490/agojie_qwlp0m.png',
    tech: ['React', 'Node.js', 'Vite', 'Tailwind CSS'],
    url: 'https://saveurs-d-agojies.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "E-boutique gastronomique dédiée aux mets et produits transformés du terroir béninois, avec panier interactif et tunnel d'achat optimisé.",
    year: '2025',
    problem: "Faible valorisation numérique des produits du terroir béninois et commande complexe sur les réseaux sociaux.",
    solution: "Site e-commerce épuré et rapide avec présentation appétissante des produits, panier dynamique en LocalStorage et commande directe.",
    result: "Hausse de la visibilité des produits locaux et expérience d'achat directe pour les clients locaux et de la diaspora."
  },
  {
    id: 1,
    title: 'CNIB Platform',
    sub: 'Plateforme E-learning & Certifications',
    cat: 'en-ligne',
    img: cld('/assets/images/projects/cnib-preview.webp'),
    responsive: cld('/assets/images/projects/cnib-responsive.webp'),
    imgFb: 'https://res.cloudinary.com/dzxesa3wi/image/upload/v1789147729/cnib_iaxfzw.png',
    tech: ['Django REST', 'React', 'Vite', 'PostgreSQL', 'Cloudinary', 'KKiaPay'],
    url: 'https://cnib-platform-c5ru.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Plateforme d'apprentissage en ligne adaptée au contexte africain avec catalogue interactif, paiements mobiles KKiaPay, examens et délivrance d'attestations certifiées.",
    year: '2026',
    problem: "Absence d'une plateforme d'apprentissage en ligne adaptée au contexte francophone africain avec paiement local sécurisé par Mobile Money.",
    solution: "Architecture découplée Django REST Framework + React/Vite déployée sur Render/Vercel. Intégration KKiaPay, stockage médias Cloudinary, avis et contrôle d'accès conditionnel.",
    result: "Plateforme fonctionnelle avec parcours apprenant complet, tests de validation et déblocage automatisé des attestations après paiement vérifié."
  },
  {
    id: 2,
    title: 'XoboTicket',
    sub: "Gestion & Réservation de Stands d'Exposition",
    cat: 'en-ligne',
    img: cld('/assets/images/projects/dashboard-preview.webp'),
    responsive: cld('/assets/images/projects/dashboard-preview.webp'),
    imgFb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
    tech: ['Django', 'React', 'Vite', 'PostgreSQL', 'RBAC', 'Render'],
    url: 'https://xobo-ticket.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Système de réservation, attribution et validation de stands pour foires et événements avec contrôle d'accès par rôle (RBAC) et validation par jeton sécurisé.",
    year: '2026',
    problem: "Gestion manuelle, lente et désorganisée des stands lors d'événements, avec risques de doublons et absence de traçabilité des exposants.",
    solution: "Workflow complet : génération de code sécurisé envoyé par email, tableau de bord exposant/admin, navigation adaptée aux rôles et déploiement Render/Vercel.",
    result: "Gain de temps de 80% dans la validation des stands et élimination complète des conflits d'attribution."
  },
  {
    id: 3,
    title: 'Golden Invest',
    sub: "Plateforme d'Investissement Africain",
    cat: 'en-ligne',
    img: cld('/assets/images/projects/newhorizon-preview.webp'),
    responsive: cld('/assets/images/projects/newhorizon.webp'),
    imgFb: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600',
    tech: ['Next.js', 'TypeScript', 'Django REST', 'Tailwind CSS', 'PostgreSQL'],
    url: 'https://gold-platform-ecru.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Plateforme financière et d'investissement connectant entrepreneurs à fort potentiel et investisseurs accrédités dans l'espace UEMOA.",
    year: '2025',
    problem: "Manque d'infrastructures fiables et structurées pour mettre en relation investisseurs et startups en Afrique francophone.",
    solution: "Application Next.js / TypeScript avec API Django REST, flux d'authentification robuste (JWT), vérification de profil KYC et tableaux de bord d'analyse.",
    result: "Mise en relation fluidifiée et confiance renforcée grâce aux profils validés par les administrateurs."
  },
  {
    id: 5,
    title: 'AgroTrust',
    sub: 'AgriTech · Marketplace Producteurs',
    cat: 'en-ligne',
    img: cld('/assets/images/projects/terrasafe-preview.webp'),
    responsive: cld('/assets/images/projects/terrasafe.webp'),
    imgFb: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600',
    tech: ['React', 'Django REST', 'PostgreSQL', 'Tailwind CSS'],
    url: 'https://agrotrust-two.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Plateforme AgriTech facilitant la mise en relation directe et équitable entre agriculteurs locaux et grossistes/consommateurs.",
    year: '2025',
    problem: "Les producteurs agricoles subissent de fortes commissions d'intermédiaires et peinent à écouler leurs récoltes à temps.",
    solution: "Marketplace agricole directe avec fiches récoltes, alertes de disponibilité et cotation transparente.",
    result: "Meilleure marge pour les producteurs et transparence accrue pour les acheteurs."
  },
  {
    id: 6,
    title: 'MacBenin (AfiShop)',
    sub: 'Mode & Artisanat Contemporain Africain',
    cat: 'en-ligne',
    img: cld('/assets/images/projects/tati-preview.webp'),
    responsive: cld('/assets/images/projects/tati.webp'),
    imgFb: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600',
    tech: ['React', 'Django', 'Tailwind CSS', 'Vercel'],
    url: 'https://afishop-y9ww.vercel.app/',
    github: 'https://github.com/johaoooo',
    desc: "Vitrine e-commerce pour la Maison Afi Collection : valorisation des créations textiles, artisanat d'art et vente en ligne.",
    year: '2026',
    problem: "Manque d'une vitrine internationale digne du standing haut de gamme des créations artisanales de la Maison Afi.",
    solution: "Boutique en ligne moderne avec mise en valeur éditoriale des collections, zoom produits et parcours d'achat sécurisé.",
    result: "Rayonnement accru de la marque et valorisation authentique du savoir-faire artisanal béninois."
  },
]

// ─── Pricing / Prestations ───────────────────────────────────────
export const PRICING_TABS = [
  {
    key: 'cyber', label: 'Audit & Sécurité',
    plans: [
      { title: 'Audit Flash', price: '150 000 FCFA', delivery: '3 à 5 jours' },
      { title: 'Pentest Web OWASP', price: '300 000 FCFA', delivery: '5 à 7 jours', isPopular: true },
      { title: 'Sécurisation Complète', price: '550 000 FCFA', delivery: '7 à 10 jours' },
    ],
    rows: [
      { label: 'Reconnaissance & cartographie', cells: [true, true, true] },
      { label: 'Test OWASP Top 10 (XSS, SQLi, CSRF, IDOR)', cells: [true, true, true] },
      { label: 'Analyse des vulnérabilités avec Burp Suite', cells: [false, true, true] },
      { label: 'Audit de configuration serveur / headers', cells: [true, true, true] },
      { label: 'Contrôle des flux d\'authentification & JWT', cells: [false, true, true] },
      { label: 'Rapport technique avec niveaux de criticité (CVSS)', cells: [true, true, true] },
      { label: 'Guide de remédiation pas-à-pas pour les développeurs', cells: [false, true, true] },
      { label: 'Contre-audit après correction', cells: [false, false, true] },
      { label: 'Assistance au durcissement (Hardening)', cells: [false, false, true] },
      { label: 'Support & accompagnement post-audit', cells: [false, '15 jours', '1 mois'] },
    ],
  },
  {
    key: 'web', label: 'Développement Web',
    plans: [
      { title: 'Site Vitrine', price: '200 000 FCFA', delivery: '5 à 7 jours' },
      { title: 'Fullstack Pro', price: '450 000 FCFA', delivery: '10 à 14 jours', isPopular: true },
      { title: 'Plateforme Sur-Mesure', price: '800 000 FCFA', delivery: '15 à 25 jours' },
    ],
    rows: [
      { label: 'Design moderne & 100% responsive', cells: [true, true, true] },
      { label: 'Stack moderne (React, Vite, Next.js)', cells: [true, true, true] },
      { label: 'Backend API REST (Django REST ou Node)', cells: [false, true, true] },
      { label: 'Base de données PostgreSQL / MySQL', cells: [false, true, true] },
      { label: 'Authentification sécurisée (JWT, RBAC)', cells: [false, true, true] },
      { label: 'Protection CSRF, CORS & validation des entrées', cells: [true, true, true] },
      { label: 'Tableau de bord administrateur sur-mesure', cells: [false, true, true] },
      { label: 'Optimisation SEO & performance', cells: [true, true, true] },
      { label: 'Déploiement Cloud (Vercel, Render, VPS)', cells: [true, true, true] },
      { label: 'Nom de domaine & SSL (1 an)', cells: [true, true, true] },
      { label: 'Support & garantie de livraison', cells: ['1 mois', '2 mois', '3 mois'] },
    ],
  },
  {
    key: 'ecommerce', label: 'E-commerce & Paiement',
    plans: [
      { title: 'Starter', price: '350 000 FCFA', delivery: '7 à 10 jours' },
      { title: 'Pro KKiaPay / Mobile Money', price: '600 000 FCFA', delivery: '14 à 20 jours', isPopular: true },
      { title: 'Marketplace', price: '1 100 000 FCFA', delivery: '25 à 35 jours' },
    ],
    rows: [
      { label: 'Catalogue produits & recherche dynamique', cells: [true, true, true] },
      { label: 'Panier interactif & commande sans friction', cells: [true, true, true] },
      { label: 'Intégration Mobile Money (KKiaPay / FedaPay)', cells: [true, true, true] },
      { label: 'Multi-paiement (MTN, Moov, Carte bancaire)', cells: [false, true, true] },
      { label: 'Gestion des stocks en temps réel', cells: [false, true, true] },
      { label: 'Notifications automatiques (Email & WhatsApp)', cells: [false, true, true] },
      { label: 'Sécurité des transactions & webhooks vérifiés', cells: [true, true, true] },
      { label: 'Tableau de bord des ventes et commandes', cells: [true, true, true] },
      { label: 'Multi-vendeurs / Rôles avancés', cells: [false, false, true] },
      { label: 'Accompagnement & formation prise en main', cells: ['2h', 'Demi-journée', 'Complète'] },
    ],
  },
  {
    key: 'maintenance', label: 'Maintenance & Réseau',
    plans: [
      { title: 'Diagnostic', price: '50 000 FCFA', delivery: '1 à 2 jours', desc: "Bilan complet de votre machine ou infrastructure." },
      { title: 'Durcissement & Réseau', price: '120 000 FCFA', delivery: '3 jours', isPopular: true, desc: 'Sécurisation système, pare-feu, réseau local et sauvegardes.' },
      { title: 'Infogérance Mensuelle', price: '60 000 FCFA/mois', delivery: 'Continu', desc: 'Surveillance préventive, mises à jour et assistance prioritaire.' },
    ],
    rows: [
      { label: 'Diagnostic matériel & analyse logicielle', cells: [true, true, true] },
      { label: 'Nettoyage, désinfection et optimisation', cells: [true, true, true] },
      { label: 'Configuration réseau LAN & segmentation sécurisée', cells: [false, true, true] },
      { label: 'Mise en place de sauvegardes automatiques', cells: [false, true, true] },
      { label: 'Durcissement OS (Linux / Windows) et pare-feu', cells: [false, true, true] },
      { label: 'Sensibilisation aux cybermenaces & phishing', cells: [false, true, true] },
      { label: 'Assistance prioritaire à distance ou sur site', cells: [false, false, true] },
      { label: 'Rapports mensuels de sécurité', cells: [false, false, true] },
    ],
  },
]

// ─── Compétences ────────────────────────────────────────────────
export const SKILLS = {
  frontend: [
    { name: 'React', icon: '/assets/icons/logos/react.svg', color: '#61DAFB' },
    { name: 'JavaScript', icon: '/assets/icons/logos/javascript.svg', color: '#F7DF1E' },
    { name: 'Next.js', icon: '/assets/icons/devicon/nextjs/nextjs-original.svg', color: '#ffffff' },
    { name: 'Tailwind CSS', icon: '/assets/icons/devicon/tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
    { name: 'HTML5', icon: '/assets/icons/logos/html5.svg', color: '#E34F26' },
    { name: 'CSS3', icon: '/assets/icons/logos/css3.svg', color: '#1572B6' },
  ],
  backend: [
    { name: 'Django REST', icon: '/assets/icons/logos/django.svg', color: '#44B78B' },
    { name: 'Python', icon: '/assets/icons/logos/python.svg', color: '#4B8BBE' },
    { name: 'PostgreSQL', icon: '/assets/icons/logos/postgresql.svg', color: '#4169E1' },
    { name: 'Node.js', icon: '/assets/icons/logos/nodejs.svg', color: '#539E43' },
    { name: 'MySQL', icon: '/assets/icons/logos/mysql.svg', color: '#F29111' },
  ],
  tools: [
    { name: 'Git & GitHub', icon: '/assets/icons/logos/github.svg', color: '#F05032' },
    { name: 'Docker', icon: '/assets/icons/logos/docker.svg', color: '#2496ED' },
    { name: 'Linux / Bash', icon: '/assets/icons/logos/linux.svg', color: '#FCC624' },
    { name: 'Vercel & Render', icon: '/assets/icons/devicon/vercel/vercel-original.svg', color: '#ffffff' },
    { name: 'Cloudinary', icon: '/assets/icons/simple-icons/cloudinary.svg', color: '#3448C5' },
    { name: 'Figma', icon: '/assets/icons/logos/figma.svg', color: '#F24E1E' },
  ],
  security: [
    { name: 'OWASP Top 10', icon: '/assets/icons/logos/owasp.svg', color: '#000000' },
    { name: 'Burp Suite', icon: '/assets/icons/logos/burpsuite.svg', color: '#FF6633' },
    { name: 'Kali Linux', icon: '/assets/icons/logos/kalilinux.svg', color: '#557C94' },
    { name: 'Metasploit', icon: '/assets/icons/logos/metasploit.svg', color: '#13679A' },
    { name: 'Nmap & SQLMap', icon: '/assets/icons/logos/linux.svg', color: '#FCC624' },
    { name: 'Audit & Sécurité', icon: '/assets/icons/logos/cisco.svg', color: '#1BA0D7' },
  ],
  autres: [
    { name: 'OWASP Top 10', icon: '/assets/icons/logos/owasp.svg', color: '#000000' },
    { name: 'Burp Suite', icon: '/assets/icons/logos/burpsuite.svg', color: '#FF6633' },
    { name: 'Kali Linux', icon: '/assets/icons/logos/kalilinux.svg', color: '#557C94' },
    { name: 'Force-N Certifications', icon: '/assets/icons/logos/force-n.svg', color: '#FF9900' },
    { name: 'Bootcamp D-CLIC OIF', icon: '/assets/icons/logos/dclic.svg', color: '#00AEEF' },
    { name: 'Google Cybersecurity', icon: '/assets/icons/logos/coursera.svg', color: '#0056D2' },
  ]
}

// ─── Parcours ───────────────────────────────────────────────────
export const TIMELINE = [
  {
    date: '2026 – Présent',
    title: 'Stagiaire Cybersécurité & Dev Web',
    company: 'Maison Afi Collection',
    items: [
      "Mise à jour, durcissement et sécurisation des équipements informatiques",
      "Sensibilisation des collaborateurs aux bonnes pratiques d'hygiène numérique",
      "Audit de sécurité web et développement de la plateforme e-commerce en React / Node"
    ],
    tags: ['Cybersécurité', 'Audit', 'React', 'Node.js']
  },
  {
    date: 'Mars 2026',
    title: 'Auditeur Sécurité Web',
    company: 'XoboEvent',
    items: [
      "Reconnaissance et cartographie de la surface d'attaque applicative",
      "Tests d'intrusion ciblés selon le référentiel OWASP Top 10 avec Burp Suite",
      "Rédaction du rapport d'audit exhaustif et préconisations de remédiation technique"
    ],
    tags: ['Pentest', 'Burp Suite', 'OWASP Top 10', 'Audit']
  },
  {
    date: '2023 – Présent',
    title: 'Formateur Informatique & Dev Web',
    company: 'Freelance',
    items: [
      "Animation d'ateliers pratiques en informatique générale et outils numériques",
      "Formation aux fondamentaux du développement web moderne et de l'algorithmie",
      "Mentorat et accompagnement personnalisé pour projets concrets"
    ],
    tags: ['Formation', 'Pédagogie', 'Web', 'Mentorat']
  },
  {
    date: '2021 – Présent',
    title: 'Technicien en Maintenance Informatique',
    company: 'Indépendant',
    items: [
      "Diagnostic matériel et système, dépannage et optimisation des postes",
      "Configuration et sécurisation de réseaux locaux (LAN)",
      "Stratégies de sauvegarde et récupération de données critiques"
    ],
    tags: ['Maintenance', 'Hardware', 'Réseaux', 'Support']
  },
  {
    date: '2018 – Présent',
    title: 'Parcours Autodidacte & Certifications',
    company: 'OpenClassrooms · Coursera · Cisco · FORCE-N · OIF/D-CLIC',
    items: [
      "Formation continue en cybersécurité, réseaux et administration Linux",
      "Certifications : Cisco, FORCE-N via Université Cheikh Amidou Kane, Bootcamp Cybersécurité OIF/D-CLIC",
      "Spécialisation applicative : sécurisation web, OWASP Top 10 et bases de données relationnelles"
    ],
    tags: ['Autodidacte', 'Sécurité', 'Réseaux', 'Linux']
  },
  {
    date: '2011',
    title: 'Baccalauréat Série D (Scientifique)',
    company: 'CSP Hamadou Hampâté Bâ',
    items: [
      "Formation scientifique solide axée sur les mathématiques et sciences appliquées"
    ],
    tags: ['Baccalauréat', 'Scientifique']
  },
]

// ─── Enrichissement du parcours (icônes + barres de progression) ───
const TIMELINE_EXTRAS = [
  { icon: 'fa-shield-alt', desc: "Audit de sécurité, durcissement du parc, sensibilisation et refonte e-commerce.", progLabels: ['Audit', 'Durcissement', 'Dev Web', 'Hygiène cyber'], progValues: [92, 88, 90, 85] },
  { icon: 'fa-user-secret', desc: "Tests d'intrusion applicatifs, détection de failles OWASP Top 10 et rapport d'audit.", progLabels: ['Pentest', 'Burp Suite', 'Rapport', 'Remédiation'], progValues: [90, 88, 92, 90] },
  { icon: 'fa-chalkboard-teacher', desc: "Formateur en informatique, compétences numériques et initiation au code web.", progLabels: ['Pédagogie', 'Bureautique', 'Web', 'Accompagnement'], progValues: [95, 90, 88, 92] },
  { icon: 'fa-wrench', desc: "Maintenance curative et préventive, dépannage système, réseau LAN et sauvegarde.", progLabels: ['Dépannage', 'Réseau', 'Système', 'Sauvegarde'], progValues: [92, 88, 90, 85] },
  { icon: 'fa-graduation-cap', desc: "Parcours autodidacte : certifications en sécurité, réseaux et Linux via OpenClassrooms, Coursera, Cisco, FORCE-N et OIF/D-CLIC.", progLabels: ['Sécurité', 'Réseaux', 'Linux', 'Bases de données'], progValues: [85, 88, 90, 82] },
  { icon: 'fa-school', desc: "Baccalauréat Série D au CSP Hamadou Hampâté Bâ." },
]
TIMELINE.forEach((t, i) => { if (TIMELINE_EXTRAS[i]) Object.assign(t, TIMELINE_EXTRAS[i]) })

// ─── Compatibilité champs PROJECTS ───────────────────────────────
const PROJECT_EXTRAS = {
  7: { progress: 100, isPremium: true, color: '#ea8025' },
  4: { progress: 100, isPremium: true, color: '#cc4400' },
  1: { progress: 100, isPremium: true, color: '#0066cc' },
  2: { progress: 100, isPremium: true, color: '#8B0000' },
  3: { progress: 95, isPremium: true, color: '#b8860b' },
  5: { progress: 90, color: '#2e7d32' },
  6: { progress: 100, isPremium: true, color: '#552277' },
}
PROJECTS.forEach(p => {
  p.subtitle = p.sub
  p.image = p.img
  Object.assign(p, PROJECT_EXTRAS[p.id] || {})
})

// ─── Compatibilité champs PRICING_TABS ───────────────────────────
PRICING_TABS.forEach(tab => {
  tab.plans.forEach((plan, i) => {
    if (!plan.badge) plan.badge = (plan.title || '').toUpperCase()
    if (!plan.features) {
      plan.features = (tab.rows || [])
        .map(row => {
          const cell = row.cells[i]
          if (cell === true) return row.label
          if (cell === false || cell == null) return null
          return `${row.label} : ${cell}`
        })
        .filter(Boolean)
    }
  })
})

// ─── FAQ ────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  { q: 'Quelle est la différence entre un audit de sécurité et un pentest ?', a: "Un audit vérifie la conformité, les configurations et l'architecture générale d'une application ou d'un réseau. Un pentest (test d'intrusion) simule une attaque réelle ciblée avec des outils comme Burp Suite ou Kali Linux pour identifier et exploiter activement les failles (OWASP Top 10) avant qu'un attaquant malveillant ne le fasse." },
  { q: 'Développez-vous des applications complètes clé en main ?', a: "Oui. En tant que développeur fullstack (React, Next.js, Django REST, PostgreSQL), je conçois des solutions de bout en bout : interface fluide, API robuste, sécurité intégrée dès la conception (Secure by Design) et déploiement cloud." },
  { q: 'Comment s\'intègrent les paiements en ligne en Afrique ?', a: "J'intègre des passerelles locales fiables comme KKiaPay et FedaPay pour permettre à vos utilisateurs de payer facilement et en toute sécurité par Mobile Money (MTN, Moov, Wave) ou carte bancaire avec vérification serveur par webhooks sécurisés." },
  { q: 'Quels livrables sont remis après un audit de sécurité ?', a: "Vous recevez un rapport technique détaillé classant les vulnérabilités selon leur niveau de sévérité (CVSS), accompagné de captures de preuves de concept (PoC) et surtout d'un guide précis de remédiation étape par étape pour vos développeurs." },
  { q: 'Proposez-vous également de la maintenance et du support ?', a: "Absolument. Que ce soit pour la maintenance de votre parc informatique, le dépannage réseau ou la surveillance préventive et mise à jour de vos applications web, des forfaits d'accompagnement sont disponibles." },
  { q: 'Comment démarrer une collaboration ?', a: "Il vous suffit de me contacter par email ou WhatsApp. Nous échangeons sur votre besoin, je réalise un premier diagnostic gratuit et vous transmets un devis clair et engageant sous 24 à 48 heures." },
]

// ─── Publications / Veille ──────────────────────────────────────
export const WRITING_POSTS = [
  {
    id: 1,
    tag: 'Sécurité Applicative',
    hook: "Le frontend affiche. Le backend autorise.",
    excerpt: "Cacher un bouton ou un rôle 'Admin' dans une interface React ne protège absolument rien : si l'API backend ne valide pas rigoureusement les permissions sur chaque endpoint, n'importe qui peut forger une requête. La sécurité ne vit jamais dans l'UI.",
    url: 'https://linkedin.com/in/dehazounde-joseph',
  },
  {
    id: 2,
    tag: 'Cybersécurité',
    hook: "Pourquoi tester son application contre l'OWASP Top 10 avant le déploiement ?",
    excerpt: "Injections SQL, mauvaises configurations de contrôle d'accès (IDOR), failles de sécurité cryptographiques... 90% des brèches web courantes proviennent d'erreurs répertoriées dans l'OWASP Top 10 qui auraient pu être corrigées en quelques minutes lors d'un audit.",
    url: 'https://linkedin.com/in/dehazounde-joseph',
  },
  {
    id: 3,
    tag: 'Architecture & Bonnes pratiques',
    hook: "Copier du code sans comprendre les dépendances est une bombe à retardement.",
    excerpt: "L'IA et les snippets permettent de coder plus vite, mais seule la maîtrise de l'architecture et de la logique permet de déboguer sous pression et de concevoir des systèmes résilients et sécurisés.",
    url: 'https://linkedin.com/in/dehazounde-joseph',
  },
  {
    id: 4,
    tag: 'Retour d\'expérience',
    hook: "Sécuriser les transactions Mobile Money : le rôle fondamental des webhooks signés.",
    excerpt: "Ne vous fiez jamais au seul statut renvoyé dans le navigateur du client après un paiement. Seule la validation asynchrone côté serveur via un webhook avec vérification cryptographique garantit l'intégrité de la commande.",
    url: 'https://linkedin.com/in/dehazounde-joseph',
  },
]

// ─── AKATECH / Navigation ────────────────────────────────────────
export const NAV_LINKS = [
  { id: 'home', label: 'Accueil', num: '00', sub: 'Joseph Dehazounde' },
  { id: 'story', label: 'Mon parcours', num: '01', sub: 'Cyber & Fullstack' },
  { id: 'method', label: 'Ma méthode', num: '02', sub: 'Sécurité & Conception' },
  { id: 'projects', label: 'Projets', num: '03', sub: `${PROJECTS.length} réalisations` },
  { id: 'sandbox', label: 'Bac à sable', num: '04', sub: 'Sécurité & POCs' },
  { id: 'services', label: 'Services', num: '05', sub: 'Prestations & Tarifs' },
  { id: 'contact', label: 'Contact', num: '06', sub: 'Discutons' },
]

export const METHOD_STEPS = [
  { num: '01', title: 'Cartographie & Analyse du besoin', desc: "Identification précise des fonctionnalités, des contraintes de sécurité et de la surface d'exposition." },
  { num: '02', title: 'Architecture Secure by Design', desc: "Conception du modèle de données, contrôle des accès (RBAC) et modélisation des menaces avant d'écrire le code." },
  { num: '03', title: 'Développement Fullstack robuste', desc: "Développement découplé (React / Django REST), composants modulaires et validation stricte des entrées côté backend." },
  { num: '04', title: 'Tests d\'intrusion & Audit OWASP', desc: "Audit de sécurité interne avec Burp Suite, Nmap et scripts personnalisés pour vérifier l'étanchéité de l'application." },
  { num: '05', title: 'Déploiement Cloud sécurisé', desc: "Configuration des variables d'environnement chiffrées, HTTPS/SSL, en-têtes de sécurité HTTP et monitoring." },
  { num: '06', title: 'Transmission & Accompagnement', desc: "Documentation claire, formation à l'administration et suivi régulier de l'infrastructure." },
]

export const PHILOSOPHY_CHAPTERS = [
  { num: '01', before: "Je pensais que la sécurité arrivait après le développement.", after: "La sécurité se pense dès la première ligne de code. Réparer une faille en production coûte 10 fois plus cher que de l'anticiper." },
  { num: '02', before: "Je pensais qu'un beau design suffisait à faire une bonne app.", after: "Une interface magnifique avec une faille d'injection SQL est un désastre en puissance. L'élégance doit s'accompagner d'une robustesse absolue." },
  { num: '03', before: "Je pensais que coder vite était la priorité absolue.", after: "Comprendre en profondeur le problème et les vulnérabilités potentielles évite des semaines de refactorisation." },
  { num: '04', before: "Je pensais que maîtriser un outil faisait de vous un expert.", after: "Les outils et frameworks changent. La rigueur analytique, la logique de sécurité et l'adaptabilité restent." },
]

export const SANDBOX_ITEMS = [
  { title: 'OWASP Pentest Lab', type: 'Sécurité', status: 'Actif' },
  { title: 'JWT Token Auditor', type: 'Prototype', status: 'Actif' },
  { title: 'KKiaPay Webhook Verifier', type: 'Outil API', status: 'Actif' },
  { title: 'RBAC Permission Engine', type: 'Architecture', status: 'Actif' },
  { title: 'Network Port Scanner', type: 'Script Bash/Python', status: 'En test' },
  { title: 'Brute-force Defender', type: 'Middleware', status: 'Actif' },
]
