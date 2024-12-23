import { BackgroundLines } from "@/components/ui/acertenity-ui/background-lines";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      <BackgroundLines className="flex  gap-4 items-center justify-center w-full flex-col px-4 h-full">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight">
          LifeLog.ai <br />
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Your personal AI-powered diary that goes beyond just journaling. We
          help you capture memories, analyze emotions, and gain insights into
          your everyday life.
        </p>
        <Button className="z-10">Get Started</Button>
      </BackgroundLines>
    </div>
  );
}
