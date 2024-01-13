"use client";

import BackgroundSelector from "@/component/BackgroundSelector";
import CodeEditor from "@/component/CodeEditor";
import LanguageSelector from "@/component/LanguageSelector";
import ThemeSelector from "@/component/ThemeSelector";
import { backgrounds, languages, themes } from "@/utils/utilities";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [activeIcon, setactiveIcon] = useState(languages[0].icon);
  const [background, setBackground] = useState(backgrounds[0]);
  return (
    <main className=" h-[100vh] flex flex-col items-center justify-between">
      <header
        className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
        z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector language={language} setLanguage={setLanguage} setActiveIcon={setactiveIcon} />
        <ThemeSelector setTheme={setTheme} theme={theme} />
        <BackgroundSelector setBackground={setBackground} background={background} />
        {/* buralarda bu şekilde proppsları kendilerine eşitlemeyi yanlızca yuklarıda onları fonksiyon olarak tekrar çağırarak tanımlayabiliriz */}
      </header>
      <div className="cod-editor-ref mt-[14rem]">
        <CodeEditor language={language} icon={activeIcon} theme={theme} background={background}  />
      </div>
    </main>
  );
}
