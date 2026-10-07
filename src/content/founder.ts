export type FounderFact = {
  label: string;
  value: string;
};

/**
 * Metinler balkanhukukburosu.com/about sayfasındaki doğrulanmış bilgilere dayanır.
 * Yüksek lisansın tamamlanma yılı sitede yer almadığı için yazılmadı.
 */
export const founder = {
  name: "Av. Zeynep Balkan",
  role: "Kurucu",
  summary:
    "Av. Zeynep Balkan, Balkan Hukuk Bürosu’nun kurucusudur. 2020 yılında Yeditepe Üniversitesi Hukuk Fakültesi’nden mezun olmuş, 2022 yılında büroyu kurmuştur. İstanbul’da bireysel ve kurumsal müvekkillere danışmanlık sunar. Özel hukuk yüksek lisansını, sosyal medya haberciliğinde kişilik hakları üzerine tamamlamıştır.",
  profile: [
    "Av. Zeynep Balkan, Balkan Hukuk Bürosu’nun kurucusudur. 2020 yılında Yeditepe Üniversitesi Hukuk Fakültesi’nden mezun oldu. Öğrencilik döneminde ve mezuniyetinin ardından çeşitli hukuk bürolarında çalıştı. 2022 yılında Balkan Hukuk Bürosu’nu kurdu.",
    "İstanbul’da bireysel ve kurumsal müvekkillere hukuki danışmanlık sunar. Yeditepe Üniversitesi’nde özel hukuk yüksek lisansını, “Sosyal Medya Haberciliğinde Kişilik Haklarının İhlali” konulu teziyle tamamladı.",
    "Hukuk pratiğinin yanında Business Channel Türk’te “Hukuk Sohbetleri” ve Yıldız En TV’de “Hukuk Saati” programlarında moderatörlük yaptı.",
  ],
  facts: [
    {
      label: "Eğitim",
      value: "Yeditepe Üniversitesi Hukuk Fakültesi, 2020",
    },
    {
      label: "Yüksek Lisans",
      value: "Yeditepe Üniversitesi, Özel Hukuk",
    },
    {
      label: "Yayın",
      value: "Sosyal Medya Haberciliğinde Kişilik Hakkı İhlali",
    },
    {
      label: "Çalışma Alanları",
      value: "Bireysel ve kurumsal danışmanlık",
    },
  ] satisfies FounderFact[],
} as const;
