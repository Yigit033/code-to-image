"use client";

// selector yapma durumun olduğu zaman buradan faydalan!!

import { languages } from "@/utils/utilities";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

function LanguageSelector({ language, setLanguage, setActiveIcon }: LanguageSelectorProps) {
  const [showdropdown, setshowdropdown] = useState(false);
  const taggleDropdown = () => setshowdropdown(!showdropdown);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find((lang) => lang.name === newLanguage)?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };
  return (
    <div>
      <p className="py-[5px] text-sm font-medium ">Language</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language}
        <ChevronDown />
      </div>
      {showdropdown && <div>Dropdown</div>}
    </div>
  );
}

export default LanguageSelector;
