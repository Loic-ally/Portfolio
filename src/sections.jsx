// sections.jsx — toutes les sections du portfolio sauf hero/contact qui sont dans App

import { SignatureGlyph, ProjectVisual } from "./geometry.jsx";
import { Tilt } from "./effects.jsx";

export const Nav = ({ dark, onToggleDark, sigVariant }) => {
  const links = [
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "stack", label: "Stack" },
    { id: "experience", label: "Expérience" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a href="#top" className="nav-mark" aria-label="Accueil">
        <SignatureGlyph variant={sigVariant} size={22} strokeWidth={1.1} />
        <span className="nav-name">Loïc Philippe</span>
      </a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <a href={"#" + l.id} data-cursor="hover">
              <span>{l.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button
          type="button"
          className="nav-toggle"
          onClick={onToggleDark}
          aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
          title={dark ? "Mode clair" : "Mode sombre"}
        >
          {dark ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          )}
        </button>
        <a href="#" className="nav-cv" onClick={(e) => e.preventDefault()}>
          CV ↓
        </a>
      </div>
    </nav>
  );
};

export const About = ({ sigVariant }) => (
  <section id="about" className="section section-about" data-screen-label="À propos">
    <div className="section-head">
      <span className="section-num">01</span>
      <span className="section-kicker">À propos</span>
    </div>
    <div className="about-grid">
      <h2 className="section-title">
        Étudiant à EPITECH Mulhouse, deuxième année du Programme&nbsp;Grande&nbsp;École.
      </h2>
      <div className="about-body">
        <p>
          Je m'intéresse au développement web full-stack, à la cybersécurité, et plus
          largement à tout ce qui touche aux systèmes — du bas niveau en C jusqu'aux
          applications SaaS modernes propulsées par l'IA.
        </p>
        <p>
          Mon objectif à terme est de devenir auto-entrepreneur et de construire mes
          propres produits. En attendant, j'apprends, je code, je casse des trucs et je
          les répare. Je suis curieux par défaut&nbsp;: si je ne connais pas une techno,
          je l'apprends — c'est comme ça que j'ai découvert Vue.js, MongoDB ou les API
          Google pendant mon stage chez Avada-Consult.
        </p>
        <p className="about-aside">
          En dehors du code&nbsp;: jeux vidéo, Blender, et tout ce qui me permet de créer.
        </p>
      </div>
    </div>
  </section>
);

