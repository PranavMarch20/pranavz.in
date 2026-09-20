import { UserRound, Birdhouse, Mailbox, CodeXml } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Divider } from "./divider";

const navigation = [
  [
    { label: "Home", href: "/", Icon: Birdhouse },
    { label: "Contact", href: "/contact", Icon: UserRound },
  ],
  [
    { label: "GitHub", href: "https://github.com/pranavmarch20", Icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranvmarch20", Icon: LinkedInIcon },
    { label: "Email", href: "mailto:pranavmarch20@gmail.com", Icon: Mailbox },
    { label: "Codolio", href: "https://codolio.com/profile/pranavmarch20", Icon: CodeXml },
  ]
];

export function Header() {
  return (
    <header className="pt-7 sm:pt-16">
      <div className="flex items-center gap-4">
          <img
            src="/header-image.png"
            alt="Header"
            className="size-12 rounded-md"
          />
        <div className="min-w-0 flex flex-col items-start leading-6">
          <h1 className="break-words italic text-3xl font-medium tracking-normal text-half-muted-foreground">
            Pranav Kumar Singh 
            {" "}
            <span className="hidden sm:inline text-xl font-normal text-muted-foreground">aka</span>
            {" "}
            <span className="hidden sm:inline text-xl font-normal">Raunak</span>
          </h1>

          <p className="text-[15px] font-medium leading-[24.375px] text-stone-400">
            Full Stack &amp; Backend Developer
          </p>
        </div>
  
        
      </div>

      <Divider className="!my-2 max-w-[470px]"/>
 
      <nav aria-label="Primary navigation" className="mt-4">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] leading-[22.75px]">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navigation[0].map(({ href, Icon, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 font-medium text-nav-link underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus hover:[text-decoration-style:dotted]"
                  >
                    <Icon aria-hidden="true" className="size-[16px] stroke-[2.2]" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex gap-x-4 gap-y-2">
              {navigation[1].map(({ href, Icon, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 font-medium text-nav-link underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus hover:[text-decoration-style:dotted]"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="size-[16px] stroke-[2.2]" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </div>
          </div>
     
        </ul>
      </nav>
    </header>
  );
}
