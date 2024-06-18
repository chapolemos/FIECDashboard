import React from 'react';
import { colorTheme } from '../theme';
import { abdi, fiec, indice22, obs, p2i } from '../assets/logos/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faChartSimple, faFileLines } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { colors } = colorTheme;

  return (
    <div style={{ backgroundColor: colors.sidebar }} className="w-48 h-screen flex flex-col justify-between max-h-screen">
      <div className="mt-2">
        <img src={indice22} alt="Logo do Indice FIEC de Inovação dos Estados 22" className="mb-2" />
      </div>

      <div id="navigationTabs" className="flex flex-col items-end mb-auto">
        <button
          title="Navegar para a aba de Ranking"
          aria-label="Navegar para a aba de ranking."
          className="button flex items-center justify-center mb-2 w-11/12 rounded-l-full rounded-r-none"
          style={{
            color: activeTab === 'ranking' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'ranking' ? colors.text : colors.sidebar,
            fontWeight: 'bold',
          }}
          onClick={() => setActiveTab('ranking')}
        >
          <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
          <span>Ranking</span>
        </button>
        <button
          title="Navegar para a aba de Perfil"
          aria-label="Navegar para a aba de perfil."
          className="button flex items-center justify-center mb-2 w-11/12 rounded-l-full rounded-r-none"
          style={{
            color: activeTab === 'perfil' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'perfil' ? colors.text : colors.sidebar,
            fontWeight: 'bold',
          }}
          onClick={() => setActiveTab('perfil')}
        > 
          <FontAwesomeIcon icon={faFileLines} className="mr-2" />
          <span>Perfil</span>
        </button>
        <button
          title="Navegar para a aba de Comparação"
          aria-label="Navegar para a aba de comparação."
          className="button flex items-center justify-center mb-2 w-11/12 rounded-l-full rounded-r-none"
          style={{
            color: activeTab === 'compare' ? colors.sidebar : colors.text,
            backgroundColor: activeTab === 'compare' ? colors.text : colors.sidebar,
            fontWeight: 'bold',
          }}
          onClick={() => setActiveTab('compare')}
        >
          <FontAwesomeIcon icon={faCodePullRequest} className="mr-2" />
          <span>Compare</span>
        </button>
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
