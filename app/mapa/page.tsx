"use client";

import Header from "@/components/header";
import { useState } from "react";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";
import ChatBot from "@/components/chat-bot";

export default function AboutPage() {

  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="grid items-center justify-center">
            <div className="mt-[100px] z-10">
              <ChatBot
                chatText="Selecione o local a qual pretende ir."
                style2
              ></ChatBot>
            </div>
            <div className="grid justify-items-center justify-center">
              <img src="svgs/mapa-ifto.svg" className="h-auto w-[850px]" />
            </div>
            <div className="grid grid-cols-4">
              <ButtonGreen href="">Ginásio</ButtonGreen>
              <ButtonGreen href="">Biblioteca</ButtonGreen>
              <ButtonGreen href="">Auditório</ButtonGreen>
              <ButtonGreen href="">Lanchonete</ButtonGreen>
            </div>
          </div>
        </Body>
      </div>
    </main>
  );
}
