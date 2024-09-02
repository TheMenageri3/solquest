"use client"
import Logo from "./ui/Logo"
import Link from "next/link"
import Button from "./ui/Button"

export default function Navbar(){
    return(
        <div className="flex items-center justify-between py-2 px-5 max-w-7xl m-auto">
            <Logo />

            <div className="flex items-center gap-3">
                <Link className="text-white hover:text-secondary" href="/">Home</Link>
                <Link className="text-white hover:text-secondary" href="/">Publish Bounty</Link>
                <Button text="Connect" />
            </div>
        </div>
    )
}