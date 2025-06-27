
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'nl';
  setLanguage: (lang: 'en' | 'nl') => void;
  t: (key: string, variables?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.diensten': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.reviews': 'Reviews',
    
    // Hero
    'hero.subtitle1': 'Driven to capture perfection.',
    'hero.subtitle2': 'Cars deserve art. We create it.',
    'hero.subtitle3': 'Drive the dream, capture the moment.',
    'hero.subtitle4': 'Where mechanics meet art.',
    'hero.description': 'Professional automotive photography that captures the soul of every vehicle. From exotic supercars to classic beauties, we bring your automotive passion to life.',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.bookShoot': 'Book a Shoot',

    //Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.filter.cross': 'Crossen',
    'portfolio.filter.portrait': 'Portraits',
    'portfolio.filter.balkan': 'Balkan Meeting',
    'portfolio.filter.luxury': 'Luxury Vehicles',
    'portfolio.placeholder': 'Click on a category above to view the photos',

    // Service Page
    'services.title': 'SERVICES',
    'services.description': 'Professional photography services tailored to capture your automotive passion and personal moments with exceptional quality.',
    'services.auto.title': 'Car Photography',
    'services.auto.description': 'Professional automotive photography for personal collections, dealerships, or marketing.',
    'services.portrait.title': 'Portrait Sessions',
    'services.portrait.description': 'Professional portrait photography for individuals, couples, or groups.',
    'services.location.title': 'Location Shoots',
    'services.location.description': 'On-location photography at your preferred venue or scenic location.',
    'services.features.pricePrefix': 'From',
    'services.features.resolution': 'High-resolution images',
    'services.features.angles': 'Multiple angles',
    'services.features.editing': 'Professional editing',
    'services.features.delivery': 'Digital delivery',
    'services.pricing.title': 'PRICING PACKAGES',
    'services.pricing.description': 'Choose the perfect package for your photography needs. All packages include professional editing and secure online delivery.',
    'services.features.travel': 'Travel within 50 km',
    'services.features.goldenHour': 'Golden hour timing',
    'services.features.environmental': 'Environmental portraits',
    'services.features.backup': 'Backup equipment',
    'services.package.essential': 'Essential',
    'services.package.professional': 'Professional',
    'services.package.premium': 'Premium',
    'services.package.popular': 'MOST POPULAR',
    'services.package.features.photos': '{count} high-resolution photos',
    'services.package.features.retouching': 'Advanced retouching',
    'services.package.features.locations': 'Multiple locations',
    'services.package.features.gallery': 'Online gallery',
    'services.package.features.delivery': '{hours}-hour delivery',
    'services.package.features.print': 'Print release included',
    'services.package.features.video': 'Behind-the-scenes video',
    'services.button.book': 'Book Now',
    

    // About
    'about.title': 'ABOUT US',
    'about.description1': 'Welcome to ExoticAutomotive, where passion meets precision in automotive photography. We specialize in capturing the essence, beauty, and power of exceptional vehicles through our lens.',
    'about.description2': 'With over 5 years of experience in automotive photography, we\'ve had the privilege of working with exotic car owners, classic car collectors, and automotive enthusiasts who share our passion for perfection.',
    'about.description3': 'Our approach combines technical expertise with artistic vision, ensuring every photograph tells the unique story of your vehicle. From the gleaming curves of a Lamborghini to the timeless elegance of a vintage Ferrari, we bring out the character that makes each car special.',
    'about.description4': 'Beyond automotive photography, we also offer professional portrait sessions, bringing the same level of dedication and quality to capturing your personal moments.',
    'about.workTogether': 'Let\'s Work Together',
    'about.stats.cars': 'Cars Photographed',
    'about.stats.clients': 'Happy Clients',
    'about.stats.experience': 'Years Experience',
    'about.stats.photos': 'Photos Delivered',
    
    // Reviews
    'reviews.title': 'CLIENT REVIEWS',
    'reviews.subtitle': 'What Our Clients Say',
    'reviews.cta.text': 'Ready to create your own stunning automotive photography?',
    'reviews.cta.button': 'Book Your Session',


    // Contact
    'contact.title': 'GET IN TOUCH',
    'contact.description': 'Ready to capture your automotive passion? Let\'s discuss your photography needs and create something extraordinary together.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.hours': 'Hours',
    'contact.hours.details': 'Mon-Fri: 09:00-17:00',
    'contact.choose.us': 'Why Choose Us?',
    'contact.choose.equipment': 'Professional equipment and expertise',
    'contact.choose.turnaround': 'Fast turnaround times',
    'contact.choose.satisfaction': 'Satisfaction guaranteed',
    'contact.choose.pricing': 'Competitive pricing',
    'contact.form.title': 'Book Your Session',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service *',
    'contact.form.message': 'Message *',
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.phone': '(555) 123-4567',
    'contact.form.placeholder.message': 'Tell us about your project, preferred dates, location, and any specific requirements...',
    'contact.form.submit': 'Send Message',
    'contact.toast.success.title': 'Message Sent!',
    'contact.toast.success.description': 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',

    // Footer Page
    'footer.brand.description': 'Professional automotive photography that captures the soul of every vehicle. Creating stunning visuals for car enthusiasts and collectors.',
    'footer.quickLinks.title': 'Quick Links',
    'footer.quickLinks.home': 'Home',
    'footer.quickLinks.portfolio': 'Portfolio',
    'footer.quickLinks.services': 'Services',
    'footer.quickLinks.about': 'About',
    'footer.quickLinks.contact': 'Contact',
    'footer.services.title': 'Services',
    'footer.services.carPhotography': 'Car Photography',
    'footer.services.portraitSessions': 'Portrait Sessions',
    'footer.services.locationShoots': 'Location Shoots',
    'footer.services.studioPhotography': 'Studio Photography',
    'footer.services.commercialWork': 'Commercial Work',
    'footer.copyright': '© 2025 ExoticAutomotive. All rights reserved. | Made with passion for automotive excellence'



  },
  nl: {
    // Header
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.diensten': 'Diensten',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.reviews': 'Reviews',
    
    // Hero
    'hero.subtitle1': 'Driven to capture perfection.',
    'hero.subtitle2': 'Cars deserve art. We create it.',
    'hero.subtitle3': 'Drive the dream, capture the moment.',
    'hero.subtitle4': 'Where mechanics meet art.',
    'hero.description': 'Professionele automotive fotografie die de ziel van elk voertuig vastlegt. Van exotische supercars tot klassieke schoonheden, wij brengen uw automotive passie tot leven.',
    'hero.viewPortfolio': 'Bekijk Portfolio',
    'hero.bookShoot': 'Boek een Shoot',

    // Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.filter.cross': 'Crossen',
    'portfolio.filter.portrait': 'Portretten',
    'portfolio.filter.balkan': 'Balkan Meeting',
    'portfolio.filter.luxury': 'Luxe Voertuigen',
    'portfolio.placeholder': 'Klik op een van de categorieën hierboven om de foto\'s te zien',

    // Diensten Pagina
    'services.title': 'DIENSTEN',
    'services.description': 'Professionele fotografiediensten op maat om jouw passie voor auto\'s en persoonlijke momenten vast te leggen met uitzonderlijke kwaliteit.',
    'services.auto.title': 'Auto Fotografie',
    'services.auto.description': 'Professionele auto fotografie voor persoonlijke collecties, dealers of marketing.',
    'services.portrait.title': 'Portret Sessies',
    'services.portrait.description': 'Professionele portretfotografie voor individuen, koppels of groepen.',
    'services.location.title': 'Locatie Shoots',
    'services.location.description': 'Fotografie op locatie naar jouw voorkeur of een schilderachtige plek.',
    'services.features.pricePrefix': 'Vanaf',
    'services.features.resolution': 'Hoge resolutie beelden',
    'services.features.angles': 'Meerdere hoeken',
    'services.features.editing': 'Professionele bewerking',
    'services.features.delivery': 'Digitale levering',
    'services.pricing.title': 'PRIJS PAKKETTEN',
    'services.pricing.description': 'Kies het perfecte pakket voor jouw fotografiebehoeften. Alle pakketten omvatten professionele bewerking en veilige online levering.',
    'services.features.travel': 'Reistijd binnen 50 km',
    'services.features.goldenHour': 'Gouden uur timing',
    'services.features.environmental': 'Omgevingsportretten',
    'services.features.backup': 'Backup apparatuur',
    'services.package.essential': 'Essentieel',
    'services.package.professional': 'Professioneel',
    'services.package.premium': 'Premium',
    'services.package.popular': 'MEEST POPULAIR',
    'services.package.features.photos': '{count} foto\’s in hoge resolutie',
    'services.package.features.retouching': 'Geavanceerde retouchering',
    'services.package.features.locations': 'Meerdere locaties',
    'services.package.features.gallery': 'Online galerij',
    'services.package.features.delivery': 'Levering binnen {hours} uur',
    'services.package.features.print': 'Printvrijgave inbegrepen',
    'services.package.features.video': 'Behind-the-scenes video',
    'services.button.book': 'Boek Nu',
    
    // About
    'about.title': 'OVER ONS',
    'about.description1': 'Mijn naam is Django Haemers, een 19-jarige auto foto- en videograaf met een grote passie voor autos en visuele storytelling. Wat begon als een hobby is inmiddels uitgegroeid tot een professionele carrière. Onder de naam Exotic_Automotive045 deel ik mijn werk op Instagram en TikTok, waar ik exclusieve content maak voor autoliefhebbers en bedrijven.',
    'about.description2': 'Ik ben gespecialiseerd in het vastleggen van luxe, sport- en supercars, waarbij elk shot is gericht op het benadrukken van de kracht, stijl en unieke details van elk voertuig. Mijn werk varieert van fotoshoots op locatie tot dynamische videoproducties voor autodealers en merken. Mijn doel is om autos niet alleen vast te leggen, maar ze tot leven te brengen op een manier die indruk maakt.',
    'about.description3': 'Met mijn frisse blik en oog voor detail streef ik ernaar om elke shoot net dat beetje extra te geven. Of het nu gaat om een fotoshoot voor je persoonlijke collectie of content voor social media, ik zorg ervoor dat jouw auto er geweldig uitziet.',
    'about.description4': 'Laten we samenwerken om jouw auto in de schijnwerpers te zetten!',
    'about.workTogether': 'Samenwerken? Klik Hier!',
    'about.stats.cars': 'Auto\'s Gefotografeerd',
    'about.stats.clients': 'Tevreden Klanten',
    'about.stats.experience': 'Jaar Ervaring',
    'about.stats.photos': 'Foto\'s Geleverd',
    
    // Reviews
    'reviews.title': 'KLANT REVIEWS',
    'reviews.subtitle': 'Wat Onze Klanten Zeggen',
    'reviews.cta.text': 'Klaar om jouw eigen verbluffende automotive fotografie te maken?',
    'reviews.cta.button': 'Boek Jouw Sessie',


    // Contact
    'contact.title': 'NEEM CONTACT OP',
    'contact.description': 'Klaar om jouw automotive passie vast te leggen? Laten we jouw fotografiebehoeften bespreken en samen iets buitengewoons creëren.',
    'contact.info.email': 'E-mail',
    'contact.info.phone': 'Telefoon',
    'contact.info.location': 'Locatie',
    'contact.info.hours': 'Uren',
    'contact.hours.details': 'Ma-Vri: 09:00-17:00',
    'contact.choose.us': 'Waarom Kiezen Voor Ons?',
    'contact.choose.equipment': 'Professionele apparatuur en expertise',
    'contact.choose.turnaround': 'Snelle levertijden',
    'contact.choose.satisfaction': 'Tevredenheid gegarandeerd',
    'contact.choose.pricing': 'Concurrerende prijzen',
    'contact.form.title': 'Boek Je Sessie',
    'contact.form.name': 'Naam *',
    'contact.form.email': 'E-mail *',
    'contact.form.phone': 'Telefoon',
    'contact.form.service': 'Dienst *',
    'contact.form.message': 'Bericht *',
    'contact.form.placeholder.name': 'Jouw volledige naam',
    'contact.form.placeholder.email': 'jouw@email.com',
    'contact.form.placeholder.phone': '(555) 123-4567',
    'contact.form.placeholder.message': 'Vertel ons over je project, gewenste data, locatie en specifieke vereisten...',
    'contact.form.submit': 'Verstuur Bericht',
    'contact.toast.success.title': 'Bericht Verzonden!',
    'contact.toast.success.description': 'Bedankt voor je aanvraag. We nemen binnen 24 uur contact met je op.',

    // Footer Pagina
    'footer.brand.description': 'Professionele automotive fotografie die de ziel van elk voertuig vastlegt. Creëert verbluffende visuals voor autoliefhebbers en verzamelaars.',
    'footer.quickLinks.title': 'Snelle Links',
    'footer.quickLinks.home': 'Home',
    'footer.quickLinks.portfolio': 'Portfolio',
    'footer.quickLinks.services': 'Diensten',
    'footer.quickLinks.about': 'Over Ons',
    'footer.quickLinks.contact': 'Contact',
    'footer.services.title': 'Diensten',
    'footer.services.carPhotography': 'Auto Fotografie',
    'footer.services.portraitSessions': 'Portret Sessies',
    'footer.services.locationShoots': 'Locatie Shoots',
    'footer.services.studioPhotography': 'Studio Fotografie',
    'footer.services.commercialWork': 'Commercieel Werk',
    'footer.copyright': '© 2025 ExoticAutomotive. Alle rechten voorbehouden. | Gemaakt met passie voor automotive excellentie',

  }
};


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'nl'>('en');

  const t = (key: string, variables?: Record<string, any>): string => {
    let translation = translations[language][key as keyof typeof translations.en] || key;

    // Vervang placeholders als er variabelen zijn meegegeven
    if (variables) {
      Object.keys(variables).forEach((variable) => {
        translation = translation.replace(`{${variable}}`, String(variables[variable]));
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};