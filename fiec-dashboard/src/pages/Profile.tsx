import React from 'react';
import {
    Header,
    HeaderCard,
    HeaderMenu,
    ValuesCard
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { mockEstados } from './Compare';

const Profile = () => {
    const { colors } = colorTheme;

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
            <p>
                Aba de perfil
                <ValuesCard></ValuesCard>
            </p>
        </>
    );
};

export default Profile;
