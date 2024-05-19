import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
  href: Url;
}

export default function ButtonGreen({ children, onClick, href }: ButtonProps) {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <button
          className="text-white text-[22px] rounded-lg px-[30px] py-[10px] duration-200 bg-[#19882c] hover:bg-[#23be3d] max-w-[317px]"
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </div>
  );
}
