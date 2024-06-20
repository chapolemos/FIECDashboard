import React, { useState, useEffect } from 'react';
import { Header, HeaderCard, RegionMenu, BrazilMap, BarChart, RegionCheckbox } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { regioes, IndicesFIECEnum, Regiao, Estado } from '../data/estadosDados';

const estoRank = [
  { UF: 'SP', PosicaoRanking: 10, ValorRanking: 0.796 },
  { UF: 'SC', PosicaoRanking: 2, ValorRanking: 0.508 },
  { UF: 'RS', PosicaoRanking: 3, ValorRanking: 0.448 },
  { UF: 'TO', PosicaoRanking: 1, ValorRanking: 0.072 }
];

function filterRegions(regions: Regiao[], regionFilter: string[], dataToBeAnalyzed: string) {
  const regionsFiltered = regions.filter((regiao) => regionFilter.includes(regiao.nome));
  const states = regionsFiltered.reduce<Estado[]>((acc, regiao) => {
      acc.push(...regiao.estados);
      return acc;
  }, []);
  const data = states?.map((estado) => {
      return {
          sigla: estado.sigla,
          indice: estado.dados[dataToBeAnalyzed]
      };
  });
  return data;
}

const mockIndices = [
  {
    nome: 'Indice Fiec #1',
    value: 'indiceFIECInovacao'
  },
  {
    nome: 'Indice Fiec #2',
    value: 'indiceCapacidades'
  },
  {
    nome: 'Indice Fiec #3',
    value: 'investimentoPublicoCT'
  },
  {
    nome: 'Indice Fiec #4',
    value: 'capitalHumanoGraduacao'
  },
  {
    nome: 'Indice Fiec #5',
    value: 'capitalHumanoPosGraduacao'
  },
];

const Ranking = () => {
  const { colors } = colorTheme;
  const [selectedRegions, setSelectedRegions] = useState<Regiao[]>([]);

  const highlightedStates = selectedRegions.reduce<string[]>((acc, region) => {
    acc.push(...region.estados.map((estado) => estado.sigla));
    return acc;
  }, []);

  const geraListaLateral = (indice?: IndicesFIECEnum, siglas?: string[]) => {
    if (!siglas) return []; // Retorna um array vazio se não houver siglas

    const dados = regioes.filter(r =>
      r.estados.some(estado => siglas.includes(estado.sigla))
    );
    console.log(dados);
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
