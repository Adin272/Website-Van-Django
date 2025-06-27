import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.diensten'), href: '#diensten' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-automotive-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl md:text-2xl font-bold text-gradient">
            EXOTIC<span className="gold-gradient">AUTOMOTIVE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-automotive-silver hover:text-automotive-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Extras: Language + Login */}
          <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
            <a
          href="/admin"
          className="border border-automotive-silver text-automotive-silver hover:bg-automotive-gold hover:text-automotive-black font-semibold px-4 py-2 rounded-lg transition-all duration-300"
          >
          Admin Login
          </a>
        </div>


          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-automotive-silver hover:text-automotive-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-automotive-charcoal">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-automotive-silver hover:text-automotive-gold transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/admin"
                className="border mt-2 border-automotive-silver text-automotive-silver hover:bg-automotive-gold hover:text-automotive-black font-semibold px-4 py-2 rounded-lg transition-all duration-300"
              >
                Admin Login
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
