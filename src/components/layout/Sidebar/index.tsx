import Image from "next/image";
import Logo from "../../../../public/datab_simbolo_branco.svg"
import { RiHome5Line,RiBarChartLine, RiPieChartLine, RiBox3Line } from "@remixicon/react"
export default function Sidebar() {
  return (
    <header className="hidden md:flex flex-col h-[910px] mt-4 items-center bg-card p-2 rounded-md">
      <Image src={Logo} alt="Logo" className="py-2" />
      <div className="flex flex-col gap-y-5 my-5">
        <div className="py-3 px-3 rounded-md hover:bg-[#763CF1]">
          <RiHome5Line
            size={30}
            className="" />
        </div>
        <div className="py-2 px-3 rounded-md hover:bg-[#763CF1]">
          <RiBarChartLine
            size={30}
            className="" />
        </div>
        <div className="py-2 px-3 rounded-md hover:bg-[#763CF1]">
          <RiPieChartLine
            size={30}
            className="" />
        </div>
        <div className="py-2 px-3 rounded-md hover:bg-[#763CF1]">
          <RiBox3Line
            size={30}
            className="" />
        </div>
      </div>
    </header>
  );
}
