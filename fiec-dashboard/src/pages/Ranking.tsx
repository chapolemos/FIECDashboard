import React, { useState } from 'react';
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
import { regioes } from '../data/estadosDados';

export const estoRank = [
  { UF: 'SP', PosicaoRanking: 1, ValorRanking: 0.796 },
  { UF: 'SC', PosicaoRanking: 2, ValorRanking: 0.508 },
  { UF: 'RS', PosicaoRanking: 3, ValorRanking: 0.448 },
  { UF: 'TO', PosicaoRanking: 27, ValorRanking: 0.072 }
];

const mockRegioes = [
  {
    nome: 'Nordeste',
  },
  {
    nome: 'Centro-Oeste',
  },
  {
    nome: 'Norte',
  },
  {
    nome: 'Sudeste',
  },
  {
    nome: 'Sul',
  },
];

const data = [
  {
    nome: "Sudeste",
    estados: [
      {
        nome: "São Paulo",
        sigla: "SP"
      },
      {
        nome: "Rio de Janeiro",
        sigla: "RJ"
       
      },
      {
        sigla:"MG"
      },
      {
        sigla:"ES"
      },

    ]
  },
  {
    nome: "Nordeste", 
    estados: [
      {
        sigla: "CE"
      },
      {
        sigla: "RN"
      },
      {
        sigla: "SE"
      },
      {
        sigla: "PB"
      },
      {
        sigla: "PE"
      },
      {
        sigla: "AL"
      },
      {
        sigla: "BA"
      },
      {
        sigla: "PI"
      },
      {
        sigla: "MA"
      },
    ]
    }
    ,
    {
      nome: "Sul", 
      estados: [
        {
          sigla: "SC"
        },
        {
          sigla: "RS"
        },
        {
          sigla: "PR"
        }
      ]
    },
    {
      nome: "Centro-oeste", 
      estados: [
        {
          sigla: "MT"
        },
        {
          sigla: "MS"
        },
        {
          sigla: "DF"
        },
        {
          sigla: "GO"
        }
      ]
    },
    {
      nome: "Norte", 
      estados: [
        {
          sigla: "AM"
        },
        {
          sigla: "PA"
        },
        {
          sigla: "RR"
        },
        {
          sigla: "RO"
        },
        {
          sigla: "AC"
        },
        {
          sigla: "AP"
        },
        {
          sigla: "TO"
        }
      ]
    }
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
          items={mockRegioes}
        />
        <HeaderMenu
          label="Tipo de Regionalização"
          color={colors.White}
          backgroundColor={colors.Purple}
          items={mockRegioes}
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
