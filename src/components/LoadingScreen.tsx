
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-automotive-black">
      <div className="text-center">
        {/* Logo/Brand */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-8">
          EXOTIC
          <span className="block gold-gradient">AUTOMOTIVE</span>
        </h1>
        
        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div 
            className="loading-dot w-3 h-3 bg-automotive-gold rounded-full animate-loading-dots"
            style={{ '--delay': '0s' } as React.CSSProperties}
          />
          <div 
            className="loading-dot w-3 h-3 bg-automotive-gold rounded-full animate-loading-dots"
            style={{ '--delay': '0.2s' } as React.CSSProperties}
          />
          <div 
            className="loading-dot w-3 h-3 bg-automotive-gold rounded-full animate-loading-dots"
            style={{ '--delay': '0.4s' } as React.CSSProperties}
          />
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-automotive-charcoal rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-automotive-gold to-automotive-silver transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <p className="text-automotive-silver mt-4 font-medium">
          Laden... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
