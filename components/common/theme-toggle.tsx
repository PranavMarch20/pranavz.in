"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="mt-3 mr-5 sm:mr-6 flex size-7 items-center justify-center text-muted-foreground hover:text-foreground transition-all border-2 border-transparent hover:border-accent/20 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
    >
      {isDark ? (
        <Sun
          aria-hidden="true"
          className="size-[16px] stroke-[2]"
        />
      ) : (
        <Moon
          aria-hidden="true"
          className="size-[16px] stroke-[2]"
        />
      )}
    </button>
  );
}