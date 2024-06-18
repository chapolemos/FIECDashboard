import React from 'react';
import {
    Header,
    HeaderCard,
    HeaderMenu
} from '../components';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const Compare = () => {
    const { colors } = colorTheme;
    return (
        <div>
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
                />
                <HeaderMenu
                    label="Selecione a segunda região"
                    color={colors.text}
                    backgroundColor={colors.topButton2}
                />

            </Header>
            <p>
                Aba de perfil
            </p>
        </div>
    );

}



export default Compare;
