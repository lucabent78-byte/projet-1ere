import React, { useState, useEffect } from 'react';
import { AlertCircle, FolderOpen, X, Maximize2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Empêche le scroll derrière
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const displayPath = src.startsWith('/') ? src.substring(1) : src;

  if (error) {
    return (
      <div className={`relative overflow-hidden flex flex-col items-center justify-center bg-slate-50 text-slate-500 p-4 border-2 border-dashed border-red-200 ${className}`}>
        <div className="absolute inset-0 bg-red-50/50 pointer-events-none" />
        <div className="z-10 flex flex-col items-center text-center">
          <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
          <p className="text-xs font-bold text-red-600 mb-2 uppercase tracking-wide">Image Introuvable</p>
          <div className="bg-white p-3 rounded-lg border border-red-100 shadow-sm text-left max-w-full w-full mb-2">
            <p className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
              <FolderOpen size={10} /> Emplacement requis :
            </p>
            <code className="block text-xs font-mono text-slate-700 break-all bg-slate-100 p-1 rounded">
              public/{displayPath}
            </code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Image normale cliquable */}
      <div 
        className={`relative group cursor-zoom-in overflow-hidden ${className}`}
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setError(true)}
          loading="lazy"
        />
        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
        </div>
      </div>

      {/* Modale de Zoom (Lightbox) */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm animate-fade-in p-4 md:p-12"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image elle-même
            />
            <div className="absolute bottom-[-40px] left-0 right-0 text-center">
              <p className="text-white/80 text-sm font-medium bg-black/20 inline-block px-4 py-1 rounded-full backdrop-blur-md">
                {alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: opacity 0.3s ease-out forwards;
        }
        @keyframes opacity {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};