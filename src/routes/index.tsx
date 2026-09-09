import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Confetti, Balloons } from "@/components/Confetti";
import img1 from "@/assets/IMG-20260909-WA0045.jpg.asset.json";
import img2 from "@/assets/IMG-20260909-WA0046.jpg.asset.json";
import img3 from "@/assets/IMG-20260909-WA0047.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Abdul Hadi 🎂 | From Sannan Ali" },
      {
        name: "description",
        content:
          "A special birthday surprise for Abdul Hadi from Sannan Ali — wishes, prayers, memories and lots of confetti.",
      },
      { property: "og:title", content: "Happy Birthday Abdul Hadi 🎂" },
      {
        property: "og:description",
        content: "A special birthday surprise for Abdul Hadi from Sannan Ali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const photos = [
  { src: img1.url, alt: "Abdul Hadi with Sannan Ali on an evening walk" },
  { src: img2.url, alt: "Abdul Hadi sitting with a friend at a function" },
  { src: img3.url, alt: "Abdul Hadi in traditional shalwar kameez with a friend" },
];

const prayers = [
  "ALLAH hamari dosti ko ta QAYAMAT salamat rakhy 🤲",
  "ALLAH apko hamesha khush rakhy aur har gham se door rakhy ✨",
  "ALLAH apki umar mein barkat de aur sehat kamil ata farmaye 🌙",
  "ALLAH apki har neik dua aur har khwahish poori kare 💫",
];

function Index() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <Balloons />
        <div className="animate-rise relative z-10 text-center">
          <p className="font-display text-3xl text-gold sm:text-4xl">A little surprise</p>
          <p className="mt-3 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            for Abdul Hadi
          </p>
          <button
            onClick={() => setOpened(true)}
            className="animate-glow mt-10 rounded-full px-14 py-6 text-2xl font-extrabold tracking-widest text-primary-foreground uppercase transition-transform duration-300 hover:scale-110 active:scale-95"
            style={{ backgroundImage: "var(--gradient-party)" }}
          >
            Open
          </button>
          <p className="mt-8 text-xs text-muted-foreground">Tap to open your gift 🎁</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Confetti />
      <Balloons />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center">
        <p className="animate-rise font-display text-4xl text-pink sm:text-5xl">Happy Birthday</p>
        <h1 className="animate-pop-in text-party mt-2 text-5xl leading-tight font-extrabold sm:text-7xl md:text-8xl">
          ABDUL HADI
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Aaj ka din sirf aap ka hai — hansi, khushi aur duaon se bhara. 🎉🎂
        </p>
        <p className="animate-rise mt-4 font-display text-2xl text-gold sm:text-3xl">
          with love, Sannan Ali
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-5 pb-16">
        <h2 className="text-center font-display text-4xl text-gold">Our Memories</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className="card-glow animate-rise overflow-hidden rounded-3xl border border-border bg-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-center font-display text-4xl text-pink">Duaein</h2>
        <ul className="mt-8 space-y-4">
          {prayers.map((d, i) => (
            <li
              key={d}
              className="animate-rise rounded-2xl border border-border bg-card/70 px-6 py-5 text-center text-lg backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {d}
            </li>
          ))}
        </ul>

        <p className="mt-14 text-center font-display text-3xl text-gold sm:text-4xl">
          Happy Birthday once again, mere pyare dost 🎈
        </p>
        <p className="mt-3 text-center text-sm text-muted-foreground">— Sannan Ali</p>
      </section>
    </main>
  );
}
