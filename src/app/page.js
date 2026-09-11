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

      {/* Contenu de secours — repris du <noscript> d'index.html, toujours
          rendu côté serveur (voir commentaire ci-dessus et .seo-fallback
          dans globals.css). */}
      <div className="seo-fallback">
        <h1>Joseph Dehazounde — Analyste Cybersécurité &amp; Développeur Full Stack à Porto-Novo, Bénin</h1>
        <p><strong>JohaoDev conçoit des solutions logicielles sécurisées, réalise des audits de sécurité web (OWASP Top 10) et développe des applications web résilientes.</strong></p>
        <p>
          Analyste en cybersécurité et développeur full stack basé à Porto-Novo, Bénin. Bac scientifique, autodidacte
          certifié (OpenClassrooms, Coursera, Cisco, FORCE-N via Univ. Cheikh Amidou Kane, OIF/D-CLIC) et Google (Foundations of Cybersecurity). Spécialisé en pentest web Burp Suite, Kali Linux,
          React, Next.js, Django REST Framework et bases PostgreSQL.
        </p>

        <h2>Expertise &amp; Services</h2>
        <ul>
          <li><strong>Audit de Sécurité Web &amp; Pentest</strong> — identification des failles (OWASP Top 10, injections SQL, XSS, CSRF, failles d&apos;authentification), tests d&apos;intrusion avec Burp Suite et rapports de remédiation détaillés.</li>
          <li><strong>Développement Web Full Stack</strong> — architectures modulaires et résilientes avec Django REST Framework, Python, React et Next.js.</li>
          <li><strong>Sécurisation d&apos;Infrastructures &amp; API</strong> — durcissement de serveurs Linux, sécurité des API REST, gestion rigoureuse des sessions, CORS et en-têtes CSP/HSTS.</li>
          <li><strong>E-commerce &amp; Intégration Paiements Mobiles</strong> — boutiques en ligne sécurisées intégrant KKiaPay, FedaPay et Mobile Money.</li>
          <li><strong>Maintenance &amp; Durcissement Technique</strong> — veille vulnérabilités, corrections de bugs et mises à niveau de sécurité.</li>
        </ul>

        <h2>Tarifs &amp; Prestations (sur mesure)</h2>
        <ul>
          <li>Audit de Sécurité Web / Pentest — à partir de 150 000 FCFA</li>
          <li>Portfolio / Site Vitrine Sécurisé — à partir de 100 000 FCFA</li>
          <li>Plateforme E-commerce / Web App — à partir de 450 000 FCFA</li>
          <li>Architecture &amp; API sur-mesure — sur devis personnalisé</li>
        </ul>

        <p>Contact : josephdehazounde@gmail.com · WhatsApp +229 01 62 10 86 94 · Porto-Novo, Bénin</p>
      </div>

      <PortfolioApp />
    </>
  )
}
