import { createFileRoute, Link } from "@tanstack/react-router";
import splitToss from "@/assets/split-toss.jpg";
import splitPass from "@/assets/split-pass.jpg";
import heroImg from "@/assets/hero-main.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — ATELIER 22" },
      { name: "description", content: "Field notes, photographs, and small stories from the ATELIER 22 studio." },
    ],
  }),
  component: Journal,
});

const entries = [
  { num: "01", title: "Field notes from a Biella mill", excerpt: "Where the lambswool is washed in alpine water.", img: heroImg, kicker: "Workshop" },
  { num: "02", title: "Two looks, one frame", excerpt: "On the photographic language of side-by-side.", img: splitToss, kicker: "Editorial" },
  { num: "03", title: "The honest weight of a coat", excerpt: "Why heavier wool wears lighter than you'd think.", img: splitPass, kicker: "Materials" },
];

function Journal() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-16">
      <div className="smallcaps text-muted-foreground">The Journal</div>
      <h1 className="font-display text-6xl md:text-7xl mt-2 mb-12">Field notes.</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {entries.map((e) => (
          <Link to="/journal" key={e.num} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={e.img} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
            <div className="mt-4 smallcaps text-primary">{e.kicker} · № {e.num}</div>
            <h2 className="font-display text-2xl mt-2 leading-tight">{e.title}</h2>
            <p className="mt-2 italic text-muted-foreground">{e.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
