import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-main.jpg";
import splitToss from "@/assets/split-toss.jpg";
import splitPass from "@/assets/split-pass.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { SplitFrame } from "@/components/site/SplitFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATELIER 22 — Issue 22, Autumn" },
      { name: "description", content: "The Autumn issue. Editorial clothing made slowly in small Italian and Spanish workshops." },
    ],
  }),
  component: Home,
});

function Home() {
  const knit = products.find((p) => p.slug === "ribbed-turtleneck")!;
  const shirt = products.find((p) => p.slug === "silk-blouse")!;
  const linen = products.find((p) => p.slug === "silk-blouse")!;
  const dress = products.find((p) => p.slug === "rust-midi-dress")!;
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* MASTHEAD */}
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 pt-6 pb-4 flex items-center justify-between smallcaps text-muted-foreground">
          <div>Vol. XXII · No. 04</div>
          <div>Autumn — MMXXVI</div>
          <div>$12 · Made in Lisbon</div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 pt-10 pb-20 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 lg:pb-12 order-2 lg:order-1">
            <div className="smallcaps text-primary mb-6">The Cover Story</div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
              Sundown,<br/><em className="text-primary">slow</em><br/>and warm.
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground italic">
              The Autumn issue: corduroy that softens, knits that remember, leather that
              keeps a story. Twenty-two pieces, made the slow way.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/shop"
                className="smallcaps bg-ink text-cream px-7 py-4 hover:bg-primary transition-colors"
              >
                Shop the Issue
              </Link>
              <Link to="/journal" className="smallcaps border-b border-ink pb-1 hover:text-primary hover:border-primary transition-colors">
                Read the Journal
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={heroImg}
                alt="Model wearing the Rust Corduroy Blazer at golden hour"
                width={1080}
                height={1920}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 smallcaps bg-cream/95 px-3 py-1.5">
                Featured · Look 01
              </div>
              <div className="absolute bottom-6 right-6 bg-cream/95 px-4 py-3 max-w-xs shadow-lg">
                <div className="smallcaps text-muted-foreground">Cover Look</div>
                <div className="font-display text-lg mt-1">Rust Corduroy Blazer</div>
                <div className="font-mono text-sm mt-1">$320</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-ink text-cream py-3 border-y border-ink overflow-hidden">
        <div className="font-display italic text-2xl flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]" style={{ animation: "marquee 40s linear infinite" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Made slowly in Italy</span><span className="text-primary">✦</span>
              <span>Free returns within 30 days</span><span className="text-primary">✦</span>
              <span>Issue 22 — out now</span><span className="text-primary">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* SPLIT FRAME — TOSS */}
      <section className="py-24">
        <SplitFrame
          image={splitToss}
          left={knit}
          right={shirt}
          caption="One frame. Two pieces. The toss before the catch."
        />
      </section>

      {/* EDITOR'S NOTE */}
      <section className="py-24 border-y border-ink/20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 smallcaps text-muted-foreground">
            From the editor
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-4xl leading-snug italic">
              "We started ATELIER 22 because we wanted clothes that get better
              with the years — not faster, not louder. Twenty-two pieces, twenty-two
              decisions, made by hand in workshops we visit every season."
            </p>
            <div className="mt-6 smallcaps text-muted-foreground">— Inês Marques, Founder</div>
          </div>
        </div>
      </section>

      {/* SPLIT FRAME — PASS */}
      <section className="py-24">
        <SplitFrame
          image={splitPass}
          left={linen}
          right={dress}
          reverseCaption
          caption="Hand to hand. Two looks meet at the seam."
        />
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 border-b border-ink pb-4">
            <div>
              <div className="smallcaps text-muted-foreground">Section II</div>
              <h2 className="font-display text-4xl md:text-5xl mt-2">The Autumn Six</h2>
            </div>
            <Link to="/shop" className="smallcaps border-b border-ink pb-1 hover:text-primary hover:border-primary">
              View all 18 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
