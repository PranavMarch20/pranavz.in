import Image from "next/image";

export default function Loading() {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2 font-[var(--font-space-mono)] text-xs tracking-wider text-muted-foreground">
        <Image
          src="/not-found.jpg"
          alt="Loading illustration"
          width={200}
          height={130}
          className="my-4 rounded shadow"
          priority
        />

        <p className="mt-10 text-[15px] leading-[1.625] text-muted-foreground">
          Jaldi: The Late ho gya babu!
        </p>
        <p className="mt-10 text-[15px] leading-[1.625] text-muted-foreground">
          thoda intezaar kariye babu ... load ho rha!
        </p>
        </div>
      </main>
    );
  }