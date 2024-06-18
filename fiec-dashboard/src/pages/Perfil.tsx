import React from 'react';
import {
    Header,
    HeaderCard,
    HeaderMenu
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
                    items={mockEstados}
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
            </p>
        </>
    );
};

export default Perfil;
