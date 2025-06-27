
import { useState, useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Ensure body has the right classes
    document.body.className = 'bg-automotive-black text-white font-sans';
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-automotive-black text-white">
        <Header />
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
