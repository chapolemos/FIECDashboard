import React from 'react';
import { Header, HeaderCard, HeaderMenu } from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

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

const Compare = () => {
    const { colors } = colorTheme;

    

    return (
        <>
            <Header>
                <HeaderCard
                    icon={<FontAwesomeIcon icon={faFileLines} />}
                    label="Perfil"
                    color={colors.sidebar}
                    backgroundColor={colors.backgroundLight}
                />
                <HeaderMenu
                    label="Selecione a primeira região"
                    color={colors.text}
                    backgroundColor={colors.topButton}
                    items={mockEstados}
                />
                <HeaderMenu
                    label="Selecione a segunda região"
                    color={colors.text}
                    backgroundColor={colors.topButton2}
                    items={mockEstados}
                />
            </Header>
            <p>Aba de compare</p>
        </>
    );
};

export default Compare;
