import { ReactElement } from "react";

interface BodyProps
{
  children: ReactElement
}

export default function Body({children}: BodyProps) {
  return (
    <main className=" bg-white w-screen h-screen">
      <img src="svgs/path120.svg" className="fixed top-[80px] left-8 size-40" />
      <img
        src="svgs/path446.svg"
        className="fixed bottom-[-10px] right-5 size-40"
      />
      <div>
        {children}
      </div>
    </main>
  );
}
