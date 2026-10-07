export const site = {
  name: "Balkan Hukuk Bürosu",
  shortName: "Balkan Hukuk",
  description:
    "İstanbul’da, Av. Zeynep Balkan’ın liderliğinde hukuki danışmanlık ve avukatlık hizmetleri.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://balkanhukukburosu.com",
  locale: "tr_TR",
  copyrightYear: 2026,
  email: "avzeynepbalkan@gmail.com",
  phoneDisplay: "+90 539 604 11 31",
  phoneHref: "tel:+905396041131",
  address: {
    street: "Kuloğlu Mahallesi, Gazeteci Erol Dernek Sokak, No:7 D:3",
    district: "Beyoğlu",
    city: "İstanbul",
    postalCode: "34433",
  },
} as const;

export const mainNav = [
  { href: "/buro", label: "Büro" },
  { href: "/av-zeynep-balkan", label: "Av. Zeynep Balkan" },
  { href: "/faaliyet-alanlari", label: "Faaliyet Alanları" },
  { href: "/yayin", label: "Yayın" },
  { href: "/hukuki-bilgi", label: "Hukuki Bilgi" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const legalNav = [
  { href: "/kvkk", label: "KVKK" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/yasal-bilgilendirme", label: "Yasal Bilgilendirme" },
] as const;
