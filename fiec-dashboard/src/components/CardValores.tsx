import React from 'react';
import { colorTheme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const CardValores = () => {
  const { colors } = colorTheme;
  return (
    <div className="flex flex-col items-center">

      <div
        className="w-10 h-9 mx-8 z-10 rounded-full -mb-4 flex items-center justify-center"
        style={{ color: colors.sidebar, backgroundColor: colors.oval }}
      >
        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
      </div>

      <div
        className="py-2 w-40 h-24 mx-4 rounded flex items-center justify-between"
        style={{ color: colors.sidebar, backgroundColor: '#FFFFFF' }}
      >
        <div 
          className="rounded h-12 w-16 ml-3 mr-1.5 flex flex-col items-center justify-center"
          style={{backgroundColor:'#FFFFFF'}}
          >
          <span 
           className=" w-4 h-4 flex items-center justify-center"
           style={{
           fontWeight: 'normal',
           fontSize: 10,
           color:'#000000'
            }}
         >2022</span>
            <span 
           className=" w-4 h-4 flex my-1 items-center justify-center"
           style={{
           fontWeight: 'bold',
           fontSize: 20,
           }}
         >09º</span>
        </div>
        <div 
          className="rounded h-12 w-16 ml-1.5 mr-3 flex flex-col items-center justify-center"
          style={{backgroundColor:colors.backgroundLight}}
          >
          <span 
           className=" w-4 h-4 flex items-center justify-center"
           style={{
           fontWeight: 'normal',
           fontSize: 10,
           color: '#000000'
            }}
         >Valor</span>
            <span 
           className=" w-4 h-4 flex my-1 items-center justify-center"
           style={{
           fontWeight: 'bold',
           fontSize: 20,
           color: colors.inovacao
           }}
         >0,349</span>
        </div>
      </div>
      <div
        className="w-40 h-6 -mt-4 mx-8 rounded-lg flex items-center justify-center"
        style={{ color: '#FFFFFF', backgroundColor: colors.topButton }}
      >
        <span style={{
          fontWeight: 'bold',
          fontSize: 10,
        }}>Capital Humano - Pós-Graduação</span>
      </div>

    </div>
  );
};

export default CardValores;
