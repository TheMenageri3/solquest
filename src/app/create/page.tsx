"use client"
import { H1 } from "@/components/general/ui/H1"
import Input from "@/components/general/ui/Input"
import { Button } from "@/components/general/ui/Button"

export default function CreateBounty(){
    return(
        <main className="flex-1 flex flex-col max-w-7xl w-full m-auto px-5">
            <form className="border-2 border-slate-600 my-20 mx-auto max-w-xl w-full rounded-lg">
                <h2 className="text-secondary font-bold my-2 text-center">
                    Create Bounty
                </h2>

                <Input label="Title" />
                <Input label="Description" type="area"/>
                <Input label="Track" type="select" options={["Frontend", "Backend", "Rust"]} />
                <Input label="Pay" type="number" />

                <div className="my-5 mx-auto w-fit">
                    <Button>Create Bounty</Button>
                </div>
            </form>
        </main>
    )
}