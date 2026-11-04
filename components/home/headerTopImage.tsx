import Image from "next/image";

export function HeaderTopImage() {
  return (
    <div className="relative w-full max-w-[680px] z-0 mb-0 rounded-md overflow-hidden">
      <Image
        src="/header-top.png"
        alt="Pranav Kumar Singh"
        width={680}
        height={310}
        priority
        unoptimized
        className="sm:w-full sm:h-auto h-50 object-cover opacity-97"
        style={{
          maskImage: `
            radial-gradient(
              ellipse at 50% 50%,
              black 85%,
              transparent 100%
            ),
            linear-gradient(to right, transparent 0%, black 8%, black 90%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 0%, black 75%, transparent 100%)
          `,
          maskComposite: "inherit",

          WebkitMaskImage: `
            radial-gradient(
              ellipse at 50% 50%,
              black 55%,
              transparent 100%
            ),
            linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 0%, black 92%, transparent 100%)
          `,
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  );
}