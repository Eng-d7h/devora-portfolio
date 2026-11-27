import Image from "next/image";

export default function BrandBanner() {
  return (
    <section aria-label="DEVORA" className="mx-auto max-w-5xl px-4 pt-16 pb-30 md:pt-24">
      <p className="text-center text-xs font-medium uppercase tracking-[0.5em] text-primary md:text-sm">
        White-Label Frontend
      </p>
      <Image
        src="/logo-full.png"
        alt="DEVORA"
        width={1200}
        height={160}
        className="mt-8 w-full mix-blend-lighten [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
      />
    </section>
  );
}