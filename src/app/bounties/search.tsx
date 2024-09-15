import { FaSearch } from "react-icons/fa"
import { IconButton } from "@/components/general/ui/Button"

export default function Search(){
    return(
        <div >
            <div className="flex flex-1 gap-2">
                <input placeholder="Search for bounties..." className="flex-1 bg-transparent border-[1px] border-slate-600 rounded-md px-4 py-2 min-w-20" type="text" alt="search" title="Search" name="search"/>

                <IconButton><FaSearch/></IconButton>
            </div>
        </div>
    )
}