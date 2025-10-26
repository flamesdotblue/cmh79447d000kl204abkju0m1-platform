import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]">Unfold</h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Minimal, geometric portfolios where every story unfolds.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-white text-black text-sm md:text-base font-medium hover:opacity-90 transition">Projects</a>
            <a href="#experiments" className="px-5 py-2.5 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white/60 transition text-sm md:text-base">Experiments</a>
            <a href="#about" className="px-5 py-2.5 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white/60 transition text-sm md:text-base">About</a>
          </div>
        </div>
      </div>
    </section>
  );
}
