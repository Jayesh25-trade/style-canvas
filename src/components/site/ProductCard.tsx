import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-muted aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
        <div className="absolute top-3 left-3 smallcaps text-cream/90 mix-blend-difference">
          № {String(index).padStart(2, "0")}
        </div>
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-cream text-ink smallcaps px-4 py-3 flex items-center justify-between shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]">
            <span>Quick view</span>
            <span className="text-primary">→</span>
          </div>
        </div>
      </div>
      <div className="pt-4 flex items-baseline justify-between gap-4">
        <div>
          <div className="smallcaps text-muted-foreground">{product.category}</div>
          <h3 className="font-display text-xl leading-tight mt-1 group-hover:italic transition-all">{product.name}</h3>
          <div className="smallcaps text-muted-foreground/70 mt-1 text-[0.65rem]">{product.collection}</div>
        </div>
        <div className="font-mono text-sm whitespace-nowrap">${product.price}</div>
      </div>
    </Link>
  );
}
