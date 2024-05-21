"use client";

import Header from "@/components/header";
import { useState } from "react";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";
import ChatBot from "@/components/chat-bot";

export default function AboutPage() {
  let text ="Claro, meu nome é Cicerone, sou o robô responsável por guiar as pessoas aqui dentro da instituição. Meu propósito é facilitar a navegação e fornecer informações úteis aos visitantes.";

  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <ChatBot chatText={text} style2={false} />
            <div className="grid grid-cols-1 w-[1000px] justify-items-center">
              <ButtonGreen onClick={() => ""} href="/">
                Voltar
              </ButtonGreen>
            </div>
          </div>
        </Body>
      </div>
    </main>
  );
}
