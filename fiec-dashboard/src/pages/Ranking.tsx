import React from 'react';
import {
  Header,
  HeaderCard,
  HeaderMenu,
  BrazilMap,
  BarChart
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { estadosRanking } from '../data/estadosRanking';
const brazilStatesData = [
  { state: 'Acre', value: 10 },
  { state: 'Alagoas', value: 20 },
  { state: 'Amapá', value: 15 },
  // ... adicione todos os estados brasileiros
];
const mockRegioes = [
  {
    label: 'Nordeste',
  },
  {
    label: 'Centro-oeste',
  },
  {
    label: 'Norte',
  },
  {
    label: 'Sudeste',
  },
  {
    label: 'Sul',
  },

]
const Ranking = () => {
  const { colors } = colorTheme;

  return (
    <>
      <Header>
        <HeaderCard
          icon={<FontAwesomeIcon icon={faChartSimple} />}
          label="Ranking"
          color={colors.DarkSlateBlue}
          backgroundColor={colors.AliceBlue}
        />
        <HeaderMenu
          label="Selecione um Indicador"
          color={colors.White}
          backgroundColor={colors.DodgerBlue}
          items={mockRegioes}

        />
        <HeaderMenu
          label="Tipo de Regionalização"
          color={colors.White}
          backgroundColor={colors.Purple}
          items={mockRegioes}
        />

      </Header>
      <div className="flex items-center justify-center my-8">
        <h2 className=""
        style={{
          color: colors.DarkSlateBlue,
          fontWeight:'bold',
        }}
        >Índice FIEC de inovação</h2>
      </div>
      <div className="flex flex-row">
        <BrazilMap></BrazilMap>
        <div>
          <div className='bg-white px-10 py-2 rounded-xl'><BarChart data={estadosRanking} /></div>
      
    </div>
      </div>
      
    </>
  );
};

export default Ranking;
