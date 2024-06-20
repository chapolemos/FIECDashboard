import React from 'react';
import { indexes, Index } from '../data/estadosDados';
import { Radio } from '@mui/material';
import { colorTheme } from '../theme';

interface IndexesRadioProps {
    selectedIndex: Index;
    setSelectedIndex: (index: Index) => void;
}

export const IndexesRadio = ({ selectedIndex, setSelectedIndex }: IndexesRadioProps) => {
    const { colors } = colorTheme;
    return (
        <>
            {indexes.map((index) => {
                return (<div className='flex flex-row items-center'>
                    <label className="flex flex-row items-center max-h-6 w-full bg-gray-200 my-2 cursor-pointer">
                        <Radio checked={selectedIndex.value === index.value} onChange={() => setSelectedIndex(index)} />
                        <span
                            style={{
                                color: colors.Black
                            }}
                        >{index.label}</span>
                    </label>
                </div>)
            })}
        </>
    );
}