import React, { useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Regiao, regioes } from '../data/estadosDados';
import { colorTheme } from '../theme';

/*
Componente de Checkbox baseado no material-UI para construir o RegionMenu.
*/

interface RegionCheckboxInterface {
    selectedRegions: Regiao[];
    setSelectedRegions: (regions: Regiao[]) => void;
}

export function RegionCheckbox({ selectedRegions, setSelectedRegions }: RegionCheckboxInterface) {
    const { colors } = colorTheme;

    const handleSelect = useCallback((regiaoClicada: Regiao) => {
        if (selectedRegions.some((regiao) => regiao.nome === regiaoClicada.nome)) {
            return setSelectedRegions(selectedRegions.filter((selectedRegion) => selectedRegion.nome !== regiaoClicada.nome));
        }
        return setSelectedRegions([...selectedRegions, regiaoClicada]);
    }, [selectedRegions, setSelectedRegions]);

    return (
        <>
            {regioes.length && regioes.map((region) => {
                return (
                    <label key={region.nome} className="flex flex-row items-center max-h-6 bg-gray-200 my-2 cursor-pointer">
                        <Checkbox
                        checked={selectedRegions.some((selectedRegion) => selectedRegion.nome === region.nome)}
                            onChange={() => handleSelect(region)}
                        />
                        <span
                            style={{
                                color: colors.Black
                            }}
                        >
                            {region.nome}
                        </span>
                    </label>
                );
            })}
        </>
    );
}
