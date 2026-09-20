"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

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

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
      
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
            placeholder="you@gmail.com"
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
        disabled={isSending || status === "success"}
        className="inline-flex min-w-[154px] min-h-[40px] items-center justify-center transition-transform hover:-translate-y-0.5 active:translate-y-0.5 gap-2 rounded-lg bg-linear-to-b from-blue-400 to-blue-600 align-middle cursor-pointer px-4 py-2 text-[14px] font-medium leading-[22.75px] text-white transition-colors hover:bg-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-60 ring-1 ring-white/30 ring-offset-1 ring-offset-blue-500/50 ring-inset"
      >
        {status === "success" ? (
          <>
            <Check aria-hidden="true" className="size-4" />
            Email sent !
          </>
        ) : (
          <>
            {isSending ? "" : <Send aria-hidden="true" className="size-4" />}
            {isSending ? <Loader2 className="size-4 animate-spin"/>  : "Send message"}
          </>
        )}
      </button>
    </form>
  );
}
