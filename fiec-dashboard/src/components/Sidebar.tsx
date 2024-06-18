import React from 'react';
import { colorTheme } from '../theme';
import { abdi, fiec, indice22, obs, p2i } from '../assets/logos/index';


const Sidebar = ({activeTab, setActiveTab}) => {
  const { colors } = colorTheme;

  return (
    <div style={{ backgroundColor: colors.sidebar }} className="w-48 h-screen flex flex-col justify-between max-h-screen">
      <div className="mt-2">
        <img src={indice22} alt="Logo do Indice FIEC de Inovação dos Estados 22" className="mb-2" />
      </div>

      <div id="navigationTabs" className="flex flex-col items-end mb-auto">
        <button 
          title = "Clique aqui para navegar pra aba de Ranking."
          aria-label='Navegar para a aba de ranking.'
          className="px-4 py-2 rounded-r-none rounded-l-full mb-2 w-11/12"
          style={{ 
            color: activeTab === 'ranking' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'ranking' ? colors.text : colors.sidebar,
            fontWeight:'bold',
          }}
          onClick={() => setActiveTab('ranking')}
        >Ranking</button>
        <button 
          title = "Clique aqui para navegar pra aba de Perfil."
          aria-label='Navegar para a aba de perfil.'
          className="px-4 py-2 rounded-r-none rounded-l-full mb-2 w-11/12"
          style={{ 
            color: activeTab === 'perfil' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'perfil' ? colors.text : colors.sidebar,
            fontWeight:'bold',
          }}
          onClick={() => setActiveTab('perfil')}
        >Perfil</button>
        <button
          title = "Clique aqui para navegar pra aba de Comparação."
          aria-label='Navegar para a aba de comparação.'
          className="px-4 py-2 rounded-r-none rounded-l-full mb-2 w-11/12"
          style={{ 
            color: activeTab === 'compare' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'compare' ? colors.text : colors.sidebar,
            fontWeight:'bold',
          }}
          onClick={() => setActiveTab('compare')}
        >Compare</button>
      </div>

      <div id="sidebarSubsection" className="flex flex-col justify-end">
        <img src={p2i} alt="Logo Programa de Inovação Industrial" className="mb-2" />
        <img src={obs} alt="Logo do Observatório da Indústria do Ceará" className="mb-2" />
        <img src={fiec} alt="Logo do FIEC" className="mb-2" />
        <img src={abdi} alt="Logo do ABDI" className="mb-2" />
      </div>
    </div>
  );
};

export default Sidebar;
