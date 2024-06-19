import React from 'react';
import {
    Header,
    HeaderCard,
    HeaderMenu,
    CardValores
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { mockEstados } from './Compare';

const Perfil = () => {
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
                    label="Região"
                    color={colors.text}
                    backgroundColor={colors.topButton}
                    items={mockEstados}
                />


            </Header>
            <p>
                Aba de perfil
                <CardValores></CardValores>
            </p>
        </>
    );
};

export default Perfil;
