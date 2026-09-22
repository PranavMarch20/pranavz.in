import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { Divider } from "@/components/common/divider";
import { Footer } from "@/components/common/footer";
import { GitHubIcon, LinkedInIcon } from "@/components/common/icons";
import { SectionLabel } from "@/components/home/section-label";

const contactLinks = [
  {
    label: "Email",
    value: "pranavmarch20@gmail.com",
    href: "mailto:pranavmarch20@gmail.com",
    Icon: Mail,
    accentClassName: "bg-orange-600",
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
    accentClassName: "bg-slate-700",
  },
];

export default function ContactPage() {
  return (
    <div className="px-5 sm:px-6">
      <div className="pt-12 sm:pt-14">
          {/* <Link
            href="/"
            className="group inline-flex items-center gap-1 mb-8 text-[14px] font-medium text-nav-link"
          >
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="leading-4.5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">Back</span>
          </Link> */}
          <h1 className="text-2xl font-semibold leading-8 text-foreground">
            Contact / Hire Me
          </h1>
          <p className="mt-2 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground">
            Have a project in mind or want to work together? I&apos;d love to hear from you.
          </p>
      </div>

        <Divider className="!mb-7 mt-4"/>

        <section aria-label="Contact links">
          <ul className="space-y-2 flex flex-wrap gap-3">
            {contactLinks.map(({ label, value, href, Icon, accentClassName }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-1 text-[14px] leading-[22.75px]"
                >
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white shadow-xl ${accentClassName} ring-2 ring-white/30 ring-offset-2 ring-offset-[${accentClassName}]/90 ring-inset`}>
                    <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
                  </span>
                  <span className="group flex flex-col justify-center gap-0">
                    <span className="font-medium text-foreground leading-tight">{label}</span>
                    <span className="break-all text-[12px] text-muted-foreground leading-4.5 border-b-2 border-transparent border-dotted group-hover:border-stone-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus">
                      {value}
                    </span>
                  </span>
             
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Divider className="mt-5 mb-5"/>

        <section aria-labelledby="send-a-message">
          <SectionLabel id="send-a-message">SEND A MESSAGE</SectionLabel>
          <ContactForm />
        </section>

    </div>
  );
}
