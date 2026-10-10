export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "google";
};

/** Google İşletme Profili yorumları — mevcut sitedeki widget ile doğrulandı. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "yusuf-y",
    quote:
      "Zeynep hanım çok ilgili ve başarılı bir avukat. kiracımız ile yaşadığımız problemi çözmemize yardımcı oldu kısa sürede sonuca ulaştırdı. Çok teşekkürler..",
    author: "Yusuf Y.",
    context: "10 ay önce",
    rating: 5,
    source: "google",
  },
  {
    id: "serhat-a",
    quote:
      "En ufak detayları bile atlamadan açıklama zahmetinde bulunan Av. Zeynep Hanım a Teşekkürü bir borç bilirim.",
    author: "Serhat A.",
    context: "10 ay önce",
    rating: 5,
    source: "google",
  },
  {
    id: "aysenur-t",
    quote:
      "Her konuda bilgisi ve deneğimiyle destek aldigim Zeynep hanıma çok teşekkür ediyorum. Kendisiyle çalışmak ve düzenli hukuk danışmanlığı almaktan memnun kalacaksınız.",
    author: "Aysenur T.",
    context: "10 ay önce",
    rating: 5,
    source: "google",
  },
  {
    id: "melike-g",
    quote:
      "Zeynep Hanım, birçok konuda geniş deneyim ve bilgi birikimine sahip olup, tüm dava süreçlerimizi titizlikle takip etmektedir. Süreç boyunca yönelttiğimiz tüm soruları açıklıkla yanıtlamakta ve gereken bilgilendirmeleri zamanında sağlamaktadır. Hukuki süreçleriniz için kendisinden güvenle profesyonel destek alabilirsiniz.",
    author: "Melike G.",
    context: "10 ay önce",
    rating: 5,
    source: "google",
  },
  {
    id: "elif-k",
    quote:
      "Uzun süredir çözmeye çalıştığım bir konuda kendileriyle çalıştım ve Zeynep Hanım süreci çok titiz yönetti. Her aşamada bilgilendirildim. Profesyonellikleri için teşekkür ederim.",
    author: "Elif K.",
    context: "10 ay önce",
    rating: 5,
    source: "google",
  },
  {
    id: "ozge-s",
    quote: "Alanında uzman Avukat Zeynep Hanıma destek ve ilgisi için teşekkür ederiz.",
    author: "Ozge S.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "metin-s",
    quote: "Alanlarındaki uzman kadrosu sayesinde tüm sorunlarımı çözümlediler çok teşekkürler",
    author: "Metin S.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "berat-y",
    quote: "ilginiz icin tesekkurler cok yardımcı oldunuz",
    author: "Berat Y.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "beyza-y",
    quote: "Gösterdikleri ilgi ve alaka sayesinde olumlu sonuç aldık. İşlerinde çok iyiler",
    author: "Beyza Y.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "aladin-f",
    quote: "Hukuksal sorunum hızlı bir şekilde çözüldü ,ilgileri için çok teşekkür ederim",
    author: "Aladin F.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "ceren-s",
    quote: "İlgileri ve tüm destekleri için teşekkür ederiz",
    author: "ceren Ş.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "selin-k",
    quote: "Ofisin yeri mükemmel, avukatları da çok ilgili işlerine çok hakimler",
    author: "Selin K.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "yusuf-k",
    quote: "Teşekkür ederim çok yardımcı oldular",
    author: "Yusuf K.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
  {
    id: "emir-b",
    quote: "Yardımlarınız için çok teşekkürler.",
    author: "emir B.",
    context: "3 yıl önce",
    rating: 5,
    source: "google",
  },
];
