import Image from "next/image"

export const Listing:React.FC<{src?: string, title:string, publisher:string, pay:number}> = ({src, title, publisher, pay}) => {
    return(
        <article className="my-4 p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-slate-800">
            <Image src={src??"/assets/solquest.svg"} alt="Publisher" width={45} height={45}/>

            <div className="flex flex-1 gap-5 justify-between">
                <div>
                    <h2 className="text-secondary font-bold">{title}</h2>
                    <p className="text-sm text-slate-400">{publisher}</p>
                    <p className="text-[10px] text-white text">Open</p>
                </div>

                <p>{pay} SOL</p>
            </div>
        </article>
    )
}