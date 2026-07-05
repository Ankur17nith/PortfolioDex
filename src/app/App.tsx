import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate as animeRun } from "animejs";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: "HTML",         level: 90, cat: "Markup",     type: "FIRE",     col: "#ff4757", xp: 9000 },
  { name: "CSS",          level: 85, cat: "Styling",    type: "WATER",    col: "#3d9be9", xp: 8500 },
  { name: "JavaScript",   level: 88, cat: "Language",   type: "ELECTRIC", col: "#ffd32a", xp: 8800 },
  { name: "TypeScript",   level: 80, cat: "Language",   type: "ICE",      col: "#45aaf2", xp: 8000 },
  { name: "Node.js",      level: 82, cat: "Runtime",    type: "GRASS",    col: "#00d4aa", xp: 8200 },
  { name: "Express.js",   level: 80, cat: "Framework",  type: "GRASS",    col: "#00d4aa", xp: 8000 },
  { name: "Next.js",      level: 78, cat: "Framework",  type: "DARK",     col: "#636e72", xp: 7800 },
  { name: "MongoDB",      level: 76, cat: "Database",   type: "GROUND",   col: "#e67e22", xp: 7600 },
  { name: "Tailwind CSS", level: 85, cat: "Styling",    type: "FLYING",   col: "#38bdf8", xp: 8500 },
  { name: "Nginx",        level: 68, cat: "DevOps",     type: "ROCK",     col: "#009639", xp: 6800 },
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  FIRE:     { bg: "#ff4757", text: "#fff" },
  WATER:    { bg: "#3d9be9", text: "#fff" },
  ELECTRIC: { bg: "#ffd32a", text: "#000" },
  GRASS:    { bg: "#00d4aa", text: "#000" },
  PSYCHIC:  { bg: "#a55eea", text: "#fff" },
  GROUND:   { bg: "#e67e22", text: "#fff" },
  ICE:      { bg: "#45aaf2", text: "#fff" },
  DRAGON:   { bg: "#9b59b6", text: "#fff" },
  FLYING:   { bg: "#f9ca24", text: "#000" },
  DARK:     { bg: "#636e72", text: "#fff" },
  ROCK:     { bg: "#b8860b", text: "#fff" },
  NORMAL:   { bg: "#888", text: "#fff" },
};