export const Projects = ({ sigVariant }) => {
  const projects = [
    {
      n: "01",
      name: "Nanotekspice",
      stack: ["C++"],
      type: "Projet EPITECH",
      desc: "Simulateur de composants électroniques en ligne de commande. Reproduction du comportement de composants systèmes (RAM, ROM, Latch, portes logiques…) dans un shell interactif. Architecture orientée objet, gestion de circuits via fichiers de description.",
      visual: "circuit",
      gh: "#",
      span: "wide",
    },
    {
      n: "02",
      name: "Cartridge",
      stack: ["C"],
      type: "Projet EPITECH",
      desc: "Développement de jeux pour Game Boy. Programmation bas-niveau en C avec contraintes hardware réelles : gestion mémoire, sprites, input, son. Permet de créer n'importe quel jeu sur la console.",
      visual: "gameboy",
      gh: "#",
      span: "narrow",
    },
    {
      n: "03",
      name: "Codewash",
      stack: ["Node.js", "React", "JavaScript"],
      type: "Projet EPITECH",
      desc: "Nettoyage et refactoring d'une codebase issue de vibecoding. Documentation, correction de bugs, restructuration et mise aux normes d'un projet existant.",
      visual: "code",
      gh: "#",
      span: "narrow",
    },
  ];
  return (
    <section id="projects" className="section section-projects" data-screen-label="Projets">
      <div className="section-head">
        <span className="section-num">02</span>
        <span className="section-kicker">Projets sélectionnés</span>
      </div>
      <h2 className="section-title section-title-tight">
        Trois projets — du bas niveau au refactor.
      </h2>

      <ol className="projects">
        {projects.map((p) => (
          <li key={p.n} className={"project project-" + p.span}>
            <Tilt className="project-visual">
              <ProjectVisual kind={p.visual} />
              <span className="project-num">{p.n}</span>
            </Tilt>
            <div className="project-meta">
              <header className="project-head">
                <h3 className="project-name">{p.name}</h3>
                <span className="project-type">{p.type}</span>
              </header>
              <p className="project-desc">{p.desc}</p>
              <div className="project-foot">
                <ul className="stack-inline">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a className="link-arrow" href={p.gh} onClick={(e) => p.gh === "#" && e.preventDefault()}>
                  Voir sur GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export const Stack = () => {
  const groups = [
    { label: "Langages", items: ["C", "C++", "C#", "TypeScript", "JavaScript", "Python"] },
    { label: "Web", items: ["Vue.js", "React", "Node.js", "HTML/CSS"] },
    { label: "Backend & Data", items: ["MongoDB", "Google Cloud Storage", "API Google", "API Gemini"] },
    { label: "Outils", items: ["Git", "GitHub", "Vercel", "Shortcut", "Docker"] },
    { label: "Création", items: ["Photoshop", "Blender", "Unreal Engine 5"] },
    { label: "Domaines", items: ["Full-stack", "IA appliquée", "Cybersécurité (autodidacte)"] },
  ];
  return (
    <section id="stack" className="section section-stack" data-screen-label="Stack">
      <div className="section-head">
        <span className="section-num">03</span>
        <span className="section-kicker">Stack &amp; compétences</span>
      </div>
      <h2 className="section-title section-title-tight">
        L'outillage avec lequel je travaille au quotidien.
      </h2>
      <dl className="stack-grid">
        {groups.map((g) => (
          <div key={g.label} className="stack-group">
            <dt>{g.label}</dt>
            <dd>
              <ul className="stack-tags">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export const Experience = () => (
  <section id="experience" className="section section-experience" data-screen-label="Expérience">
    <div className="section-head">
      <span className="section-num">04</span>
      <span className="section-kicker">Expérience</span>
    </div>
    <h2 className="section-title section-title-tight">
      Six mois en binôme avec un CTO sur un SaaS d'audit médical.
    </h2>

    <article className="xp">
      <header className="xp-head">
        <div className="xp-role">
          <h3>Développeur full-stack — Stage</h3>
          <p className="xp-company">Avada-Consult · Gordios</p>
        </div>
        <div className="xp-meta">
          <span>Juillet 2025 — Décembre 2025</span>
          <span className="xp-dot">·</span>
          <span>6 mois</span>
          <span className="xp-dot">·</span>
          <span>Mulhouse / remote</span>
        </div>
      </header>

      <p className="xp-lede">
        Stage de 6 mois sur Gordios, plateforme SaaS d'audit réglementaire pour
        dispositifs médicaux propulsée par l'IA, lauréate du prix Best Healthcare
        Innovation au Hacking Health Camp. Travail en binôme direct avec le CTO en
        méthode agile.
      </p>

      <div className="xp-block">
        <span className="xp-block-label">Réalisations principales</span>
        <ul className="xp-list">
          <li>
            Développement de l'application web en Vue.js / TypeScript / MongoDB,
            déployée sur Vercel.
          </li>
          <li>
            Conception du système de création et d'identification de dispositifs
            médicaux, avec reproduction de la nomenclature européenne EMDN.
          </li>
          <li>
            Intégration de Gemini pour l'analyse automatique de documents techniques
            (~500 tests de conformité, classés Pass / Fail / Review / Missing).
          </li>
          <li>
            Optimisation des appels API — résolution d'un bug critique de dépassement
            de quota en passant d'un envoi de contenu textuel à un envoi par référence
            de fichier.
          </li>
          <li>
            Système de tests et de types de documents personnalisables par
            l'utilisateur, modulaire, branché sur les fonctionnalités existantes.
          </li>
          <li>Authentification Google OAuth et synchronisation Google Drive.</li>
          <li>Création de deux chatbots — assistance client et chat documentaire IA.</li>
          <li>
            Module de gestion des Non-Conformités (NC) et CAPA avec assistance IA et
            export Word.
          </li>
        </ul>
      </div>
    </article>

    <article className="xp xp-secondary">
      <header className="xp-head">
        <div className="xp-role">
          <h3>Apprentissage en autodidacte</h3>
          <p className="xp-company">En cours</p>
        </div>
        <div className="xp-meta">
          <span>2025 →</span>
        </div>
      </header>
      <p className="xp-lede">JSON, cybersécurité, expérimentations personnelles.</p>
    </article>
  </section>
);

export const Education = () => (
  <section id="education" className="section section-education" data-screen-label="Éducation">
    <div className="section-head">
      <span className="section-num">05</span>
      <span className="section-kicker">Éducation</span>
    </div>
    <ul className="edu-list">
      <li className="edu">
        <div className="edu-when">2024 — 2029</div>
        <div className="edu-what">
          <h3>EPITECH — Programme Grande École</h3>
          <p>Diplôme d'expert en technologies de l'information (+5 ans).</p>
        </div>
      </li>
      <li className="edu">
        <div className="edu-when">2021 — 2024</div>
        <div className="edu-what">
          <h3>Lycée Georges Colomb · Lure</h3>
          <p>Baccalauréat général, mention. Spécialités&nbsp;: Mathématiques · Physique-Chimie.</p>
        </div>
      </li>
    </ul>
  </section>
);

export const Footer = ({ sigVariant }) => (
  <footer className="footer">
    <div className="footer-inner">
      <span className="footer-mark">
        <SignatureGlyph variant={sigVariant} size={16} strokeWidth={0.9} />
      </span>
      <span>© 2026 Loïc Philippe — Construit à Mulhouse.</span>
    </div>
  </footer>
);
