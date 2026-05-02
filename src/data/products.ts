import blazer from "@/assets/p-blazer.jpg";
import trousers from "@/assets/p-trousers.jpg";
import knit from "@/assets/p-knit.jpg";
import suede from "@/assets/p-suede.jpg";
import dress from "@/assets/p-dress.jpg";
import denim from "@/assets/p-denim.jpg";
import bag from "@/assets/p-bag.jpg";
import blouse from "@/assets/p-blouse.jpg";
import scarf from "@/assets/p-scarf.jpg";
import hat from "@/assets/p-hat.jpg";
import boots from "@/assets/p-boots.jpg";
import trench from "@/assets/p-trench.jpg";
import skirt from "@/assets/p-skirt.jpg";
import tee from "@/assets/p-tee.jpg";
import cardigan from "@/assets/p-cardigan.jpg";
import jeans from "@/assets/p-jeans.jpg";
import sunglasses from "@/assets/p-sunglasses.jpg";
import coat from "@/assets/p-coat.jpg";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "Outerwear" | "Knitwear" | "Bottoms" | "Tops" | "Dresses" | "Accessories";
  collection: string;
  color: string;
  story: string;
  details: string[];
  sizes: string[];
};

export const products: Product[] = [
  { id: "01", slug: "rust-corduroy-blazer", name: "Rust Corduroy Blazer", price: 320, image: blazer, category: "Outerwear", collection: "Issue 22 — Sundown", color: "Rust", story: "Cut from heavy-wale Italian corduroy and tailored with a relaxed 70s shoulder. The kind of blazer that softens into your week.", details: ["100% Italian cotton corduroy", "Half-canvas construction", "Horn buttons", "Made in Portugal"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "02", slug: "wide-leg-trousers", name: "Wide-Leg Trousers", price: 220, image: trousers, category: "Bottoms", collection: "Issue 22 — Sundown", color: "Burnt Orange", story: "A flowing wide leg with a sharp pleat. Cut for movement, drawn for posture.", details: ["Tencel & wool blend", "Hidden side zip", "Unhemmed", "Made in Italy"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "03", slug: "ribbed-turtleneck", name: "Ribbed Turtleneck", price: 180, image: knit, category: "Knitwear", collection: "Issue 21 — Quiet Hours", color: "Cream", story: "Hand-finished in a small mill in the north of Italy. Wears in like a memory.", details: ["Merino lambswool", "Ribbed construction", "Made in Biella, Italy"], sizes: ["XS", "S", "M", "L"] },
  { id: "04", slug: "suede-jacket", name: "Suede Jacket", price: 540, image: suede, category: "Outerwear", collection: "Issue 22 — Sundown", color: "Tobacco", story: "Buttery Spanish suede with a clean western shoulder. Built to outlast the season.", details: ["Spanish goat suede", "Bemberg lining", "Hand-finished seams"], sizes: ["S", "M", "L", "XL"] },
  { id: "05", slug: "rust-midi-dress", name: "Rust Midi Dress", price: 290, image: dress, category: "Dresses", collection: "Issue 22 — Sundown", color: "Rust", story: "A button-front midi with a defined waist. Belted, or not.", details: ["Stretch jersey", "Front buttons", "Belt sold separately"], sizes: ["XS", "S", "M", "L"] },
  { id: "06", slug: "olive-denim-jacket", name: "Olive Denim Jacket", price: 240, image: denim, category: "Outerwear", collection: "Issue 21 — Quiet Hours", color: "Olive", story: "Garment-dyed and washed for that broken-in feel from day one.", details: ["100% organic cotton", "Garment dyed", "Antique brass buttons"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "07", slug: "leather-bowling-bag", name: "Leather Bowling Bag", price: 480, image: bag, category: "Accessories", collection: "The Studio Carry", color: "Chocolate", story: "Vegetable-tanned leather that develops a patina over the years.", details: ["Italian vegetable-tanned leather", "Brass hardware", "Cotton canvas lining"], sizes: ["One Size"] },
  { id: "08", slug: "silk-blouse", name: "Silk Blouse", price: 260, image: blouse, category: "Tops", collection: "Issue 22 — Sundown", color: "Champagne", story: "A bias-cut silk blouse that reads quiet from a distance and luxurious up close.", details: ["100% mulberry silk", "Mother-of-pearl buttons", "French seams"], sizes: ["XS", "S", "M", "L"] },
  { id: "09", slug: "fringed-wool-scarf", name: "Fringed Wool Scarf", price: 110, image: scarf, category: "Accessories", collection: "The Studio Carry", color: "Terracotta", story: "Hand-loomed in Nepal, fringed by hand. Wear it big.", details: ["100% lambswool", "Hand-fringed", "75 × 200 cm"], sizes: ["One Size"] },
  { id: "10", slug: "felt-fedora", name: "Felt Fedora", price: 140, image: hat, category: "Accessories", collection: "Issue 22 — Sundown", color: "Mustard", story: "A wide brim with a grosgrain band. Built in Madrid by a third-generation hatmaker.", details: ["100% wool felt", "Grosgrain band", "Made in Spain"], sizes: ["S", "M", "L"] },
  { id: "11", slug: "leather-chelsea-boots", name: "Leather Chelsea Boots", price: 380, image: boots, category: "Accessories", collection: "Issue 21 — Quiet Hours", color: "Cognac", story: "Goodyear-welted in a small workshop in León, Spain.", details: ["Full-grain leather", "Goodyear welted", "Stacked leather heel"], sizes: ["36", "37", "38", "39", "40", "41"] },
  { id: "12", slug: "camel-trench-coat", name: "Camel Trench Coat", price: 620, image: trench, category: "Outerwear", collection: "Issue 22 — Sundown", color: "Camel", story: "The trench, refined. Roomy through the body, narrowed at the cuff.", details: ["Cotton gabardine", "Removable belt", "Storm flap"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "13", slug: "tartan-wool-skirt", name: "Tartan Wool Skirt", price: 195, image: skirt, category: "Bottoms", collection: "Issue 21 — Quiet Hours", color: "Plaid", story: "An A-line skirt in a soft Scottish tartan. Tells you it's October.", details: ["Pure wool", "Box pleats", "Side zip"], sizes: ["XS", "S", "M", "L"] },
  { id: "14", slug: "breton-stripe-tee", name: "Breton Stripe Tee", price: 75, image: tee, category: "Tops", collection: "Studio Basics", color: "Navy / Cream", story: "A heavy cotton Breton with a slight A-line. The shirt you'll reach for.", details: ["Heavy cotton jersey", "Made in France"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "15", slug: "cable-knit-cardigan", name: "Cable-Knit Cardigan", price: 295, image: cardigan, category: "Knitwear", collection: "Issue 21 — Quiet Hours", color: "Cream", story: "An oversized cable cardigan with brass shank buttons. Heirloom hopeful.", details: ["Lambswool", "Brass shank buttons", "Hand-finished"], sizes: ["XS", "S", "M", "L"] },
  { id: "16", slug: "indigo-straight-jeans", name: "Indigo Straight Jeans", price: 195, image: jeans, category: "Bottoms", collection: "Studio Basics", color: "Indigo", story: "A straight-leg in 13.5oz Japanese selvedge. The pair that improves with wear.", details: ["13.5oz Kaihara denim", "Selvedge outseam", "Made in Japan"], sizes: ["24", "26", "28", "30", "32"] },
  { id: "17", slug: "round-frame-sunglasses", name: "Round Frame Sunglasses", price: 220, image: sunglasses, category: "Accessories", collection: "The Studio Carry", color: "Gold", story: "Hand-polished gold frames with brown gradient lenses. A clean 70s silhouette.", details: ["Italian acetate", "Gold-plated frame", "UV400"], sizes: ["One Size"] },
  { id: "18", slug: "rust-overcoat", name: "Rust Overcoat", price: 690, image: coat, category: "Outerwear", collection: "Issue 22 — Sundown", color: "Rust", story: "A long single-breasted overcoat in a soft Italian wool. The piece you keep forever.", details: ["80% wool / 20% cashmere", "Bemberg lining", "Made in Italy"], sizes: ["XS", "S", "M", "L", "XL"] },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
