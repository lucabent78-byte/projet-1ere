import React, { useState } from 'react';
import { AlertCircle, FolderOpen } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  // Helper to display clean path in debug info
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

          <p className="text-[10px] text-slate-400 max-w-[200px] leading-tight">
            Vérifiez le nom exact (minuscules/majuscules) et l'extension (.jpg).
          </p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};