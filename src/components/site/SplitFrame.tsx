import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function SplitFrame({
  image,
  left,
  right,
  caption,
  reverseCaption = false,
}: {
  image: string;
  left: Product;
  right: Product;
  caption: string;
  reverseCaption?: boolean;
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className={`flex items-end justify-between mb-4 md:mb-6 ${reverseCaption ? "sm:flex-row-reverse sm:text-right" : ""}`}>
          <div>
            <div className="smallcaps text-muted-foreground">Editorial</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl mt-2 max-w-2xl italic">
              {caption}
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            ↳ tap a side
          </div>
        </div>

        {/* MOBILE: full image + two product cards stacked below */}
        <div className="sm:hidden">
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <img src={image} alt={caption} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cream/50 pointer-events-none" />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {[left, right].map((p, i) => (
              <Link
                key={p.id}
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="bg-cream/95 text-ink p-3 border border-ink/10 active:bg-cream"
              >
                <div className="smallcaps text-[0.55rem] text-muted-foreground">№ 0{i + 1} · {p.category}</div>
                <div className="font-display text-base leading-tight mt-1">{p.name}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="font-mono text-xs">${p.price}</div>
                  <div className="smallcaps text-primary text-[0.55rem]">Shop →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* DESKTOP / TABLET: split frame with overlay cards */}
        <div className="hidden sm:block relative aspect-[16/10] md:aspect-[16/9] bg-muted overflow-hidden group/frame">
          <Link
            to="/product/$slug"
            params={{ slug: left.slug }}
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden group/left z-10"
          >
            <div className="absolute inset-0 w-[200%]">
              <img
                src={image}
                alt={`${caption} — left`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover/left:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-ink/0 group-hover/left:bg-ink/20 transition-colors duration-500" />
            <div className="absolute left-5 bottom-5 right-5 md:left-8 md:bottom-8 md:translate-y-2 md:group-hover/left:translate-y-0 md:transition-transform md:duration-500">
              <div className="smallcaps text-cream/90 mb-2 drop-shadow text-xs">№ 01</div>
              <div className="inline-block bg-cream/95 backdrop-blur text-ink px-5 py-4 max-w-xs shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]">
                <div className="smallcaps text-muted-foreground text-xs">{left.category}</div>
                <div className="font-display text-2xl leading-tight mt-1">{left.name}</div>
                <div className="flex items-center justify-between mt-3 gap-4">
                  <div className="font-mono text-sm">${left.price}</div>
                  <div className="smallcaps text-primary text-xs">Shop →</div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/product/$slug"
            params={{ slug: right.slug }}
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden group/right z-10"
          >
            <div className="absolute inset-0 w-[200%] -translate-x-1/2">
              <img
                src={image}
                alt={`${caption} — right`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover/right:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-ink/0 group-hover/right:bg-ink/20 transition-colors duration-500" />
            <div className="absolute right-5 bottom-5 left-5 md:right-8 md:bottom-8 flex md:justify-end md:translate-y-2 md:group-hover/right:translate-y-0 md:transition-transform md:duration-500 justify-end">
              <div className="md:text-right">
                <div className="smallcaps text-cream/90 mb-2 drop-shadow text-xs">№ 02</div>
                <div className="inline-block bg-cream/95 backdrop-blur text-ink px-5 py-4 max-w-xs shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] text-left">
                  <div className="smallcaps text-muted-foreground text-xs">{right.category}</div>
                  <div className="font-display text-2xl leading-tight mt-1">{right.name}</div>
                  <div className="flex items-center justify-between mt-3 gap-4">
                    <div className="font-mono text-sm">${right.price}</div>
                    <div className="smallcaps text-primary text-xs">Shop →</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cream/40 z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
