import React from 'react';
import { colorTheme } from '../theme';
import { rankings } from '../data/estadosDados';

/*
Cards que contém os valores dos índices, exibidos nas páginas de Perfil e Compare.
*/

const ValuesCard = ({icon, label, color, index, value, selectedRegion}) => {
  console.log(selectedRegion.nome, index)
  const { colors } = colorTheme;
  return (
    <div className="flex flex-col items-center ">

      <div
        className="w-10 h-9 mx-8 z-10 rounded-full -mb-4 flex items-center justify-center"
        style={{ color: colors.DarkSlateBlue, backgroundColor: colors.LightGray }}
      >
        {icon}
      </div>

      <div
        className="py-2 2xl:w-40 md:w-32 h-24 mx-4 rounded flex items-center justify-between shadow-md"
        style={{ color: colors.DarkSlateBlue, backgroundColor: colors.White }}
      >
        <div 
          className="rounded h-12 w-16 ml-3 mr-1.5 flex flex-col items-center justify-center"
          style={{backgroundColor:colors.White}}
          >
          <span 
           className=" w-4 h-4 flex items-center justify-center"
           style={{
           fontWeight: 'normal',
           fontSize: 10,
           color: colors.Black
            }}
         >2022</span>
            <span 
           className=" w-4 h-4 flex my-1 items-center 2xl:text-xl md:text-base justify-center"
           style={{
           fontWeight: 'bold',
           }}
         >{rankings.getRanking(selectedRegion.nome,index)}º</span>
        </div>
        <div 
          className="rounded h-12 w-16 ml-1.5 mr-3 flex flex-col items-center justify-center"
          style={{backgroundColor:colors.AliceBlue}}
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
           className=" w-4 h-4 flex my-1 items-center 2xl:text-xl md:text-base justify-center"
           style={{
           fontWeight: 'bold',
           color: colors.MidnightBlue
           }}
         >{ value }</span>
        </div>
      </div>
      <div
        className="2xl:w-[12rem] 2xl:font-bold md:w-40 2xl:text-[12px] md:text-[10px] h-6 -mt-4 mx-8 rounded-lg flex items-center justify-center shadow-md"
        style={{ color: colors.White, backgroundColor: color }}
      >
        <span>{label}</span>
      </div>

    </div>
  );
};

export default ValuesCard;
