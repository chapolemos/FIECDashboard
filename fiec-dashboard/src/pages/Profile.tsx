import React, { useState } from 'react';
import { Header, HeaderCard, RegionMenu, ValuesCard, ValuesCardHeader } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileLines, faEnvelope, faSackDollar, faBuildingColumns, faGear, faPeopleGroup, faGlobe,
    faMicrochip, faShieldHalved, faBookOpen, faEarthAmerica, faSliders, faRocket, faGraduationCap, faMoneyBill1Wave
} from '@fortawesome/free-solid-svg-icons';
import { SpiderChart } from '../components';
import { mockEstados } from './Compare';
import { regioes, Regiao, Estado } from '../data/estadosDados';
import StatesMenu from '../components/StatesMenu';
/* 
Página de exibição dos índices de um estado/região escolhido em cards e gráfico de radar. 
*/

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

const iconMap = {
    indiceFIECInovacao: faEarthAmerica,
    indiceCapacidades: faSliders,
    investimentoPublicoCT: faSackDollar,
    capitalHumanoGraduacao: faGraduationCap,
    capitalHumanoPosGraduacao: faGraduationCap,
    insercaoMestresDoutores: faGraduationCap,
    instituicoes: faBuildingColumns,
    infraestrutura: faGear,
    cooperacao: faPeopleGroup,
    indiceResultados: faRocket,
    competitividadeGlobal: faGlobe,
    intensidadeTecnologica: faMicrochip,
    propriedadeIntelectual: faShieldHalved,
    producaoCientifica: faBookOpen,
    empreendedorismo: faMoneyBill1Wave
};

const Profile = () => {
    const [selectedState, setSelectedState] = useState<Estado | Regiao>(regioes[0]);
    const { colors } = colorTheme;

    const cardsCapacities = [
        { value: 'investimentoPublicoCT', label: 'Investimento público em C&T', icon: faSackDollar },
        { value: 'capitalHumanoGraduacao', label: 'Capital Humano - Graduação', icon: faGraduationCap },
        { value: 'capitalHumanoPosGraduacao', label: 'Capital Humano - Pós-Graduação', icon: faGraduationCap },
        { value: 'insercaoMestresDoutores', label: 'Inserção de Mestres e Doutores', icon: faGraduationCap },
        { value: 'instituicoes', label: 'Instituições', icon: faBuildingColumns },
        { value: 'infraestrutura', label: 'Infraestrutura', icon: faGear },
        { value: 'cooperacao', label: 'Cooperação', icon: faPeopleGroup },
    ];
    const cardsResults = [
        { value: 'competitividadeGlobal', label: 'Competitividade Global', icon: faGlobe },
        { value: 'intensidadeTecnologica', label: 'Intensidade Tecnológica', icon: faMicrochip },
        { value: 'propriedadeIntelectual', label: 'Propriedade Intelectual', icon: faShieldHalved },
        { value: 'producaoCientifica', label: 'Produção Científica', icon: faBookOpen },
        { value: 'empreendedorismo', label: 'Empreendedorismo', icon: faMoneyBill1Wave },
    ];
    const cardsGeneral = [
        { value: 'indiceFIECInovacao', label: 'Índice FIEC de Inovação', icon: faEarthAmerica, color: colors.MidnightBlue },
        { value: 'indiceCapacidades', label: 'Índice de Capacidades', icon: faSliders, color: colors.DodgerBlue },
        { value: 'indiceResultados', label: 'Índice de Resultados', icon: faRocket, color: colors.Turquoise },
    ];

    return (
        <>
            
            <Header>
                <HeaderCard
                    icon={<FontAwesomeIcon icon={faFileLines} />}
                    label="Perfil"
                    color={colors.DarkSlateBlue}
                    backgroundColor={colors.AliceBlue}
                />
                <StatesMenu
                    label="Estados"
                    selectedState={selectedState}
                    setSelectedState={setSelectedState}
                    color={colors.White}
                    backgroundColor={colors.DodgerBlue}
                    regioes={regioes}
                />

            </Header>
            
            <div className="py-4 flex -mt-4 flex-row justify-center h-auto">
                <div className="flex-1 max-w-xl mx-12">
                    <div className="">
                        <ValuesCardHeader
                            color={colors.DodgerBlue}
                            label={'Capacidades'}
                            icon={<FontAwesomeIcon icon={faGraduationCap}
                            size='lg' 
                            />}
                        />
                        <div className="grid grid-cols-3 gap-y-4 gap-x-16 mt-4">
                            {cardsCapacities.map((card, index) => (
                                <ValuesCard
                                    key={`capacity-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg' />}
                                    label={card.label}
                                    color={colors.DodgerBlue}
                                    index={card.value}
                                    value={selectedState.dados[card.value]}
                                    selectedRegion={selectedState}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <ValuesCardHeader
                            color={colors.Turquoise}
                            label={'Resultados'}
                            icon={<FontAwesomeIcon icon={faFileLines} size='lg' 
                            />}
                        />
                        <div className="grid grid-cols-3 gap-4 mt-3">
                            {cardsResults.map((card, index) => (
                                <ValuesCard
                                    key={`result-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg' />}
                                    label={card.label}
                                    color={colors.Turquoise}
                                    index={card.value}
                                    value={selectedState.dados[card.value]}
                                    selectedRegion={selectedState}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 mt-8 mx-12 rounded-lg max-w-2xl min-w-[32rem] shadow-md" style={{ backgroundColor: colors.White }}>
                    <div className="flex flex-col">
                        <span
                            className="self-center m-4"
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: colors.MidnightBlue
                            }}
                        >{selectedState.nome}</span>
                        <div className="grid grid-cols-3 gap-y-4  m4-3">
                            {cardsGeneral.map((card, index) => (
                                <ValuesCard
                                    key={`general-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg' />}
                                    label={card.label}
                                    color={card.color}
                                    index={card.value}
                                    value={selectedState.dados[card.value]}
                                    selectedRegion={selectedState}
                                />
                            ))}
                        </div>
                        <div className='self-center'>
                            <SpiderChart data={selectedState.dados} ></SpiderChart>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
