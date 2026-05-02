import { Link } from "@tanstack/react-router";
import { useCart } from "@/store/cart";
import { ShoppingBag } from "lucide-react";

export function Header() {
  const count = useCart((s) => s.items.reduce((sum, i) => sum + i.qty, 0));
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
        <div className="hidden md:flex items-center gap-7 smallcaps">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link to="/shop" search={{ category: "Outerwear" }} className="hover:text-primary transition-colors">Outerwear</Link>
          <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
        </div>
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight">
          ATELIER<span className="text-primary"> 22</span>
        </Link>
        <div className="flex items-center gap-5 smallcaps">
          <Link to="/about" className="hidden md:inline hover:text-primary transition-colors">About</Link>
          <Link to="/cart" className="relative inline-flex items-center gap-2 hover:text-primary transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-primary-foreground text-[10px] font-mono rounded-full w-5 h-5 grid place-items-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
