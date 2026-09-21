import { UserRound, Birdhouse, FolderDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../common/icons";
import { Divider } from "../common/divider";

const navigation = [
    { label: "Home", href: "/", Icon: Birdhouse },
    { label: "Contact", href: "/contact", Icon: UserRound },
    { label: "Projects", href: "/projects", Icon: FolderDot },
];

export function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[680px] pt-1 pb-0.5 sm:pt-2 isolate">
        <div 
        className="absolute inset-0 -z-10 bg-background backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]" 
        aria-hidden="true"
        />

        <nav aria-label="Primary navigation" className="mt-4 px-5 sm:px-6 pb-4">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] leading-[22.75px]">
                <li className="flex flex-col">
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {navigation.map(({ href, Icon, label }) => (
                    <li key={label}>
                        <Link
                        href={href}
                        className={`group inline-flex items-center gap-1 font-medium transition-colors ${href === "/" ? "text-foreground" : "text-muted-foreground"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus`}
                        >
                        <Icon aria-hidden="true" className="size-[16px] stroke-[2.2] mb-0.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                        <span className={`inline-block leading-4.5 border-b-2 border-dotted transition-colors ${href === "/" ? "border-foreground" : "border-transparent group-hover:border-stone-400"}`}>
                            {label}
                        </span>
                        </Link>
                    </li>
                    ))}
                </ul>
                </li>
            </ul>
        </nav>
    </header>
  );
}
