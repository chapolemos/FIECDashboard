import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu = ({ label, color, backgroundColor, items, onRegionSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onRegionSelect(item);
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

  //Adicionei esse hook como band-aid porque tava sendo de-selecionado e não consegui debugar por que.
  useEffect(() => {
    setSelectedItem(items.find(item => item.nome === selectedItem?.nome));
  }, [items, selectedItem]);

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
          {items.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center bg-gray-100">
                <input
                  type="radio"
                  id={`item-${index}`}
                  name="menuItem"
                  className="cursor-pointer"
                  checked={selectedItem === item}
                  onChange={() => handleItemClick(item)}
                />
                <label
                  htmlFor={`item-${index}`}
                  className={`flex items-center cursor-pointer ${selectedItem === item ? 'text-black' : 'text-gray-400'}`}
                  onClick={() => handleItemClick(item)}
                >
                  <span className="px-4">{item.nome}</span>
                </label>
              </div>
              {/* Subitens omitidos para brevidade */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
