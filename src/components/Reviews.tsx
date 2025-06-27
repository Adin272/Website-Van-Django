import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Reviews = () => {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: 'Sander Peeters',
      car: 'Lamborghini Huracán',
      rating: 5,
      text: {
        en: 'Absolutely stunning work! The photos of my Huracán exceeded all expectations. Every detail was captured perfectly.',
        nl: 'Hele mooie foto\'s en professioneel gemaakt'
      },
    },
    {
      name: 'Diego Leerschen',
      car: 'Ferrari 488 GTB',
      rating: 5,
      text: {
        en: 'Professional, creative, and passionate about cars. The results speak for themselves - absolutely incredible photography!',
        nl: 'Professioneel, creatief en gepassioneerd over auto\'s. De resultaten spreken voor zich - absoluut ongelooflijke fotografie!'
      },
    },
    {
      name: 'Adin Suhopoljac',
      car: 'Porsche 911 GT3',
      rating: 5,
      text: {
        en: 'The attention to detail is remarkable. These aren\'t just photos, they\'re works of art that capture the soul of the car.',
        nl: 'Zeer gedetailleerde fotos, Scherpe prijzen en een vriendelijke jongen.'
      },
    },
    {
      name: 'Gino Tillemanns',
      car: 'BMW M3 Competition',
      rating: 5,
      text: {
        en: 'From start to finish, the experience was flawless. The final photos are breathtaking and showcase every curve beautifully.',
        nl: 'Professioneel, oog voor detail en perfecte timing. Mijn auto is nog nooit zo goed vastgelegd.'
      },
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-automotive-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-automotive-silver">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="glass-effect rounded-xl p-6 animate-scale-in hover:transform hover:scale-105 transition-all duration-300 flex flex-col justify-between h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-automotive-gold mb-4" size={24} />

              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-automotive-gold fill-current" size={16} />
                ))}
              </div>

              <p className="text-automotive-silver text-sm mb-6 leading-relaxed">
                {review.text[language]}
              </p>

              <div className="text-left mt-auto">
                <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                <p className="text-automotive-gold text-xs">{review.car}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-automotive-silver mb-6">{t('reviews.cta.text')}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-automotive-gold hover:bg-automotive-gold/90 text-automotive-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('reviews.cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
