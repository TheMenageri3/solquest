import Image from "next/image";
import { Button } from "@/components/general/ui/Button";
import Wallet from "@/components/general/Wallet";

export default function Home() {
  return (
    <main className="flex flex-1 max-w-7xl py-24 px-5 m-auto flex-col items-center justify-between">
      <div>
        <h1 className="text-center text-4xl my-10">Discover, Contribute, Earn</h1>

        <div className="flex justify-center gap-5">
          <Button text="Get Started" type={2}/>
          <Wallet />
        </div>
      </div>
    </main>
  );
}
