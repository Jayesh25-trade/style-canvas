import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-main.jpg";
import splitToss from "@/assets/split-toss.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ATELIER 22" },
      { name: "description", content: "A small studio in Lisbon making clothes the slow way." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b border-ink/20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="smallcaps text-primary">About the studio</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-4">
              A studio of <em>twenty-two</em> pieces.
            </h1>
            <p className="mt-8 text-xl italic text-muted-foreground max-w-xl">
              We started in 2022 in a converted bakery on Rua dos Fanqueiros.
              Each season we make twenty-two pieces. No more, no less.
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={heroImg} alt="Atelier" className="w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-8 text-xl leading-relaxed">
          <p>The number 22 isn't symbolic. It's the most pieces our small team can make in a season without
          rushing — without skipping a stitch, without an excuse.</p>
          <p>We work with three workshops: a knitwear mill in Biella, a tailor outside Porto, and a
          leatherworker in León. We visit them every season. We share notes, drink coffee, miss
          our trains.</p>
          <p>We believe a good piece of clothing is a small inheritance. We hope ours becomes one of yours.</p>
        </div>
      </section>

      <section>
        <img src={splitToss} alt="" className="w-full aspect-[16/9] object-cover" />
      </section>
    </div>
  );
}
