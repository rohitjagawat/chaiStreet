import { Link } from "react-router-dom";
import { useState } from "react";

const GoldRule = () => (
  <div className="relative w-full">
    {/* MAIN LINE */}
    <div className="h-[2px] w-full bg-gold/70" />

    {/* SOFT GLOW */}
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gold/30 blur-[2px]" />
  </div>
);

const AnimatedGoldRule = () => (
  <div className="relative w-full h-[2px] overflow-hidden">
    <div className="absolute inset-0 bg-gold/40" />
    <div className="absolute inset-0 bg-gold/20 blur-[3px]" />
    <div
      className="
        absolute top-0 left-[-40%]
        h-full w-[40%]
        bg-gradient-to-r
        from-transparent
        via-[#f5d889]
        to-transparent
        opacity-80
        animate-gold-sweep
      "
    />
  </div>
);

const ScrollDownArrow = ({ targetId }) => {
  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className="
        absolute bottom-6 left-1/2 -translate-x-1/2
        flex items-center justify-center
        w-10 h-10
        rounded-full
        border border-white/30
        text-white/60
        hover:text-gold hover:border-gold/70
        transition
      "
      aria-label="Scroll down"
    >
      <span
  className="
    block w-[2px] h-3
    bg-current
    relative
    animate-bounce
  "
>
  <span
    className="
      absolute bottom-0 left-1/2
      -translate-x-1/2
      w-2 h-2
      border-l-2 border-b-2
      border-current
      rotate-[-45deg]
    "
  />
</span>

    </button>
  );
};



const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div
  className="min-h-screen relative animate-[gradient-drift_18s_ease-in-out_infinite]"
  style={{
    background:
      "radial-gradient(ellipse at top, #1a1f26 0%, #0b0f14 55%, #070b10 100%)",
    backgroundSize: "120% 120%",
  }}
>
  

      {/* GLOBAL GRID / DEPTH EFFECT */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:70px_70px]" />

      

      {/* ================= TOP BAR ================= */}
     <header
  className="
    sticky top-0 z-50
    h-[50px]
    flex items-center justify-between
    px-6 md:px-5
    bg-black/40 backdrop-blur-sm
  "
>


  <span className="text-white font-semibold tracking-wide ml-4">
              CHAI STREET
  </span>

  <button
    onClick={() => setMenuOpen(true)}
    className="flex flex-col gap-1.5"
  >
    <span className="w-6 h-[2px] bg-white" />
    <span className="w-6 h-[2px] bg-white" />
    <span className="w-6 h-[2px] bg-white" />
  </button>

 

</header>
<GoldRule />



    <section className="relative w-full h-[280px] md:h-[380px] overflow-hidden bg-black">
  {/* SKYLINE BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/newbg.png')" }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/45" />

  {/* CUP ONLY */}
  <div className="absolute inset-0 z-10 flex items-center justify-center mt-5">
    <img
      src="/cup.png"
      alt="Chai Street Trading"
      className="
        w-[560px] md:w-[580px]
        opacity-90
        brightness-95
        saturate-90
        drop-shadow-[0_22px_55px_rgba(212,175,55,0.25)]
      "
    />
  </div>
</section>
<GoldRule />




