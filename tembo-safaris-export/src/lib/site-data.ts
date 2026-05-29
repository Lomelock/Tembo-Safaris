import serengeti from "@/assets/hero-serengeti.jpg";
import lion from "@/assets/lion.jpg";
import kilimanjaro from "@/assets/kilimanjaro.jpg";
import zanzibar from "@/assets/zanzibar.jpg";
import maasai from "@/assets/maasai.jpg";
import ngorongoro from "@/assets/ngorongoro.jpg";
import migration from "@/assets/migration.jpg";
import balloon from "@/assets/balloon.jpg";
import luxuryLodge from "@/assets/luxury-lodge.jpg";
import safariJeep from "@/assets/safari-jeep.jpg";
import elephants from "@/assets/elephants.jpg";
import flamingos from "@/assets/flamingos.jpg";

export const img = {
  serengeti, lion, kilimanjaro, zanzibar, maasai, ngorongoro,
  migration, balloon, luxuryLodge, safariJeep, elephants, flamingos,
};

export const destinations = [
  { slug: "serengeti", name: "Serengeti National Park", image: serengeti, region: "Northern Circuit",
    description: "Endless plains where the Great Migration thunders across golden grass — Africa's most iconic wildlife stage.",
    bestTime: "June – October", activities: ["Game drives", "Hot air balloon", "Photography"] },
  { slug: "ngorongoro", name: "Ngorongoro Crater", image: ngorongoro, region: "Northern Circuit",
    description: "A collapsed volcanic caldera teeming with Big Five wildlife inside a natural amphitheater.",
    bestTime: "Year-round", activities: ["Crater floor safari", "Cultural visits", "Hiking"] },
  { slug: "tarangire", name: "Tarangire National Park", image: elephants, region: "Northern Circuit",
    description: "Ancient baobabs and the highest concentration of elephants in northern Tanzania.",
    bestTime: "July – November", activities: ["Walking safari", "Birdwatching", "Night drives"] },
  { slug: "manyara", name: "Lake Manyara", image: flamingos, region: "Northern Circuit",
    description: "Pink flamingo flocks, tree-climbing lions and a soda lake framed by the Rift Valley escarpment.",
    bestTime: "July – October", activities: ["Canoeing", "Treetop walk", "Birdwatching"] },
  { slug: "zanzibar", name: "Zanzibar Archipelago", image: zanzibar, region: "Coast",
    description: "Spice islands of turquoise water, dhow sailboats and the historic Stone Town heritage site.",
    bestTime: "June – October", activities: ["Snorkeling", "Stone Town tour", "Spice farm"] },
  { slug: "kilimanjaro", name: "Mount Kilimanjaro", image: kilimanjaro, region: "Northern Circuit",
    description: "Africa's rooftop — a 5,895m freestanding volcano summited via six legendary routes.",
    bestTime: "Jan–Mar, Jun–Oct", activities: ["Trekking", "Day hikes", "Coffee tours"] },
  { slug: "natron", name: "Lake Natron", image: flamingos, region: "Rift Valley",
    description: "An otherworldly alkaline lake where lesser flamingos breed beneath sacred Ol Doinyo Lengai.",
    bestTime: "June – November", activities: ["Volcano hike", "Waterfall walk", "Maasai visits"] },
  { slug: "arusha", name: "Arusha", image: safariJeep, region: "Gateway",
    description: "The vibrant safari capital and gateway to the northern parks, beneath Mount Meru.",
    bestTime: "Year-round", activities: ["Coffee tours", "Cultural village", "Meru hike"] },
  { slug: "ruaha", name: "Ruaha National Park", image: lion, region: "Southern Circuit",
    description: "Tanzania's largest park — wild, remote and known for huge prides of lion and elephant herds.",
    bestTime: "June – October", activities: ["Game drives", "Walking safari", "Fly camping"] },
  { slug: "nyerere", name: "Nyerere National Park", image: migration, region: "Southern Circuit",
    description: "Sprawling wilderness of the Rufiji river, boat safaris and unspoiled bush adventures.",
    bestTime: "June – October", activities: ["Boat safari", "Walking", "Fly camping"] },
];

