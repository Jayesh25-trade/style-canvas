import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/order/$orderId")({
  head: () => ({ meta: [{ title: "Order confirmed — ATELIER 22" }] }),
  component: OrderConfirmation,
});

function OrderConfirmation() {
  const { orderId } = Route.useParams();
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center">
        <Check className="w-7 h-7" />
      </div>
      <div className="smallcaps text-muted-foreground mt-8">Order confirmed</div>
      <h1 className="font-display text-5xl md:text-6xl mt-3">Thank you.</h1>
      <p className="mt-6 text-lg italic text-muted-foreground">
        Your pieces are being wrapped in tissue. A confirmation has been sent to your inbox.
      </p>
      <div className="mt-8 inline-block border border-ink/30 px-6 py-3 font-mono text-sm">
        Order № {orderId}
      </div>
      <div className="mt-12">
        <Link to="/shop" className="smallcaps bg-ink text-cream px-7 py-4 hover:bg-primary transition-colors">
          Continue browsing
        </Link>
      </div>
    </div>
  );
}
