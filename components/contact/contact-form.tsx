"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
      
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[14px] font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Narendra Rahul"
            required
            className="w-full rounded-lg border border-stone-300 bg-transparent px-3 py-2 text-[14px] leading-[22.75px] text-foreground outline-none placeholder:text-muted-foreground focus:border-focus focus:ring-1 focus:ring-focus"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[14px] font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-stone-300 bg-transparent px-3 py-2 text-[14px] leading-[22.75px] text-foreground outline-none placeholder:text-muted-foreground focus:border-focus focus:ring-1 focus:ring-focus"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-[14px] font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Freelance project, collaboration, etc."
          required
          className="w-full rounded-lg border border-stone-300 bg-transparent px-3 py-2 text-[14px] leading-[22.75px] text-foreground outline-none placeholder:text-muted-foreground focus:border-focus focus:ring-1 focus:ring-focus"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-[14px] font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or idea..."
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-stone-300 bg-transparent px-3 py-2 text-[14px] leading-[22.75px] text-foreground outline-none placeholder:text-muted-foreground focus:border-focus focus:ring-1 focus:ring-focus"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex items-center gap-2 rounded-lg bg-link cursor-pointer px-4 py-2 text-[14px] font-medium leading-[22.75px] text-white transition-colors hover:bg-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send aria-hidden="true" className="size-4" />
        {isSending ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-[14px] text-green-600">
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-[14px] text-red-600">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