const PROJECTS = [
  {
    id: "#001",
    name: "TaskDex",
    hp: 480, maxHp: 500,
    type1: "ELECTRIC", type2: "GRASS",
    col: "#ffd32a",
    desc: "Full-stack task manager with JWT auth, CRUD boards, and drag-drop. Built with the MERN stack and a responsive Tailwind UI.",
    moves: [
      { name: "JWT Auth",         power: 82 },
      { name: "REST CRUD",        power: 80 },
      { name: "Drag & Drop",      power: 75 },
      { name: "Mongo Query",      power: 78 },
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    stats: { UI: 88, API: 82, DB: 80, DX: 85 },
  },
  {
    id: "#002",
    name: "ChatterBall",
    hp: 440, maxHp: 500,
    type1: "WATER", type2: "PSYCHIC",
    col: "#3d9be9",
    desc: "Real-time chat app with Socket.IO, typing indicators, and online presence. Rooms persisted in MongoDB.",
    moves: [
      { name: "Socket Stream",    power: 85 },
      { name: "Presence Ping",    power: 72 },
      { name: "Room Sync",        power: 78 },
      { name: "Typing Pulse",     power: 68 },
    ],
    tags: ["Node.js", "Socket.IO", "Express", "MongoDB"],
    stats: { UI: 80, API: 88, DB: 76, DX: 82 },
  },
  {
    id: "#003",
    name: "ShopVire",
    hp: 460, maxHp: 500,
    type1: "FIRE", type2: "FLYING",
    col: "#ff4757",
    desc: "Server-rendered e-commerce storefront with Next.js App Router, cart state, and Stripe checkout mock. SEO-optimized.",
    moves: [
      { name: "SSR Render",       power: 88 },
      { name: "Cart State",       power: 76 },
      { name: "SEO Boost",        power: 80 },
      { name: "Route Prefetch",   power: 84 },
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    stats: { UI: 92, API: 78, DB: 74, DX: 88 },
  },
  {
    id: "#004",
    name: "DevBlog CMS",
    hp: 420, maxHp: 500,
    type1: "GRASS", type2: "NORMAL",
    col: "#00d4aa",
    desc: "Markdown-powered blog engine with admin dashboard, tag filtering, and a REST API. Deployed behind Nginx reverse proxy.",
    moves: [
      { name: "MD Parser",        power: 74 },
      { name: "Tag Filter",       power: 70 },
      { name: "Admin Guard",      power: 78 },
      { name: "Nginx Proxy",      power: 72 },
    ],
    tags: ["Express", "MongoDB", "Nginx", "EJS"],
    stats: { UI: 76, API: 82, DB: 78, DX: 80 },
  },
  {
    id: "#005",
    name: "WeatherWing",
    hp: 400, maxHp: 500,
    type1: "FLYING", type2: "ICE",
    col: "#45aaf2",
    desc: "Responsive weather dashboard consuming a public API with geolocation, 7-day forecast, and animated conditions.",
    moves: [
      { name: "API Fetch",        power: 76 },
      { name: "Geo Locate",       power: 70 },
      { name: "Forecast Cast",    power: 74 },
      { name: "Anim Weather",     power: 80 },
    ],
    tags: ["JavaScript", "HTML", "CSS", "REST API"],
    stats: { UI: 85, API: 74, DB: 60, DX: 78 },
  },
  {
    id: "#006",
    name: "PortfolioDex",
    hp: 500, maxHp: 500,
    type1: "PSYCHIC", type2: "ELECTRIC",
    col: "#a55eea",
    desc: "This very site — a Pokemon-themed developer portfolio powered by Three.js, GSAP, and Anime.js with a fully typed codebase.",
    moves: [
      { name: "Three.js Orbit",   power: 90 },
      { name: "GSAP Scroll",      power: 88 },
      { name: "Anime Bars",       power: 82 },
      { name: "TS Strict",        power: 84 },
    ],
    tags: ["Next.js", "TypeScript", "Three.js", "Tailwind"],
    stats: { UI: 95, API: 70, DB: 60, DX: 92 },
  },
];

const BADGES = [
  { name: "Frontend Ace",  icon: "⚡", col: "#ffd32a" },
  { name: "API Builder",   icon: "🌿", col: "#00d4aa" },
  { name: "DB Handler",    icon: "🍃", col: "#e67e22" },
  { name: "TS Trainer",    icon: "🧊", col: "#45aaf2" },
  { name: "Next Ranger",   icon: "🌑", col: "#636e72" },
  { name: "Style Master",  icon: "💧", col: "#3d9be9" },
  { name: "Deploy Scout",  icon: "🔧", col: "#009639" },
  { name: "Fresh Trainer", icon: "🔥", col: "#ff4757" },
];

// ─── THREE.JS — Pokeball battle field ────────────────────────────────────────

// Soft radial-glow sprite texture, cached across pokeballs
let _glowTex: THREE.Texture | null = null;
function glowTexture(): THREE.Texture {
  if (_glowTex) return _glowTex;
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255,255,255,0.9)");
  grad.addColorStop(0.25, "rgba(255,255,255,0.5)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  _glowTex = new THREE.CanvasTexture(c);
  return _glowTex;
}

// Builds a clean solid Pokeball as a THREE.Group, with a soft additive glow halo
function makePokeball(radius: number, color: string): THREE.Group {
  const g = new THREE.Group();
  const seg = 28;

  // Soft glow halo behind the ball
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color, transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  glow.scale.setScalar(radius * 4.5);
  g.add(glow);

  // Top colored hemisphere
  const top = new THREE.Mesh(
    new THREE.SphereGeometry(radius, seg, seg, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 })
  );
  g.add(top);

  // Bottom white hemisphere
  const bot = new THREE.Mesh(
    new THREE.SphereGeometry(radius, seg, seg, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: "#eef2f8", transparent: true, opacity: 0.85 })
  );
  g.add(bot);

  // Black equator band
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 1.0, radius * 0.1, 10, 44),
    new THREE.MeshBasicMaterial({ color: "#0a0a0f" })
  );
  band.rotation.x = Math.PI / 2;
  g.add(band);

  // Center button — ring + white core
  const btnRing = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.32, radius * 0.08, 10, 28),
    new THREE.MeshBasicMaterial({ color: "#0a0a0f" })
  );
  btnRing.position.z = radius * 0.98;
  g.add(btnRing);
  const btn = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.26, 24),
    new THREE.MeshBasicMaterial({ color: "#ffffff" })
  );
  btn.position.z = radius * 1.0;
  g.add(btn);

  return g;
}

function BattleArena() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const W = window.innerWidth, H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#0a0a0f", 0.0022);
    const cam = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    cam.position.z = 100;

    // ── Two-layer starfield for parallax depth ──
    const makeStars = (count: number, spread: number, size: number, opacity: number) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * spread;
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size, color: "#ffffff", transparent: true, opacity }));
      scene.add(pts);
      return pts;
    };
    const starsFar = makeStars(1400, 700, 0.4, 0.35);
    const starsNear = makeStars(500, 400, 0.7, 0.55);

    // ── A few drifting Pokeballs with clear depth spacing ──
    const ballColors = ["#ff4757", "#ffd32a", "#3d9be9", "#a55eea", "#00d4aa"];
    const balls: { grp: THREE.Group; baseX: number; baseY: number; z: number; spin: number; bob: number; phase: number; drift: number }[] = [];
    ballColors.forEach((col, i) => {
      const r = 4 + Math.random() * 3;
      const grp = makePokeball(r, col);
      // spread across screen with distinct depths
      const baseX = (i - (ballColors.length - 1) / 2) * 34 + (Math.random() - 0.5) * 12;
      const baseY = (Math.random() - 0.5) * 50;
      const z = -30 - i * 18 - Math.random() * 10;
      grp.position.set(baseX, baseY, z);
      grp.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(grp);
      balls.push({
        grp, baseX, baseY, z,
        spin: 0.003 + Math.random() * 0.006,
        bob: 3 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        drift: 0.15 + Math.random() * 0.15,
      });
    });

    // ── Retro synthwave horizon grid that scrolls toward camera ──
    const gridDivs = 40, gridSize = 600;
    const grid = new THREE.GridHelper(gridSize, gridDivs, "#ff2d55", "#3d1030");
    (grid.material as THREE.Material & { opacity: number; transparent: boolean }).opacity = 0.14;
    (grid.material as THREE.Material & { transparent: boolean }).transparent = true;
    grid.position.y = -48;
    scene.add(grid);
    const gridStep = gridSize / gridDivs;

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMouse);

    const timer = new THREE.Timer();
    let id: number;
    const tick = () => {
      id = requestAnimationFrame(tick);
      timer.update();
      const t = timer.getElapsed();

      balls.forEach((b) => {
        b.grp.position.x = b.baseX + Math.sin(t * b.drift + b.phase) * 6;
        b.grp.position.y = b.baseY + Math.sin(t * 0.6 + b.phase) * b.bob;
        b.grp.rotation.y += b.spin;
        b.grp.rotation.x += b.spin * 0.35;
      });

      // scroll grid toward camera, wrap by one cell for seamless loop
      grid.position.z = ((t * 12) % gridStep);

      starsFar.rotation.y = t * 0.005;
      starsNear.rotation.y = t * 0.01;

      cam.position.x += (mx * 14 - cam.position.x) * 0.03;
      cam.position.y += (my * 8 - cam.position.y) * 0.03;
      cam.lookAt(0, 0, -40);
      renderer.render(scene, cam);
    };
    tick();

    // Fade the whole canvas in on mount
    gsap.fromTo(mount, { opacity: 0 }, { opacity: 1, duration: 1.4, ease: "power2.out" });

    const onResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mountRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

