import { GitHubIcon, LinkedInIcon, PranavSignature } from "./icons"

const footerLinks = [
  { label: "GitHub", href: "https://github.com/pranavmarch20", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranvmarch20", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="pb-10 pt-6 flex flex-col items-center gap-4 text-center text-[13px] leading-5 text-muted-foreground sm:pb-12">
      <PranavSignature className="w-28 h-auto"/>
      <div>
        <div>
          Built by Pranav Kumar Singh{" ~ "}
          <a
            href="mailto:pranavmarch20@gmail.com"
            className="hover:underline hover:underline-offset-4 hover:text-foreground transition-colors hover:[text-decoration-style:dotted] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            pranavmarch20@gmail.com
          </a>
          <span className="ml-1 text-muted-foreground flex flex-col">
            {/* © {new Date().getFullYear()} All rights reserved.{" "} */}
            <p>
              <a
                title="See sitemap"
                href="/sitemap"
                className="hover:underline hover:underline-offset-4 hover:text-foreground transition-colors hover:[text-decoration-style:dotted] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </a>
              {" | "}
              <a
                title="Fork this on Github"
                href="https://github.com/PranavMarch20/pranavz.in"
                className="hover:underline hover:underline-offset-4 hover:text-foreground transition-colors hover:[text-decoration-style:dotted] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              {" | "}
              <a
                title="Contact me"
                href="/contact"
                className="hover:underline hover:underline-offset-4 hover:text-foreground transition-colors hover:[text-decoration-style:dotted] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"              
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire me
              </a>
            </p>
          </span>
    
        </div>

        <nav aria-label="Footer links" className="mt-2">
          <ul className="flex items-center justify-center gap-3">
            {footerLinks.map(({ href, Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="size-[17px] stroke-[2.2]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
