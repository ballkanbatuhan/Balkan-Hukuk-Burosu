/**
 * Görseller tek yerden yönetilir.
 * TODO: Av. Zeynep Balkan’ın gerçek portresi `public/images/zeynep-balkan-portre.jpg`
 * dosyasının üzerine yazılarak yerleştirilecek. Şu anki dosya yüz içermeyen
 * bir yer tutucudur; kendisine ait bir fotoğraf değildir.
 */
export const media = {
  portrait: {
    src: "/images/zeynep-balkan-portre.jpg",
    alt: "Av. Zeynep Balkan portresi için ayrılmış alan. Gerçek portre henüz eklenmedi.",
  },
  workspace: {
    src: "/images/calisma-ortami.jpg",
    alt: "Doğal ışık alan, sade bir çalışma masası.",
  },
  bookCover: {
    src: "/images/sosyal-medya-haberciliginde-kisilik-hakki-ihlali.png",
    alt: "Sosyal Medya Haberciliğinde Kişilik Hakkı İhlali kitap kapağı. Yazar: Av. Zeynep Balkan.",
    width: 454,
    height: 667,
  },
} as const;
