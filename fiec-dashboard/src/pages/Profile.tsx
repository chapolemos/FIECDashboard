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
import { faFileLines, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
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
            <div className="p-5">
                <ValuesCardHeader />
                <div className="grid grid-cols-3 gap-4 mt-5">
                        <ValuesCard icon={<FontAwesomeIcon icon={faGraduationCap} />}></ValuesCard>
                   
               
                </div>
            </div>
        </>
    );
};

export default Profile;