// ─── Pokeball SVG ─────────────────────────────────────────────────────────────

function Pokeball({ size = 40, spin = false, glow = false }: { size?: number; spin?: boolean; glow?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none"
      style={{
        animation: spin ? "pokespin 3s linear infinite" : undefined,
        filter: glow ? "drop-shadow(0 0 8px #ff2d55)" : undefined,
        flexShrink: 0,
      }}>
      <circle cx="50" cy="50" r="48" fill="#1a1a2e" stroke="#ff2d55" strokeWidth="2.5" />
      <path d="M2 50 Q2 2 50 2 Q98 2 98 50 Z" fill="#ff2d55" />
      <line x1="2" y1="50" x2="98" y2="50" stroke="#e8e8f0" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="13" fill="#1a1a2e" stroke="#e8e8f0" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="7" fill="#ff2d55" />
      <circle cx="46" cy="46" r="2.5" fill="#fff" opacity="0.6" />
    </svg>
  );
}

// ─── Type badge ───────────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: string }) {
  const c = TYPE_COLORS[type] ?? TYPE_COLORS.NORMAL;
  return (
    <span style={{
      fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem",
      background: c.bg, color: c.text,
      padding: "3px 7px", letterSpacing: "0.08em",
    }}>{type}</span>
  );
}

// ─── HP Bar ───────────────────────────────────────────────────────────────────

function HpBar({ hp, maxHp, color = "#00d4aa" }: { hp: number; maxHp: number; color?: string }) {
  const pct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
  const col = pct > 50 ? "#00d4aa" : pct > 20 ? "#ffd32a" : "#ff4757";
  return (
    <div className="flex items-center gap-2">
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#7a7a9a" }}>HP</span>
      <div className="flex-1 h-2 bg-[#0d0d18] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: col, transition: "width 0.8s ease" }} />
      </div>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#7a7a9a" }}>{hp}/{maxHp}</span>
    </div>
  );
}

// ─── XP Bar ───────────────────────────────────────────────────────────────────

function XpBar({ xp, maxXp = 10000, color }: { xp: number; maxXp?: number; color: string }) {
  const pct = (xp / maxXp) * 100;
  return (
    <div className="flex items-center gap-2">
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>XP</span>
      <div className="flex-1 h-1.5 bg-[#0d0d18] overflow-hidden">
        <div className="xp-fill h-full" data-w={pct} style={{ width: "0%", background: color }} />
      </div>
    </div>
  );
}

// ─── Glitch Text ──────────────────────────────────────────────────────────────

function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
      {text}
      <span aria-hidden className="absolute inset-0 text-[#ff4757]" style={{
        clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
        animation: "glitch1 4s infinite", transform: "translate(-3px,0)", opacity: 0.85,
        fontFamily: "'Press Start 2P', monospace",
      }}>{text}</span>
      <span aria-hidden className="absolute inset-0 text-[#3d9be9]" style={{
        clipPath: "polygon(0 62%, 100% 62%, 100% 78%, 0 78%)",
        animation: "glitch2 4s infinite", transform: "translate(3px,0)", opacity: 0.85,
        fontFamily: "'Press Start 2P', monospace",
      }}>{text}</span>
    </span>
  );
}

// ─── Dialog Box (Pokemon text style) ─────────────────────────────────────────

function DialogBox({ lines }: { lines: string[] }) {
  // How many characters of each line are currently revealed.
  const [counts, setCounts] = useState<number[]>(() => lines.map(() => 0));
  const [cursor, setCursor] = useState(true);
  const LINE_H = 1.9;      // em, matches the <p> line-height below
  const FONT_REM = 0.55;   // rem, matches font size below

  useEffect(() => {
    let line = 0, char = 0;
    let raf = 0;
    const typeTick = () => {
      if (line >= lines.length) return;
      char++;
      setCounts((prev) => {
        const next = [...prev];
        next[line] = char;
        return next;
      });
      if (char >= lines[line].length) {
        line++; char = 0;
        raf = window.setTimeout(typeTick, 550); // pause between lines
      } else {
        raf = window.setTimeout(typeTick, 38);  // per-character speed
      }
    };
    const start = window.setTimeout(typeTick, 400);
    const blink = window.setInterval(() => setCursor((c) => !c), 500);
    return () => { clearTimeout(start); clearTimeout(raf); clearInterval(blink); };
  }, []);

  // Reserve full height up-front so the box never grows / the layout never jumps.
  const reservedHeight = `calc(${lines.length} * ${FONT_REM * LINE_H}rem + 2.5rem)`;

  return (
    <div className="relative p-5" style={{
      background: "#0f0f1a",
      border: "3px solid #e8e8f0",
      boxShadow: "inset 0 0 0 1px #0a0a0f, 4px 4px 0 #ff2d55",
      minHeight: reservedHeight,
    }}>
      <div>
        {lines.map((line, i) => (
          <p key={i} style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: `${FONT_REM}rem`,
            color: "#e8e8f0",
            lineHeight: LINE_H,
            minHeight: `${FONT_REM * LINE_H}rem`,
          }}>
            {line.slice(0, counts[i])}
          </p>
        ))}
      </div>
      {cursor && (
        <span className="absolute bottom-3 right-4" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "#ff2d55" }}>▼</span>
      )}
    </div>
  );
}

