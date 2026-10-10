export type FounderFact = {
  label: string;
  value: string;
};

export type FounderSection = {
  title: string;
  paragraphs: readonly string[];
};

/**
 * Metinler balkanhukukburosu.com/about sayfasından alındı.
 * Kaynak sitedeki “deneyiminler” yazım hatası “deneyimler” olarak düzeltildi.
 */
export const founder = {
  name: "Av. Zeynep Balkan",
  role: "Kurucu",
  summary:
    "Zeynep Balkan, 2020 yılında Yeditepe Üniversitesi Hukuk Fakültesi’nden mezun olmuş, öğrencilik dönemlerinde çeşitli hukuk bürolarında çalışarak daha mezun olmadan önce mesleki deneyimler edinmeye başlamıştır. Balkan, hukuk fakültesinden mezun olduktan sonra çeşitli köklü hukuk bürolarında avukat olarak çalışarak mesleki deneyimini arttırmıştır. Ardından 2022 yılında Balkan Hukuk Bürosu’nu kurmuştur. Balkan, İstanbul merkezli olarak bireysel ve kurumsal müvekkillere stratejik ve çözüm odaklı hukuki danışmanlık hizmetleri sunmaktadır.",
  sections: [
    {
      title: "Medyadaki Rolü: Moderatörlük",
      paragraphs: [
        "Balkan, hukuk pratiğinin yanı sıra, Business Channel Türk TV’de “Hukuk Sohbetleri” ve Yıldız En TV’de “Hukuk Saati” adlı hukuk programlarında moderatör olarak görev almıştır. Bu deneyim, hukuki konuları geniş kitlelere anlaşılır bir dille aktarma ve etkili iletişim yeteneğinin güçlü bir göstergesidir.",
      ],
    },
    {
      title: "Uzmanlık Alanları: Dijital Çağda Hukuk",
      paragraphs: [
        "Zeynep Balkan’ın kariyeri, klasik hukuki uzmanlığı dijital dünyanın getirdiği yeni hukuki zorluklarla birleştirmesiyle dikkat çekmektedir. Kariyeri boyunca edindiği derin hukuki bilgi birikimini, özellikle teknoloji ve medya alanındaki güncel gelişmelere olan benzersiz hakimiyeti ile birleştirmektedir. Balkan, Yeditepe Üniversitesi’ndeki özel hukuk yüksek lisansını, “Sosyal Medya Haberciliğinde Kişilik Haklarının İhlali” konulu teziyle tamamlamıştır. Bu çalışma, kendisinin medya hukuku, teknoloji hukuku, kişisel verilerin korunması ve dijital dönüşüm konularındaki derin bilgisini pekiştirmektedir.",
      ],
    },
    {
      title: "Vizyon ve Misyon",
      paragraphs: [
        "Güçlü analitik düşünme, müzakere ve iletişim becerileriyle karmaşık hukuki süreçlerde başarılı sonuçlar elde etmeye odaklanan Balkan, müvekkil odaklı yaklaşımı ve detaylara verdiği önemle hukukun birçok alanında güvenilir bir hizmet vermeyi amaçlamaktadır.",
        "Geleneksel hukuki pratiklerin ötesine geçerek, müvekkillerine yalnızca yasal koruma değil, aynı zamanda stratejik ve önleyici bir rekabet avantajı sunma vizyonuyla hareket etmektedir. Balkan, hukuki süreçleri bir engel olarak değil, müvekkillerinin hedeflerine ulaşmasında kritik bir kaldıraç olarak görmektedir.",
        "İster karmaşık bir ticari sözleşme, ister hızla değişen dijital ortamda bir itibar yönetimi meselesi olsun, Balkan, her durumda çözüm odaklılık, şeffaflık ve üstün iletişim becerilerini temel prensip edinmiştir. Amacı, müvekkillerinin hukuki yüklerini hafifletirken, onlara işlerinin veya hayatlarının diğer alanlarına odaklanmaları için güvenilir bir zemin hazırlamaktır.",
      ],
    },
  ] satisfies FounderSection[],
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
