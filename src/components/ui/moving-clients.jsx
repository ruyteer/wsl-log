"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingClients() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="normal"
        pauseOnHover={false}
      />
    </div>
  );
}

const images = [
  "/bunge.svg",
  "/cargill.png",
  "/cargox.webp",
  "/camil.png",
  "/heineken.png",
  "/klabin.png",
];
