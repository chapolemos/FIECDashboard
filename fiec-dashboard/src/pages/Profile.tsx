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
import { faFileLines, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importe apenas os ícones necessários
import { mockEstados } from './Compare';

const Profile = () => {
    const { colors } = colorTheme;

    const cardsCapacities = [
        { label: 'Investimento público em C&T', icon: faFileLines },
        { label: 'Capital Humano - Graduação', icon: faFileLines },
        { label: 'Capital Humano - Pós-Graduação', icon: faFileLines },
        { label: 'Inserção de Mestres e Doutores', icon: faFileLines },
        { label: 'Instituições', icon: faFileLines },
        { label: 'Infraestrutura', icon: faFileLines },
        { label: 'Cooperação', icon: faFileLines },
    ];
    const cardsResults = [
        { label: 'Competitividade Global', icon: faEnvelope },
        { label: 'Intensidade Tecnológica', icon: faEnvelope },
        { label: 'Propriedade Intelectual', icon: faEnvelope },
        { label: 'Produção Científica', icon: faEnvelope },
        { label: 'Empreendedorismo', icon: faEnvelope },
    ];
    const cardsGeneral = [
        { label: 'Índice FIEC de Inovação', icon: faEnvelope, color: colors.MidnightBlue },
        { label: 'Índice de Capacidades', icon: faEnvelope, color: colors.DodgerBlue  },
        { label: 'Índice de Resultados', icon: faEnvelope, color: colors.Turquoise  },
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
            <div className="p-4 flex flex-row justify-center">
                <div className="flex-1 m4-5 max-w-xl mx-12">
                    <div className="m4-5">
                        <ValuesCardHeader color={colors.DodgerBlue} />
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {cardsCapacities.map((card, index) => (
                                <ValuesCard
                                    key={`capacity-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} />}
                                    label={card.label}
                                    color={colors.DodgerBlue}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <ValuesCardHeader color={colors.Turquoise} />
                        <div className="grid grid-cols-3 gap-4 mt-3">
                            {cardsResults.map((card, index) => (
                                <ValuesCard
                                    key={`result-${index}`}
                                    icon={<FontAwesomeIcon icon={card.icon} />}
                                    label={card.label}
                                    color={colors.Turquoise}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 rounded-lg max-w-2xl" style={{backgroundColor:colors.White}}>
                    <div className="flex flex-col mb-4">
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
                                    icon={<FontAwesomeIcon icon={card.icon} />}
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
