export function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/30">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-4xl">ATELIER 22</div>
          <p className="mt-4 max-w-sm text-muted-foreground italic">
            A small studio making clothes the slow way — from a quiet street in Lisbon, to your closet.
          </p>
        </div>
        <div>
          <div className="smallcaps text-muted-foreground mb-4">Studio</div>
          <ul className="space-y-2 font-body text-lg">
            <li>About</li><li>Journal</li><li>Stockists</li><li>Press</li>
          </ul>
        </div>
        <div>
          <div className="smallcaps text-muted-foreground mb-4">Care</div>
          <ul className="space-y-2 font-body text-lg">
            <li>Shipping</li><li>Returns</li><li>Size guide</li><li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 smallcaps text-muted-foreground">
          <div>© ATELIER 22 — Issue 22, Autumn</div>
          <div>Made slowly. Shipped worldwide.</div>
        </div>
      </div>
    </footer>
  );
}
