'use client'

import Header from "@/components/header";
import { useState } from "react";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";
import ChatBot from "@/components/chat-bot";

export default function AboutPage() {

  let text = "Claro, qual seria a sua duvida?";

  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <ChatBot chatText={text} style2={false}/>
            <div className="grid grid-cols-2 w-[1000px] justify-items-center">
              <ButtonGreen onClick={() => ""} href="">   
                Poderia me ajudar a usar o sistema?
              </ButtonGreen>
              <ButtonGreen onClick={() => ""} href="/sobre">   
                Me fale um pouco sobre você.
              </ButtonGreen>
            </div>
          </div>
        </Body>
      </div>
    </main>
  );
}
