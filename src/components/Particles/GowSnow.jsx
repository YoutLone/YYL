import React, { useEffect, useRef } from "react";

// GOW-style ash/snow particles — pure canvas, no dependencies
// Mimics the falling ash/snow from God of War (2018) & Ragnarök

function GowSnow() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    // ── Resize handler ──
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Snowflake / ash particle factory ──
    const PARTICLE_COUNT = 160;

    const rand  = (min, max) => Math.random() * (max - min) + min;
    const randI = (min, max) => Math.floor(rand(min, max));

    // Three types: fine snow dust, medium flake, larger ash chunk
    const createParticle = (fromTop = false) => {
      const type = Math.random();
      const x    = rand(0, canvas.width);
      const y    = fromTop ? rand(-40, -4) : rand(0, canvas.height);

      if (type < 0.65) {
        // fine snow dust — tiny, near-white
        return {
          x, y,
          r:      rand(0.6, 1.8),
          vx:     rand(-0.3, 0.3),
          vy:     rand(0.4, 1.1),
          alpha:  rand(0.3, 0.75),
          wobble: rand(0, Math.PI * 2),
          wobbleSpeed: rand(0.008, 0.022),
          wobbleAmp:   rand(0.3, 0.9),
          color:  `255,248,240`,
          type:   "dust",
          spin: 0, spinSpeed: 0,
        };
      } else if (type < 0.88) {
        // medium snowflake — 6-pointed star shape
        return {
          x, y,
          r:      rand(2, 4.5),
          vx:     rand(-0.5, 0.5),
          vy:     rand(0.5, 1.4),
          alpha:  rand(0.4, 0.85),
          wobble: rand(0, Math.PI * 2),
          wobbleSpeed: rand(0.012, 0.028),
          wobbleAmp:   rand(0.5, 1.5),
          color:  `240,235,228`,
          type:   "flake",
          spin:      rand(0, Math.PI * 2),
          spinSpeed: rand(-0.015, 0.015),
        };
      } else {
        // ash chunk — irregular, slightly warm-tinted, drifts slowly
        return {
          x, y,
          r:      rand(1.5, 3.2),
          vx:     rand(-0.6, 0.6),
          vy:     rand(0.2, 0.7),
          alpha:  rand(0.15, 0.45),
          wobble: rand(0, Math.PI * 2),
          wobbleSpeed: rand(0.005, 0.015),
          wobbleAmp:   rand(0.8, 2.0),
          color:  `210,190,170`,
          type:   "ash",
          spin:      rand(0, Math.PI * 2),
          spinSpeed: rand(-0.008, 0.008),
          scaleX:    rand(0.5, 1.0),
        };
      }
    };

    // Init particles spread across full canvas
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.current.push(createParticle(false));
    }

    // ── Draw a 6-arm snowflake ──
    const drawFlake = (ctx, r) => {
      for (let a = 0; a < 6; a++) {
        const angle = (a * Math.PI) / 3;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        // small side branches
        const bx = Math.cos(angle) * r * 0.5;
        const by = Math.sin(angle) * r * 0.5;
        const bAngle1 = angle + Math.PI / 4;
        const bAngle2 = angle - Math.PI / 4;
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(bAngle1) * r * 0.28, by + Math.sin(bAngle1) * r * 0.28);
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(bAngle2) * r * 0.28, by + Math.sin(bAngle2) * r * 0.28);
      }
    };

    // ── Draw an irregular ash chunk ──
    const drawAsh = (ctx, r, scaleX) => {
      ctx.scale(scaleX, 1);
      ctx.beginPath();
      const sides = randI(4, 7);
      for (let i = 0; i < sides; i++) {
        const a  = (i / sides) * Math.PI * 2;
        const rr = r * rand(0.6, 1.0);
        if (i === 0) ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
        else         ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
      }
      ctx.closePath();
      ctx.fill();
    };

    // ── Main animation loop ──
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        // Update wobble
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * p.wobbleAmp;
        p.y += p.vy;
        if (p.type !== "dust") p.spin += p.spinSpeed;

        // Wrap around edges
        if (p.y > canvas.height + 10) {
          particles.current[i] = createParticle(true);
          return;
        }
        if (p.x < -20)  p.x = canvas.width + 10;
        if (p.x > canvas.width + 20) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);

        if (p.type === "dust") {
          // Simple glowing circle
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r * 2);
          grad.addColorStop(0, `rgba(${p.color},${p.alpha})`);
          grad.addColorStop(1, `rgba(${p.color},0)`);
          ctx.beginPath();
          ctx.arc(0, 0, p.r * 2, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

        } else if (p.type === "flake") {
          ctx.rotate(p.spin);
          ctx.strokeStyle = `rgba(${p.color},1)`;
          ctx.lineWidth   = p.r * 0.28;
          ctx.lineCap     = "round";
          ctx.beginPath();
          drawFlake(ctx, p.r);
          ctx.stroke();
          // Center dot
          ctx.beginPath();
          ctx.arc(0, 0, p.r * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},1)`;
          ctx.fill();

        } else {
          // Ash
          ctx.rotate(p.spin);
          ctx.fillStyle = `rgba(${p.color},1)`;
          drawAsh(ctx, p.r, p.scaleX);
        }

        ctx.restore();
      });

      animRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
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
        zIndex: 1,
      }}
    />
  );
}

export default GowSnow;
