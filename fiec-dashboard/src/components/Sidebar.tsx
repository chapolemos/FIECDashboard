import React from 'react';
import { colorTheme } from '../theme';

const Sidebar = () => {
  const { colors } = colorTheme;

  return (
    <div style={{ backgroundColor: colors.sidebar }} className="w-48 h-screen">
      <p style={{ color: colors.text }} className="text-center pt-4">Sidebar</p>
    </div>
  );
};

export default Sidebar;
