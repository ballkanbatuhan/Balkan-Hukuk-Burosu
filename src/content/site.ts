export const site = {
  name: "Balkan Hukuk Bürosu",
  shortName: "Balkan Hukuk",
  description:
    "Hukukun gücünü, müvekkillerimizin geleceğini güvence altına alan ve stratejik çözümlere dönüştüren öncü bir hukuk ofisi olmak.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://balkanhukukburosu.com",
  locale: "tr_TR",
  copyrightYear: 2026,
  email: "avzeynepbalkan@gmail.com",
  phoneDisplay: "+90 539 604 11 31",
  phoneHref: "tel:+905396041131",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6020322202744!2d28.9803587!3d41.033961899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7264ef82957%3A0xdb8bf7aa3c4177de!2sBalkan%20Hukuk%20B%C3%BCrosu!5e0!3m2!1str!2str!4v1763393435608!5m2!1str!2str",
  mapsHref:
    "https://www.google.com/maps/place/Balkan+Hukuk+B%C3%BCrosu/@41.0339619,28.9803587,17z",
  address: {
    street: "Kuloğlu Mahallesi, Gazeteci Erol Dernek Sokak, No:7 D:3",
    district: "Beyoğlu",
    city: "İstanbul",
    postalCode: "34433",
  },
} as const;

/** İçerik hazır olduğunda true yapın; nav, anasayfa ve /hukuki-bilgi sayfaları açılır. */
export const siteFeatures = {
  hukukiBilgi: false,
} as const;

const mainNavItems = [
  { href: "/av-zeynep-balkan", label: "AV. ZEYNEP BALKAN" },
  { href: "/faaliyet-alanlari", label: "FAALİYET ALANLARIMIZ" },
  { href: "/yayin", label: "YAYIN" },
  { href: "/hukuki-bilgi", label: "Hukuki Bilgi" },
  { href: "/iletisim", label: "İLETİŞİM" },
] as const;

export const mainNav = mainNavItems.filter(
  (item) => siteFeatures.hukukiBilgi || item.href !== "/hukuki-bilgi",
);

export const legalNav = [{ href: "/kvkk", label: "Aydınlatma Metni" }] as const;
