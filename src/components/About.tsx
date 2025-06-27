
import { Award, Camera, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Camera, number: '300+', label: t('about.stats.cars') },
    { icon: Users, number: '10+', label: t('about.stats.clients') },
    { icon: Award, number: '5+', label: t('about.stats.experience') },
    { icon: Zap, number: '1000+', label: t('about.stats.photos') },
  ];

  return (
    <section id="about" className="py-20 bg-automotive-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-automotive-silver leading-relaxed">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
              <p>{t('about.description4')}</p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('about.workTogether')}
              </a>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="animate-slide-in-right">
            {/* Placeholder for photographer image */}
            <div className="relative mb-12">
              <div className="aspect-[4/5] bg-gradient-to-br from-automotive-charcoal to-automotive-black rounded-xl overflow-hidden">
                <img
                  src="https://i.ibb.co/7JkV7cHV/Whats-App-Image-2025-06-10-at-15-24-48-0a7bf359.jpg"
                  alt="Professional photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6">
                <p className="text-automotive-gold font-semibold">Professionele Fotograaf</p>
                <p className="text-automotive-silver">Auto Fanaat</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-effect rounded-xl p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="mx-auto text-automotive-gold mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-automotive-silver text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
