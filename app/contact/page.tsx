import { ArrowLeft, Mailbox } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { Divider } from "@/components/portfolio/divider";
import { Footer } from "@/components/portfolio/footer";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/icons";
import { SectionLabel } from "@/components/portfolio/section-label";

const contactLinks = [
  {
    label: "Email",
    value: "pranavmarch20@gmail.com",
    href: "mailto:pranavmarch20@gmail.com",
    Icon: Mailbox,
    accentClassName: "bg-orange-500",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pranvmarch20",
    href: "https://www.linkedin.com/in/pranvmarch20",
    Icon: LinkedInIcon,
    accentClassName: "bg-blue-500",
  },
  {
    label: "GitHub",
    value: "github.com/pranavmarch20",
    href: "https://github.com/pranavmarch20",
    Icon: GitHubIcon,
    accentClassName: "bg-indigo-500",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-5 sm:px-6">
      <div className="mx-auto w-full max-w-[670px]">
        <header className="pt-7 sm:pt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1 pb-8 text-[14px] font-medium text-nav-link underline-offset-4 transition-colors hover:text-muted-foreground hover:underline hover:[text-decoration-style:dotted] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back
          </Link>
          <h1 className="text-2xl font-semibold leading-8 text-foreground">
            Contact / Hire Me
          </h1>
          <p className="mt-2 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground">
            Have a project in mind or want to work together? I&apos;d love to hear from you.
          </p>
        </header>

        <Divider className="mb-5"/>

        <section aria-label="Contact links">
          <ul className="space-y-2 flex flex-wrap gap-3">
            {contactLinks.map(({ label, value, href, Icon, accentClassName }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-2 text-[14px] leading-[22.75px]"
                >
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white shadow-xl ${accentClassName}`}>
                    <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
                  </span>
                  <span className="flex flex-col justify-center gap-0">
                    <span className="font-medium text-foreground leading-tight">{label}</span>
                    <span className="break-all text-[12.5px] leading-tight text-muted-foreground underline-offset-5 group-hover:text-muted-foreground group-hover:underline group-hover:[text-decoration-style:dotted]">
                      {value}
                    </span>
                  </span>
             
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Divider className="mt-5"/>

        <section aria-labelledby="send-a-message">
          <SectionLabel id="send-a-message">SEND A MESSAGE</SectionLabel>
          <ContactForm />
        </section>

        <Divider />
        <Footer />
      </div>
    </main>
  );
}
