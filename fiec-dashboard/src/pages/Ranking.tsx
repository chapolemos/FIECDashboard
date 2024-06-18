import React from 'react';
import {
  Header,
  HeaderCard,
  HeaderMenu
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const Ranking = () => {
  const { colors } = colorTheme;

  return (
    <div>
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
        />
        <HeaderMenu
          label="Tipo de Regionalização"
          color={colors.text}
          backgroundColor={colors.topButton2}
        />

      </Header>
      <p>
        Aba de perfil
      </p>
    </div>
  );
};

export default Ranking;
