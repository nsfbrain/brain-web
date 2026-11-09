import BrainVideo from "./BrainVideo";

export default function Hero() {
  return (
    <section className="relative h-[calc(100dvh-var(--header-h))] w-full overflow-hidden text-white">
      {/* Background video layer */}
      <BrainVideo overlayOpacity={0.75} />

      {/* Foreground content */}
      <div className="shell relative z-10 flex h-full flex-col items-center justify-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building Reliable Advances and Innovations in Neurotechnology
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-white/80">
            Connecting academia, industry, and government to advance neurotechnology.
          </p>
        </div>
      </div>
    </section>
  );
}
