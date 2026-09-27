import { STRUCTURED_DATA } from '../useSEO.jsx'
import PortfolioApp from './PortfolioApp.jsx'

// ════════════════════════════════════════════════════════════════
// page.js — Server Component
//
// Tout ce qui est rendu ici (JSON-LD, contenu de secours) est dans
// le HTML renvoyé par le serveur au tout premier chargement, avant
// toute exécution JS. C'est la vraie amélioration par rapport à la
// version React/Vite : là où le <noscript> d'index.html n'était
// qu'un filet de sécurité peu fiable pour les crawlers, ce contenu
// est maintenant du vrai HTML server-rendered, comme le reste du
// document.
//
// L'expérience interactive (WebGL/GSAP/3 modes) est montée ensuite
// via <PortfolioApp /> exactement comme avant (ssr:false, chargée à
// la demande) — elle est simplement au-dessus d'une base déjà
// indexable plutôt que d'un <div id="root"></div> vide.
// ════════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {/* Performance : preconnect / dns-prefetch pour les fallback Unsplash */}
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Structured Data — AEO/GEO (Google, Bing, ChatGPT, Perplexity, Gemini) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA.website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA.webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA.person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA.faq) }}
      />

      {/* Contenu de secours sémantique — rendu côté serveur (SSR) pour l'indexation
          Google, Bing, et les agents conversationnels IA (Perplexity, ChatGPT, etc.) */}
      <div className="seo-fallback">
        <h1>Joseph Dehazounde — Analyste Cybersécurité &amp; Développeur Full Stack à Porto-Novo, Bénin</h1>
        <p><strong>JohaoDev conçoit des solutions logicielles sécurisées, réalise des audits de sécurité web (OWASP Top 10) et développe des applications web résilientes.</strong></p>
        <p>
          Analyste en cybersécurité et développeur full stack basé à Porto-Novo, Bénin. Bac scientifique, autodidacte
          certifié (Google Cybersecurity, Cisco, FORCE-N via Univ. Cheikh Amidou Kane, OIF/D-CLIC, OpenClassrooms, Coursera). Spécialisé en pentest web Burp Suite, Kali Linux,
          React, Next.js, Django REST Framework et bases relationnelles PostgreSQL.
        </p>

        <h2>Expertise &amp; Services</h2>
        <ul>
          <li><strong>Audit de Sécurité Web &amp; Pentest OWASP</strong> — identification des failles (OWASP Top 10, injections SQL, XSS, CSRF, failles d&apos;authentification et de contrôle d&apos;accès IDOR), tests d&apos;intrusion avec Burp Suite et rapports de remédiation technique pas-à-pas.</li>
          <li><strong>Développement Web Full Stack</strong> — architectures modulaires et résilientes avec Django REST Framework, Python, React, Next.js et Tailwind CSS.</li>
          <li><strong>Sécurisation d&apos;Infrastructures &amp; API</strong> — durcissement de serveurs Linux, sécurité des API REST, gestion rigoureuse des tokens JWT, CORS et en-têtes CSP/HSTS.</li>
          <li><strong>E-commerce &amp; Intégration Paiements Mobiles</strong> — boutiques en ligne sécurisées avec validation par webhooks cryptographiques et intégration KKiaPay, FedaPay et Mobile Money (MTN, Moov, Wave).</li>
          <li><strong>Maintenance &amp; Durcissement Technique</strong> — veille vulnérabilités, corrections de failles de sécurité, audits réguliers et sauvegardes.</li>
        </ul>

        <h2>Réalisations &amp; Projets Phares</h2>
        <ul>
          <li>
            <strong>Maison Afi Collection</strong> — E-boutique artisanale avec catalogue interactif, panier dynamique, commande en ligne et audit de sécurité applicative complet. (<a href="https://afishop-y9ww.vercel.app/">https://afishop-y9ww.vercel.app/</a>)
          </li>
          <li>
            <strong>Agro Véto Services (AVS)</strong> — Plateforme complète pour clinique vétérinaire, provenderie certifiée, boutique d&apos;intrants et formations fermes-écoles. (<a href="https://avs-wine.vercel.app/">https://avs-wine.vercel.app/</a>)
          </li>
          <li>
            <strong>Saveurs d&apos;Agojiés</strong> — Plateforme culinaire et boutique en ligne de spécialités gastronomiques du terroir béninois. (<a href="https://saveurs-d-agojies.vercel.app/">https://saveurs-d-agojies.vercel.app/</a>)
          </li>
          <li>
            <strong>CNIB Platform</strong> — Plateforme d&apos;apprentissage en ligne avec catalogue de cours, paiements mobiles KKiaPay et délivrance d&apos;attestations numériques. (<a href="https://cnib-platform-c5ru.vercel.app/">https://cnib-platform-c5ru.vercel.app/</a>)
          </li>
          <li>
            <strong>Xobo Ticket</strong> — Système de réservation de tickets et gestion de stands d&apos;exposition. (<a href="https://xobo-ticket.vercel.app/">https://xobo-ticket.vercel.app/</a>)
          </li>
        </ul>

        <h2>Certifications Reconnues</h2>
        <ul>
          <li>Google Cybersecurity Professional Certificate (Fondations de la cybersécurité, réseaux, détection des menaces)</li>
          <li>Cisco Networking Academy — Cybersecurity &amp; Networking Basics</li>
          <li>FORCE-N via Université Cheikh Amidou Kane — Intelligence Artificielle, Informatique &amp; Marketing Digital</li>
          <li>Bootcamp OIF / D-CLIC Cybersécurité — Audits, défense de réseaux et protocoles sécurisés</li>
          <li>OpenClassrooms &amp; Coursera — Développement d&apos;applications web et sécurité des systèmes</li>
        </ul>

        <h2>Tarifs &amp; Prestations (sur mesure)</h2>
        <ul>
          <li>Audit de Sécurité Web / Pentest OWASP — à partir de 150 000 FCFA</li>
          <li>Portfolio / Site Vitrine Sécurisé — à partir de 100 000 FCFA</li>
          <li>Plateforme E-commerce / Web App avec Mobile Money — à partir de 350 000 FCFA</li>
          <li>Architecture &amp; API sur-mesure (Django + React/Next.js) — sur devis personnalisé</li>
        </ul>

        <h2>Localisation &amp; Contact</h2>
        <p>Localisation : Porto-Novo &amp; Cotonou, Bénin — Interventions sur place et missions à distance (Bénin, Afrique de l&apos;Ouest, France, International).</p>
        <p>Email : <a href="mailto:josephdehazounde@gmail.com">josephdehazounde@gmail.com</a> · WhatsApp : <a href="https://wa.me/2290162108694">+229 01 62 10 86 94</a> · GitHub : <a href="https://github.com/johaoooo">johaoooo</a> · LinkedIn : <a href="https://linkedin.com/in/dehazounde-joseph">dehazounde-joseph</a></p>
      </div>

      <PortfolioApp />
    </>
  )
}
