import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-automotive-silver/30 hover:border-automotive-gold transition-all duration-300 text-automotive-silver hover:text-automotive-gold"
    >
      {language === 'en' ? (
        <img src="./icons/Dutchflag.svg" alt="Dutch Flag" className="w-6 h-6" />
      ) : (
        <img src="./icons/UnitedStates.svg" alt="British Flag" className="w-6 h-6" />
      )}
    </button>
  );
};

export default LanguageToggle;
