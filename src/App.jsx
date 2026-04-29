// App.jsx — entry: builds the page

import { useState, useEffect } from "react";
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakToggle,
  TweakRadio,
  TweakSlider,
} from "./tweaks-panel.jsx";
import {
  HeroComposition,
  ContactComposition,
  SectionDivider,
} from "./geometry.jsx";
import {
  ScrollProgress,
  SoftCursor,
  SplitText,
  useInViewEnhance,
  useTagInViewFx,
} from "./effects.jsx";
import {
  Nav,
  About,
  Projects,
  Stack,
  Experience,
  Education,
  Footer,
} from "./sections.jsx";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  dark: false,
  density: "regular",
  shapeIntensity: 0.55,
  signature: 2,
  softCursor: false,
} /*EDITMODE-END*/;

// Reveal is handled purely in CSS via `animation: reveal-in` on `.reveal`.
// Each element fades in with its own --reveal-delay; no JS observer needed.

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY * 0.18));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Hero({ sigVariant, intensity }) {
  const py = useParallax();
  return (
    <section id="top" className="hero" data-screen-label="Hero">
      <div className="hero-bg">
        <HeroComposition intensity={intensity} parallax={py} />
      </div>

      <div className="hero-meta reveal">
        <span className="hero-meta-dot" />
        <span>Disponible — Anytime</span>
        <span>·</span>
        <span>Mulhouse, FR</span>
      </div>

      <h1 className="hero-name reveal" style={{ "--reveal-delay": "0.05s" }}>
        <SplitText text="Loïc" perWord={0.08} />
        <br />
        <SplitText text="Philippe" delay={0.16} perWord={0.08} />
        <em>.</em>
      </h1>

      <p className="hero-sub reveal" style={{ "--reveal-delay": "0.15s" }}>
        Développeur full-stack — étudiant à EPITECH Mulhouse.
      </p>

      <p className="hero-lede reveal" style={{ "--reveal-delay": "0.22s" }}>
        Je construis des applications web, des outils et des systèmes — du
        {" "}<code>C</code> bas niveau aux interfaces <em>Vue.js</em>.
      </p>

      <a
        href="#projects"
        className="hero-cta reveal magnetic"
        style={{ "--reveal-delay": "0.3s" }}
      >
        Voir les projets
        <span className="hero-cta-arrow" aria-hidden="true">↓</span>
      </a>

      <aside className="hero-coords reveal" style={{ "--reveal-delay": "0.4s" }}>
        <span><b>47.7508° N</b></span>
        <span><b>7.3359° E</b></span>
        <span style={{ marginTop: 8 }}>2026 / portfolio</span>
      </aside>
    </section>
  );
}

function Contact({ sigVariant, intensity }) {
  return (
    <section id="contact" className="contact" data-screen-label="Contact">
      <div className="contact-bg">
        <ContactComposition intensity={Math.max(0.45, intensity + 0.15)} />
      </div>
      <div className="contact-inner">
        <div className="section-head reveal">
          <span className="section-num">06</span>
          <span className="section-kicker">Contact</span>
        </div>

        <h2 className="contact-title reveal">
          Discutons<em>.</em>
        </h2>

        <div className="contact-grid reveal">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a className="contact-value" href="mailto:loic.philippe@epitech.eu">
              loic.philippe@epitech.eu
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub</span>
            <a className="contact-value" href="https://github.com/Loic-ally" target="_blank" rel="noreferrer">
              github.com/Loic-ally
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Téléphone</span>
            <a className="contact-value" href="tel:+33767498084">
              +33 7 67 49 80 84
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Localisation</span>
            <span className="contact-value">Mulhouse, France</span>
          </div>
        </div>

        <div className="contact-foot reveal">
          <a className="btn-cv" href="/CV.pdf" download>
            Télécharger le CV
            <span aria-hidden="true">↓</span>
          </a>
          <span className="contact-langs">
            <b>FR</b> natif · <b>EN</b> C1 · <b>IT</b> B1
          </span>
        </div>
      </div>
    </section>
  );
}

// Mark all relevant elements as reveal targets after mount
function useMarkReveals(deps) {
  useEffect(() => {
    const selectors = [
      ".section-head",
      ".section-title",
      ".about-body p",
      ".project",
      ".stack-group",
      ".xp",
      ".edu",
    ];
    document.querySelectorAll(selectors.join(",")).forEach((el, i) => {
      if (!el.classList.contains("reveal")) {
        el.classList.add("reveal");
        el.style.setProperty("--reveal-delay", Math.min(i, 6) * 0.05 + "s");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + density to <html>
  useEffect(() => {
    document.documentElement.dataset.dark = String(!!t.dark);
    document.documentElement.dataset.density = t.density;
  }, [t.dark, t.density]);

  useMarkReveals([t.density, t.signature]);
  useTagInViewFx([t.density, t.signature]);
  useInViewEnhance();

  return (
    <>
      <ScrollProgress />
      {t.softCursor && <SoftCursor />}
      <Nav
        dark={t.dark}
        onToggleDark={() => setTweak("dark", !t.dark)}
        sigVariant={t.signature}
      />

      <Hero sigVariant={t.signature} intensity={t.shapeIntensity} />

      <SectionDivider variant={t.signature} />

      <About sigVariant={t.signature} />
      <SectionDivider variant={t.signature} />

      <Projects sigVariant={t.signature} />
      <SectionDivider variant={t.signature} />

      <Stack />
      <SectionDivider variant={t.signature} />

      <Experience />
      <SectionDivider variant={t.signature} />

      <Education />
      <SectionDivider variant={t.signature} />

      <Contact sigVariant={t.signature} intensity={t.shapeIntensity} />

      <Footer sigVariant={t.signature} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Apparence" />
        <TweakToggle
          label="Mode sombre"
          value={t.dark}
          onChange={(v) => setTweak("dark", v)}
        />
        <TweakRadio
          label="Densité"
          value={t.density}
          options={["compact", "regular", "spacious"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakSection label="Géométrie" />
        <TweakSlider
          label="Intensité des formes"
          value={t.shapeIntensity}
          min={0.2}
          max={1}
          step={0.05}
          onChange={(v) => setTweak("shapeIntensity", v)}
        />
        <TweakRadio
          label="Forme signature"
          value={String(t.signature)}
          options={["0", "1", "2"]}
          onChange={(v) => setTweak("signature", parseInt(v, 10))}
        />
        <TweakSection label="Effets" />
        <TweakToggle
          label="Curseur custom"
          value={t.softCursor}
          onChange={(v) => setTweak("softCursor", v)}
        />
      </TweaksPanel>
    </>
  );
}
