import React from 'react';
import { Header, HeaderCard, HeaderMenu, SpiderChart } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
export const mockEstados = [
    {
        label: 'Nordeste',
        subItems: [
            { label: "Ceará", selected: false },
            { label: "Pernambuco", selected: false },
            { label: "Rio Grande do Norte", selected: false },
        ]
    },
    {
        label: 'Sudeste',
        subItems: [
            { label: "São Paulo", selected: false },
            { label: "Rio de Janeiro", selected: false },
            { label: "Espírito Santo", selected: false },
        ]
    }

]
const acreData = {
    indiceFIECInovacao: 0.8,
    indiceCapacidades: 0.7,
    investimentoPublicoCT: 0.6,
    capitalHumanoGraduacao: 0.85,
    capitalHumanoPosGraduacao: 0.75,
    insercaoMestresDoutores: 0.65,
    instituicoes: 0.9,
    infraestrutura: 0.7,
    cooperacao: 0.8,
    indiceResultados: 0.85,
    competitividadeGlobal: 0.7,
    intensidadeTecnologica: 0.6,
    propriedadeIntelectual: 0.75,
    producaoCientifica: 0.8,
    empreendedorismo: 0.7
  };
const Compare = () => {
    const { colors } = colorTheme;

    

    return (
        <>
            <Header>
                <HeaderCard
                    icon={<FontAwesomeIcon icon={faCodePullRequest} />}
                    label="Compare"
                    color={colors.DarkSlateBlue}
                    backgroundColor={colors.AliceBlue}
                />
                <HeaderMenu
                    label="Selecione a primeira região"
                    color={colors.White}
                    backgroundColor={colors.DodgerBlue}
                    items={mockEstados}
                />
                <HeaderMenu
                    label="Selecione a segunda região"
                    color={colors.White}
                    backgroundColor={colors.Purple}
                    items={mockEstados}
                />
            </Header>
            <p>Aba de compare</p>
            <SpiderChart data={acreData} ></SpiderChart>
        </>
    );
};

export default Compare;
