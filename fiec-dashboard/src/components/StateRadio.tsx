import * as React from 'react';
import { Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Estado, Regiao, regioes } from '../data/estadosDados';
import { useCallback } from 'react';
import { colorTheme } from '../theme';

interface StateRadioInterface {
  selectedState: Estado | Regiao;
  setSelectedState: (states: Estado | Regiao) => void;
  regiao: Regiao
}

export default function StateRadio({selectedState, setSelectedState, regiao}: StateRadioInterface) {
  const { colors } = colorTheme;
  
  const checkState = useCallback((estadoClicado: Estado) => {
    return setSelectedState(estadoClicado);
  }, [selectedState, setSelectedState]);
  
  return (
    <>
      { regiao?.estados &&
        regiao.estados.map((estado) => (
          <label key={estado.nome} className="flex flex-row items-center max-h-4 rounded my-1 mx-1 cursor-pointer">
            <Radio
              checked={ estado.nome === selectedState.nome || regiao.nome === selectedState.nome }
              onChange={() => checkState(estado)}
            />
            <span style={{ fontSize: '1rem', color: colors.Black }}>
              { estado.nome }
            </span>
          </label>
        ))
      }
    </>
  );
}