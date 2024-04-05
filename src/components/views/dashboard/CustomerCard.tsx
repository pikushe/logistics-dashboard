import { cn } from "@/lib/utils";

interface Props {
    image: string;
    name: string;
    time?: string;
    className?: any
}

export default function CustomerCard(props: Props) {
    return (
        <div className={cn("flex flex-row gap-4 mx-4 px-2 py-1.5 bg-[#1A1D32] rounded-md items-center text-[#2FE5A7] justify-center", props.className)}>
            <div>
                <img src={props.image} alt="Avatar" width={50} height={50} className="rounded-full" />
            </div>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <h1 className="text-lg text-white">{props.name}</h1>
                </div>
                <div>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}