// geometry.jsx — SVG compositions: signature glyph, hero composition, dividers
// Three signature variants (cycled via tweaks):
//   0 — heptagone (polygone irrégulier 7 côtés)
//   1 — arcs intersectés
//   2 — croix + cercle (default per user)

export const SignatureGlyph = ({ variant = 2, size = 28, stroke = "currentColor", strokeWidth = 1 }) => {
  const s = size;
  if (variant === 0) {
    // Heptagone irrégulier
    return (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polygon
          points="20,3 33,9 37,22 28,35 12,35 3,22 7,9"
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M 6 22 A 12 12 0 0 1 30 22" stroke={stroke} strokeWidth={strokeWidth} fill="none" />
        <path d="M 10 22 A 12 12 0 0 0 34 22" stroke={stroke} strokeWidth={strokeWidth} fill="none" />
      </svg>
    );
  }
  // variant 2 — croix + cercle (default)
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="4" y1="6" x2="36" y2="34" stroke={stroke} strokeWidth={strokeWidth} />
      <line x1="36" y1="6" x2="4" y2="34" stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx="20" cy="20" r="9" stroke={stroke} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
};

// Hero composition — abstrait, large, en arrière-plan
// `intensity` ∈ [0.3, 1.0] contrôle l'opacité globale
export const HeroComposition = ({ intensity = 0.55, parallax = 0 }) => {
  const op = intensity;
  return (
    <svg
      className="hero-svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: op, transform: `translateY(${parallax}px)` }}
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
        </pattern>
      </defs>
      {/* grille très douce */}
      <rect width="800" height="600" fill="url(#hero-grid)" />

      {/* polygone irrégulier — plein subtil */}
      <polygon
        points="540,80 720,140 760,320 660,460 480,440 420,260"
        fill="currentColor"
        opacity="0.04"
      />
      {/* contour du même polygone */}
      <polygon
        points="540,80 720,140 760,320 660,460 480,440 420,260"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
      />

      {/* arcs intersectés */}
      <path
        d="M 80 380 A 220 220 0 0 1 480 380"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />
      <path
        d="M 200 380 A 220 220 0 0 0 600 380"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.4"
      />

      {/* lignes longues */}
      <line x1="0" y1="500" x2="800" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="200" x2="800" y2="540" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

      {/* petits cercles d'intersection */}
      <circle cx="320" cy="290" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="560" cy="240" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="180" cy="420" r="2" fill="currentColor" opacity="0.5" />

      {/* triangle accent */}
      <polygon points="80,80 140,80 110,130" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
    </svg>
  );
};

// Composition contact — plus marquée, clôture visuelle
export const ContactComposition = ({ intensity = 0.7 }) => {
  return (
    <svg
      className="contact-svg"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: intensity }}
    >
      {/* heptagone large central */}
      <polygon
        points="400,40 620,120 700,310 560,460 240,460 100,310 180,120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
      />
      <polygon
        points="400,40 620,120 700,310 560,460 240,460 100,310 180,120"
        fill="currentColor"
        opacity="0.025"
      />

      {/* arcs concentriques décentrés */}
      <circle cx="400" cy="260" r="80" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="400" cy="260" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <circle cx="400" cy="260" r="240" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.22" />

      {/* diagonales */}
      <line x1="0" y1="0" x2="800" y2="500" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <line x1="800" y1="0" x2="0" y2="500" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />

      {/* petite signature en bas à droite */}
      <g transform="translate(680,420)">
        <line x1="0" y1="-12" x2="24" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <line x1="24" y1="-12" x2="0" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <circle cx="12" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      </g>
    </svg>
  );
};

