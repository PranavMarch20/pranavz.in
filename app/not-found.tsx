import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="mx-auto mt-8 pt-12 flex min-h-[56vh] w-full max-w-[670px] justify-center items-center px-5">
      <div className="flex flex-col items-center">
        <p className="font-mono text-7xl uppercase tracking-wider text-muted-foreground">
          404
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-foreground text-center">
          Page not found or it does'nt exist.
        </h1>

        <Image
          src="/not-found.jpg"
          alt="Not found illustration"
          width={200}
          height={130}
          className="my-4 rounded shadow"
          priority
        />
  
  
        {/* <p className="mt-10 text-[15px] leading-[1.625] text-muted-foreground">
          Ghar ja k sutti babu!
        </p>
        <p className="mt-1 text-[15px] leading-[1.625] text-muted-foreground">
          ye kahan aa gye app aur kaise babu!?
        </p>
        <p className="mt-1 text-[15px] leading-[1.625] text-muted-foreground">
          wapas jaiye Home: The main page par ... neeche button click kariye
        </p> */}

        <Link
          href="/"
          className="group py-6 inline-flex items-center gap-2 text-[15px] text-foreground font-medium"
        >
          <ArrowLeft size={16} />
          <span className="leading-5 border-b-2 border-transparent border-dotted group-hover:border-accent transition-colors">Back home</span>
        </Link>
      </div>
    </main>
  );
}