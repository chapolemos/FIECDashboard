import React from 'react';

const HeaderCard = ({ icon, label, color, backgroundColor }) => {
  return (
    <div 
      className="px-4 py-2 w-32 mx-8 h-10 rounded flex items-center justify-center"
      style={{ color: color, backgroundColor: backgroundColor}}
    >
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 mr-2 flex items-center justify-center">
          {icon}
        </div>
        <span style={{ fontWeight: 'bold' }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default HeaderCard;
