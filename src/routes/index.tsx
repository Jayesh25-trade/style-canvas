import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-main.jpg";
import splitThrow from "@/assets/split-throw.jpg";
import splitCatchLeather from "@/assets/split-catch-leather.jpg";
import splitVillaLeather from "@/assets/split-villa-leather.jpg";
import splitToss from "@/assets/split-toss.jpg";
import splitPass from "@/assets/split-pass.jpg";
import splitVilla from "@/assets/split-villa.jpg";
import splitBalcony from "@/assets/split-balcony.jpg";
import editorialParis from "@/assets/editorial-paris.jpg";
import editorialCoast from "@/assets/editorial-coast.jpg";
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
  const find = (slug: string) => products.find((p) => p.slug === slug)!;
  const knit = find("ribbed-turtleneck");
  const shirt = find("silk-blouse");
  const linen = find("silk-blouse");
  const dress = find("rust-midi-dress");
  const gown = find("emerald-velvet-gown");
  const cashmere = find("burgundy-cashmere-coat");
  const pajama = find("sienna-silk-pajama-set");
  const shearling = find("embroidered-shearling");
  // Split frame pairings
  const cableThrow = find("cable-knit-cardigan");
  const motoCatch = find("tobacco-leather-moto");
  const skirtThrow = find("oxblood-leather-skirt");
  const aviatorCatch = find("caramel-suede-aviator");
  const cashmereVilla = find("burgundy-cashmere-coat");
  const aviatorVilla = find("caramel-suede-aviator");

  const heirloom = [
    find("burgundy-cashmere-coat"),
    find("emerald-velvet-gown"),
    find("caramel-croc-bag"),
    find("embroidered-shearling"),
  ];
  const leatherEdit = [
    find("tobacco-leather-moto"),
    find("chocolate-leather-blazer"),
    find("caramel-suede-aviator"),
    find("cognac-leather-trench"),
    find("oxblood-leather-skirt"),
    find("black-flight-jacket"),
  ];
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
              keeps a story. Twenty-four pieces, made the slow way.
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
        <div className="font-display italic text-2xl flex gap-12 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
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

      {/* EDITORIAL DOUBLE PAGE — PARIS / COAST */}
      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10 border-b border-ink pb-4">
            <div>
              <div className="smallcaps text-muted-foreground">Spread · pp. 24–25</div>
              <h2 className="font-display text-4xl md:text-5xl mt-2 italic">A weekend, told in two cities.</h2>
            </div>
            <div className="hidden md:block font-mono text-xs text-muted-foreground">
              Photographed by R. Castel
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
            <figure className="md:col-span-5 relative">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={editorialParis} alt="Burgundy velvet suit, Paris" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 smallcaps text-muted-foreground flex justify-between">
                <span>Fig. 01 — Saint-Germain, 16:42</span>
                <span>F2.8 · 1/125</span>
              </figcaption>
            </figure>
            <div className="md:col-span-2 md:pt-12">
              <div className="font-display text-7xl text-primary leading-none">‟</div>
              <p className="font-display italic text-xl mt-4 leading-snug">
                She ordered the espresso. She didn't drink it.
              </p>
            </div>
            <figure className="md:col-span-5 md:pt-20 relative">
              <div className="aspect-[5/4] overflow-hidden bg-muted">
                <img src={editorialCoast} alt="Knitwear on the Italian coast" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 smallcaps text-muted-foreground flex justify-between">
                <span>Fig. 02 — Camogli, 17:08</span>
                <span>F4 · 1/250</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* THE HEIRLOOM EDIT */}
      <section className="py-24 bg-ink text-cream">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12 border-b border-cream/30 pb-6">
            <div className="md:col-span-7">
              <div className="smallcaps text-primary">Section IV · Capsule</div>
              <h2 className="font-display text-5xl md:text-6xl mt-3 italic">The Heirloom Edit</h2>
            </div>
            <p className="md:col-span-5 text-cream/80 italic">
              Six pieces designed to outlive the issue. Cashmere coats, hand-beaded shearling,
              embossed Florentine leather. Cut once, kept forever.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {heirloom.map((p, i) => (
              <Link key={p.id} to="/product/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative overflow-hidden aspect-[4/5] bg-cream/10">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute top-3 left-3 smallcaps text-cream/90">№ {String(19 + i).padStart(2, "0")}</div>
                </div>
                <div className="pt-4 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="smallcaps text-cream/60">{p.category}</div>
                    <h3 className="font-display text-xl leading-tight mt-1">{p.name}</h3>
                  </div>
                  <div className="font-mono text-sm">${p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT FRAME — VILLA (gown vs cashmere coat) */}
      <section className="py-24">
        <SplitFrame
          image={splitVilla}
          left={gown}
          right={cashmere}
          caption="A villa at six. The wine, the wool, the wait."
        />
      </section>

      {/* EDITOR'S NOTE */}
      <section className="py-24 border-y border-ink/20 bg-cream/40">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 smallcaps text-muted-foreground">
            From the editor
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-4xl leading-snug italic">
              "We started ATELIER 22 because we wanted clothes that get better
              with the years — not faster, not louder. Twenty-four pieces, twenty-four
              decisions, made by hand in workshops we visit every season."
            </p>
            <div className="mt-6 smallcaps text-muted-foreground">— Inês Marques, Founder</div>
          </div>
        </div>
      </section>

      {/* SPLIT FRAME — BALCONY (pajama vs shearling) */}
      <section className="py-24">
        <SplitFrame
          image={splitBalcony}
          left={pajama}
          right={shearling}
          reverseCaption
          caption="After hours. Silk on the left, shearling on the right."
        />
      </section>

      {/* SPLIT FRAME — PASS */}
      <section className="py-24 bg-cream/40">
        <SplitFrame
          image={splitPass}
          left={linen}
          right={dress}
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
              View all 24 →
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
