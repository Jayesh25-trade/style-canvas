import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — ATELIER 22" }] }),
  component: Checkout,
});

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="smallcaps text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1 w-full bg-transparent border-b border-ink/40 py-3 px-1 focus:border-primary focus:outline-none font-body text-lg"
      />
    </label>
  );
}

function Checkout() {
  const items = useCart((s) => s.items);
  const subtotal = useCart((s) => s.items.reduce((sum, i) => sum + i.price * i.qty, 0));
  const clear = useCart((s) => s.clear);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const shipping = subtotal > 200 ? 0 : 12;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  if (items.length === 0 && !processing) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl">Nothing to check out</h1>
        <Link to="/shop" className="mt-6 inline-block smallcaps bg-ink text-cream px-7 py-4">Browse the issue</Link>
      </div>
    );
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      const orderId = "AT22-" + Math.floor(100000 + Math.random() * 900000);
      clear();
      navigate({ to: "/order/$orderId", params: { orderId } });
    }, 1400);
  };

  return (
    <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-16">
      <div className="smallcaps text-muted-foreground">Section V</div>
      <h1 className="font-display text-5xl md:text-6xl mt-2 mb-12">Checkout</h1>

      <form onSubmit={onSubmit} className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-12">
          <section>
            <h2 className="font-display text-2xl mb-6">Contact</h2>
            <Field label="Email" type="email" required defaultValue="" placeholder="you@studio.com" />
          </section>
          <section>
            <h2 className="font-display text-2xl mb-6">Shipping address</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="First name" required />
              <Field label="Last name" required />
              <div className="md:col-span-2"><Field label="Address" required /></div>
              <Field label="City" required />
              <Field label="Postal code" required />
              <Field label="Country" defaultValue="United States" required />
              <Field label="Phone" type="tel" required />
            </div>
          </section>
          <section>
            <h2 className="font-display text-2xl mb-6">Payment</h2>
            <div className="bg-accent/30 border border-accent text-ink px-4 py-3 smallcaps mb-6">
              Demo mode · no real card will be charged
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2"><Field label="Card number" required defaultValue="4242 4242 4242 4242" /></div>
              <Field label="Expiry" required defaultValue="12 / 28" />
              <Field label="CVC" required defaultValue="123" />
              <div className="md:col-span-2"><Field label="Name on card" required /></div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start bg-card p-8 border border-ink/20">
          <div className="smallcaps text-muted-foreground mb-6">Your order — {items.length} pieces</div>
          <ul className="space-y-4 max-h-72 overflow-auto pr-2">
            {items.map((i) => (
              <li key={i.productId + i.size} className="flex gap-3 items-center">
                <img src={i.image} alt={i.name} className="w-14 h-16 object-cover bg-muted" />
                <div className="flex-1 text-sm">
                  <div className="font-display text-base leading-tight">{i.name}</div>
                  <div className="smallcaps text-muted-foreground text-[10px] mt-0.5">{i.size} · ×{i.qty}</div>
                </div>
                <div className="font-mono text-sm">${i.price * i.qty}</div>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 font-mono text-sm border-t border-ink/30 pt-4">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}.00</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping}.00`}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>${tax}.00</span></div>
          </div>
          <div className="border-t border-ink/30 mt-4 pt-4 flex justify-between font-display text-2xl">
            <span>Total</span><span>${total}.00</span>
          </div>
          <button
            type="submit"
            disabled={processing}
            className="mt-6 w-full bg-primary text-primary-foreground py-5 smallcaps hover:bg-ink transition-colors disabled:opacity-60"
          >
            {processing ? "Processing…" : `Pay $${total}.00`}
          </button>
          <p className="text-xs text-muted-foreground mt-4 text-center italic">
            By placing this order you agree to our magazine-quality terms.
          </p>
        </aside>
      </form>
    </div>
  );
}
