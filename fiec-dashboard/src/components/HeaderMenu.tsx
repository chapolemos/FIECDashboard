import React from 'react';

const HeaderMenu = ({ label, color, backgroundColor }) => {
  return (
    <div 
      className="px-4 py-2 w-auto mx-8 min-w-64 h-10 rounded-full flex items-center justify-center"
      style={{ color: color, backgroundColor: backgroundColor}}
    >
      <div className="flex items-center justify-center">
        <span>
          {label}
        </span>
      </div>
    </div>
  );
};

export default HeaderMenu;
