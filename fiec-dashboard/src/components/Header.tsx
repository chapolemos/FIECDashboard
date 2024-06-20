import React from 'react';

/*
Header simples para conter o card da página e os botões de dropdown menu.
*/

const Header = ({ children }) => {
    return (
        <div 
            className="flex flex-row items-center justify-start h-28 m-0 px-8 bg-white w-full shadow-md mb-4">
            {children}
        </div>
    );
};

export default Header;
