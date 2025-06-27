import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Photo = {
  id: number;
  category: string;
  title: string;
  filepath: string;
};

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const categories = [
    { id: 'cross', label: t('portfolio.filter.cross') },
    { id: 'portrait', label: t('portfolio.filter.portrait') },
    { id: 'balkan', label: t('portfolio.filter.balkan') },
    { id: 'luxury', label: t('portfolio.filter.luxury') },
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/photos');
        console.log(res) 
        const data = await res.json();
        console.log(data)
        setPhotos(data);
      } catch (err) {
        console.error('Fout bij ophalen van fotos:', err);
      }
    };

    fetchPhotos();
  }, []);

  const filtered = selectedCategory
    ? photos.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <section id="portfolio" className="py-20 bg-automotive-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('portfolio.title')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-automotive-gold text-automotive-black border-2 border-automotive-gold'
                  : 'bg-automotive-black/50 text-automotive-silver hover:bg-automotive-gold/20 hover:text-automotive-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {!selectedCategory && (
          <div className="text-center mt-12 text-xl text-automotive-silver">
            {t('portfolio.placeholder')}
          </div>
        )}

        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-automotive-black animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img
                    src={item.filepath}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-automotive-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
