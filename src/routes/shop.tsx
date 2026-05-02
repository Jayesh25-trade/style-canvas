import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

const categories = ["All", "Outerwear", "Knitwear", "Tops", "Bottoms", "Dresses", "Accessories"] as const;

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop the Issue — ATELIER 22" },
      { name: "description", content: "All 18 pieces from the Autumn issue. Outerwear, knitwear, dresses and accessories." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    category: (s.category as string) || "All",
  }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [active, setActive] = useState<string>(search.category);

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-16">
          <div className="smallcaps text-muted-foreground">Issue 22 · The Catalog</div>
          <h1 className="font-display text-6xl md:text-7xl mt-3">The Shop</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground italic">
            Eighteen pieces, photographed on warm cream. Filter by section.
          </p>
        </div>
      </section>

      <section className="py-10 border-b border-ink/15 sticky top-[68px] bg-background/90 backdrop-blur z-30">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                navigate({ search: { category: c } });
              }}
              className={`smallcaps px-4 py-2 border transition-colors ${
                active === c
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/30 hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
