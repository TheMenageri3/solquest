import Image from "next/image"

export default function Logo(){
    return(
        <div className="flex gap-3 items-center">
            <Image src={"/assets/solquest.svg"} alt="logo" height={50} width={50} />

            <h1 className="text-4xl font-bold">SolQuest</h1>
        </div>
    )
}