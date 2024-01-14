"use client";

import { themes } from "@/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function ThemeSelector({ setTheme, theme }: ThemeSelectorProps) {
  const [showdropdown, setshowdropdown] = useState(false);
  const toggleDropdown = () => setshowdropdown(!showdropdown);

  const handleThemeChange = (newtheme: string) => {
    setTheme(newtheme);
    // console.log(newtheme);
  };

  return (
    <div className="theme-selector" onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Code Colors</p>
      <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
        {theme} <ChevronDown />
      </div>
      {showdropdown && (
        <div className="dropdown-menu relative top-[94px] w-[120px]">
          {themes.map((theme, i) => {
            return (
              <button
                key={i}
                onClick={() => handleThemeChange(theme)}
                className=" capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
              >
                {theme}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
