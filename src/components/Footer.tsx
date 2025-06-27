import { Camera, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage(); // Haal de vertaalfunctie op

  const quickLinks = [
    { id: 'home', label: t('footer.quickLinks.home') },
    { id: 'portfolio', label: t('footer.quickLinks.portfolio') },
    { id: 'services', label: t('footer.quickLinks.services') },
    { id: 'about', label: t('footer.quickLinks.about') },
    { id: 'contact', label: t('footer.quickLinks.contact') },
  ];

  const services = [
    { id: 'carPhotography', label: t('footer.services.carPhotography') },
    { id: 'portraitSessions', label: t('footer.services.portraitSessions') },
    { id: 'locationShoots', label: t('footer.services.locationShoots') },
    { id: 'studioPhotography', label: t('footer.services.studioPhotography') },
    { id: 'commercialWork', label: t('footer.services.commercialWork') },
  ];

  return (
    <footer className="bg-automotive-charcoal py-12 border-t border-automotive-silver/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Camera className="text-automotive-gold mr-3" size={32} />
              <div className="font-display text-2xl font-bold text-gradient">
                EXOTIC<span className="gold-gradient">AUTOMOTIVE</span>
              </div>
            </div>
            <p className="text-automotive-silver mb-6 max-w-md">
              {t('footer.brand.description')}
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@exoticautomotive.com" className="text-automotive-silver hover:text-automotive-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+15551234567" className="text-automotive-silver hover:text-automotive-gold transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-automotive-silver hover:text-automotive-gold transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-automotive-silver hover:text-automotive-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <span className="text-automotive-silver">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-automotive-silver/20 mt-12 pt-8 text-center">
          <p className="text-automotive-silver">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
