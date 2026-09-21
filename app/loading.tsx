import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Test() {
    return (
      <main className="flex min-h-screen items-center justify-center max-w-2xl mx-auto px-5">
        <div className="flex flex-col items-center gap-2 text-xs tracking-wider text-muted-foreground">
            <p className="text-[15px] leading-tight text-muted-foreground">
                <Loader2 className="size-8 animate-spin" />
            </p>
            <div className="flex flex-col hidden md:inline">
                <p className="mt-5 text-[20px] font-medium leading-[1.625] text-foreground">
                    <span className="text-4xl italic text-stone-400/70">"</span> He will win who knows when to fight and when not to fight.<span className="text-4xl italic text-stone-400/70">"</span>
                </p>
                <p className="italic mt-2 text-[15px] text-right pr-3 leading-[1.625] text-muted-foreground">
                    ~ Sun Tzu's The Art of War
                </p>
            </div>
        </div>
      </main>
    );
  }