


import { useEffect, useRef, useCallback } from "react";


const Cursor = () => {
  const lensRef = useRef(null);
  const dotRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const tgt = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });
  const tilt = useRef({ x: 0, y: 0 });
  const sizeState = useRef({ hover: false, click: false });
  const rafId = useRef(null);

  const lerp = (a, b, t) => a + (b - a) * t;

  const animate = useCallback(() => {
    const prevX = pos.current.x;
    const prevY = pos.current.y;

    pos.current.x = lerp(pos.current.x, tgt.current.x, 0.18);
    pos.current.y = lerp(pos.current.y, tgt.current.y, 0.18);

    vel.current.x = pos.current.x - prevX;
    vel.current.y = pos.current.y - prevY;

    tilt.current.x = lerp(tilt.current.x, vel.current.y * -1.6, 0.15);
    tilt.current.y = lerp(tilt.current.y, vel.current.x * 1.6, 0.15);

    const tx = Math.max(-12, Math.min(12, tilt.current.x));
    const ty = Math.max(-12, Math.min(12, tilt.current.y));

    if (lensRef.current) {
      lensRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) rotateX(${tx}deg) rotateY(${ty}deg)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [animate]);

  useEffect(() => {
    let visible = false;

    const setSize = () => {
      if (!lensRef.current) return;
      const { hover, click } = sizeState.current;
      const size = hover ? 45 : click ? 40 : 35;
      lensRef.current.style.width = `${size}px`;
      lensRef.current.style.height = `${size}px`;
      lensRef.current.classList.toggle("cursor-hover", hover);
      lensRef.current.classList.toggle("cursor-click", click);
    };

    const show = () => {
      if (visible) return;
      visible = true;
      lensRef.current?.style.setProperty("opacity", "1");
      dotRef.current?.style.setProperty("opacity", "1");
    };
    const hide = () => {
      visible = false;
      lensRef.current?.style.setProperty("opacity", "0");
      dotRef.current?.style.setProperty("opacity", "0");
    };

    const onMove = (e) => {
      show();
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    };
    const onDown = () => {
      sizeState.current.click = true;
      setSize();
    };
    const onUp = () => {
      sizeState.current.click = false;
      setSize();
    };
    const onOver = (e) => {
      const t = e.target;
      const hoverable = !!t.closest(
        "a, button, input, textarea, select, [data-cursor-hover]"
      );
      if (hoverable !== sizeState.current.hover) {
        sizeState.current.hover = hoverable;
        setSize();
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <>
     
      <div
        ref={lensRef}
        className="cursor-lens"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 35,
          height: 35,
          pointerEvents: "none",
          zIndex: 100,
          borderRadius: "50%",
          opacity: 0,
          willChange: "transform",
          backfaceVisibility: "hidden",
          backdropFilter: "blur(0.5px) saturate(3.9) brightness(2.1)",
          WebkitBackdropFilter: "blur(0.5px) saturate(5.9) brightness(1.1)",
          background: `
            radial-gradient(circle at 30% 26%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 20%, transparent 45%),
            radial-gradient(circle at 72% 78%, rgba(0,0,0,0.30) 0%, transparent 55%),
            radial-gradient(circle, transparent 55%, rgba(0,0,0,0.12) 100%)
          `,
          border: "1.5px solid rgba(255,255,255,0.55)",
          boxShadow: `
            0 14px 26px -8px rgba(0,0,0,0.5),
            0 0 16px rgba(255,255,255,0.18),
            inset 0 0 12px rgba(255,255,255,0.12)
          `,
          transition: "width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.25s ease",
        }}
      >
        {/* thin chromatic rim — one element, no blend-mode, cheap to paint */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "conic-gradient(from 0deg, rgba(255,90,90,0.35), rgba(255,210,90,0.3), rgba(120,255,160,0.3), rgba(90,180,255,0.35), rgba(200,120,255,0.3), rgba(255,90,90,0.35))",
            opacity: 0.45,
            WebkitMask:
              "radial-gradient(circle, transparent 64%, black 80%, black 100%)",
            mask: "radial-gradient(circle, transparent 64%, black 80%, black 100%)",
          }}
        />
      </div>

      {/* Center precision dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(230,255,255,0.95)",
          boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Hover/click state handle */}
      <style>{`
        .cursor-lens.cursor-hover {
          box-shadow:
            0 14px 26px -8px rgba(0,0,0,0.5),
            0 0 34px rgba(255,255,255,0.22),
            inset 0 0 12px rgba(255,255,255,0.15);
        }
        .cursor-lens.cursor-click {
          box-shadow:
            0 8px 16px -6px rgba(0,0,0,0.5),
            inset 0 0 20px rgba(0,0,0,0.3);
        }
        /* Kill the OS cursor everywhere, immediately, no flash */
        html, body, * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default Cursor;