// Visuel projet — composition différente par projet
// Visuel projet — composition différente par projet
export const ProjectVisual = ({ kind = "circuit" }) => {
  if (kind === "circuit") {
    // Nanotekspice — circuit / portes logiques stylisé
    return (
      <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
        <rect width="320" height="200" fill="none" />
        {/* grille */}
        <g stroke="currentColor" strokeWidth="0.4" opacity="0.25">
          {[40, 80, 120, 160].map((y) => (
            <line key={"h" + y} x1="20" y1={y} x2="300" y2={y} />
          ))}
          {[60, 120, 180, 240].map((x) => (
            <line key={"v" + x} x1={x} y1="20" x2={x} y2="180" />
          ))}
        </g>
        {/* nœuds + lignes de circuit */}
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.85">
          <path d="M 20 100 L 80 100 L 80 60 L 140 60" />
          <path d="M 140 60 L 200 60 L 200 140 L 260 140" />
          <path d="M 80 100 L 80 140 L 160 140" />
          <path d="M 160 140 L 160 100 L 220 100" />
        </g>
        {/* nœuds */}
        <g fill="currentColor">
          {[
            [80, 100],
            [80, 60],
            [140, 60],
            [200, 60],
            [200, 140],
            [80, 140],
            [160, 140],
            [160, 100],
            [220, 100],
            [260, 140],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" />
          ))}
        </g>
        {/* porte rectangulaire stylisée */}
        <rect x="118" y="48" width="44" height="24" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="178" y="128" width="44" height="24" fill="none" stroke="currentColor" strokeWidth="1" />
        {/* annotations mono */}
        <text x="140" y="64" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="currentColor">
          AND
        </text>
        <text x="200" y="144" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="currentColor">
          XOR
        </text>
      </svg>
    );
  }
  if (kind === "gameboy") {
    // Cartridge — pixel-grid / sprite
    return (
      <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
        {/* écran */}
        <rect x="60" y="20" width="200" height="160" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="72" y="32" width="176" height="120" fill="currentColor" opacity="0.04" />
        {/* pixel sprite */}
        {(() => {
          const pixels = [
            [4, 1], [5, 1], [6, 1],
            [3, 2], [7, 2],
            [2, 3], [4, 3], [6, 3], [8, 3],
            [2, 4], [8, 4],
            [3, 5], [4, 5], [5, 5], [6, 5], [7, 5],
            [4, 6], [6, 6],
          ];
          return pixels.map(([x, y], i) => (
            <rect key={i} x={120 + x * 10} y={50 + y * 10} width="10" height="10" fill="currentColor" />
          ));
        })()}
        {/* ligne de scan */}
        <line x1="72" y1="100" x2="248" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        {/* boutons / d-pad stylisé */}
        <rect x="72" y="158" width="14" height="6" fill="currentColor" opacity="0.6" />
        <rect x="76" y="154" width="6" height="14" fill="currentColor" opacity="0.6" />
        <circle cx="232" cy="161" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="244" cy="161" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <text x="160" y="190" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="currentColor" opacity="0.5">
          [placeholder — visuel à fournir]
        </text>
      </svg>
    );
  }
  if (kind === "teams") {
    // MyTeams — Architecture réseau Client / Serveur
    return (
      <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
        {/* Serveur */}
        <rect x="130" y="40" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="130" y1="55" x2="190" y2="55" stroke="currentColor" strokeWidth="0.5" />
        <line x1="130" y1="70" x2="190" y2="70" stroke="currentColor" strokeWidth="0.5" />
        <text x="160" y="105" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill="currentColor" opacity="0.8">
          SERVER
        </text>

        {/* Clients */}
        <rect x="30" y="140" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="140" y="160" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="250" y="140" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />

        {/* Connexions (lignes pointillées) */}
        <path d="M 50 140 L 50 120 L 140 120 L 140 120" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 160 160 L 160 120" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 270 140 L 270 120 L 180 120" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.6" />

        {/* Paquets de données */}
        <circle cx="90" cy="120" r="2" fill="currentColor" />
        <circle cx="160" cy="140" r="2" fill="currentColor" />
        <circle cx="230" cy="120" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "arcade") {
    // Arcade — Borne d'arcade stylisée et interface modulaire
    return (
      <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
        {/* Silhouette de la borne */}
        <path d="M 100 20 L 220 20 L 220 50 L 240 90 L 240 180 L 80 180 L 80 90 L 100 50 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
        {/* Écran */}
        <rect x="110" y="40" width="100" height="70" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1"/>
        {/* Élément in-game abstrait */}
        <circle cx="140" cy="80" r="6" fill="currentColor" opacity="0.8"/>
        <path d="M 140 80 L 146 76 L 146 84 Z" fill="var(--bg-color, white)" opacity="0.9" />
        <rect x="160" y="78" width="4" height="4" fill="currentColor" opacity="0.6" />
        <rect x="180" y="78" width="4" height="4" fill="currentColor" opacity="0.6" />
        {/* Panel de contrôle */}
        <line x1="80" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="90" y1="130" x2="230" y2="130" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
        {/* Joystick */}
        <line x1="120" y1="120" x2="120" y2="105" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="120" cy="105" r="4" fill="currentColor" />
        {/* Boutons */}
        <circle cx="180" cy="112" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="195" cy="115" r="3" fill="currentColor" opacity="0.7"/>
        {/* Fentes pièces */}
        <rect x="130" y="150" width="6" height="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        <rect x="184" y="150" width="6" height="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      </svg>
    );
  }
  if (kind === "gamejam") {
    // Epitech Game Jam — Pression du temps (horloge) et game dev (manette)
    return (
      <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
        {/* Flèches de fond (vitesse / temps qui passe) */}
        <path d="M 60 100 L 120 60 L 120 140 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        <path d="M 100 100 L 160 60 L 160 140 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>

        {/* Horloge / Timer */}
        <circle cx="200" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
        <circle cx="200" cy="100" r="3" fill="currentColor" />
        <line x1="200" y1="100" x2="200" y2="70" stroke="currentColor" strokeWidth="1.5" />
        <line x1="200" y1="100" x2="220" y2="115" stroke="currentColor" strokeWidth="1.5" />
        {/* Ticks de l'horloge */}
        {[0, 90, 180, 270].map(deg => (
          <line key={deg} x1="200" y1="60" x2="200" y2="65" stroke="currentColor" strokeWidth="1" transform={`rotate(${deg} 200 100)`} />
        ))}

        {/* Manette en surimpression */}
        <rect x="40" y="90" width="80" height="50" rx="15" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        {/* Croix directionnelle */}
        <rect x="55" y="110" width="20" height="6" fill="currentColor" opacity="0.7"/>
        <rect x="62" y="103" width="6" height="20" fill="currentColor" opacity="0.7"/>
        {/* Boutons d'action */}
        <circle cx="95" cy="120" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="105" cy="110" r="4" fill="none" stroke="currentColor" strokeWidth="1" />

        {/* Lignes de vitesse */}
        <line x1="40" y1="160" x2="140" y2="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
        <line x1="70" y1="170" x2="160" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.4"/>
      </svg>
    );
  }
  
  // Par défaut (Codewash) — Fenêtre de diff / lignes de code
  return (
    <svg viewBox="0 0 320 200" className="proj-svg" aria-hidden="true">
      {/* fenêtre */}
      <rect x="20" y="20" width="280" height="160" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="40" x2="300" y2="40" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="32" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="42" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="52" cy="30" r="2.5" fill="currentColor" opacity="0.5" />
      {/* lignes de code stylisées */}
      <g fontFamily="ui-monospace,monospace" fontSize="9" fill="currentColor">
        {[
          { y: 58, m: "+", w: 120, op: 0.85 },
          { y: 72, m: "-", w: 180, op: 0.4 },
          { y: 86, m: "+", w: 90, op: 0.85 },
          { y: 100, m: " ", w: 200, op: 0.5 },
          { y: 114, m: "+", w: 150, op: 0.85 },
          { y: 128, m: "-", w: 110, op: 0.4 },
          { y: 142, m: " ", w: 170, op: 0.5 },
          { y: 156, m: "+", w: 80, op: 0.85 },
        ].map((l, i) => (
          <g key={i} opacity={l.op}>
            <text x="36" y={l.y}>
              {l.m}
            </text>
            <rect x="50" y={l.y - 7} width={l.w} height="2" fill="currentColor" />
          </g>
        ))}
      </g>
    </svg>
  );
};

// Petit séparateur géométrique entre sections
export const SectionDivider = ({ variant = 2 }) => (
  <div className="section-divider" aria-hidden="true">
    <span className="section-divider-line"></span>
    <SignatureGlyph variant={variant} size={20} strokeWidth={0.9} />
    <span className="section-divider-line"></span>
  </div>
);
