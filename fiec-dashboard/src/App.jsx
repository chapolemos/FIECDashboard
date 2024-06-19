import React, { useState } from 'react';
import { Sidebar } from './components'
import { Compare, Profile, Ranking } from './pages';
import { colorTheme } from './theme';

const App = () => {
  const [activeTab, setActiveTab] = useState('ranking');
 const { colors } = colorTheme;
  return (
    <div className="flex h-screen w-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 flex">
        <div className="flex-1 overflow-auto"
        style={{
          backgroundColor: colors.AliceBlue
        }}
        >
          {activeTab === 'ranking' && <Ranking />}
          {activeTab === 'perfil' && <Profile />}
          {activeTab === 'compare' && <Compare />}
        </div>
      </main>
    </div>
  );
};

export default App;
