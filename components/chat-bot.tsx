"use client";

import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";


interface ChatBotProps{
  chatText: string;
}

export default function ChatBot(props: ChatBotProps) {

  const {chatText} = props

  const [expresion, setExpresion] = useState("robot.png");
  const [chat, setChat] = useState(chatText)

  let face = expresion;
  let [text] = useTypewriter({
    words: [chat],
    onType() {
      setExpresion("robot-talking.gif");
    },
    onLoopDone() {
      setExpresion("robot.png");

    },
  });


  return (
    <div className="App">
      <div className="grid content-center justify-items-center p-[25px]">
        <img
          className="object-cover w-[300px] pixelated mb-[50px]"
          src={`images/${face}`}
        />
        <div className="border-black border-[1px] drop-shadow w-[1000px] h-[200px]">
          <span className="text-black text-[34px]">
            {text}
            <Cursor cursorStyle="_"></Cursor>
          </span>
        </div>
      </div>
    </div>
  );
}
