import React from 'react';
import { Tab } from '../types';
import { Building2, Landmark, Scale } from 'lucide-react';

interface NavBarProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentTab, onTabChange }) => {
  const getButtonClass = (tab: Tab) => {
    const baseClass = "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base";
    return currentTab === tab
      ? `${baseClass} bg-slate-900 text-white shadow-lg transform scale-105`
      : `${baseClass} bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold tracking-tight text-slate-900">
          Urban<span className="text-blue-600">Analytics</span>
        </div>
        
        <div className="flex gap-2 sm:gap-4 bg-slate-100/50 p-1.5 rounded-full overflow-x-auto">
          <button onClick={() => onTabChange(Tab.DUBAI)} className={getButtonClass(Tab.DUBAI)}>
            <Building2 size={18} />
            Dubaï
          </button>
          <button onClick={() => onTabChange(Tab.ZURICH)} className={getButtonClass(Tab.ZURICH)}>
            <Landmark size={18} />
            Zurich
          </button>
          <button onClick={() => onTabChange(Tab.COMPARISON)} className={getButtonClass(Tab.COMPARISON)}>
            <Scale size={18} />
            Comparaison
          </button>
        </div>
      </div>
    </nav>
  );
};