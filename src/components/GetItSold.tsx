import { TrendingUp, Home, Tag } from 'lucide-react';

export default function GetItSold() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900">
          GET IT SOLD
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img
                src="images/5.webp"
                alt="Modern Kitchen"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Top Residential Sales Last 5 Years
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
                Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img
                src="images/6.webp"
                alt="Luxury Home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Home className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Don't Just List It
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
              </p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden relative">
              <img
                src="images/7.jpg"
                alt="Sold Property"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Tag className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                Guide to Buyers
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
