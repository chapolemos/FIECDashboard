import React from 'react';
import { Sidebar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Compare, Profile, Ranking } from './pages';
import { colorTheme } from './theme';

const App = () => {
  const { colors } = colorTheme;

  return (
    <Router>
      <div className="flex h-screen w-screen bg-white">
        <Sidebar/>
        <main className="flex-1 flex">
          <div className="flex-1 overflow-auto" style={{ backgroundColor: colors.AliceBlue }}>
            <Routes>
              <Route path="/" element={<Ranking />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/compare" element={<Compare />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
