import { motion } from 'framer-motion';

const items = [
  { id: 'exp-1', title: 'Microfolds', subtitle: 'Responsive crease grid' },
  { id: 'exp-2', title: 'Iridescent Noise', subtitle: 'Noise-driven chroma' },
  { id: 'exp-3', title: 'Paper Spring', subtitle: 'Easing like fiber' },
  { id: 'exp-4', title: 'Torus Trace', subtitle: 'Orbit field study' },
  { id: 'exp-5', title: 'Facet Blur', subtitle: 'Multi-pass bloom' },
  { id: 'exp-6', title: 'Kite Tessels', subtitle: 'Aperiodic tiling' },
];

export default function Experiments() {
  return (
    <section id="experiments" className="py-20">
      <header className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Experiments</h2>
        <p className="text-white/60 mt-2">Small studies in motion, material, and interaction.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <motion.div
            key={it.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            whileHover={{ y: -3 }}
            style={{ perspective: 900 }}
          >
            <motion.div
              className="aspect-[4/3]"
              initial={false}
              whileHover={{ rotateX: 6, rotateY: 6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_35%)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0" />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-white/[0.03]" />
                ))}
              </div>
            </motion.div>
            <div className="p-4">
              <h3 className="text-base font-semibold tracking-tight">{it.title}</h3>
              <p className="text-sm text-white/70 mt-1">{it.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
