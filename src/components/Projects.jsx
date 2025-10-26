import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 'fold-01',
    title: 'Apex Origami System',
    blurb: 'A modular visual system inspired by paper folding symmetry.',
    story: 'Exploration of modular folds translated into interactive patterns. Built with custom shaders and parametric grids to create a sense of tactility in digital space.',
    accent: 'from-fuchsia-500 to-cyan-400',
    media: (
      <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/30 via-white/5 to-cyan-400/30" />
    ),
  },
  {
    id: 'fold-02',
    title: 'Spectral Glass',
    blurb: 'A study of iridescence and refraction.',
    story: 'A series of micro-interactions using layered blurs and color dispersion to emulate a glass prism in motion. Each interaction responds to cursor vectors and device tilt.',
    accent: 'from-emerald-400 to-blue-500',
    media: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-400/30 via-white/5 to-blue-500/30" />
    ),
  },
  {
    id: 'fold-03',
    title: 'Tessella',
    blurb: 'Procedural tiling engine for playful geometry.',
    story: 'An engine for tessellation-based storytelling. Tiles morph between states using easing curves that mimic paper creases opening and closing.',
    accent: 'from-amber-400 to-rose-500',
    media: (
      <div className="w-full h-full bg-gradient-to-br from-amber-400/30 via-white/5 to-rose-500/30" />
    ),
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const activeProject = PROJECTS.find(p => p.id === active) || null;

  return (
    <section id="projects" className="py-20">
      <header className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
          <p className="text-white/60 mt-2">Thumbnails that unfold into narrative spaces.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <OrigamiTile
            key={p.id}
            project={p}
            isActive={active === p.id}
            onOpen={() => setActive(p.id)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, rotateX: -65, y: -20, transformOrigin: 'top center' }}
            animate={{ opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, rotateX: -65, y: -20, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } }}
            className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            style={{ perspective: 1200 }}
          >
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="lg:w-2/5">
                  <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${activeProject.accent} px-3 py-1 text-xs font-medium text-black/90 mb-4`}>Unfold</div>
                  <h3 className="text-2xl md:text-3xl font-semibold">{activeProject.title}</h3>
                  <p className="text-white/70 mt-2">{activeProject.blurb}</p>
                  <p className="text-white/60 mt-4 leading-relaxed">{activeProject.story}</p>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setActive(null)} className="px-4 py-2 rounded-full border border-white/15 hover:border-white/40 text-white/90 hover:text-white transition text-sm">
                      Close
                    </button>
                    <a href="#experiments" className="px-4 py-2 rounded-full bg-white text-black text-sm hover:opacity-90 transition">
                      See related experiments
                    </a>
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <motion.div
                    initial={{ scale: 0.96, rotateX: 12, opacity: 0 }}
                    animate={{ scale: 1, rotateX: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 } }}
                    className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {activeProject.media}
                  </motion.div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="aspect-video rounded-lg border border-white/10 bg-white/5" />
                    <div className="aspect-video rounded-lg border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function OrigamiTile({ project, isActive, onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left ${
        isActive ? 'ring-2 ring-white/20' : ''
      }`}
      whileHover={{ y: -2 }}
      style={{ perspective: 1000 }}
    >
      <div className="aspect-[4/3]">
        <motion.div
          className="absolute inset-0"
          initial={false}
          whileHover={{ rotateX: 8, rotateY: -6, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_35%)]" />
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <FoldPanel delay={0} />
            <FoldPanel delay={0.03} />
            <FoldPanel delay={0.06} />
            <FoldPanel delay={0.09} />
          </div>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{project.blurb}</p>
        <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
          <span className="inline-flex h-5 items-center rounded-full border border-white/15 bg-white/5 px-2">Unfold</span>
          <span className="inline-flex h-5 items-center rounded-full border border-white/15 bg-white/5 px-2">Geometry</span>
        </div>
      </div>
    </motion.button>
  );
}

function FoldPanel({ delay = 0 }) {
  return (
    <motion.div
      className="relative border border-white/10"
      initial={{ rotateX: 35, opacity: 0.6 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ transformStyle: 'preserve-3d', background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
