export default function About() {
  return (
    <section id="about" className="py-20">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
      </header>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-white/80 leading-relaxed">
            Unfold is a creative portfolio exploring minimal, geometric interfaces with a tactile, 3D sensibility. Projects begin as compact thumbnails before unfolding into animated narratives—an homage to origami and the quiet drama of material.
          </p>
          <p className="text-white/70 leading-relaxed mt-4">
            The aesthetic combines soft motion, clean typography, and iridescent materials. Built with React, Framer Motion, Tailwind, and Spline for real-time 3D.
          </p>
        </div>
        <div className="space-y-3">
          <a href="#projects" className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/30 transition">
            View Projects
          </a>
          <a href="#experiments" className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/30 transition">
            Explore Experiments
          </a>
          <a href="mailto:hello@unfold.studio" className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/30 transition">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
