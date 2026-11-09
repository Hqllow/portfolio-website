"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const shortcuts = [
  ["1", "Projects"],
  ["2", "Experience"],
  ["3", "Contact"],
  ["R", "Résumé"],
];

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      if (
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      ) {
        return;
      }

      if (event.key === "?") {
        setIsOpen((open) => !open);
        return;
      }

      const destinations: Record<string, string> = {
        "1": "#projects",
        "2": "#experience",
        "3": "#contact",
      };

      if (destinations[event.key]) {
        document.querySelector(destinations[event.key])?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (event.key.toLowerCase() === "r") {
        router.push("/Bradley Cederholm Resume.pdf");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs text-gray-500 shadow-sm backdrop-blur transition hover:text-gray-950 sm:flex dark:border-white/10 dark:bg-gray-950/80 dark:text-white/60 dark:hover:text-white"
        aria-expanded={isOpen}
        aria-controls="keyboard-shortcuts"
      >
        <kbd className="rounded border border-current px-1.5 py-0.5 text-[0.65rem]">?</kbd>
        Shortcuts
      </button>

      {isOpen && (
        <div
          id="keyboard-shortcuts"
          className="fixed bottom-16 left-5 z-40 rounded-xl border border-black/10 bg-white/95 p-4 text-sm shadow-lg backdrop-blur dark:border-white/10 dark:bg-gray-950/95"
          role="dialog"
          aria-label="Keyboard shortcuts"
        >
          <p className="mb-3 font-medium">Keyboard shortcuts</p>
          <ul className="space-y-2 text-gray-600 dark:text-white/70">
            {shortcuts.map(([key, label]) => (
              <li className="flex items-center justify-between gap-8" key={key}>
                <span>{label}</span>
                <kbd className="rounded border border-black/10 px-1.5 py-0.5 text-xs dark:border-white/20">
                  {key}
                </kbd>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
