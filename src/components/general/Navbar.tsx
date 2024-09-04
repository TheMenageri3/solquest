"use client"
import Logo from "./ui/Logo"
import Link from "next/link"
import Wallet from "./Wallet"
import { MobileMenu } from "./MobileMenu"

export const NavLinks = [
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
        <nav className="flex items-center justify-between py-2 px-5 max-w-7xl w-full m-auto">
            <Logo />

            <div className="hidden tablet:flex items-center gap-3">
                {
                    NavLinks.map(link => 
                        <Link key={link.name} className="text-white hover:text-secondary transition-colors" href={link.href}>{link.name}</Link>
                    )
                }
                <Wallet />
            </div>

            <MobileMenu />
        </nav>
    )
}