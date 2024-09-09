import { H1 } from "@/components/general/ui/H1"
import Sidebar from "@/components/sidebar/Sidebar"
import Search from "./search"
import { Listing } from "@/components/general/Listing"

export default function Bounties(){
  return(
    <main className="flex-1 flex flex-col max-w-7xl w-full m-auto px-5">
        <H1>Bounties</H1>
        <section className="flex-1 flex gap-3 h-max my-5">
            <Sidebar />
            <div className="flex-1">
                {/* <p>Featured Bounties</p> */}
                <Search />

                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
                <Listing title="Frontend for Degenspace" publisher="Menageri3" pay={1500}/>
            </div>
        </section>
    </main>
  )
}