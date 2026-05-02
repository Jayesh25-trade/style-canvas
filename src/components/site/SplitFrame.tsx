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

        <div className="relative aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={image}
            alt={caption}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* center divider line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-ink/30 z-10" />

          {/* left half link */}
          <Link
            to="/product/$slug"
            params={{ slug: left.slug }}
            className="absolute inset-y-0 left-0 w-1/2 group"
          >
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors" />
            <div className="absolute left-5 bottom-5 right-5 md:left-8 md:bottom-8">
              <div className="inline-block bg-cream/95 text-ink px-4 py-3 max-w-xs shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]">
                <div className="smallcaps text-muted-foreground">{left.category}</div>
                <div className="font-display text-xl leading-tight mt-1">{left.name}</div>
                <div className="flex items-center justify-between mt-2 gap-4">
                  <div className="font-mono text-sm">${left.price}</div>
                  <div className="smallcaps text-primary">Shop →</div>
                </div>
              </div>
            </div>
          </Link>

          {/* right half link */}
          <Link
            to="/product/$slug"
            params={{ slug: right.slug }}
            className="absolute inset-y-0 right-0 w-1/2 group"
          >
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors" />
            <div className="absolute right-5 bottom-5 left-5 md:right-8 md:bottom-8 flex md:justify-end">
              <div className="inline-block bg-cream/95 text-ink px-4 py-3 max-w-xs shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]">
                <div className="smallcaps text-muted-foreground">{right.category}</div>
                <div className="font-display text-xl leading-tight mt-1">{right.name}</div>
                <div className="flex items-center justify-between mt-2 gap-4">
                  <div className="font-mono text-sm">${right.price}</div>
                  <div className="smallcaps text-primary">Shop →</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
