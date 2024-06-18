import React from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <main className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">Conteúdo Aqui</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel
            turpis viverra, sed vehicula est ullamcorper.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
