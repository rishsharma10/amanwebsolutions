"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";

type ShowcaseSite = {
  id: string;
  name: string;
  url: string;
  accentFrom: string;
  accentTo: string;
  videoSrc?: string; // optional local video preview e.g. "/videos/3d/cyphr.mp4"
  forceProxy?: boolean; // if true, always use proxy in live mode (disabled under static export)
};

const showcaseSites: ShowcaseSite[] = [
  {
    id: "cyphr",
    name: "Cyphr Studio",
    url: "https://www.cyphr.studio/",
    accentFrom: "from-sky-400",
    accentTo: "to-fuchsia-500",
    // forceProxy: true,
    // videoSrc: "/videos/3d/cyphr.mp4",
  },
  {
    id: "trionn",
    name: "TRIONN",
    url: "https://trionn.com/",
    accentFrom: "from-amber-400",
    accentTo: "to-pink-500",
    // forceProxy: true,
    // videoSrc: "/videos/3d/trionn.mp4",
  },
  {
    id: "compsych",
    name: "ComPsych Guidelines",
    url: "https://compsych.konpo.co/",
    accentFrom: "from-emerald-400",
    accentTo: "to-cyan-500",
    // forceProxy: true,
    // videoSrc: "/videos/3d/compsych.mp4",
  },
  {
    id: "aether",
    name: "Aether One",
    url: "https://www.aether1.ai/",
    accentFrom: "from-purple-400",
    accentTo: "to-indigo-500",
    // forceProxy: true,
    // videoSrc: "/videos/3d/aether.mp4",
  },
];

function useTilt(maxTiltDeg: number = 12) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [maxTiltDeg, -maxTiltDeg]);
  const rotateY = useTransform(mouseX, [0, 1], [-maxTiltDeg, maxTiltDeg]);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 12, mass: 0.2 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 12, mass: 0.2 });

  const onMouseMove = (e: React.MouseEvent) => {
    const element = cardRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const onMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return { cardRef, springX, springY, onMouseMove, onMouseLeave };
}

