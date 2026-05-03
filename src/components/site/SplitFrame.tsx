import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

/**
 * Editorial split frame: one big magazine image, divided down the middle.
 * Left and right are each a different product, each linkable, each with its own
 * floating caption + price. The hover reveals an "Add to bag" affordance.
 */
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
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className={`flex items-end justify-between mb-6 ${reverseCaption ? "flex-row-reverse text-right" : ""}`}>
          <div>
            <div className="smallcaps text-muted-foreground">Editorial</div>
            <h2 className="font-display text-3xl md:text-5xl mt-2 max-w-2xl italic">
              {caption}
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            ↳ tap a side
          </div>
        </div>

        <div className="relative aspect-[16/9] bg-muted overflow-hidden group/frame">
          {/* left half image */}
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
            <div className="absolute left-5 bottom-5 right-5 md:left-8 md:bottom-8 translate-y-2 group-hover/left:translate-y-0 transition-transform duration-500">
              <div className="smallcaps text-cream/80 mb-2 drop-shadow">№ 01 · Throwing</div>
              <div className="inline-block bg-cream/95 backdrop-blur text-ink px-5 py-4 max-w-xs shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]">
                <div className="smallcaps text-muted-foreground">{left.category}</div>
                <div className="font-display text-2xl leading-tight mt-1">{left.name}</div>
                <div className="flex items-center justify-between mt-3 gap-4">
                  <div className="font-mono text-sm">${left.price}</div>
                  <div className="smallcaps text-primary group-hover/left:translate-x-1 transition-transform">Shop the look →</div>
                </div>
              </div>
            </div>
          </Link>

          {/* right half image */}
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
            <div className="absolute right-5 bottom-5 left-5 md:right-8 md:bottom-8 flex md:justify-end translate-y-2 group-hover/right:translate-y-0 transition-transform duration-500">
              <div className="md:text-right">
                <div className="smallcaps text-cream/80 mb-2 drop-shadow">№ 02 · Catching</div>
                <div className="inline-block bg-cream/95 backdrop-blur text-ink px-5 py-4 max-w-xs shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] text-left">
                  <div className="smallcaps text-muted-foreground">{right.category}</div>
                  <div className="font-display text-2xl leading-tight mt-1">{right.name}</div>
                  <div className="flex items-center justify-between mt-3 gap-4">
                    <div className="font-mono text-sm">${right.price}</div>
                    <div className="smallcaps text-primary group-hover/right:translate-x-1 transition-transform">Shop the look →</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* center divider with seam ornament — pointer-events-none so links work */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cream/40 z-20 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="smallcaps text-cream bg-ink/80 backdrop-blur px-3 py-1.5 rotate-90 origin-center">↔ split frame</div>
          </div>
        </div>
      </div>
    </section>
  );
}