export const packages = [
  { slug: "great-migration", title: "Great Migration Spectacle", category: "Luxury Safaris",
    duration: "7 Days", price: 4850, image: migration,
    description: "Witness the river crossings in the northern Serengeti from a luxury tented camp." },
  { slug: "kili-machame", title: "Kilimanjaro · Machame Route", category: "Mountain Trekking",
    duration: "8 Days", price: 2390, image: kilimanjaro,
    description: "The scenic 'Whiskey route' to Uhuru Peak with expert guides and porters." },
  { slug: "zanzibar-escape", title: "Zanzibar Beach Escape", category: "Beach Holidays",
    duration: "5 Days", price: 1490, image: zanzibar,
    description: "Stone Town heritage, spice tours and white-sand bliss at a boutique beach resort." },
  { slug: "honeymoon", title: "Honeymoon · Bush & Beach", category: "Honeymoon Tours",
    duration: "10 Days", price: 6280, image: luxuryLodge,
    description: "Private game drives, candle-lit dinners and a romantic Zanzibar finale." },
  { slug: "budget-camping", title: "Northern Circuit Camping", category: "Budget Camping Safaris",
    duration: "6 Days", price: 1290, image: safariJeep,
    description: "Affordable, authentic safari covering Serengeti, Ngorongoro and Tarangire." },
  { slug: "family", title: "Family Safari Adventure", category: "Family Tours",
    duration: "8 Days", price: 3490, image: elephants,
    description: "Kid-friendly lodges, balloon rides and gentle game drives for all ages." },
  { slug: "cultural", title: "Maasai & Hadzabe Cultural Tour", category: "Cultural Tours",
    duration: "4 Days", price: 980, image: maasai,
    description: "Live alongside ancient communities and learn timeless ways of life." },
  { slug: "midrange", title: "Classic Northern Lodge Safari", category: "Mid-range Safaris",
    duration: "7 Days", price: 2890, image: ngorongoro,
    description: "Comfortable lodges and expert guides across the iconic northern parks." },
];

export const testimonials = [
  { name: "Sophia & Marc", country: "France", text: "The most magical week of our lives. Our guide Joseph spotted a leopard the very first morning — and it only got better.", rating: 5 },
  { name: "Daniel Otieno", country: "Kenya", text: "Booked the budget camping trip with friends. Felt completely safe and the food was unreal. Already planning the next one.", rating: 5 },
  { name: "The Patel Family", country: "United Kingdom", text: "Tembo made traveling with three kids effortless. Hot air balloon at sunrise was the moment we will never forget.", rating: 5 },
];

export const blog = [
  { slug: "best-time-safari", title: "When is the best time for a Tanzania safari?", image: balloon, date: "Mar 2025", excerpt: "A month-by-month guide to migration patterns, weather windows and park crowds." },
  { slug: "packing-guide", title: "The ultimate Tanzania packing checklist", image: safariJeep, date: "Feb 2025", excerpt: "From dust-proof bags to malaria meds — exactly what to throw in your duffel." },
  { slug: "maasai-culture", title: "Inside Maasai culture: tradition in transition", image: maasai, date: "Feb 2025", excerpt: "How the Maasai are preserving identity while embracing change." },
  { slug: "zanzibar-guide", title: "A first-timer's guide to Zanzibar", image: zanzibar, date: "Jan 2025", excerpt: "Where to stay, what to eat, and the beaches worth the drive." },
  { slug: "migration", title: "Following the Great Migration year-round", image: migration, date: "Jan 2025", excerpt: "Tracking 1.5 million wildebeest across the Serengeti ecosystem." },
  { slug: "safety", title: "Is Tanzania safe to visit? An honest take", image: kilimanjaro, date: "Dec 2024", excerpt: "Realistic advice on safety, health and travel logistics." },
];
