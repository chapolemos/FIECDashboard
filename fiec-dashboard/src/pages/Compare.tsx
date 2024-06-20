import React from 'react';
import { Header, HeaderCard, RegionMenu, SpiderChart, ValuesCard } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodePullRequest, faEarthAmerica, faSliders, faRocket } from '@fortawesome/free-solid-svg-icons';
import { StatesMenu } from '../components'

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
    const cardsGeneral = [
        { label: 'Índice FIEC de Inovação', icon: faEarthAmerica, color: colors.MidnightBlue },
        { label: 'Índice de Capacidades', icon: faSliders, color: colors.DodgerBlue },
        { label: 'Índice de Resultados', icon: faRocket, color: colors.Turquoise },
    ];
    return (
        <>

            <Header>
                <HeaderCard
                    icon={<FontAwesomeIcon icon={faCodePullRequest} />}
                    label="Compare"
                    color={colors.DarkSlateBlue}
                    backgroundColor={colors.AliceBlue}
                />
                <RegionMenu
                    label="Selecione a primeira região"
                    color={colors.White}
                    backgroundColor={colors.DodgerBlue}
                    items={mockEstados}
                />
                <RegionMenu
                    label="Selecione a segunda região"
                    color={colors.White}
                    backgroundColor={colors.Purple}
                    items={mockEstados}
                />
            </Header>
            <div className="p-4 flex flex-1 -mt-4 flex-row justify-center bg-black">
                <div className="flex-1 max-w-xl mx-16">

                </div>
                <div className="flex flex-col flex-1 mx-16 mt-8 rounded-lg max-w-2xl shadow-md" style={{ backgroundColor: colors.White }}>
                    <div className="flex flex-col">
                        <span
                            className="self-center mx-4 mt-4 mb-1"
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: colors.MidnightBlue
                            }}
                        >Alagoas</span>
                        <div className="grid grid-cols-3 gap-4 my-2 mx-3">
                            {cardsGeneral.map((card, index) => (
                                <ValuesCard
                                    key={`general-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg' />}
                                    label={card.label}
                                    color={card.color}
                                />
                            ))}
                        </div>
                        <span
                            className="self-center mx-4 my-1"
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: colors.MidnightBlue
                            }}
                        >Ceará</span>
                        <div className="grid grid-cols-3 gap-4 my-2 mx-3">
                            {cardsGeneral.map((card, index) => (
                                <ValuesCard
                                    key={`general-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg' />}
                                    label={card.label}
                                    color={card.color}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='self-center'>
                        <SpiderChart data={acreData}></SpiderChart>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Compare;