// ─── Pixel border container ────────────────────────────────────────────────────

function PixelBox({ children, color = "#ff2d55", className = "" }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{
      background: "#0f0f1a",
      border: `2px solid ${color}`,
      boxShadow: `3px 3px 0 ${color}55`,
    }}>
      {children}
    </div>
  );
}

// ─── Scroll XP bar (top of page) ─────────────────────────────────────────────

function ScrollXPBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1" style={{ background: "#0a0a0f" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#ff2d55,#ffd32a)", transition: "width 0.1s" }} />
    </div>
  );
}

// ─── Wild Encounter Toast ─────────────────────────────────────────────────────

function WildToast({ name, onDone }: { name: string; onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current, { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.4)" });
    const t = setTimeout(() => {
      gsap.to(ref.current, { x: 120, opacity: 0, duration: 0.35, onComplete: onDone });
    }, 2600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div ref={ref} className="fixed bottom-24 right-6 z-[200]" style={{
      background: "#0f0f1a", border: "2px solid #ffd32a",
      boxShadow: "3px 3px 0 #ffd32a55", padding: "10px 16px",
    }}>
      <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ffd32a" }}>
        A wild {name}
      </p>
      <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ffd32a" }}>
        appeared!
      </p>
    </div>
  );
}

// ─── Level Up Toast ────────────────────────────────────────────────────────────

function LevelUpToast({ skill, onDone }: { skill: string; onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(ref.current,
      { y: 40, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }
    );
    const t = setTimeout(() => {
      gsap.to(ref.current, { y: -20, opacity: 0, duration: 0.4, onComplete: onDone });
    }, 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div ref={ref} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 text-center" style={{
      background: "#ffd32a", border: "3px solid #e8e8f0",
      boxShadow: "0 0 30px #ffd32a88, 4px 4px 0 #0a0a0f",
    }}>
      <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "#0a0a0f" }}>
        {skill} grew to a new level!
      </p>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav({ active }: { active: string }) {
  const links = [
    { id: "hero",     label: "HOME" },
    { id: "skills",   label: "MOVES" },
    { id: "projects", label: "POKEDEX" },
    { id: "leetcode", label: "BATTLES" },
    { id: "contact",  label: "LINKS" },
  ];
  return (
    <nav className="fixed top-1 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{ background: "rgba(10,10,15,0.93)", backdropFilter: "blur(14px)", borderBottom: "2px solid rgba(255,45,85,0.25)" }}>
      <div className="flex items-center gap-3">
        <Pokeball size={28} spin glow />
        <div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ff2d55" }}>DEV.EXE</div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: "#7a7a9a" }}>v1.0 · FULLSTACK</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`}
            className="px-3 py-1.5 transition-all duration-150"
            style={{
              fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem",
              color: active === l.id ? "#0a0a0f" : "#7a7a9a",
              background: active === l.id ? "#ff2d55" : "transparent",
              letterSpacing: "0.06em",
            }}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem" }}>
        <span style={{ color: "#00d4aa" }}>●</span>
        <span style={{ color: "#7a7a9a" }}>ONLINE</span>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(cardRef.current, { x: -80, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3 });
    gsap.from(rightRef.current, { x: 80, opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-16 pt-20" style={{ zIndex: 2 }}>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Trainer Card */}
        <div ref={cardRef}>
          <PixelBox color="#ffd32a" className="p-0 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-3" style={{ background: "#ffd32a" }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#0a0a0f" }}>TRAINER CARD</span>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#0a0a0f" }}>No.001</span>
            </div>

            <div className="p-5 space-y-5">
              {/* Name + sprite row */}
              <div className="flex items-start gap-5">
                {/* Sprite placeholder */}
                <div className="shrink-0 w-24 h-24 flex items-center justify-center relative" style={{ background: "#1a1a2e", border: "2px solid #ffd32a22" }}>
                  <div className="text-5xl select-none">👨‍💻</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#ff2d55,#ffd32a,#00d4aa)" }} />
                </div>
                <div className="flex-1">
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#7a7a9a", marginBottom: "6px" }}>NAME</div>
                  <GlitchText text="ANKUR" className="text-lg text-white block mb-1" />
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.95rem", color: "#ffd32a", letterSpacing: "0.3em", fontWeight: 700 }}>
                    GUPTA
                  </div>
                  <div className="mt-2 flex gap-2">
                    <TypeBadge type="ELECTRIC" />
                    <TypeBadge type="GRASS" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { k: "CLASS",    v: "FULLSTACK DEV" },
                  { k: "TRAINER", v: "LV. 1" },
                  { k: "EXP",      v: "FRESHER" },
                  { k: "BADGES",   v: "8 / 8" },
                ].map((s) => (
                  <div key={s.k} className="px-3 py-2" style={{ background: "#0d0d18", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: "#7a7a9a", marginBottom: "4px" }}>{s.k}</div>
                    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#e8e8f0" }}>{s.v}</div>
                  </div>
                ))}
              </div>

              {/* Badges row */}
              <div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "8px" }}>BADGES EARNED</div>
                <div className="flex flex-wrap gap-2">
                  {BADGES.map((b) => (
                    <div key={b.name} className="group relative px-2 py-1.5 flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                      style={{ background: `${b.col}18`, border: `1px solid ${b.col}55` }}>
                      <span>{b.icon}</span>
                      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: b.col }}>{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Play time */}
              <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>PLAY TIME</span>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", color: "#ffd32a" }}>READY TO START</span>
              </div>
            </div>
          </PixelBox>
        </div>

        {/* Right side */}
        <div ref={rightRef} className="space-y-6">
          <DialogBox lines={[
            "ANKUR wants to battle!",
            "A hungry Full-Stack Developer.",
            "Fresh trainer, MERN + Next.js type.",
            "Ready to catch that first offer!",
          ]} />

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "PROJECTS", v: "6+",  col: "#ff4757" },
              { label: "SKILLS",   v: "10",  col: "#ffd32a" },
              { label: "LEVEL",    v: "1",   col: "#00d4aa" },
            ].map((s) => (
              <PixelBox key={s.label} color={s.col} className="p-4 text-center">
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.1rem", color: s.col, marginBottom: "6px" }}>{s.v}</div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>{s.label}</div>
              </PixelBox>
            ))}
          </div>

          <div className="flex gap-3">
            <a href="#projects" className="flex-1 py-3 text-center transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: "#ff2d55", fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#fff", boxShadow: "4px 4px 0 #991b2e" }}>
              ► NEW GAME
            </a>
            <a href="#contact" className="flex-1 py-3 text-center transition-all duration-150 hover:-translate-y-0.5"
              style={{ background: "#0f0f1a", fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#e8e8f0", border: "2px solid #e8e8f0", boxShadow: "4px 4px 0 #33334a" }}>
              ► CONTINUE
            </a>
          </div>

          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", textAlign: "center" }}>
            ↓ SCROLL TO EXPLORE ↓
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);
  const [levelUp, setLevelUp] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const runBars = () => {
      if (fired) return;
      setFired(true);
      const fills = el.querySelectorAll<HTMLElement>(".skill-bar-fill");
      fills.forEach((f, i) => animeRun(f, { width: f.dataset.w + "%", duration: 1100, delay: i * 70, ease: "outExpo" }));
      const xpFills = el.querySelectorAll<HTMLElement>(".xp-fill");
      xpFills.forEach((f, i) => animeRun(f, { width: f.dataset.w + "%", duration: 900, delay: i * 70 + 400, ease: "outExpo" }));
      [SKILLS[0], SKILLS[4], SKILLS[5]].forEach((s, i) => {
        setTimeout(() => {
          setLevelUp(s.name);
          setTimeout(() => setLevelUp(null), 2200);
        }, 1400 + i * 2500);
      });
    };

    // Reliable reveal — cards fade/slide in, then inline styles are cleared so
    // they can never get stuck hidden. onEnter also kicks off the bar fills.
    const st = gsap.from(el.querySelectorAll(".skill-card"), {
      y: 30, opacity: 0, duration: 0.45, stagger: 0.06, ease: "power2.out",
      immediateRender: false, clearProps: "opacity,transform",
      scrollTrigger: { trigger: el, start: "top 88%", once: true, onEnter: runBars },
    });
    return () => { st.scrollTrigger?.kill(); st.kill(); };
  }, [fired]);

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      {levelUp && <LevelUpToast skill={levelUp} onDone={() => setLevelUp(null)} />}

      {/* Section header */}
      <div className="mb-12">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ff2d55", marginBottom: "8px", letterSpacing: "0.2em" }}>// SKILL_POKEDEX</div>
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1rem,2.5vw,1.6rem)", color: "#e8e8f0", lineHeight: 1.5, marginBottom: "6px" }}>
          MOVES & ABILITIES
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#7a7a9a" }}>
          Technical moves learned through 4+ years of training
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div style={{ height: "1px", width: "48px", background: "#ff2d55" }} />
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <Pokeball size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill, idx) => (
          <PixelBox key={skill.name} color={`${skill.col}44`} className="skill-card p-5 group transition-all duration-200 hover:-translate-y-1">
            {/* Top row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TypeBadge type={skill.type} />
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>{skill.cat}</span>
              </div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", color: "#ffd32a" }}>
                LV.{skill.level}
              </div>
            </div>

            {/* Name */}
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#e8e8f0", marginBottom: "10px", letterSpacing: "0.05em" }}>
              {skill.name}
            </div>

            {/* HP bar (skill level) */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: "#7a7a9a" }}>POW</span>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: skill.col }}>{skill.level}/100</span>
              </div>
              <div className="w-full h-2.5 bg-[#0d0d18] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="skill-bar-fill h-full" data-w={skill.level}
                  style={{ width: "0%", background: `linear-gradient(90deg,${skill.col}77,${skill.col})` }} />
              </div>
            </div>

            {/* XP bar */}
            <XpBar xp={skill.xp} color={skill.col} />

            {/* Pixel meter */}
            <div className="mt-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", color: skill.col, letterSpacing: "1px" }}>
              {"█".repeat(Math.floor(skill.level / 10))}
              <span style={{ color: "#1a1a2e" }}>{"█".repeat(10 - Math.floor(skill.level / 10))}</span>
            </div>
          </PixelBox>
        ))}
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [wildToast, setWildToast] = useState<string | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const toastFired = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const st = gsap.from(el.querySelectorAll(".proj-card"), {
      y: 50, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
      immediateRender: false, clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: el, start: "top 88%", once: true,
        onEnter: () => {
          if (!toastFired.current) { toastFired.current = true; setWildToast(PROJECTS[0].name); }
        },
      },
    });
    return () => { st.scrollTrigger?.kill(); st.kill(); };
  }, []);

  const handleCardClick = (idx: number) => {
    const card = sectionRef.current?.querySelectorAll(".proj-card")[idx];
    if (!card) return;
    // Battle flash
    gsap.to(card, { scale: 0.96, duration: 0.08, yoyo: true, repeat: 3, ease: "none" });
    setActive(active === idx ? null : idx);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      {wildToast && <WildToast name={wildToast} onDone={() => setWildToast(null)} />}

      <div className="mb-12">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ff2d55", marginBottom: "8px", letterSpacing: "0.2em" }}>// PROJ_STORAGE</div>
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1rem,2.5vw,1.6rem)", color: "#e8e8f0", lineHeight: 1.5, marginBottom: "6px" }}>
          CAPTURED PROJECTS
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#7a7a9a" }}>
          Click a card to enter battle view — see moves, stats & details
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div style={{ height: "1px", width: "48px", background: "#ff2d55" }} />
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <Pokeball size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, idx) => {
          const isActive = active === idx;
          return (
            <div key={p.id}
              className="proj-card cursor-pointer transition-all duration-300"
              style={{ gridColumn: isActive ? "1 / -1" : undefined }}
              onClick={() => handleCardClick(idx)}>
              <PixelBox color={isActive ? p.col : `${p.col}44`} className="overflow-hidden">

                {/* Card top bar */}
                <div className="flex items-center justify-between px-4 py-2" style={{ background: `${p.col}22`, borderBottom: `1px solid ${p.col}44` }}>
                  <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>{p.id}</span>
                  <div className="flex gap-1.5">
                    <TypeBadge type={p.type1} />
                    <TypeBadge type={p.type2} />
                  </div>
                  <Pokeball size={18} />
                </div>

                {isActive ? (
                  /* ── Battle view ── */
                  <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left: name + desc */}
                    <div className="md:col-span-1 space-y-4">
                      <div>
                        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "6px" }}>NAME</div>
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#e8e8f0", letterSpacing: "0.05em" }}>{p.name}</div>
                      </div>
                      <HpBar hp={p.hp} maxHp={p.maxHp} />
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "#7a7a9a", lineHeight: 1.7 }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: p.col, background: `${p.col}18`, padding: "3px 7px", border: `1px solid ${p.col}44` }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Middle: moves */}
                    <div className="md:col-span-1">
                      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "10px" }}>MOVES</div>
                      <div className="space-y-3">
                        {p.moves.map((m) => (
                          <div key={m.name} className="px-3 py-3" style={{ background: "#0d0d18", border: `1px solid ${p.col}33` }}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", color: "#e8e8f0" }}>{m.name}</span>
                              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: p.col }}>PWR {m.power}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#070710] overflow-hidden">
                              <div style={{ width: `${m.power}%`, height: "100%", background: p.col, transition: "width 0.8s ease" }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: base stats */}
                    <div className="md:col-span-1">
                      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "10px" }}>BASE STATS</div>
                      <div className="space-y-3">
                        {(Object.entries(p.stats) as [string, number][]).map(([k, v]) => (
                          <div key={k}>
                            <div className="flex justify-between mb-1">
                              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>{k.replace("_", " ")}</span>
                              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: p.col }}>{v}</span>
                            </div>
                            <div className="w-full h-2 bg-[#0d0d18] overflow-hidden">
                              <div style={{ width: `${v}%`, height: "100%", background: `linear-gradient(90deg,${p.col}66,${p.col})` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── Collapsed card ── */
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#e8e8f0", letterSpacing: "0.05em" }}>{p.name}</div>
                    </div>
                    <HpBar hp={p.hp} maxHp={p.maxHp} />
                    <p className="mt-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#7a7a9a", lineHeight: 1.7 }}>
                      {p.desc.slice(0, 80)}…
                    </p>
                    <div className="mt-3" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: p.col }}>
                      ► TAP TO BATTLE
                    </div>
                    <div className="mt-2 h-0.5 w-full" style={{ background: `linear-gradient(90deg,transparent,${p.col},transparent)` }} />
                  </div>
                )}
              </PixelBox>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── LeetCode ─────────────────────────────────────────────────────────────────