function WebsiteFrame({ site, enlarged = false }: { site: ShowcaseSite; enlarged?: boolean }) {
  const { cardRef, springX, springY, onMouseMove, onMouseLeave } = useTilt(enlarged ? 6 : 10);
  const [isHovered, setIsHovered] = useState(false);
  const [mode, setMode] = useState<'preview' | 'live'>("preview");
  const [loaded, setLoaded] = useState(false);
  const [embedHint, setEmbedHint] = useState(false);
  // Proxy disabled under static export
  const [useProxy] = useState(false);

  useEffect(() => {
    if (mode === 'live') {
      setLoaded(false);
      setEmbedHint(false);
      const toHint = setTimeout(() => {
        if (!loaded) setEmbedHint(true);
      }, 3000);
      return () => {
        clearTimeout(toHint);
      };
    } else {
      setEmbedHint(false);
    }
  }, [mode, loaded]);

  const frameDepth = enlarged ? 48 : 32;

  const iframeSrc = useMemo(() => {
    return site.url; // direct only in static export builds
  }, [site.url]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      className={[
        "relative w-full",
        enlarged ? "h-[560px]" : "h-[400px]",
        "rounded-3xl",
        "transition-transform duration-300",
      ].join(" ")}
    >
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 to-white/10 dark:from-neutral-900/80 dark:to-neutral-800/50 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl"
        style={{ transform: "translateZ(0px)" }}
      />

      {/* Accent glow */}
      <div
        className={`absolute -inset-1 rounded-[26px] bg-gradient-to-r ${site.accentFrom} ${site.accentTo} opacity-30 blur-2xl`}
        style={{ transform: `translateZ(-${frameDepth}px)` }}
      />

      {/* Browser chrome */}
      <div
        className="absolute left-4 right-4 top-4 h-10 rounded-xl bg-gradient-to-br from-white/80 to-white/30 dark:from-neutral-800/80 dark:to-neutral-700/40 border border-white/50 dark:border-white/10"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-center h-full px-3 gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex-1 h-6 rounded-md bg-gradient-to-r from-gray-100/60 to-gray-200/40 dark:from-neutral-700/60 dark:to-neutral-600/40 border border-white/40 dark:border-white/10 px-3 text-xs flex items-center text-gray-600 dark:text-gray-200">
            {site.url}
          </div>
        </div>
      </div>

      {/* Content area: Live iframe or preview (video/mock) */}
      <div
        className="absolute left-4 right-4 top-16 bottom-4 overflow-hidden rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-neutral-900/70"
        style={{ transform: "translateZ(22px)" }}
      >
        {mode === 'live' ? (
          <div className="w-full h-full relative">
            <iframe
              key={iframeSrc}
              src={iframeSrc}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allow="autoplay; fullscreen; clipboard-write; accelerometer; gyroscope; magnetometer"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              onLoad={() => setLoaded(true)}
            />
            {embedHint && (
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-800/60 backdrop-blur flex items-center justify-center p-6 text-center">
                <div className="max-w-md text-sm text-gray-800 dark:text-gray-100">
                  Embedding may be blocked by the site. Use the button below to open it directly.
                  <div className="mt-3">
                    <Link href={site.url} target="_blank" className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white text-sm font-bold shadow">
                      Open in new tab
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : site.videoSrc ? (
          <video
            src={site.videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -260, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <MockWebsite site={site} />
          </motion.div>
        )}

        {/* Surface sheen */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: isHovered ? 0.2 : 0.1 }}
          style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.24))" }}
        />
      </div>

      {/* Floating label and CTA */}
      <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between" style={{ transform: "translateZ(38px)" }}>
        <div className="px-4 py-2 rounded-full bg-gradient-to-r from-white/80 to-white/40 dark:from-neutral-800/70 dark:to-neutral-700/60 border border-white/60 dark:border-white/10 backdrop-blur text-sm font-semibold text-gray-800 dark:text-gray-100 shadow">
          {site.name}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode((m) => (m === 'live' ? 'preview' : 'live'))}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/70 border border-white/60 dark:border-white/10 backdrop-blur text-sm font-semibold text-gray-800 dark:text-gray-100 shadow hover:scale-[1.02] transition"
          >
            {mode === 'live' ? 'Preview mode' : 'Try live view'}
          </button>
          <Link
            href={site.url}
            target="_blank"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 text-white text-sm font-bold shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            View live
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MockWebsite({ site }: { site: ShowcaseSite }) {
  const accentClass = useMemo(() => `${site.accentFrom} ${site.accentTo}`, [site.accentFrom, site.accentTo]);
  return (
    <div className="absolute inset-0">
      {/* Hero */}
      <div className={`h-[280px] bg-gradient-to-br ${accentClass} p-8 text-white flex flex-col justify-end`}>
        <div className="text-xs uppercase tracking-widest opacity-90">Featured</div>
        <div className="text-2xl md:text-3xl font-extrabold drop-shadow-md">{site.name}</div>
        <div className="mt-2 text-white/90 max-w-lg text-sm">Immersive digital experience. Conceptual preview rendered as animated mock content.</div>
      </div>

      {/* Content sections */}
      <div className="bg-white/90 dark:bg-neutral-900/80">
        <div className="p-6 grid grid-cols-12 gap-4 items-start">
          <div className="col-span-12 md:col-span-7">
            <div className="h-4 w-40 rounded bg-gray-200/80 dark:bg-neutral-700/80" />
            <div className="mt-3 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 rounded bg-gray-200/70 dark:bg-neutral-700/70 w-full" />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 border border-white/50 dark:border-white/10" />
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="h-4 w-28 rounded bg-gray-200/80 dark:bg-neutral-700/80" />
            <div className="mt-3 space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-3 rounded bg-gray-200/70 dark:bg-neutral-700/70 w-11/12" />
              ))}
            </div>
            <div className={`mt-5 h-28 rounded-xl border border-white/50 dark:border-white/10 bg-gradient-to-r ${accentClass} opacity-80`} />
          </div>
        </div>

        {/* Long section */}
        <div className="p-6">
          <div className="h-4 w-48 rounded bg-gray-200/80 dark:bg-neutral-700/80" />
          <div className="mt-3 space-y-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-3 rounded bg-gray-200/70 dark:bg-neutral-700/70 w-full" />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-28 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 border border-white/50 dark:border-white/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThreeDShowcasePage() {
  const [enlargedId, setEnlargedId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-br from-sky-50 via-fuchsia-50 to-pink-50 dark:from-neutral-950 dark:via-blue-950 dark:to-fuchsia-950 pt-28 overflow-hidden">
        {/* Animated background accents */}
        <motion.div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-sky-400/25 blur-[110px]"
            animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-fuchsia-500/20 blur-[130px]"
            animate={{ x: [0, -40, 10, 0], y: [0, 30, -15, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>

        {/* Hero (full width) */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
          {/* Animated background rings and blurry dots (like portfolio hero) */}
          <motion.div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <motion.div
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-400/20 blur-[100px]"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/20 blur-[120px]"
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 opacity-20"
                style={{
                  width: `${32 + i * 10}px`,
                  height: `${32 + i * 10}px`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 12}%`,
                  filter: 'blur(8px)',
                }}
                animate={{
                  y: [0, 20 + i * 5, 0],
                  x: [0, -10 + i * 3, 0],
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
              />
            ))}
          </motion.div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-gradient-to-r from-sky-100 via-fuchsia-100 to-pink-100 text-primary border border-primary/20 font-medium text-sm backdrop-blur">
                3D Showcase
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Immersive 3D Web Experiences
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-2 max-w-3xl mx-auto font-medium">
                Explore motion-rich, interactive previews inspired by leading digital studios. Built with premium UI and smooth animations to present websites like cinematic scenes.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {showcaseSites.map((site) => (
              <div key={site.id} className="relative">
                <WebsiteFrame site={site} />
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => setEnlargedId(site.id)}
                    className="px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-800/70 border border-white/60 dark:border-white/10 backdrop-blur text-sm font-semibold text-gray-800 dark:text-gray-100 shadow hover:scale-[1.02] transition"
                  >
                    View cinematic preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-300">
            These previews are conceptual animations meant to showcase motion and 3D presentation. Click “View live” for the authentic experience.
          </div>
        </section>

        {/* Enlarged modal */}
        {enlargedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur">
            <div className="relative w-full max-w-5xl">
              <WebsiteFrame site={showcaseSites.find((s) => s.id === enlargedId)!} enlarged />
              <button
                onClick={() => setEnlargedId(null)}
                className="absolute -top-10 right-0 px-4 py-2 rounded-full bg-white/90 dark:bg-neutral-800/80 border border-white/60 dark:border-white/10 text-sm font-semibold text-gray-900 dark:text-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <CTA/>
      <Footer />
    </>
  );
}