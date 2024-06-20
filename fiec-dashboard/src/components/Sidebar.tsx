import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colorTheme } from '../theme';
import { abdi, fiec, indice22, obs, p2i } from '../assets/logos/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faChartSimple, faFileLines } from '@fortawesome/free-solid-svg-icons';

/*
Sidebar criada por mim mesmo para ficar sobre a aplicação e navegar entre as telas disponíveis.
A Sidebar faz uso de links com o React Router para exibir os conteúdos diferentes no App.jsx.
Há uma verificação da página atualmente ativa para fazer o highlight do botão da aba selecionada.
Os links contam com tags de title pra SEO e aria-label pra acessibilidade de leitura de tela.
*/

const Sidebar = () => {
  const { colors } = colorTheme;
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ backgroundColor: colors.DarkSlateBlue }} className="w-48 h-screen flex flex-col justify-between max-h-screen">
      <div className="mt-2">
        <img src={indice22} 
        alt="Logo do Indice FIEC de Inovação dos Estados 22" className="mb-2" 
        title="Logo do Indice FIEC de Inovação dos Estados 22"
        />
      </div>

      <div id="navigationTabs" className="flex flex-col items-end mb-auto">
        <Link
          to="/ranking"
          title="Navegar para a aba de Ranking"
          aria-label="Navegar para a aba de ranking."
          className={`button flex items-center justify-center h-10 mb-2 w-11/12 rounded-l-full rounded-r-none '}`}
          style={{
            color: isActive('/ranking') ? colors.DarkSlateBlue : colors.White,
            backgroundColor: isActive('/ranking') ? colors.White : colors.DarkSlateBlue,
            fontWeight: 'bold'
          }}
        >
          <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
          <span>Ranking</span>
        </Link>
        <Link
          to="/perfil"
          title="Navegar para a aba de Perfil"
          aria-label="Navegar para a aba de perfil."
          className={`button flex items-center justify-center h-10 mb-2 w-11/12 rounded-l-full rounded-r-none'}`}
          style={{
            color: isActive('/perfil') ? colors.DarkSlateBlue : colors.White,
            backgroundColor: isActive('/perfil') ? colors.White : colors.DarkSlateBlue,
            fontWeight: 'bold'
          }}
        >
          <FontAwesomeIcon icon={faFileLines} className="mr-2" />
          <span>Perfil</span>
        </Link>
        <Link
          to="/compare"
          title="Navegar para a aba de Comparação"
          aria-label="Navegar para a aba de comparação."
          className={`button flex items-center justify-center h-10 mb-2 w-11/12 rounded-l-full rounded-r-none '}`}
          style={{
            color: isActive('/compare') ? colors.DarkSlateBlue : colors.White,
            backgroundColor: isActive('/compare') ? colors.White : colors.DarkSlateBlue,
            fontWeight: 'bold'
          }}
        >
          <FontAwesomeIcon icon={faCodePullRequest} className="mr-2" />
          <span>Compare</span>
        </Link>
      </div>

      <div id="sidebarSubsection" 
        className="flex flex-col justify-end rounded-2xl m-2"
        style={{backgroundColor: colors.RoyalBlue}}
      >
        <img src={p2i} 
          alt="Logo Programa de Inovação Industrial" className="mb-2" 
          title="Logo Programa de Inovação Industrial"
        />
        <img src={obs} 
          alt="Logo do Observatório da Indústria do Ceará" className="mb-2" 
          title="Logo do Observatório da Indústria do Ceará"
        />
        <img src={fiec} 
          alt="Logo do FIEC" className="mb-2" 
          title="Logo do FIEC"
        />
        <img src={abdi} 
          alt="Logo do ABDI" className="mb-2" 
          title="Logo do ABDI"
        />
      </div>
    </div>
  );
};

export default Sidebar;
