import { Camera, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';

const Diensten = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const diensten = [
    {
      icon: Camera,
      title: t('services.auto.title'),
      description: t('services.auto.description'),
      features: [
        t('services.features.resolution'),
        t('services.features.angles'),
        t('services.features.editing'),
        t('services.features.delivery'),
      ],
      price: `${t('services.features.pricePrefix')} €299`,
      duration: '2-3 uur',
    },
    {
      icon: Users,
      title: t('services.portrait.title'),
      description: t('services.portrait.description'),
      features: [
        t('services.features.resolution'),
        t('services.features.editing'),
        t('services.features.delivery'),
      ],
      price: `${t('services.features.pricePrefix')} €199`,
      duration: '1-2 uur',
    },
    {
      icon: MapPin,
      title: t('services.location.title'),
      description: t('services.location.description'),
      features: [
        t('services.features.travel'),
        t('services.features.goldenHour'),
        t('services.features.environmental'),
        t('services.features.backup'),
      ],
      price: `${t('services.features.pricePrefix')} €399`,
      duration: '3-4 uur',
    },
  ];

  const pakketten = [
    {
      name: t('services.package.essential'),
      price: '€299',
      duration: '2 uur',
      features: [
        t('services.package.features.photos', { count: 20 }),
        t('services.package.features.retouching'),
        t('services.package.features.gallery'),
        t('services.package.features.delivery', { hours: 48 }),
      ],
      popular: false,
    },
    {
      name: t('services.package.professional'),
      price: '€599',
      duration: '4 uur',
      features: [
        t('services.package.features.photos', { count: 50 }),
        t('services.package.features.retouching'),
        t('services.package.features.locations'),
        t('services.package.features.gallery'),
        t('services.package.features.delivery', { hours: 24 }),
        t('services.package.features.print'),
      ],
      popular: true,
    },
    {
      name: t('services.package.premium'),
      price: '€999',
      duration: '6 uur',
      features: [
        t('services.package.features.photos', { count: 100 }),
        t('services.package.features.retouching'),
        t('services.package.features.locations'),
        t('services.package.features.gallery'),
        t('services.package.features.delivery', { hours: 12 }),
        t('services.package.features.print'),
        t('services.package.features.video'),
      ],
      popular: false,
    },
  ];

  return (
    <section id="diensten" className="py-20 bg-automotive-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-automotive-silver max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {diensten.map((dienst, index) => (
            <div
              key={dienst.title}
              className="glass-effect rounded-xl p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <dienst.icon className="text-automotive-gold mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">{dienst.title}</h3>
              <p className="text-automotive-silver mb-6">{dienst.description}</p>

              <ul className="space-y-2 mb-6">
                {dienst.features.map((feature) => (
                  <li key={feature} className="flex items-center text-automotive-chrome">
                    <div className="w-2 h-2 bg-automotive-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-automotive-gold">{dienst.price}</span>
                <div className="flex items-center text-automotive-silver">
                  <Clock size={16} className="mr-2" />
                  {dienst.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prijs pakketten */}
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl font-bold gold-gradient mb-6">
            {t('services.pricing.title')}
          </h3>
          <p className="text-lg text-automotive-silver max-w-2xl mx-auto">
            {t('services.pricing.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakketten.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl p-8 animate-scale-in ${
                pkg.popular
                  ? 'bg-gradient-to-b from-automotive-gold/20 to-automotive-charcoal border-2 border-automotive-gold'
                  : 'glass-effect'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-automotive-gold text-automotive-black px-6 py-2 rounded-full text-sm font-bold">
                    {t('services.package.popular')}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                <div className="text-4xl font-bold text-automotive-gold mb-2">{pkg.price}</div>
                <p className="text-automotive-silver">{pkg.duration} sessie</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-automotive-chrome">
                    <div className="w-2 h-2 bg-automotive-gold rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('contact')}
                className="w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-automotive-gold text-automotive-black hover:bg-automotive-gold/90"
              >
                {t('services.button.book')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diensten;
