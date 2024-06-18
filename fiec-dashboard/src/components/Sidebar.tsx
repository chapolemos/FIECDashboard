import React from 'react';
import { colorTheme } from '../theme';
import { abdi, fiec, indice22, obs, p2i } from '../assets/logos/index';

const Sidebar = ({setActiveTab}) => {
  const { colors } = colorTheme;

  return (
    <div style={{ backgroundColor: colors.sidebar }} className="w-48 h-screen flex flex-col justify-between max-h-screen">
      <div className="mt-2">
        <img src={indice22} alt="Logo do Indice FIEC de Inovação dos Estados 22" className="mb-2" />
      </div>

      <div id="navigationTabs" className="flex flex-col items-center mb-auto">
        <button className="bg-transparent text-white px-4 py-2 rounded mb-2 "
          style={{ color: colors.text }}
          onClick={() => setActiveTab('ranking')}
        >Ranking</button>
        <button className="bg-transparent text-white px-4 py-2 rounded mb-2"
          style={{ color: colors.text }}
          onClick={() => setActiveTab('perfil')}
        >Perfil</button>
        <button className="bg-transparent text-white px-4 py-2 rounded mb-2"
          style={{ color: colors.text }}
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
