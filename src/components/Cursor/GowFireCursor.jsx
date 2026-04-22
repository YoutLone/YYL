import React, { useEffect, useRef } from "react";

// ── GOW Fire Cursor ──
// Custom cursor replaced with an Axe/fire aura.
// Ember particles trail behind the cursor like Kratos' Blades of Chaos.

function GowFireCursor() {
  const canvasRef  = useRef(null);
  const animRef    = useRef(null);
  const mouseRef   = useRef({ x: -200, y: -200 });
  const prevMouse  = useRef({ x: -200, y: -200 });
  const embers     = useRef([]);
  const mounted    = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    // ── Resize ──
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Hide default cursor via injected style ──
    const style = document.createElement("style");
    style.id    = "gow-cursor-style";
    style.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `;
    document.head.appendChild(style);

    // ── Track mouse ──
    const onMove = (e) => {
      prevMouse.current = { ...mouseRef.current };
      mouseRef.current  = { x: e.clientX, y: e.clientY };

      // Spawn embers proportional to movement speed
      const dx    = mouseRef.current.x - prevMouse.current.x;
      const dy    = mouseRef.current.y - prevMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const count = Math.min(Math.floor(speed * 0.6) + 1, 8);

      for (let i = 0; i < count; i++) {
        spawnEmber(mouseRef.current.x, mouseRef.current.y, dx, dy);
      }
    };

    // Spawn on idle too (slow drip)
    const idleInterval = setInterval(() => {
      if (!mounted.current) return;
      spawnEmber(mouseRef.current.x, mouseRef.current.y, 0, 0);
    }, 80);

    window.addEventListener("mousemove", onMove);

    // ── Ember factory ──
    const rand  = (a, b) => Math.random() * (b - a) + a;

    const spawnEmber = (x, y, dx, dy) => {
      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) + rand(-0.8, 0.8);
      const v     = rand(0.5, 2.5) + speed * 0.08;

      // Color: white → gold → orange → red → transparent
      const colorRoll = Math.random();
      let color;
      if      (colorRoll < 0.15) color = { r: 255, g: 255, b: 220 }; // near-white core
      else if (colorRoll < 0.40) color = { r: 255, g: 200, b: 60  }; // gold
      else if (colorRoll < 0.70) color = { r: 255, g: 110, b: 20  }; // orange
      else if (colorRoll < 0.88) color = { r: 200, g: 40,  b: 10  }; // red
      else                       color = { r: 140, g: 20,  b: 5   }; // deep crimson

      embers.current.push({
        x, y,
        vx:     Math.cos(angle) * v + rand(-0.4, 0.4),
        vy:     Math.sin(angle) * v - rand(0.5, 2.0), // always drifts upward
        r:      rand(1.5, 4.5),
        life:   1.0,
        decay:  rand(0.018, 0.045),
        color,
        flicker:      rand(0, Math.PI * 2),
        flickerSpeed: rand(0.1, 0.3),
        gravity: rand(0.02, 0.06),
      });
    };

    // ── Draw the cursor head (fire orb) ──
    const drawCursorHead = (x, y) => {
      // Outer glow
      const outerGrad = ctx.createRadialGradient(x, y, 0, x, y, 28);
      outerGrad.addColorStop(0,   "rgba(255,160,40,0.25)");
      outerGrad.addColorStop(0.5, "rgba(200,60,10,0.12)");
      outerGrad.addColorStop(1,   "rgba(180,30,5,0)");
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fillStyle = outerGrad;
      ctx.fill();

      // Inner flame core
      const innerGrad = ctx.createRadialGradient(x, y - 2, 0, x, y, 10);
      innerGrad.addColorStop(0,   "rgba(255,255,200,1)");
      innerGrad.addColorStop(0.3, "rgba(255,180,40,0.9)");
      innerGrad.addColorStop(0.7, "rgba(220,70,10,0.7)");
      innerGrad.addColorStop(1,   "rgba(180,20,5,0)");
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = innerGrad;
      ctx.fill();

      // Center white dot
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,240,0.95)";
      ctx.fill();
    };

    // ── Main loop ──
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw embers
      embers.current = embers.current.filter(e => e.life > 0);

      embers.current.forEach(e => {
        e.x      += e.vx;
        e.y      += e.vy;
        e.vy     -= 0.04; // upward drift (fire rises)
        e.vx     *= 0.97;
        e.vy     *= 0.97;
        e.r      *= 0.975;
        e.life   -= e.decay;
        e.flicker += e.flickerSpeed;

        const flicker = Math.sin(e.flicker) * 0.12;
        const alpha   = Math.max(0, e.life + flicker);
        const cr      = e.color.r;
        const cg      = e.color.g;
        const cb      = e.color.b;

        ctx.save();
        ctx.globalAlpha = alpha;

        // Glow halo
        const haloR = e.r * 3;
        const halo  = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, haloR);
        halo.addColorStop(0,   `rgba(${cr},${cg},${cb},0.6)`);
        halo.addColorStop(0.4, `rgba(${cr},${cg},${cb},0.2)`);
        halo.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
        ctx.beginPath();
        ctx.arc(e.x, e.y, haloR, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Ember core
        ctx.beginPath();
        ctx.arc(e.x, e.y, Math.max(0.5, e.r), 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
        ctx.fill();

        ctx.restore();
      });

      // Draw cursor head on top
      const { x, y } = mouseRef.current;
      if (x > -100) drawCursorHead(x, y);

      animRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      mounted.current = false;
      cancelAnimationFrame(animRef.current);
      clearInterval(idleInterval);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      const s = document.getElementById("gow-cursor-style");
      if (s) s.remove();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
        zIndex: 10000,
      }}
    />
  );
}

export default GowFireCursor;
