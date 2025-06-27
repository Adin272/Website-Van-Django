import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const texts = [t('hero.subtitle1'), t('hero.subtitle2'), t('hero.subtitle3'), t('hero.subtitle4')]; // Wisselende teksten
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500); // Wacht voordat het backspace-effect start
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Wissel naar volgende tekst
      return;
    }

    const timeout = setTimeout(() => {
      setText(texts[index].slice(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100); // Snelheid aanpassen

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 automotive-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-automotive-black/50 to-automotive-black" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-automotive-gold/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-automotive-silver/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-automotive-red/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Camera className="mx-auto mb-6 text-automotive-gold" size={64} />

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">EXOTIC</span>
            <br />
            <span className="gold-gradient">AUTOMOTIVE</span>
          </h1>

          {/* Typer Effect */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-automotive-silver font-medium">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-automotive-chrome mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {t('hero.viewPortfolio')}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-automotive-silver text-automotive-silver hover:bg-automotive-silver hover:text-automotive-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.bookShoot')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-automotive-silver rounded-full flex justify-center">
          <div className="w-1 h-3 bg-automotive-silver rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