<AnimatedGoldRule />

    <section className="
  relative
  px-6 pt-10 pb-28
  text-center
  bg-gradient-to-b from-[#070b10] via-[#0b0f14] to-[#070b10]
">
{/* FLOATING DOTS BACKGROUND */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  {[...Array(40)].map((_, i) => (
    <span
  key={i}
  className="
    absolute
    block
    w-[14px] h-[14px]
    rounded-full
    bg-white/80
    animate-float-dot
    shadow-[0_0_18px_rgba(255,255,255,0.55)]
    blur-[0.2px]
  "
  style={{
    left: `${Math.random() * 100}%`,
    top: `${100 + Math.random() * 40}%`,
    animationDelay: `${Math.random() * 6}s`,
    animationDuration: `${6 + Math.random() * 6}s`,
  }}
/>

  ))}
</div>

  {/* BRAND TITLE */}
  <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-semibold tracking-tight text-white mb-3">
    CHAI STREET TRADING
  </h1>

  {/* SUBTITLE */}
  <p className="text-base md:text-lg lg:text-l font-sans font-normal tracking-wide text-white/60 mb-8">
    Structured investing and trading community.
  </p>

  {/* CTA */}
  <div className="flex flex-col items-center gap-4">

    {/* PRIMARY CTA */}
    <Link
  to="/signup"
  className="relative px-12 py-4 rounded-full bg-[#b9a27a] text-black uppercase text-xs tracking-[0.2em] font-medium border border-black/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-[#c1aa80] active:scale-[0.98]"
>
  <span className="absolute inset-0 rounded-full bg-black/5 mix-blend-overlay pointer-events-none" />
  <span className="relative z-10">Request Access</span>
</Link>


    {/* SECONDARY LINK */}
    <div className="flex flex-col items-center gap-1">
      <Link
        to="/login"
        className="text-sm text-white/60 tracking-wide hover:text-white transition"
      >
        Member Login <span className="inline-block translate-x-1">›</span>
      </Link>

      {/* SUBTLE WHITE LINE */}
      <div className="h-px w-24 bg-white/30" />
    </div>

  </div>
<ScrollDownArrow targetId="pathways" />

</section>
<GoldRule />

{/* ================= PATHWAYS ================= */}
<section
  id="pathways"
  className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-44 bg-[#070b10]"
>
  
  
  {/* Grid Background (true background layer) */}
  <div className="absolute inset-0 grid-bg" />
  <div className="absolute inset-0 grid-vignette" />

  {/* Content (foreground layer) */}
  <div className="relative max-w-6xl mx-auto text-center">
    {/* Section Label */}
    <p className="text-xs uppercase tracking-[0.45em] text-gold/80 mb-6">
      Trading Pathways
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-24">
      Choose your path.
      <br />
      Build with discipline.
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
      {[
        {
          title: "Long-Term Investing",
          level: "For Novice Investors",
          desc:
            "A context-first framework for building durable wealth through regime awareness, risk alignment, and disciplined capital growth.",
        },
        {
          title: "Swing Trading",
          level: "Intermediate",
          desc:
            "Multi-day to multi-week execution models built around volatility, structure, and patience — not signals.",
        },
        {
          title: "Day Trading & Futures",
          level: "Advanced",
          desc:
            "Intraday execution focused on liquidity, acceptance, and structural behavior — not speed or hype.",
        },
        {
          title: "Private 1-on-1 Coaching",
          level: "Selective",
          desc:
            "High-touch mentorship tailored to your portfolio, psychology, and long-term capital objectives.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="gold-card relative overflow-hidden rounded-3xl bg-[#0a0e13] p-14 border border-gold/40"
        >
          {/* Subtle grain */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

          {/* Content */}
          <h3 className="relative text-2xl font-serif text-white mb-2 tracking-wide">
            {item.title}
          </h3>

          <p className="relative text-[11px] uppercase tracking-[0.35em] text-gold/90 mb-6">
            {item.level}
          </p>

          <p className="relative text-sm text-stone-400 leading-relaxed mb-10">
            {item.desc}
          </p>

          {/* Bottom reflection glow */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-gold/20 to-transparent opacity-40" />
        </div>
      ))}
    </div>
  </div>
</section>




     
<GoldRule />


   {/* ================= CORE PHILOSOPHY ================= */}
{/* <section
  id="philosophy"
  className="relative px-8 md:px-16 lg:px-24 py-44 bg-[#0b0f14]"
>
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-20">
      Built on context.<br />Powered by discipline.
    </h2>

    <div
  className="
    bg-[#070b10]
    border border-gold/40
    rounded-3xl
    px-12 md:px-24 py-20
    transition-all duration-300
    hover:shadow-[0_0_0_1px_rgba(212,175,55,0.35)]
  "
>

      <p className="text-lg text-stone-400 leading-loose max-w-4xl mx-auto">
        Chai Street exists for traders who value
        <span className="text-white"> understanding over speed</span>,
        <span className="text-white"> structure over noise</span>, and
        <span className="text-white"> consistency over luck</span>.
      </p>
    </div>

  </div>
</section> */}

<GoldRule />

{/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative px-8 md:px-16 lg:px-24 py-44 bg-[#070b10]"
>
  {/* Card */}
  <div className="relative max-w-4xl mx-auto h-[460px] md:h-[500px] flex items-center rounded-3xl border border-gold/30
    bg-gradient-to-br from-[#0c1117] via-[#0a0e13] to-[#080c10]
    shadow-[0_0_80px_rgba(212,175,55,0.06)]"
  >

    {/* Inner glow */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl
      bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_65%)]"
    />

    {/* Content */}
    <div className="relative max-w-2xl mx-auto px-12 md:px-20 text-left">
      <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8">
        What this is
      </p>

     <h2 className="relative text-3xl md:text-4xl font-serif tracking-tight text-white leading-tight mb-12">
  Markets reward understanding,
  <br />
  not urgency.
  <span className="absolute left-0 -bottom-3 h-[2px] w-20 bg-gold/80" />
</h2>


      <p className="text-base md:text-lg text-stone-400 leading-loose">
        Chai Street is not a signal service, not a prediction engine,
        and not a hype-driven community.
        <br /><br />
        We help traders understand <span className="text-white">why</span> markets move —
        so decisions are grounded in context, not emotion.
      </p>

      <div className="mt-12 h-[2px] w-24 bg-gold/70" />
    </div>
  </div>
</section>

<GoldRule />



{/* ================= COMING SOON ================= */}
{/* ================= COMING SOON ================= */}
<section
  id="coming"
  className="relative px-8 md:px-16 lg:px-24 py-44 bg-[#070b10]"
>
  {/* Card */}
  <div
    className="
      relative max-w-5xl mx-auto
      rounded-3xl border border-gold/30
      bg-gradient-to-br from-[#0c1117] via-[#0a0e13] to-[#080c10]
      shadow-[0_0_80px_rgba(212,175,55,0.06)]
      px-12 md:px-20 py-24
    "
  >
    {/* Inner glow */}
    <div
      className="
        pointer-events-none absolute inset-0 rounded-3xl
        bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_65%)]
      "
    />

    {/* Content */}
    <div className="relative max-w-3xl mx-auto text-left">
      <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8">
        What we’re building
      </p>

      <h2 className="relative text-3xl md:text-4xl font-serif tracking-tight text-white leading-tight mb-12">
        Tools for context,
        <br />
        not prediction.
        <span className="absolute left-0 -bottom-3 h-[2px] w-20 bg-gold/80" />
      </h2>

      <ul className="space-y-6 text-base md:text-lg text-stone-400 leading-loose">
        <li>Market regime & structure dashboards</li>
        <li>Cross-asset risk & sentiment views</li>
        <li>Futures & volatility context engines</li>
        <li>Explain-only AI market assistants</li>
      </ul>

      <div className="mt-14 h-[2px] w-24 bg-gold/70" />
    </div>
  </div>
</section>


<GoldRule />

{/* ================= FOOTER ================= */}
<footer className="relative px-8 md:px-16 lg:px-24 py-20 bg-[#070b10]">
  <div className="max-w-6xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

    <p className="text-xs text-stone-500">
      © 2026 Chai Street. All rights reserved.
    </p>

    <p className="text-xs uppercase tracking-[0.35em] text-gold/70">
      Context over noise
    </p>

  </div>
</footer>



     {/* ================= SIDE MENU DRAWER ================= */}
{menuOpen && (
  <>
    {/* BACKDROP */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998]"
    />

    {/* DRAWER */}
    <aside
      className="
        fixed top-0 right-0 h-full w-[320px] md:w-[380px]
        bg-gradient-to-b from-[#0b0f14] via-[#0b1624] to-[#070b10]
        border-l border-white/10
        z-[999]
        flex flex-col
        px-8 py-10
        animate-slideIn
      "
    >
      {/* CLOSE */}
      <button
        onClick={() => setMenuOpen(false)}
        className="self-end text-white/70 text-3xl mb-10 hover:text-gold transition"
      >
        ×
      </button>

      {/* BRAND MARK */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.4em] text-gold/80">
          Chai Street Trading
        </p>
        <div className="h-px w-16 bg-gold/40 mt-3" />
      </div>

      {/* MENU ITEMS */}
      <nav className="flex flex-col gap-6 text-base font-sans tracking-wide text-white/80">

        {[
          { label: "Home", href: "#top" },
          { label: "Trading Pathways", href: "#pathways" },
          { label: "Core Philosophy", href: "#philosophy" },
          { label: "About", href: "#about" },
          { label: "What We’re Building", href: "#coming" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="
              group flex items-center justify-between
              hover:text-white transition
            "
          >
            <span>{item.label}</span>
            <span className="text-gold/0 group-hover:text-gold transition">›</span>
          </a>
        ))}
      </nav>

      {/* SPACER */}
      <div className="flex-1" />

      {/* DIVIDER */}
      <div className="h-px w-full bg-white/10 mb-6" />

      {/* CTA */}
      <div className="flex flex-col gap-4">

        <Link
          to="/signup"
          onClick={() => setMenuOpen(false)}
          className="
            relative
            px-8 py-3 rounded-full
            bg-gold text-black uppercase text-xs tracking-wide text-center
            border border-black
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:shadow-[0_14px_40px_rgba(212,175,55,0.35)]
          "
        >
          Request Access
        </Link>

        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="
            text-center text-sm text-white/60
            tracking-wide
            hover:text-white transition
          "
        >
          Member Login ›
        </Link>

      </div>
    </aside>
  </>
)}




    </div>
  );
};

export default Landing;