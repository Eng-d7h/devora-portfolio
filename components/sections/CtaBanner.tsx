import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-background md:py-24">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
        />

        <div className="relative flex flex-col items-center">
          <div className="grid size-16 place-items-center rounded-full bg-background shadow-xl">
            <Image src="/logo-mark.webp" alt="DEVORA" width={36} height={36} />
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tighter">
            Let&apos;s build your client&apos;s next site.
          </h2>

          <p className="mt-4 max-w-md text-background/70">
            Send me the Figma file. You get a pixel-perfect Next.js build,
            on time, under your brand.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition hover:bg-primary hover:text-primary-foreground"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}