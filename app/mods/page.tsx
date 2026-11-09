import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bradley's Mod Install Tutorial",
  description: "Bradley's Mod Install Tutorial",
  robots: {
    index: false,
    follow: false,
  },
};

const downloadButtons = [
  "Placeholder Download 1",
  "Placeholder Download 2",
  "Placeholder Download 3",
];

const tutorialCells = Array.from({ length: 6 }, (_, index) => index + 1);

export default function ModsPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-28">
      <header className="mb-12 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Bradley&apos;s Mod Install Tutorial
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {downloadButtons.map((label) => (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 opacity-80 dark:border-white/10 dark:bg-white/10 dark:text-white/60"
              key={label}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="w-full space-y-8">
        {tutorialCells.map((cellNumber) => (
          <section
            className="grid gap-6 rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] sm:items-center sm:p-8 dark:border-white/10 dark:bg-white/5"
            key={cellNumber}
          >
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-white/50">
                Step {cellNumber}
              </p>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-white/80">
                Placeholder Text 1
              </p>
            </div>

            <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-gray-100 dark:border-white/10 dark:bg-white/10">
              <img
                src={`/image${cellNumber}.png`}
                alt={`Placeholder image for step ${cellNumber}`}
                className="h-full max-h-72 w-full object-contain"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
