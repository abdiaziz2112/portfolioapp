import '../dark-mode.css';


import React, { useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const NightModeToggle = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    if (!isNightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center cursor-pointer" onClick={toggleNightMode}>
        {isNightMode ? <IoMdSunny className="w-6 h-6 text-yellow-500" /> : <IoMdMoon className="w-6 h-6 text-gray-700" />}
        <div className="ml-3 text-gray-700 font-medium">
          {/* {isNightMode ? "Disable Night Mode" : "Enable Night Mode"} */}
        </div>
      </div>
    </div>
  );
};

export default NightModeToggle;
