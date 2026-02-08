import { Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500 shadow-2xl">
              <img
                src="images/1.webp"
                alt="Marci Metzger"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-4xl font-serif font-bold mb-3">MARCI METZGER</h2>
          <p className="text-xl text-amber-500 mb-6 tracking-wide">PAHRUMP REALTOR SPECIALIST</p>
          <p className="text-x3 text-amber-500 mb-6 tracking-wide">REALTOR FOR NEARLY 3 DECADES!</p>
           <p className="text-x3 text-amber-500 mb-6 tracking-wide">REALTOR FOR NEARLY 3 DECADES!</p>

          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
}
