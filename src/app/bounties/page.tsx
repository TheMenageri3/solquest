import { H1 } from "@/components/general/ui/H1"
import Sidebar from "@/components/sidebar/Sidebar"
import Search from "./search"
import { Button } from "@/components/general/ui/Button"
import { Listing } from "@/components/general/Listing"
import Link from "next/link"

export default function Bounties(){
  return(
    <main className="flex-1 flex flex-col max-w-7xl w-full m-auto px-5">
        <Link href="/create" className="m-5"><Button type={2}>Create Bounty</Button></Link>
        <H1 margin="sm">Bounties</H1>
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