interface LC { easy: number; medium: number; hard: number; total: number; rank: string; streak: number; acceptanceRate: string }
const LC_DEFAULT: LC = { easy: 124, medium: 89, hard: 31, total: 244, rank: "Top 12%", streak: 47, acceptanceRate: "68.4%" };
const LC_USERNAME = "ankur_gupta17";
const LC_PROFILE_URL = "https://leetcode.com/u/ankur_gupta17/";

function LeetcodeSection() {
  const [stats, setStats] = useState<LC>(LC_DEFAULT);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<LC>(LC_DEFAULT);
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const wildFired = useRef(false);
  const [wildToast, setWildToast] = useState<string | null>(null);

  useEffect(() => {
    gsap.from(sectionRef.current?.querySelectorAll(".lc-block") ?? [], {
      scale: 0.88, opacity: 0, duration: 0.55, stagger: 0.08, ease: "back.out(1.7)",
      scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
    });
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !wildFired.current) {
        wildFired.current = true;
        setWildToast("LeetCode Boss");
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!ringRef.current) return;
    const pct = Math.min(stats.total / 500, 1);
    const circum = 2 * Math.PI * 54;
    animeRun(ringRef.current, { strokeDashoffset: [circum, circum * (1 - pct)], duration: 1600, ease: "outExpo" });
  }, [stats]);

  const circum = 2 * Math.PI * 54;

  return (
    <section id="leetcode" ref={sectionRef} className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
      {wildToast && <WildToast name={wildToast} onDone={() => setWildToast(null)} />}

      <div className="mb-12">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ff2d55", marginBottom: "8px", letterSpacing: "0.2em" }}>// BATTLE_RECORD</div>
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1rem,2.5vw,1.6rem)", color: "#e8e8f0", lineHeight: 1.5, marginBottom: "6px" }}>
          LEETCODE ARENA
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#7a7a9a" }}>
          Daily battles · competitive rankings · streak maintained
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div style={{ height: "1px", width: "48px", background: "#ff2d55" }} />
          <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <Pokeball size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Ring card */}
        <PixelBox color="#ffd32a44" className="lc-block p-8 flex flex-col items-center justify-center text-center">
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#7a7a9a", marginBottom: "16px", letterSpacing: "0.15em" }}>TRAINER HP</div>
          <div className="relative w-36 h-36 mb-5">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#1a1a2e" strokeWidth="10" />
              <circle ref={ringRef} cx="60" cy="60" r="54" fill="none" stroke="#ffd32a" strokeWidth="10"
                strokeLinecap="round" strokeDasharray={circum} strokeDashoffset={circum} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "1.4rem", color: "#ffd32a" }}>{stats.total}</span>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginTop: "4px" }}>SOLVED</span>
            </div>
          </div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.7rem", color: "#e8e8f0", marginBottom: "2px" }}>{stats.rank}</div>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>GLOBAL RANK</div>
          <div className="mt-4 flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#ffd32a" }}>
            <Pokeball size={14} />
            <span>@{LC_USERNAME}</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 w-full">
            {[
              { label: "STREAK", v: `${stats.streak}D`, col: "#00d4aa" },
              { label: "ACC", v: stats.acceptanceRate, col: "#ff4757" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#0d0d18", border: `1px solid ${s.col}44`, padding: "8px" }}>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.65rem", color: s.col, marginBottom: "4px" }}>{s.v}</div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.35rem", color: "#7a7a9a" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <a href={LC_PROFILE_URL} target="_blank" rel="noreferrer"
            className="mt-4 w-full py-2.5 text-center transition-all duration-150 hover:-translate-y-0.5"
            style={{ background: "#ffd32a", color: "#0a0a0f", fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", boxShadow: "3px 3px 0 #7a6410", letterSpacing: "0.05em" }}>
            ► VIEW PROFILE
          </a>
        </PixelBox>

        {/* Tier breakdown */}
        <div className="lc-block lg:col-span-2 space-y-4">
          {[
            { label: "EASY",   count: stats.easy,   col: "#00d4aa", max: 200, type: "GRASS" as const },
            { label: "MEDIUM", count: stats.medium, col: "#ffd32a", max: 150, type: "ELECTRIC" as const },
            { label: "HARD",   count: stats.hard,   col: "#ff4757", max: 100, type: "FIRE" as const },
          ].map((tier) => (
            <PixelBox key={tier.label} color={`${tier.col}44`} className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <TypeBadge type={tier.type} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7a7a9a" }}>
                    {tier.count} / {tier.max} DEFEATED
                  </span>
                </div>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: tier.col }}>
                  {Math.round((tier.count / tier.max) * 100)}%
                </span>
              </div>
              {/* HP-style bar */}
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a" }}>HP</span>
                <div className="flex-1 h-3 bg-[#0d0d18] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{
                    width: `${Math.min((tier.count / tier.max) * 100, 100)}%`, height: "100%",
                    background: `linear-gradient(90deg,${tier.col}77,${tier.col})`,
                    transition: "width 1s ease",
                  }} />
                </div>
              </div>
              {/* Pixel bar */}
              <div className="mt-2" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", letterSpacing: "1px" }}>
                <span style={{ color: tier.col }}>{"█".repeat(Math.floor((tier.count / tier.max) * 15))}</span>
                <span style={{ color: "#1a1a2e" }}>{"█".repeat(15 - Math.floor((tier.count / tier.max) * 15))}</span>
              </div>
            </PixelBox>
          ))}

          <button onClick={() => { setDraft(stats); setEditing(true); }}
            className="w-full py-4 transition-all duration-150 hover:-translate-y-0.5"
            style={{
              background: "transparent", border: "2px dashed rgba(255,255,255,0.12)",
              fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem",
              color: "#7a7a9a", cursor: "pointer", boxShadow: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ff2d55"; e.currentTarget.style.color = "#ff2d55"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#7a7a9a"; }}>
            ► PASTE YOUR LEETCODE STATS
          </button>
        </div>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}>
          <PixelBox color="#ff2d55" className="w-full max-w-md p-8">
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.55rem", color: "#ff2d55", marginBottom: "20px" }}>
              UPDATE BATTLE STATS
            </div>
            <div className="space-y-4">
              {(Object.keys(draft) as (keyof LC)[]).map((key) => (
                <div key={key}>
                  <label style={{ display: "block", fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "6px" }}>
                    {key.toUpperCase()}
                  </label>
                  <input
                    type={typeof draft[key] === "number" ? "number" : "text"}
                    value={draft[key]}
                    onChange={(e) => setDraft((d) => ({ ...d, [key]: typeof d[key] === "number" ? Number(e.target.value) : e.target.value }))}
                    style={{
                      width: "100%", padding: "8px 12px",
                      background: "#0d0d18", border: "1px solid rgba(255,255,255,0.1)",
                      color: "#e8e8f0", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", outline: "none",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => { setStats(draft); setEditing(false); }}
                style={{ flex: 1, padding: "10px", background: "#ff2d55", color: "#fff", fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", border: "none", cursor: "pointer", boxShadow: "3px 3px 0 #991b2e" }}>
                SAVE
              </button>
              <button onClick={() => setEditing(false)}
                style={{ flex: 1, padding: "10px", background: "transparent", color: "#7a7a9a", fontFamily: "'Press Start 2P', monospace", fontSize: "0.45rem", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}>
                CANCEL
              </button>
            </div>
          </PixelBox>
        </div>
      )}
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(sectionRef.current?.querySelectorAll(".contact-link") ?? [], {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
  }, []);

  // NOTE: placeholder targets — swap these for Ankur's real GitHub / LinkedIn / email.
  const links = [
    { label: "GITHUB",   handle: "github.com/ankur-gupta",       col: "#e8e8f0", href: "https://github.com/ankur-gupta",       icon: "💻" },
    { label: "LINKEDIN", handle: "linkedin.com/in/ankur-gupta",  col: "#3d9be9", href: "https://linkedin.com/in/ankur-gupta",  icon: "💼" },
    { label: "EMAIL",    handle: "ankur.gupta@example.com",       col: "#ff4757", href: "mailto:ankur.gupta@example.com",       icon: "📬" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#ff2d55", marginBottom: "8px", letterSpacing: "0.2em" }}>// SAVE_GAME</div>
        <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(1rem,2.5vw,1.6rem)", color: "#e8e8f0", lineHeight: 1.5, marginBottom: "6px" }}>
          CONTACT TRAINER
        </h2>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#7a7a9a" }}>
          Open to new quests, raid parties & collaborations
        </p>
      </div>

      {/* Save screen box */}
      <PixelBox color="#ffd32a" className="p-8 mb-8 max-w-md mx-auto">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.5rem", color: "#7a7a9a", marginBottom: "12px" }}>SAVE FILE — SLOT 01</div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.65rem", color: "#e8e8f0", marginBottom: "4px" }}>ANKUR GUPTA</div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", color: "#7a7a9a", marginBottom: "12px" }}>BADGES: 8 · LV: 1 · PROJECTS: 6</div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.42rem", color: "#ffd32a" }}>► AVAILABLE FOR NEW QUESTS</div>
      </PixelBox>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((l) => (
          <a key={l.label} href={l.href}
            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={l.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="contact-link flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#0f0f1a", border: `2px solid ${l.col}44`, boxShadow: `3px 3px 0 ${l.col}22` }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = l.col; e.currentTarget.style.boxShadow = `3px 3px 0 ${l.col}55`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${l.col}44`; e.currentTarget.style.boxShadow = `3px 3px 0 ${l.col}22`; }}>
            <span className="text-2xl">{l.icon}</span>
            <div className="text-left">
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.38rem", color: "#7a7a9a", marginBottom: "5px" }}>{l.label}</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: l.col, letterSpacing: "0.05em" }}>{l.handle}</div>
            </div>
            <span className="ml-auto" style={{ color: l.col }}>►</span>
          </a>
        ))}
      </div>

      <div className="mt-16 space-y-2">
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#7a7a9a" }}>
          © 2025 ANKUR GUPTA · BUILT WITH REACT · GSAP · THREE.JS · ANIME.JS
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "0.4rem", color: "#ffd32a" }}>
          ★ GOTTA CODE "EM ALL ★
        </div>
      </div>
    </section>
  );
}

// ─── Scanlines ─────────────────────────────────────────────────────────────────

function Scanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[45]" style={{
      backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)",
    }} />
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    ["hero", "skills", "projects", "leetcode", "contact"].forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`, start: "top 55%", end: "bottom 55%",
        onEnter: () => setActive(id), onEnterBack: () => setActive(id),
      });
    });
    // Recalculate trigger positions once the 3D canvas + fonts have settled.
    const r = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(r);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ background: "#0a0a0f" }}>
      <style>{`
        @keyframes glitch1 {
          0%,88%,100%{clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate(-3px,0)}
          89%{clip-path:polygon(0 28%,100% 28%,100% 52%,0 52%);transform:translate(-5px,0)}
          91%{clip-path:polygon(0 62%,100% 62%,100% 80%,0 80%);transform:translate(3px,0)}
          93%{clip-path:polygon(0 10%,100% 10%,100% 26%,0 26%);transform:translate(-3px,0)}
        }
        @keyframes glitch2 {
          0%,88%,100%{clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate(3px,0)}
          90%{clip-path:polygon(0 55%,100% 55%,100% 72%,0 72%);transform:translate(5px,0)}
          92%{clip-path:polygon(0 18%,100% 18%,100% 40%,0 40%);transform:translate(-3px,0)}
        }
        @keyframes pokespin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #ff2d55; }
        ::selection { background: #ff2d5544; }
      `}</style>

      <ScrollXPBar />
      <BattleArena />
      <Scanlines />
      <Nav active={active} />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <LeetcodeSection />
        <ContactSection />
      </main>
    </div>
  );
}
