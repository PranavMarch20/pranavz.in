import { UserRound, Birdhouse, Mailbox, CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../common/icons";
import { Divider } from "../common/divider";

const navigation = [
    { label: "GitHub", href: "https://github.com/pranavmarch20", Icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranvmarch20", Icon: LinkedInIcon },
    { label: "Email", href: "mailto:pranavmarch20@gmail.com", Icon: Mailbox },
    { label: "Codolio", href: "https://codolio.com/profile/pranavmarch20", Icon: CodeXml },
];

export function HomeHeader() {
  return (
    <header className="pt-7 sm:pt-14">
      <div className="flex items-center gap-4">
          <Image
            src="/header-image.png"
            alt="Pranav Kumar Singh"
            width={48}
            height={48}
            priority
            className="size-12 rounded-md aspect-square shadow-2xl"
          />
        <div className="min-w-0 flex flex-col items-start leading-6">
          <h1 className="break-words italic sm:not-italic text-3xl font-medium tracking-normal text-half-muted-foreground">
            Pranav Kumar Singh 
            {" "}
            <span className="hidden italic sm:inline text-xl font-normal text-stone-400">aka</span>
            {" "}
            <span className="hidden italic sm:inline text-xl font-normal">Raunak</span>
          </h1>

          <p className="text-[15px] font-medium leading-[24.375px] text-stone-400">
            Full Stack &amp; Backend Developer
          </p>
        </div>
  
        
      </div>

      <Divider className="!my-3 max-w-[470px]"/>
 
      <nav aria-label="Primary navigation" className="mt-4">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] leading-[22.75px]">
          <li className="flex flex-col">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navigation.map(({ href, Icon, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1 font-medium text-nav-link transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" className="size-[16px] stroke-[2.2] mb-0.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    <span className="inline-block leading-4.5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors">
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
