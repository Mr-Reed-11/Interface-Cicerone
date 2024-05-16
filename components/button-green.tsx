import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface AuxProps {
  children: string;
  onClick: () => void;
  href: Url
}

export default function ButtonGreen({ children, onClick, href }: AuxProps) {
  return (
  <Link href={href}>
      <button
        className="text-white text-[22px] rounded-lg px-[30px] py-[10px] duration-200 bg-[#19882c] hover:bg-[#23be3d] m-2 max-w-[317px]"
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
