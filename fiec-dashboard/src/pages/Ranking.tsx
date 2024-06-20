import React, { useState, useEffect } from 'react';
import { Header, HeaderCard, RegionMenu, BrazilMap, BarChart, IndexesMenu } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { regioes, IndicesFIECEnum, Regiao, Estado, Index, indexes } from '../data/estadosDados';

/* 
Página de exibição de um mapa coroplético do país e de um gráfico de barras, ambos mostrando a informação
referente ao índice escolhido para ser exibido. 
A página possui filtragem de quais regiões devem ter seus dados mostrados por meio de um dropdown menu.
*/


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
        <h2 style={{ color: colors.DarkSlateBlue, fontSize:24, fontWeight: 'bold' }}>
          Índice FIEC de inovação
        </h2>
      </div>

    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col flex-1 mx-8 mb-8 rounded-lg max-w-2xl 2xl:min-w-[44rem] md:min-w-[24rem]" >
        <BrazilMap data = {indexData} highlightedStates={highlightedStates} />
      </div>
      <div className="flex flex-col mx-12 mb-8 rounded-lg max-w-md shadow-md" style={{ backgroundColor: colors.White }}>
        <BarChart data={indexData} />
      </div>
        
      </div>
    </>
  );
};

export default Ranking;
