export type PracticeArea = {
  slug: string;
  title: string;
};

export const practiceAreas: readonly PracticeArea[] = [
  { slug: "aile-hukuku", title: "Aile Hukuku" },
  { slug: "ceza-hukuku", title: "Ceza Hukuku" },
  { slug: "is-hukuku", title: "İş Hukuku" },
  { slug: "kira-hukuku", title: "Kira Hukuku" },
  { slug: "miras-hukuku", title: "Miras Hukuku" },
  { slug: "icra-ve-iflas-hukuku", title: "İcra ve İflas Hukuku" },
  { slug: "gayrimenkul-hukuku", title: "Gayrimenkul Hukuku" },
  { slug: "tuketici-hukuku", title: "Tüketici Hukuku" },
  { slug: "vergi-hukuku", title: "Vergi Hukuku" },
  { slug: "ticaret-hukuku", title: "Ticaret Hukuku" },
  { slug: "fikri-ve-sinai-haklar", title: "Fikri ve Sınai Haklar" },
  { slug: "bilisim-hukuku", title: "Bilişim Hukuku" },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function formatPracticeNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}
