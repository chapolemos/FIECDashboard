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
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
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
          icon={<FontAwesomeIcon icon={faFileLines} />}
          label="Perfil"
          color={colors.sidebar}
          backgroundColor={colors.backgroundLight}
        />
        <HeaderMenu
          label="Selecione um Indicador"
          color={colors.text}
          backgroundColor={colors.topButton}
          items={mockRegioes}

        />
        <HeaderMenu
          label="Tipo de Regionalização"
          color={colors.text}
          backgroundColor={colors.topButton2}
          items={mockRegioes}
        />

      </Header>
      <div className="flex flex-row">
        <BrazilMap></BrazilMap>
        <div>
      <h1>Gráfico de Barras dos Estados Brasileiros</h1>
      <BarChart data={brazilStatesData} />
    </div>
      </div>
      
    </>
  );
};

export default Ranking;
