"use client"
import Logo from "./ui/Logo"
import Link from "next/link"
import Wallet from "./Wallet"

const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Publish Bounty",
        href: "/"
    }
]

export default function Navbar(){
    return(
        <div className="flex items-center justify-between py-2 px-5 max-w-7xl m-auto">
            <Logo />

            <div className="flex items-center gap-3">
                {
                    links.map(link => 
                        <Link key={link.name} className="text-white hover:text-secondary transition-colors" href={link.href}>{link.name}</Link>
                    )
                }
                <Wallet />
            </div>
        </div>
    )
}