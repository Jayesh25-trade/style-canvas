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
import cashmereCoat from "@/assets/p-cashmere-coat.jpg";
import velvetGown from "@/assets/p-velvet-gown.jpg";
import crocBag from "@/assets/p-croc-bag.jpg";
import woolCape from "@/assets/p-wool-cape.jpg";
import silkPajama from "@/assets/p-silk-pajama.jpg";
import shearling from "@/assets/p-shearling.jpg";
import leatherMoto from "@/assets/p-leather-moto.jpg";
import leatherBlazer from "@/assets/p-leather-blazer.jpg";
import aviator from "@/assets/p-aviator.jpg";
import leatherSkirt from "@/assets/p-leather-skirt.jpg";
import leatherTrench from "@/assets/p-leather-trench.jpg";
import flightJacket from "@/assets/p-flight-jacket.jpg";

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
  { id: "19", slug: "burgundy-cashmere-coat", name: "Burgundy Cashmere Coat", price: 1280, image: cashmereCoat, category: "Outerwear", collection: "The Heirloom Edit", color: "Burgundy", story: "Spun from pure Mongolian cashmere and tailored over six fittings. The coat that becomes the wardrobe.", details: ["100% Mongolian cashmere", "Hand-stitched lapels", "Silk twill lining", "Made in Italy"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "20", slug: "emerald-velvet-gown", name: "Emerald Velvet Gown", price: 980, image: velvetGown, category: "Dresses", collection: "After Hours", color: "Emerald", story: "Floor-skimming silk velvet with a hand-draped bodice. Made for low light and long evenings.", details: ["Italian silk velvet", "Hand-draped bodice", "Concealed back zip", "Atelier finished in Paris"], sizes: ["XS", "S", "M", "L"] },
  { id: "21", slug: "caramel-croc-bag", name: "Caramel Croc Bag", price: 1450, image: crocBag, category: "Accessories", collection: "The Heirloom Edit", color: "Caramel", story: "Embossed Tuscan leather, cast brass hardware, hand-stitched in a Florence workshop of nine.", details: ["Embossed Italian leather", "Solid brass hardware", "Suede-lined interior", "Made in Florence"], sizes: ["One Size"] },
  { id: "22", slug: "cream-wool-cape", name: "Cream Wool Cape", price: 740, image: woolCape, category: "Outerwear", collection: "Issue 22 — Sundown", color: "Cream", story: "A double-faced wool cape with horn buttons. Drawn from a 1973 Saint Laurent reference in our archive.", details: ["Double-faced virgin wool", "Horn buttons", "Made in Portugal"], sizes: ["XS/S", "M/L"] },
  { id: "23", slug: "sienna-silk-pajama-set", name: "Sienna Silk Pajama Set", price: 520, image: silkPajama, category: "Tops", collection: "After Hours", color: "Sienna Stripe", story: "Two pieces in heavy charmeuse silk. Cut to be worn out, not just in.", details: ["22mm mulberry silk", "Mother-of-pearl buttons", "Piped trim", "Sold as a set"], sizes: ["XS", "S", "M", "L"] },
  { id: "24", slug: "embroidered-shearling", name: "Embroidered Shearling Jacket", price: 1680, image: shearling, category: "Outerwear", collection: "The Heirloom Edit", color: "Cognac", story: "Spanish merino shearling with hand-beaded cuffs. The jacket that walks into the room before you do.", details: ["Spanish merino shearling", "Hand-beaded sleeve detail", "Horn toggles", "Made in Madrid"], sizes: ["S", "M", "L"] },
  { id: "25", slug: "tobacco-leather-moto", name: "Tobacco Leather Moto", price: 890, image: leatherMoto, category: "Outerwear", collection: "The Leather Edit", color: "Tobacco", story: "A relaxed moto cut from buttery Tuscan lambskin. Asymmetric zip, soft enough to fold over your arm.", details: ["Italian lambskin leather", "YKK Excella zips", "Bemberg lining", "Made in Florence"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "26", slug: "chocolate-leather-blazer", name: "Chocolate Leather Blazer", price: 1120, image: leatherBlazer, category: "Outerwear", collection: "The Leather Edit", color: "Chocolate", story: "Tailored like a suit jacket, made of leather. Peak lapels and a single-button stance.", details: ["Italian nappa leather", "Half-canvas construction", "Silk lining", "Made in Italy"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "27", slug: "caramel-suede-aviator", name: "Caramel Suede Aviator", price: 940, image: aviator, category: "Outerwear", collection: "The Leather Edit", color: "Caramel", story: "Cropped aviator in caramel suede with a curly shearling collar. The 70s, refined.", details: ["Spanish suede shell", "Merino shearling collar", "Brass hardware", "Made in Spain"], sizes: ["S", "M", "L", "XL"] },
  { id: "28", slug: "oxblood-leather-skirt", name: "Oxblood Leather Skirt", price: 480, image: leatherSkirt, category: "Bottoms", collection: "The Leather Edit", color: "Oxblood", story: "A high-waisted midi pencil cut from glove-soft lambskin. The skirt that does the work.", details: ["Italian lambskin", "Concealed back zip", "Cupro lining", "Made in Portugal"], sizes: ["XS", "S", "M", "L"] },
  { id: "29", slug: "cognac-leather-trench", name: "Cognac Leather Trench", price: 1380, image: leatherTrench, category: "Outerwear", collection: "The Leather Edit", color: "Cognac", story: "A long trench reimagined in supple cognac leather. The coat that ends every conversation about coats.", details: ["Italian calfskin", "Storm flap & belt", "Silk twill lining", "Made in Italy"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "30", slug: "black-flight-jacket", name: "Black Flight Jacket", price: 760, image: flightJacket, category: "Outerwear", collection: "The Leather Edit", color: "Black", story: "Heavy black leather with a shearling collar. Borrowed shape, kept silhouette.", details: ["Cowhide leather", "Shearling collar", "Ribbed cuffs and hem", "Made in Italy"], sizes: ["S", "M", "L", "XL"] },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
