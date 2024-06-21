import React from 'react';
import { colorTheme } from '../theme';


/*
Header que contém cada seção de cards de valor na página de Perfil.
*/

const ValuesCardHeader = ({color, icon, label}) => {
  const { colors } = colorTheme;
  return (
    <div className="flex mt-4 flex-col items-start">

      <div
        className="w-10 h-10 mx-4 z-10 rounded-full -mb-6 flex items-center justify-center"
        style={{ color: colors.White, backgroundColor: color }}
      >
        {icon}
      </div>

      
      <div
        className="2xl:w-[36rem] md:w-[32rem] h-6 rounded-lg flex items-center justify-start shadow-md"
        style={{ color: colors.White, backgroundColor: color }}
      >
        <span style={{
          fontWeight: 'bold',
          fontSize: 14,
        }}
        className="mx-16"
        >{label}</span>
      </div>

    </div>
  );
};

export default ValuesCardHeader;
