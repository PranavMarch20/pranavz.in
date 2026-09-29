"use client"

import { Mail, CodeXml, Loader2, FileUser, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "../common/icons";
import { Tooltip } from "../common/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Intro2 } from "./intro2";

const navigation = [
    { label: "GitHub", href: "https://github.com/pranavmarch20", Icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranavmarch20", Icon: LinkedInIcon },
    { label: "Email", href: "mailto:pranavmarch20@gmail.com", Icon: Mail },
    { label: "Codolio", href: "https://codolio.com/profile/pranavmarch20", Icon: CodeXml },
];

export function HomeHeader2() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headerImageSrc =
    resolvedTheme === "dark"
      ? "/header-image-dark.png"
      : "/header-image-light.png";

  return (
    <header className="pt-10 sm:pt-18">
      <div className="flex flex-col items-start gap-4">
          { mounted ? <Image
            src={headerImageSrc}
            alt="Pranav Kumar Singh"
            width={48}
            height={48}
            priority
            unoptimized 
            className="size-20 rounded-3xl aspect-circle shadow-2xl border border-muted-foreground/15 ring-1 ring-muted-foreground/5 mb-2"
          /> : <div className="size-13 rounded-md aspect-square shadow-2xl border border-muted-foreground/15 ring-1 ring-muted-foreground/5 flex items-center justify-center"><Loader2 className="size-4 animate-spin"/></div> }
          <div className="min-w-0 flex flex-col items-start leading-6 mb-3">
            <h1 className="wrap-break-words text-2xl sm:text-3xl font-bold tracking-normal text-foreground">
              Hi, I'm Pranav
              {" — "}
              <span className="text-2xl sm:text-[29px] font-semibold text-accent">A Full Stack web developer.</span>
            </h1>
          </div>
      </div>

      <Intro2 />
      
      <div className="mt-5 mb-7 flex gap-4">
        <a
          href="/resume.pdf"
          download="Pranav_Resume.pdf"
          className="inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 active:translate-y-0.5 gap-1 rounded-lg align-middle cursor-pointer px-3 py-1.5 text-[13px] font-medium leading-[22.75px] text-foreground/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus shadow-xs border border-2 border-accent/30 ring-2 ring-foreground/2 ring-offset-2 ring-offset-muted-foreground/4 ring-inset"
        >
          <FileUser className="size-4 rotate-10" />
          <span>Resume / CV</span>
        </a>  
              
        <Link
          href={"/contact"}
          target="_parent"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center justify-center transition-transform hover:-translate-y-0.5 active:translate-y-0.5 gap-1 rounded-lg bg-foreground/97 align-middle cursor-pointer px-3 py-1.5 text-[13px] font-medium leading-[22.75px] text-background/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus shadow-md border border-1 border-background/80 ring-2 ring-background/5 ring-offset-2 ring-offset-background/10 ring-inset"><Send className="size-4 rotate-5" /><span>Get in touch</span></button>
        </Link>
                      
      </div>

      {/* <Divider className="!my-3 max-w-[470px]"/> */}
 
      <nav aria-label="Primary navigation" className="mt-4">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] leading-[22.75px]">
          <li className="flex flex-col">
            <ul className="flex flex-wrap gap-1 items-center cursor-pointer">
              {navigation.map(({ href, Icon, label }) => (
                <li key={label} className="group">
                  <Tooltip message={`${label}`}>
                    <Link
                      href={href}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 inline-flex items-center gap-1 bg-accent/10 rounded-full py-2 px-[9px] font-medium text-nav-link transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" className="size-4.5 stroke-[2.2]" />
                    </Link>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
