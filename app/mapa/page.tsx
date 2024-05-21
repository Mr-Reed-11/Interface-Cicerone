"use client";

import Header from "@/components/header";
import { useState } from "react";
import Body from "@/components/body";
import ButtonGreen from "@/components/button-green";
import ChatBot from "@/components/chat-bot";

export default function AboutPage() {
  const [system, setSystem] = useState(false);
  const [cafeteria, setCafeteira] = useState(false);
  const [lib, setLib] = useState(false);
  const [aud, setAud] = useState(false);
  const [gin, setGin] = useState(false);
  const [finish, setFinish] = useState(false);

  function Cafeteria() {
    setCafeteira(true);
    setSystem(true);
    setTimeout(() => setCafeteira(false), 4999);
    setTimeout(() => setFinish(true), 5000);
    setTimeout(() => (window.location.href = "/"), 20000);
    setTimeout(() => setFinish(false), 20500);
  }

  function Auditory() {
    setAud(true);
    setSystem(true);
    setTimeout(() => setAud(false), 4999);
    setTimeout(() => setFinish(true), 5000);
    setTimeout(() => (window.location.href = "/"), 20000);
    setTimeout(() => setFinish(false), 20500);
  }

  function Library() {
    setLib(true);
    setSystem(true);
    setTimeout(() => setLib(false), 4999);
    setTimeout(() => setFinish(true), 5000);
    setTimeout(() => (window.location.href = "/"), 20000);
    setTimeout(() => setFinish(false), 20500);
  }

  function Gym() {
    setGin(true);
    setSystem(true);
    setTimeout(() => setGin(false), 4999);
    setTimeout(() => setFinish(true), 5000);
    setTimeout(() => (window.location.href = "/"), 20000);
    setTimeout(() => setFinish(false), 20500);
  }

  return (
    <main>
      <div>
        <Header></Header>
      </div>
      <div>
        <Body>
          <div className="grid items-center justify-center">
            <div className="grid justify-items-center justify-center">
              {cafeteria ? (
                <>
                  <div className="mt-[100px] z-10">
                    <ChatBot chatText="Ok, por favor me siga." style2></ChatBot>
                  </div>
                  <div>
                    <video className="h-auto w-[1200px]" autoPlay>
                      <source src="videos/ifto-map-cafe.mp4"></source>
                    </video>
                  </div>
                </>
              ) : lib ? (
                <>
                  <div className="mt-[100px] z-10">
                    <ChatBot chatText="Ok, por favor me siga." style2></ChatBot>
                  </div>
                  <div>
                    <video className="h-auto w-[1200px]" autoPlay>
                      <source src="videos/ifto-map-lib.mp4"></source>
                    </video>
                  </div>
                </>
              ) : gin ? (
                <>
                  <div className="mt-[100px] z-10">
                    <ChatBot chatText="Ok, por favor me siga." style2></ChatBot>
                  </div>
                  <div>
                    <video className="h-auto w-[1200px]" autoPlay>
                      <source src="videos/ifto-map-gin.mp4"></source>
                    </video>
                  </div>
                </>
              ) : aud ? (
                <>
                  <div className="mt-[100px] z-10">
                    <ChatBot chatText="Ok, por favor me siga." style2></ChatBot>
                  </div>
                  <div>
                    <video className="h-auto w-[1200px]" autoPlay>
                      <source src="videos/ifto-map-aud.mp4"></source>
                    </video>
                  </div>
                </>
              ) : finish ? (
                <div className="flex flex-col items-center justify-center min-h-screen">
                  <ChatBot
                    chatText="Chegamos ao destino, obrigado por usar o sistema de Guia Autônomo da Instituição, caso precise de algum outro guia, estarei disponível na minha estação."
                    style2={false}
                  ></ChatBot>
                </div>
              ) : (
                <></>
              )}
            </div>
            {!system ? (
              <>
                <div className="mt-[100px] z-10">
                  <ChatBot
                    chatText="Selecione o local a qual pretende ir."
                    style2
                  ></ChatBot>
                </div>
                <img src="images/ifto-map.jpg" className="h-auto w-[1200px]" />
                <div className="grid grid-cols-4">
                  <ButtonGreen href="" onClick={Gym}>Ginásio</ButtonGreen>
                  <ButtonGreen href="" onClick={Library}>
                    Biblioteca
                  </ButtonGreen>
                  <ButtonGreen href="" onClick={Auditory}>
                    Auditório
                  </ButtonGreen>
                  <ButtonGreen href="" onClick={Cafeteria}>
                    Lanchonete
                  </ButtonGreen>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Body>
      </div>
    </main>
  );
}
