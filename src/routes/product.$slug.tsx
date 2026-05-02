import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/data/products";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/site/ProductCard";
import { ShoppingBag, Check } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ATELIER 22` },
          { name: "description", content: loaderData.story },
          { property: "og:title", content: `${loaderData.name} — ATELIER 22` },
          { property: "og:description", content: loaderData.story },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="p-20 text-center font-display text-2xl">{error.message}</div>
  ),
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <div className="font-display text-5xl">Not in this issue</div>
      <Link to="/shop" className="smallcaps border-b border-ink pb-1 mt-6 inline-block">Browse the catalog</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const navigate = useNavigate();
  const [size, setSize] = useState(product.sizes[Math.min(1, product.sizes.length - 1)]);
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAdd = () => {
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div>
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-4 smallcaps text-muted-foreground">
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="smallcaps text-primary">{product.collection}</div>
            <h1 className="font-display text-5xl md:text-6xl mt-3 leading-[0.95]">{product.name}</h1>
            <div className="font-mono text-lg mt-4">${product.price}.00</div>

            <p className="mt-8 text-lg italic text-muted-foreground leading-relaxed">{product.story}</p>

            <div className="mt-10">
              <div className="flex items-center justify-between mb-3">
                <div className="smallcaps">Size — {size}</div>
                <button className="smallcaps text-muted-foreground hover:text-foreground">Size guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 border smallcaps transition-colors ${
                      size === s ? "bg-ink text-cream border-ink" : "border-ink/30 hover:border-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleAdd}
                className="w-full bg-primary text-primary-foreground py-5 smallcaps flex items-center justify-center gap-2 hover:bg-ink transition-colors"
              >
                {added ? <><Check className="w-4 h-4" /> Added to bag</> : <><ShoppingBag className="w-4 h-4" /> Add to bag — ${product.price}</>}
              </button>
              <button
                onClick={() => { handleAdd(); navigate({ to: "/checkout" }); }}
                className="w-full border border-ink py-5 smallcaps hover:bg-ink hover:text-cream transition-colors"
              >
                Buy it now
              </button>
            </div>

            <div className="mt-12 border-t border-ink/20 pt-8">
              <div className="smallcaps mb-4">The Details</div>
              <ul className="space-y-2 text-muted-foreground">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-3"><span className="text-primary">·</span> {d}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 smallcaps text-muted-foreground border-t border-ink/20 pt-8">
              <div>Free shipping<br/>over $200</div>
              <div>30-day<br/>returns</div>
              <div>Carbon-neutral<br/>delivery</div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 border-t border-ink/20">
          <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
            <h2 className="font-display text-4xl mb-10">In the same chapter</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i + 1} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
