import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/store/cart";
import { Minus, Plus, X } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Bag — ATELIER 22" }] }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const subtotal = useCart((s) => s.items.reduce((sum, i) => sum + i.price * i.qty, 0));
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 12;

  return (
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-16">
      <div className="smallcaps text-muted-foreground">Section IV</div>
      <h1 className="font-display text-6xl mt-2 mb-12">Your Bag</h1>

      {items.length === 0 ? (
        <div className="border-t border-ink/30 pt-16 text-center">
          <p className="font-display text-3xl italic">Your bag is empty.</p>
          <Link to="/shop" className="mt-6 inline-block smallcaps bg-ink text-cream px-7 py-4 hover:bg-primary transition-colors">
            Browse the issue
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 border-t border-ink/30">
            {items.map((i) => (
              <div key={i.productId + i.size} className="grid grid-cols-[100px_1fr_auto] md:grid-cols-[140px_1fr_auto] gap-5 py-6 border-b border-ink/20 items-start">
                <Link to="/product/$slug" params={{ slug: i.slug }}>
                  <img src={i.image} alt={i.name} className="w-full aspect-[4/5] object-cover bg-muted" />
                </Link>
                <div>
                  <Link to="/product/$slug" params={{ slug: i.slug }} className="font-display text-2xl hover:text-primary">{i.name}</Link>
                  <div className="smallcaps text-muted-foreground mt-1">Size {i.size}</div>
                  <div className="mt-4 inline-flex items-center border border-ink/30">
                    <button onClick={() => setQty(i.productId, i.size, i.qty - 1)} className="p-2 hover:bg-muted"><Minus className="w-3 h-3" /></button>
                    <span className="px-4 font-mono text-sm">{i.qty}</span>
                    <button onClick={() => setQty(i.productId, i.size, i.qty + 1)} className="p-2 hover:bg-muted"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-3">
                  <div className="font-mono">${i.price * i.qty}</div>
                  <button onClick={() => remove(i.productId, i.size)} className="text-muted-foreground hover:text-destructive">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start bg-card p-8 border border-ink/20">
            <div className="smallcaps text-muted-foreground mb-4">Order summary</div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}.00</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping}.00`}</span></div>
            </div>
            <div className="border-t border-ink/30 mt-4 pt-4 flex justify-between font-display text-2xl">
              <span>Total</span><span>${subtotal + shipping}.00</span>
            </div>
            <Link to="/checkout" className="mt-6 block text-center bg-primary text-primary-foreground py-4 smallcaps hover:bg-ink transition-colors">
              Checkout →
            </Link>
            <Link to="/shop" className="mt-3 block text-center smallcaps text-muted-foreground hover:text-foreground">
              ← keep browsing
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
