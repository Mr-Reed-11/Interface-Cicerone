import { Cog8ToothIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className=" bg-white w-screen grid grid-cols-3 py-4 px-10 drop-shadow fixed z-10">
      <div className="justify-self-start content-center col-span-2 sm:col-span-1">
        <img src="images/logo-cicerone.png" className="w-[170px] sm:w-[200px] lg:w-[250px]"></img>
      </div>
      <div className="justify-self-center content-center text-center hidden sm:visibility: visible sm:block">
        <p className="text-black font-roboto text-2xl ">Sistema de Guia Autônomo</p>
      </div>
      <div className="justify-self-end content-center ">
        <Cog8ToothIcon className=" size-12 sm:size-14 text-black transition-all hover:text-green-500 hover:rotate-90 duration-500"/>
      </div>
    </div>
  );
}