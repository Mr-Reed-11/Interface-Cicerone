interface AuxProps
{
  children: string
}

export default function ButtonGreen({children}: AuxProps) {
  return (
    <button className="text-white text-[22px] rounded-lg px-[30px] py-[10px] duration-200 bg-[#19882c] hover:bg-[#23be3d] m-2">
      {children}
    </button>
  );
}
