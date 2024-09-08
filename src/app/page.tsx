import Image from "next/image";
import { Button } from "@/components/general/ui/Button";
import { H1 } from "@/components/general/ui/H1";
import Wallet from "@/components/general/Wallet";

export default function Home() {
  return (
    <main className="flex flex-1 max-w-7xl py-24 px-5 m-auto flex-col items-center justify-between">
      <div>
        <H1>Discover, Contribute, Earn</H1>

        <div className="flex justify-center gap-5">
          <Button type={2}>Get Started</Button>
          <Wallet />
        </div>
      </div>
    </main>
  );
}
