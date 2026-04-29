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
  // codewash — diff / lignes de code
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
