import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { DubaiPage } from './components/DubaiPage';
import { ZurichPage } from './components/ZurichPage';
import { AnalysisPage } from './components/AnalysisPage';
import { Tab } from './types';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.DUBAI);

  const renderContent = () => {
    switch (currentTab) {
      case Tab.DUBAI:
        return <DubaiPage />;
      case Tab.ZURICH:
        return <ZurichPage />;
      case Tab.COMPARISON:
        return <AnalysisPage />;
      default:
        return <DubaiPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <NavBar currentTab={currentTab} onTabChange={setCurrentTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p>© 2024 Analyse Urbaine Comparative. Basé sur les données fournies.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;