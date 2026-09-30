export const AIRBNB_URL = "https://www.airbnb.com/h/ziarosaliapalermo";
export const FACEBOOK_URL = "https://www.facebook.com/MISTRAL1959/";
export const MISTRAL_ADDRESS = "Via Bordonaro 30, 90142 Palermo (Vergine Maria)";
export const CIN = "IT082053C29IZNFQGM";

const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

export const IMG = {
  hero: px(37358218, 1800, 1000),
  coast: px(13105443),
  village: px(26896238),
  pizzaHero: px(29793494, 1800, 1000),
  pizza1: px(905847),
  pizza2: px(13736876),
  pizza3: px(36430040),
  room1: px(8092163),
  room2: px(7147299),
  room3: px(8135505),
  room4: px(8089268),
  boat: px(36892158),
  cliffs: px(29950479),
  sail: px(38310084),
  cove: px(11661366),
  city: px(35644624),
};

export const amenities = [
  { icon: "🛏️", title: "2 camere doppie", text: "3 letti, 1 bagno: perfetta per coppie, famiglie e amici." },
  { icon: "❄️", title: "Aria condizionata", text: "Fresco assicurato anche nelle sere più calde d'agosto." },
  { icon: "🍳", title: "Cucina completa", text: "Tutto quello che serve per cucinare come a casa." },
  { icon: "🧺", title: "Lavatrice", text: "Viaggia leggero: al bucato pensiamo noi." },
  { icon: "🌿", title: "2 terrazzini", text: "Per la colazione al sole e l'aperitivo al tramonto." },
  { icon: "🚿", title: "Doccia esterna", text: "Dal mare alla doccia, senza sabbia in casa." },
];

export const experiences = [
  {
    icon: "🚐",
    title: "Transfer",
    text: "Dall'aeroporto o dal porto alla porta di casa, con partner locali di fiducia.",
    color: "bg-sun",
    img: IMG.city,
  },
  {
    icon: "🗺️",
    title: "Tour & escursioni",
    text: "Palermo, Monreale, Cefalù, Scopello e la Riserva dello Zingaro: ti costruiamo il giro giusto.",
    color: "bg-terra text-white",
    img: IMG.cliffs,
  },
  {
    icon: "⛵",
    title: "Esperienze in mare",
    text: "Barca, snorkeling, tramonti in mare. Il Tirreno visto da chi lo conosce davvero.",
    color: "bg-sea text-white",
    img: IMG.boat,
  },
  {
    icon: "✨",
    title: "Servizi su misura",
    text: "Spesa all'arrivo, prenotazioni, compleanni, sorprese: dicci cosa ti serve.",
    color: "bg-white text-ink",
    img: IMG.sail,
  },
];

export const menuHighlights = [
  {
    name: "Pizza Napoli",
    text: "Pomodoro, mozzarella, acciughe e origano: il classico, fatto come si deve.",
    tag: "Classica",
  },
  {
    name: "Sfincione palermitano",
    text: "La focaccia alta e soffice dei palermitani, con cipolla, caciocavallo e pangrattato.",
    tag: "Tradizione",
  },
  {
    name: "Stigghiola di pizza",
    text: "Il nostro omaggio allo street food di Palermo, in versione pizza.",
    tag: "Street food",
  },
  {
    name: "Impasti con farine selezionate",
    text: "Anche integrale: ottime farine e ottime materie prime, come dicono i nostri clienti.",
    tag: "Impasto",
  },
  {
    name: "Cassatella",
    text: "Dolce fritto o al forno con ricotta, da dividere (forse).",
    tag: "Dolce",
  },
  {
    name: "Cannolo",
    text: "Cialda croccante e ricotta di pecora: si chiude sempre con lui.",
    tag: "Dolce",
  },
];

export const reviews = [
  {
    text: "Ottime farine e ottime materie prime. Consiglio l'impasto con farina integrale.",
    who: "Ospite di Mistral",
    where: "Tripadvisor",
  },
  {
    text: "Pizze arrivate tutte puntuali e perfettamente cotte, nonostante il locale pieno.",
    who: "Cliente di Mistral",
    where: "Tripadvisor",
  },
];
