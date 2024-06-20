import React, { useState, useEffect } from 'react';
import { Header, HeaderCard, RegionMenu, BrazilMap, BarChart, IndexesMenu } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { regioes, IndicesFIECEnum, Regiao, Estado, Index, indexes } from '../data/estadosDados';

const estoRank = [
  { UF: 'SP', PosicaoRanking: 10, ValorRanking: 0.796 },
  { UF: 'SC', PosicaoRanking: 2, ValorRanking: 0.508 },
  { UF: 'RS', PosicaoRanking: 3, ValorRanking: 0.448 },
  { UF: 'TO', PosicaoRanking: 1, ValorRanking: 0.072 }
];

function filterRegions(regions: Regiao[], dataToBeAnalyzed: string) {
  const states = regions.reduce<Estado[]>((acc, regiao) => {
      acc.push(...regiao.estados);
      return acc;
  }, []);
  const data = states?.map((estado) => {
      return {
          sigla: estado.sigla,
          indice: estado.dados[dataToBeAnalyzed]
      };
  });
  const orderedData = data.sort((a,b) => b.indice - a.indice);
  const rankedData = orderedData.map((data, index) => ({...data, rank: index + 1}));
  return rankedData;
}

const Ranking = () => {
  const { colors } = colorTheme;
  const [selectedRegions, setSelectedRegions] = useState<Regiao[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<Index>(indexes[0]);

  const highlightedStates = selectedRegions.reduce<string[]>((acc, region) => {
    acc.push(...region.estados.map((estado) => estado.sigla));
    return acc;
  }, []);

  const indexData = filterRegions(selectedRegions, selectedIndex.value);

  return (
    <>
      <Header>
        <HeaderCard
          icon={<FontAwesomeIcon icon={faChartSimple} />}
          label="Ranking"
          color={colors.DarkSlateBlue}
          backgroundColor={colors.AliceBlue}
        />
        <IndexesMenu
          label="Selecione um Indicador"
          color={colors.White}
          backgroundColor={colors.DodgerBlue}
          items={indexes}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <RegionMenu
          label="Tipo de Regionalização"
          color={colors.White}
          backgroundColor={colors.Purple}
          items={regioes.map(regiao => ({ nome: regiao.nome }))}
          selectedRegions={selectedRegions}
          setSelectedRegions={setSelectedRegions}
        />
      </Header>

      <div className="flex items-center justify-center my-8">
        <h2 style={{ color: colors.DarkSlateBlue, fontWeight: 'bold' }}>
          Índice FIEC de inovação
        </h2>
      </div>

      <div className="flex flex-row">
        <BrazilMap data = {indexData} highlightedStates={highlightedStates} />
        <div>
          <div className='bg-white px-10 py-2 rounded-xl'>
            <BarChart data={indexData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ranking;
