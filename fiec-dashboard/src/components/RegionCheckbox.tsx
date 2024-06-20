import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Regiao, regioes } from '../data/estadosDados';
import { colorTheme } from '../theme';

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
            {regioes.length && regioes.map((region) => (
                <div>
                    <Checkbox
                        checked={selectedRegions.some((selectedRegion) => selectedRegion.nome === region.nome)}
                        onChange={() => handleSelect(region)}
                    />
                    <span
                        style={{
                            color: colors.Black
                        }}
                    >{region.nome}</span>
                </div>
            ))}
        </>
    );
}