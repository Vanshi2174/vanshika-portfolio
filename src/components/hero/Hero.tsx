import React, { useCallback, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from 'motion/react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { useSmoothScroll } from '../common/SmoothScrollProvider';

// ─── Easing curve matching reference exactly ──────────────────────────────────
const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Shared fade-up animation props ──────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
});

// ─── Cursor-following gradient glow on "Prajapati" ────────────────────────────
/**
 * The glow effect works by layering two "Prajapati" text spans:
 *   1. A dim white/20 base layer (always visible)
 *   2. A sky→blue gradient layer, masked with a radial circle centred on the cursor
 * Pointer events are tracked directly on the name span so the glow follows the
 * actual cursor position over the text. There is no idle auto-sweep — the glow
 * fades out naturally when the cursor leaves.
 */
const HeroName: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  // Controls visibility: 0 when idle, 1 when cursor is over the name
  const glowOpacity = useMotionValue(0);

  // Radial mask follows the cursor position relative to the name element
  const maskImage = useMotionTemplate`radial-gradient(circle 240px at ${glowX}px ${glowY}px, #000 0%, transparent 100%)`;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      const el = nameRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      glowX.set(e.clientX - rect.left);
      glowY.set(e.clientY - rect.top);
      // Fade in smoothly on first entry
      animate(glowOpacity, 1, { duration: 0.25 });
    },
    [glowX, glowY, glowOpacity]
  );

  const handlePointerLeave = useCallback(() => {
    // Let the glow fade out naturally — no sweep restart
    animate(glowOpacity, 0, { duration: 0.6 });
  }, [glowOpacity]);

  return (
    <h1
      className="mt-8 sm:mt-10 text-[clamp(2.75rem,13vw,12rem)] font-semibold uppercase leading-[0.9] tracking-tighter"
    >
      {/* Row 1: VANSHIKA — pure white, slides up */}
      <span className="block overflow-hidden pb-[0.12em]">
        <motion.span
          className="block text-white"
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          Vanshika
        </motion.span>
      </span>

      {/* Row 2: PRAJAPATI — cursor-glow gradient over dim base */}
      <span className="block overflow-hidden pb-[0.12em] md:ml-[min(6vw,5rem)]">
        <motion.span
          className="relative block"
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.26, ease: EASE_OUT_EXPO }}
        >
          {/* Dim base — pointer events live here so tracking is tight to the letters */}
          <span
            ref={nameRef}
            className="block text-white/20 cursor-default"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            Prajapati
          </span>

          {/* Gradient layer: only visible where mask lets through */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 block bg-linear-to-r from-sky-300 via-blue-400 to-blue-500 bg-clip-text text-transparent"
            style={{ maskImage, WebkitMaskImage: maskImage, opacity: glowOpacity }}
          >
            Prajapati
          </motion.span>
        </motion.span>
      </span>
    </h1>
  );
};

// ─── Social links config ──────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, Icon: LinkedinIcon },
  {
    label: 'Email',
    href: `mailto:${PERSONAL_INFO.email}`,
    Icon: Mail as React.FC<{ className?: string }>,
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { scrollTo } = useSmoothScroll();

  const scrollToProjects = () => {
    scrollTo('#projects');
  };

  const handleResumeClick = () => {
    if (onOpenResumeModal) {
      onOpenResumeModal();
    } else {
      scrollTo('#resume');
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 sm:px-6 md:px-10 pb-16 pt-28 sm:pt-36 overflow-hidden"
      style={{
        background: '#050816',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* ── Availability badge ──────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {PERSONAL_INFO.status}
        </motion.div>

        {/* ── Oversized name with cursor-glow ────────────────────────────── */}
        <HeroName />

        {/* ── Divider + degree · tagline ─────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
            {PERSONAL_INFO.degree}
            <span className="mx-2 text-slate-600">·</span>
            <span className="font-semibold text-cyan-400">{PERSONAL_INFO.graduationYear}</span>
          </p>
          <p className="max-w-md text-lg font-medium leading-snug text-white md:text-right md:text-xl">
            {PERSONAL_INFO.headline}
          </p>
        </motion.div>

        {/* ── CTAs + Social icons ─────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.85)}
          className="mt-10 flex flex-wrap items-center justify-between gap-6"
        >
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary: Explore My Work */}
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(59,130,246,0.85)] cursor-pointer"
            >
              Explore My Work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary: View Resume */}
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10 cursor-pointer"
            >
              <FileText className="size-4 text-sky-400" />
              View Resume
            </button>
          </div>

          {/* Social icon tiles */}
          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
