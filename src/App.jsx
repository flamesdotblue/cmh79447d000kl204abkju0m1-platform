import Hero from './components/Hero';
import Projects from './components/Projects';
import Experiments from './components/Experiments';
import About from './components/About';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Projects />
        <Experiments />
        <About />
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/50 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Unfold</span>
          <a className="hover:text-white transition" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
