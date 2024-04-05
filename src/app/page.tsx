import { RiFilePaper2Fill, RiHandCoinFill, RiLuggageCartFill, RiHandSanitizerFill } from "@remixicon/react"
import Image from "next/image";
import Logo from "../../public/5.png"
import CustomerCard from "@/components/views/dashboard/CustomerCard";
import ShortInformationCard from "@/components/views/dashboard/ShortInformationCard";

export default function Home() {
  const userData = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/embed/avatars/5.png",
      name: "Piku",
      time: "10 saat"
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/embed/avatars/4.png",
      name: "Beş",
      time: "7 saat"
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/embed/avatars/3.png",
      name: "Lulu",
      time: "2 saat"
    },
    {
      id: 4,
      image: "https://cdn.discordapp.com/embed/avatars/2.png",
      name: "Vante",
      time: "1.5 saat"
    }
  ]
  const locationData = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/embed/avatars/5.png",
      name: "Amsterdam",
      weight: "25t"
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/embed/avatars/4.png",
      name: "Frankfurt",
      weight: "20t"
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/embed/avatars/3.png",
      name: "Istanbul",
      weight: "17t"
    },
    {
      id: 4,
      image: "https://cdn.discordapp.com/embed/avatars/2.png",
      name: "Moskova",
      weight: "15t"
    },
    {
      id: 5,
      image: "https://cdn.discordapp.com/embed/avatars/1.png",
      name: "Berlin",
      weight: "14t"
    },
    {
      id: 6,
      image: "https://cdn.discordapp.com/embed/avatars/0.png",
      name: "Plevne",
      weight: "10t"
    },
    {
      id: 7,
      image: "https://cdn.discordapp.com/embed/avatars/0.png",
      name: "Plevne",
      weight: "10t"
    },
    {
      id: 8,
      image: "https://cdn.discordapp.com/embed/avatars/0.png",
      name: "Plevne",
      weight: "10t"
    },
    {
      id: 9,
      image: "https://cdn.discordapp.com/embed/avatars/0.png",
      name: "Plevne",
      weight: "10t"
    },
    {
      id: 10,
      image: "https://cdn.discordapp.com/embed/avatars/0.png",
      name: "Plevne",
      weight: "10t"
    }
  ]
  return (
    <main className="flex flex-col gap-3 mt-4 w-screen">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className="text-3xl md:text-4xl font-bold">Lojistik Kontrol Paneli</h1>
        <h4 className="text-lg md:text-xl font-light">Taşıma kontrol kulesi</h4>
      </div>

      <ShortInformationCard />

      <div className="flex flex-col md:flex-row gap-3 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 md:gap-2 bg-card w-screen h-full md:w-[750px] rounded-md justify-between p-2">
            <h3 className="mb-3 text-xl font-bold text-center">Zaman içindeki performans</h3>
            {userData && userData.slice(0,4).map((x, index) => <CustomerCard image={x.image} name={x.name} time={x.time} key={index} />)}
          </div>
          <div className="flex flex-col gap-2 bg-card h-full w-screen md:w-[750px] rounded-md justify-between p-2">
            <h3 className="mb-2 text-xl font-bold text-center">En iyi müşteriler</h3>
            {userData && userData.slice(0,4).map((x, index) => <CustomerCard image={x.image} name={x.name} key={index} />)}
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex flex-col gap-2 bg-card md:h-full w-screen md:w-[492px] rounded-md justify-between p-2">
            <h3 className="mb-2 text-xl font-bold text-center">Konuma göre hacim (kg)</h3>
            {locationData && locationData.slice(0,10).map((x, index) => <CustomerCard image={x.image} name={x.name} time={x.weight} key={index} className="py-1 text-white" />)}
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-col gap-2 bg-card text-center md:h-full rounded-md w-full justify-between p-2">
            <h3 className="mb-2 text-xl font-bold">OTIF <br /><span className="font-light text-lg">Tam Zamanında</span></h3>
            {locationData && locationData.slice(0,4).map((x, index) => <CustomerCard image={x.image} name={x.name} time={x.weight} key={index} className="py-1 text-white" />)}
          </div>
          <div className="flex flex-col gap-2 bg-card text-center md:h-full rounded-md w-full justify-between p-2">
            <h3 className="mb-2 text-xl font-bold">Operatöre göre OTD</h3>
            {locationData && locationData.slice(0,4).map((x, index) => <CustomerCard image={x.image} name={x.name} time={x.weight} key={index} className="py-1 text-white" />)}
          </div>
        </div>
      </div>
    </main>
  );
}
