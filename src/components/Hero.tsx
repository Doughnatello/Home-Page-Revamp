import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToListings = () => {
    const element = document.getElementById('listings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(images/2.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight">
          MARCI METZGER
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
          PAHRUMP REALTOR
        </p>
        <button
          onClick={scrollToListings}
          className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 inline-flex items-center space-x-2 shadow-xl"
        >
          <span>Get Started</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
