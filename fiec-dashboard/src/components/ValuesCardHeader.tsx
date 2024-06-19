import React from 'react';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ValuesCardHeader = ({color, icon}) => {
  const { colors } = colorTheme;
  return (
    <div className="flex my-4 flex-col items-start">

      <div
        className="w-10 h-10 mx-4 z-10 rounded-full -mb-6 flex items-center justify-center"
        style={{ color: colors.White, backgroundColor: color }}
      >
        {icon}
      </div>

      
      <div
        className="w-[36rem] h-6 rounded-lg flex items-center justify-start"
        style={{ color: '#FFFFFF', backgroundColor: color }}
      >
        <span style={{
          fontWeight: 'bold',
          fontSize: 14,
        }}
        className="mx-16"
        >Capacidades</span>
      </div>

    </div>
  );
};

export default ValuesCardHeader;
