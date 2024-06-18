import React from 'react';
import {
  Header,
  HeaderCard,
  HeaderMenu
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

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
      <p>
        Aba de perfil
      </p>
    </>
  );
};

export default Ranking;
