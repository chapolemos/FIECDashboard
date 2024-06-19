import React from 'react';
import {
    Header,
    HeaderCard,
    HeaderMenu,
    ValuesCard,
    ValuesCardHeader
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope, faSackDollar, 
    faBuildingColumns, faGear, faPeopleGroup,
    faGlobe, faMicrochip, faShieldHalved, faBookOpen, 
    faEarthAmerica, faSliders, faRocket,
    faGraduationCap,
    faMoneyBill1Wave
} from '@fortawesome/free-solid-svg-icons'; 
import { mockEstados } from './Compare';

const Profile = () => {
    const { colors } = colorTheme;

    const cardsCapacities = [
        { label: 'Investimento público em C&T', icon: faSackDollar },
        { label: 'Capital Humano - Graduação', icon: faGraduationCap },
        { label: 'Capital Humano - Pós-Graduação', icon: faGraduationCap },
        { label: 'Inserção de Mestres e Doutores', icon: faGraduationCap },
        { label: 'Instituições', icon: faBuildingColumns },
        { label: 'Infraestrutura', icon: faGear },
        { label: 'Cooperação', icon: faPeopleGroup },
    ];
    const cardsResults = [
        { label: 'Competitividade Global', icon: faGlobe },
        { label: 'Intensidade Tecnológica', icon: faMicrochip },
        { label: 'Propriedade Intelectual', icon: faShieldHalved },
        { label: 'Produção Científica', icon: faBookOpen },
        { label: 'Empreendedorismo', icon: faMoneyBill1Wave },
    ];
    const cardsGeneral = [
        { label: 'Índice FIEC de Inovação', icon: faEarthAmerica, color: colors.MidnightBlue },
        { label: 'Índice de Capacidades', icon: faSliders, color: colors.DodgerBlue  },
        { label: 'Índice de Resultados', icon: faRocket, color: colors.Turquoise  },
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
                <HeaderMenu
                    label="Região"
                    color={colors.White}
                    backgroundColor={colors.DodgerBlue}
                    items={mockEstados}
                />
            </Header>
            <div className="p-4 flex -mt-4 flex-row justify-center">
                <div className="flex-1 m4-5 max-w-xl mx-12">
                    <div className="m4-5">
                        <ValuesCardHeader 
                            color={colors.DodgerBlue} 
                            icon={<FontAwesomeIcon icon={faGraduationCap} size='lg' />}
                            />
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {cardsCapacities.map((card, index) => (
                                <ValuesCard
                                    key={`capacity-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg'/>}
                                    label={card.label}
                                    color={colors.DodgerBlue}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="">
                        <ValuesCardHeader 
                            color={colors.Turquoise} 
                            icon={<FontAwesomeIcon icon={faFileLines} size='lg'/>}
                            />
                        <div className="grid grid-cols-3 gap-4 mt-3">
                            {cardsResults.map((card, index) => (
                                <ValuesCard
                                    key={`result-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} size='lg'/>}
                                    label={card.label}
                                    color={colors.Turquoise}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 rounded-lg max-w-2xl" style={{backgroundColor:colors.White}}>
                    <div className="flex flex-col">
                        <span 
                            className="self-center m-4"
                            style={{
                                fontSize:24,
                                fontWeight:'bold',
                                color: colors.MidnightBlue
                            }}
                        >Alagoas</span>
                        <div className="grid grid-cols-3 gap-4 m4-3">
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
                </div>
            </div>
        </>
    );
};

export default Profile;
