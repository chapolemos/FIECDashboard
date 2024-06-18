import {
  React,
  useState
} from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  const [activeTab, setActiveTab] = useState(''); 


  return (
    <div className="flex h-screen w-screen bg-white">
      <main className="flex-1 flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 bg-black p-4">
          <h1 className="text-2xl font-bold mb-4">Conteúdo Aqui</h1>
          {activeTab === 'ranking' && (
            <p>
              Conteúdo da Aba 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel
              turpis viverra, sed vehicula est ullamcorper.
            </p>
          )}
          {activeTab === 'perfil' && (
            <p>
              Conteúdo da Aba 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel
              turpis viverra, sed vehicula est ullamcorper.
            </p>
          )}
          {activeTab === 'compare' && (
            <p>
              Conteúdo da Aba 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel
              turpis viverra, sed vehicula est ullamcorper.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
