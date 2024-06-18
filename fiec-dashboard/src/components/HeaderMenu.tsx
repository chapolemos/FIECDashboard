import React, { useState } from 'react';

const HeaderMenu = ({ label, color, backgroundColor }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div 
      className="flex justify-center"
    >
      <button 
        onClick={toggleDropdown}
        className="px-4 py-2 w-auto mx-8 min-w-64 h-10 rounded-full flex items-center justify-center focus:outline-none"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <span>
          {label}
        </span>
      </button>

      {dropdownOpen && (
        <div 
          className="absolute bg-white min-w-64 shadow-md rounded-lg mt-12 py-2 px-4"
          style={{ color: '#000000', backgroundColor: '#FFFFFF' }}
        >
          <p>Opção 1</p>
          <p>Opção 2</p>
          <p>Opção 3</p>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
