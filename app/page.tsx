'use client'

import Header from "@/components/header";
import { useState } from "react";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";
import ChatBot from "@/components/chat-bot";

export default function HomePage() {

  let text = "Olá, sou seu guia da instituição, como posso ajudar?";

  const doubts = () => {
  }

  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <ChatBot chatText={text}/>
            <div className="grid grid-cols-3 w-[1000px]">
              <ButtonGreen onClick={() => ""} href="/mapa">   
                Preciso que me guie ate um local.
              </ButtonGreen>
              <ButtonGreen onClick={() => ""} href="https://api.whatsapp.com/send/?phone=5563985154774&text=Ol%C3%A1%2C+gostaria+de+tirar+uma+duvida+com+rela%C3%A7%C3%A3o+ao+sistema+de+guia.&type=phone_number&app_absent=0">
                Gostaria de conversar com um servidor.
              </ButtonGreen>
              <ButtonGreen onClick={() => ""} href="/duvidas">
                Gostaria de tirar uma duvida.
              </ButtonGreen>
            </div>
          </div>
        </Body>
      </div>
    </main>
  );
}
