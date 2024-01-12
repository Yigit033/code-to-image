"use client";

import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";

interface CodeEdıtorProps {
  onCodeChange: (code: string) => void;
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding: string;
}

function CodeEditor({ onCodeChange, language, theme, icon, background, currentPadding }: CodeEdıtorProps) {
  const [width, setWidth] = useState(1000);
  const [height, setheight] = useState<number | null>(500);
  const [title, setTitle] = React.useState("App");
  const [extension, setExtension] = useState(".js");

  // @ts-ignore
  const HandleResize = (evt, direction, ref, pos) => {
    const newWidth = ref.style.width;
    setWidth(parseInt(newWidth)); // stringi sayıya dösnüştürür parseInt ile
  };

  // evt => yönlendirme,ref => referans,pos=>position parametreleridir.
  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the title without the extension
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

  return (
    <Resizable
      minHeight={466}
      minWidth={1000}
      maxWidth={1000}
      defaultSize={{ width: width, height: height || 500 }}
      onResize={HandleResize}
      className="resize-container relative"
      style={{
        background: "red"
      }}
    >
      <div
        className="code-block"
        style={{    
          padding: currentPadding
        }}
      >
        <div className="rounded-tl-2xl rounded-tr-2xl border-t-2 border-r-2 border-l-2 border-b-0 border-gray-100 bg-white-100 shadow-md h-[52px] px-4 justify-between items-center bg-black bg-opacity-80 ">
          {/* yukarıdaki  divin yarısı css ile yazılmıştı, tailwinde çevirdim */}
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>
          <div className="input-contol w-full ">
            <input
              type="text"
              value={`${title}${extension}`}
              onChange={(e) => handleTitleChange(e)}
              className="w-full text-[hsla(0,0%,100%,.6)]  outline-none font-medium 
                text-center bg-transparent"
              style={{
                lineHeight: "1.8rem"
              }}
            />
          </div>
          <div
            className="icon flex justify-center items-center p-1 bg-black
               bg-opacity-30 rounded-sm"
          >
            <img src={icon} className="w-[33px]" alt="" />
          </div>
        </div>
        <AceEditor
          value="function() {return 'Hello World'}"
          name="UNIQUE_ID_OF_DIV"
          fontSize={16}
          theme="monokai"
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-edıtor-container"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;

// Size ile oynama yapmak istediğin bir uygulamada bu bu dosyadan bir sürü şey alabirlirsin.
