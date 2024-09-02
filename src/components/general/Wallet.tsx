"use client"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { minimizePubkey } from "@/lib/utils/helpers"
import {Button, CloseButton} from "./ui/Button"
import { useState } from "react"

export default function Wallet(){
    const wallet = useWallet()
    const [manage, setManage] = useState<boolean>(false)
    const {setVisible} = useWalletModal()

    const handleConnect = () => {
        setVisible(true)
    }

    const handleDisconnect = async () => {
        if (wallet.connected){
            await wallet.disconnect().then(
                () => {
                    console.log("Wallet disconnected!")
                }
            )
        }
        setManage(false)
    }

    const handleChange = async () => {
        await handleDisconnect()
        setVisible(true)
    }

    return(
        <>
        {
            !wallet.connected?
            <div>
                <Button clickEvent={handleConnect} text="Connect Wallet"/> 
            </div>:(wallet.connected && wallet.publicKey &&
            <div>
                <Button clickEvent={() => {setManage(true)}} text={minimizePubkey(wallet.publicKey.toBase58())} />
            </div>)
        }

        {
            manage && 
            <div className="fixed h-screen w-screen bg-veil top-0 left-0 flex items-center justify-center">
                <section className="relative bg-primary-muted w-[300px] aspect-[1.5] p-3 py-8 flex flex-col items-center gap-5 rounded-lg">
                    <CloseButton handleClick={() => {setManage(false)}}/>
                    <p><b>Manage Wallet</b></p>
                    <Button clickEvent={handleDisconnect} text="Disconnect Wallet"/>
                    <Button clickEvent={handleChange} text="Change Wallet"/>
                </section>
            </div>
        }
        </>
    )
}