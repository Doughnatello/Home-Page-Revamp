import { Award, Home, ShieldCheck, Star } from 'lucide-react';

export default function Badges() {
  const badges = [
    { icon: Award, label: 'Certified Realtor' },
    { icon: Home, label: 'Equal Housing' },
    { icon: ShieldCheck, label: 'Licensed Professional' },
    { icon: Star, label: 'Top Producer' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-amber-50 transition-colors group"
              >
                <Icon className="h-12 w-12 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-semibold text-gray-700 text-center">
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
