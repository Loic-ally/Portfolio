// effects.jsx — micro-interactions & smooth animations
// - Magnetic hover (links, buttons)
// - Split-text reveal on hero name
// - Scroll progress bar
// - Tilt on project visuals
// - Soft cursor follower (desktop only)
// - Section-in fade with IntersectionObserver (visible by default; observer only enhances)

import { useEffect as useFx, useRef as useRefFx, useState as useStateFx } from "react";

// ─── Magnetic hover ──────────────────────────────────────────────────
// Pulls the element a few px toward the cursor on hover. Subtle.
export function useMagnetic(strength = 0.25, max = 8) {
  const ref = useRefFx(null);
  useFx(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      const x = Math.max(-max, Math.min(max, dx));
      const y = Math.max(-max, Math.min(max, dy));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength, max]);
  return ref;
}

export const Magnetic = ({ children, strength = 0.25, max = 8, className = "", as: Tag = "span", ...rest }) => {
  const ref = useMagnetic(strength, max);
  return (
    <Tag ref={ref} className={"magnetic " + className} {...rest}>
      {children}
    </Tag>
  );
};

// ─── Split text — by word, with stagger ──────────────────────────────
export const SplitText = ({ text, className = "", delay = 0, perWord = 0.06, as: Tag = "span" }) => {
  const words = text.split(/(\s+)/); // keep whitespace
  let wIdx = 0;
  return (
    <Tag className={"split-text " + className}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        const d = delay + wIdx * perWord;
        wIdx++;
        return (
          <span key={i} className="split-word" style={{ animationDelay: `${d}s` }}>
            {w}
          </span>
        );
      })}
    </Tag>
  );
};

// ─── Scroll progress bar ─────────────────────────────────────────────
export const ScrollProgress = () => {
  const [p, setP] = useStateFx(0);
  useFx(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${p})` }} />
    </div>
  );
};

// ─── Tilt wrapper for project visuals ────────────────────────────────
export const Tilt = ({ children, max = 6, className = "" }) => {
  const ref = useRefFx(null);
  useFx(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max]);
  return (
    <div ref={ref} className={"tilt " + className}>
      {children}
    </div>
  );
};

// ─── Soft cursor (desktop, hover surfaces) ───────────────────────────
export const SoftCursor = () => {
  const ref = useRefFx(null);
  const ringRef = useRefFx(null);
  useFx(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = ref.current,
      ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };
    const onOver = (e) => {
      const t = e.target.closest("a, button, .tilt, .magnetic, [data-cursor='hover']");
      if (t) ring.classList.add("is-hover");
      else ring.classList.remove("is-hover");
    };
    let raf = 0;
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={ref} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

// In-view enhancer: toggles `.is-in` IN AND OUT — re-plays animation when scrolled away & back.
export function useInViewEnhance() {
  useFx(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-in");
          else e.target.classList.remove("is-in");
        });
      },
      { threshold: [0, 0.1], rootMargin: "0px 0px -10% 0px" }
    );
    const attach = () => {
      document.querySelectorAll(".in-view-fx").forEach((el) => io.observe(el));
    };
    attach();
    // Re-attach if DOM nodes change (e.g. tweaks re-render)
    const mo = new MutationObserver(() => {
      document.querySelectorAll(".in-view-fx:not([data-fx-observed])").forEach((el) => {
        el.setAttribute("data-fx-observed", "1");
        io.observe(el);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

// Helper: tag relevant DOM nodes with .in-view-fx
export function useTagInViewFx(deps) {
  useFx(() => {
    const sels = [
      ".section-head",
      ".section-title",
      ".about-body p",
      ".about-aside",
      ".project",
      ".stack-group",
      ".xp",
      ".edu",
      ".contact-item",
    ];
    document.querySelectorAll(sels.join(",")).forEach((el, i) => {
      if (!el.classList.contains("in-view-fx")) {
        el.classList.add("in-view-fx");
        el.style.setProperty("--fx-delay", Math.min(i, 5) * 60 + "ms");
      }
    });
  }, deps || []);
}
