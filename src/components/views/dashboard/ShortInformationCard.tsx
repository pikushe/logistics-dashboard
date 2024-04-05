import { RiFilePaper2Fill, RiHandCoinFill, RiLuggageCartFill, RiHandSanitizerFill } from "@remixicon/react"

export default function ShortInformationCard() {
    return (
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:gap-8 w-full text-center">
            <div className="flex flex-col bg-[#481E9F] rounded-md px-4 py-4 w-full md:w-[290px] h-[150px]">
                <div className="flex md:flex-row md:justify-between text-center items-center">
                    <div className="flex text-center md:text-start">
                        <h2 className="text-lg md:text-2xl font-bold">Düzenlenen<br /><span className="text-sm md:text-xl font-light">Faturalar</span></h2>
                    </div>
                    <div className="hidden md:flex">
                        <RiFilePaper2Fill
                            size={30}
                            className="" />
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center">
                    <span className="text-xl font-medium hover:text-[#1DBCF6] px-4 py-2 rounded-sm animate-pulse">6</span>
                </div>
            </div>
            <div className="flex flex-col bg-[#481E9F] rounded-md px-4 py-4 w-full md:w-[290px] h-[150px]">
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Faturalama<br /><span className="text-xl font-light">Total (₺)</span></h2>
                    </div>
                    <div className="hidden md:flex">
                        <RiHandCoinFill
                            size={30}
                            className="" />
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center ">
                    <span className="text-xl font-medium hover:text-[#1DBCF6] px-4 py-2 rounded-sm animate-pulse">2.000₺</span>
                </div>
            </div>
            <div className="flex flex-col bg-[#481E9F] rounded-md px-4 py-4 w-full md:w-[290px] h-[150px]">
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Sevk Edilen<br /><span className="text-xl font-light">Birimler</span></h2>
                    </div>
                    <div className="hidden md:flex">
                        <RiLuggageCartFill
                            size={30}
                            className="" />
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center ">
                    <span className="text-xl font-medium hover:text-[#1DBCF6] px-4 py-2 rounded-sm animate-pulse">25</span>
                </div>
            </div>
            <div className="flex flex-col bg-[#481E9F] rounded-md px-4 py-4 w-full md:w-[290px] h-[150px]">
                <div className="flex flex-row justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Brüt Ağırlık<br /><span className="text-xl font-light">Kg</span></h2>
                    </div>
                    <div className="hidden md:flex">
                        <RiHandSanitizerFill
                            size={30}
                            className="" />
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center ">
                    <span className="text-xl font-medium hover:text-[#1DBCF6] px-4 py-2 rounded-sm animate-pulse">1.000Kg</span>
                </div>
            </div>
        </div>
    )
}