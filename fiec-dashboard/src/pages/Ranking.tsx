import React, { useState } from 'react';
import { Header, HeaderCard, HeaderMenu, BrazilMap, BarChart } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { regioes } from '../data/estadosDados';

const estoRank = [
  { UF: 'SP', PosicaoRanking: 1, ValorRanking: 0.796 },
  { UF: 'SC', PosicaoRanking: 2, ValorRanking: 0.508 },
  { UF: 'RS', PosicaoRanking: 3, ValorRanking: 0.448 },
  { UF: 'TO', PosicaoRanking: 27, ValorRanking: 0.072 }
];

const Ranking = () => {
  const { colors } = colorTheme;
  const [highlightedStates, setHighlightedStates] = useState([]);

  const handleRegionSelect = (region) => {
    const selectedRegion = regioes.find(r => r.nome === region.nome);
    if (selectedRegion) {
      const states = selectedRegion.estados.map(e => e.sigla);
      setHighlightedStates(states);
    }
  };

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
          items={regioes.map(regiao => ({ nome: regiao.nome }))}
        />
        <HeaderMenu
          label="Tipo de Regionalização"
          color={colors.White}
          backgroundColor={colors.Purple}
          items={regioes.map(regiao => ({ nome: regiao.nome }))}
          onRegionSelect={handleRegionSelect}
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
        <BrazilMap highlightedStates={highlightedStates}></BrazilMap>
        <div>
          <div className='bg-white px-10 py-2 rounded-xl'><BarChart data={estoRank} /></div>
        </div>
      </div>
    </>
  );
};

export default Ranking;
