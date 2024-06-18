import React, { useState } from 'react';
import Sidebar from './components/';
import { Compare, Perfil, Ranking } from './pages';

const App = () => {
  const [activeTab, setActiveTab] = useState('ranking');

  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 flex">
        <div className="flex-1 bg-black overflow-auto">
          {activeTab === 'ranking' && <Ranking />}
          {activeTab === 'perfil' && <Perfil />}
          {activeTab === 'compare' && <Compare />}
        </div>
      </main>
    </div>
  );
};

export default App;
