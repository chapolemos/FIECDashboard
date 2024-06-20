import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, Radio } from '@mui/material';
import { Estado, Regiao } from '../data/estadosDados';
import StateRadio from './StateRadio';

const StatesMenu = ({ label, color, backgroundColor, items, selectedStates, setSelectedStates }) => {
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

      { dropdownOpen ? (
        <div
          ref={dropdownRef}
          className="absolute bg-white min-w-64 shadow-md max-h-64 rounded-lg mt-12 py-2 px-4 z-20 overflow-y-auto"
        >
          { items?.map((regiao: Regiao) => (
            <>
              <label
                className="flex flex-row items-center max-h-6 rounded my-2 cursor-pointer"
                style={{
                  backgroundColor: backgroundColor
                }}
              >
                <Radio
                  checked={ regiao.nome === selectedStates.nome }
                  onChange={()=> setSelectedStates(regiao)}
                />
                <span
                  style={{ color: color }}
                >
                  {regiao.nome}
                </span>
              </label>
              <StateRadio
                selectedState={selectedStates}
                setSelectedState={setSelectedStates}
                regiao={regiao}
              />
            </>
          ))} 
        </div>
      )

        : <></>
      }
    </div>
  );
};

export default StatesMenu;
