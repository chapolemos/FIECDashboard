import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { RegionCheckbox } from './RegionCheckbox';

/*
Menu drop-down de caixas de seleção usado para escolher as regiões a exibirem dados na página de Ranking.
*/

const RegionMenu = ({ label, color, backgroundColor, items, selectedRegions, setSelectedRegions }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center px-4 py-2 w-auto mx-8 min-w-64 h-10 rounded-full focus:outline-none"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <span className="mr-2">{label}</span>
        <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} />
      </button>

      {dropdownOpen && items && items.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute bg-white min-w-64 shadow-md rounded-lg mt-12 py-2 px-4 z-20"
        >
          <RegionCheckbox selectedRegions={selectedRegions} setSelectedRegions={setSelectedRegions}></RegionCheckbox>
        </div>
      )}
    </div>
  );
};

export default RegionMenu;
