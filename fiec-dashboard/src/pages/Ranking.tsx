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
      <Header></Header>
      <p>
        Conteúdo da Aba 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel
        turpis viverra, sed vehicula est ullamcorper.
      </p>
    </div>
  );
};

export default Ranking;
