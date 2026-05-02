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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 smallcaps text-cream/90 mix-blend-difference">
          № {String(index).padStart(2, "0")}
        </div>
      </div>
      <div className="pt-4 flex items-baseline justify-between gap-4">
        <div>
          <div className="smallcaps text-muted-foreground">{product.category}</div>
          <h3 className="font-display text-xl leading-tight mt-1">{product.name}</h3>
        </div>
        <div className="font-mono text-sm whitespace-nowrap">${product.price}</div>
      </div>
    </Link>
  );
}
