"use client";

// selector yapma durumun olduğu zaman buradan faydalan!!

import { languages } from "@/constants";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

function LanguageSelector({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) {
  const [showdropdown, setshowdropdown] = useState(false);
  const toggleDropdown = () => setshowdropdown(!showdropdown);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find((language) => language.name === newLanguage)?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium ">Language</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language}
        <ChevronDown />
      </div>
      {showdropdown && (
        <div className="dropdown-menu w-[120px] top-[94px] ">
          {languages.map((language, i) => {
            return (
              <div key={i}>
                <button
                  className="dropdown-item text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                  onClick={() => handleLanguageChange(language.name)}
                >
                  {language.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
