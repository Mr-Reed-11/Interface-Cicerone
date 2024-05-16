"use client";

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
            <img
              src="svgs/mapa-ifto.svg"
              className="size-[900px]"
            />
          </div>
        </Body>
      </div>
    </main>
  );
}
