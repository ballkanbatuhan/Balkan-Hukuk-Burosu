export type PracticeArea = {
  slug: string;
  title: string;
  body: string;
};

/** Metinler balkanhukukburosu.com faaliyet alanı sayfalarından alındı. */
export const practiceAreas: readonly PracticeArea[] = [
  {
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    body: "İcra ve iflas hukuku, alacakların cebri icra yoluyla tahsil edilmesini ve borç ilişkilerinin zorla yerine getirilmesini düzenleyen bir hukuk dalıdır. İlamlı ve ilamsız icra takipleri, haciz işlemleri, itirazın iptali, menfi tespit, istirdat davaları, iflas ve konkordato süreçleri uygulamada en sık karşılaşılan işlemler arasındadır. Bu süreçlerde yapılacak en küçük usul hatası dahi telafisi güç hak kayıplarına neden olabilmektedir. Takip öncesinden tahsil aşamasına kadar geçen süreçte sürelerin doğru takibi, tebligat işlemleri, haciz işlemleri ve satış aşamalarının hukuka uygunluğu büyük önem taşır. Borçlu ve alacaklı arasındaki hassas denge gözetilerek her dosya dikkatle değerlendirilmektedir.",
  },
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    body: "Aile hukuku, bireylerin en özel hayat alanlarını doğrudan etkileyen, hassasiyetle yürütülmesi gereken bir hukuk dalıdır. Boşanma davaları, velayet, nafaka, maddi ve manevi tazminat, mal rejiminin tasfiyesi, soybağına ilişkin davalar, evlat edinme ve aile içi uyuşmazlıklar uygulamada en sık karşılaşılan konular arasındadır. Bu süreçler yalnızca hukuki boyutuyla değil, tarafların kişisel ve duygusal dünyalarıyla da doğrudan bağlantılıdır. Özellikle çocukların taraf olduğu uyuşmazlıklarda üstün yarar ilkesinin gözetilmesi büyük önem taşır. Aile hukukuna ilişkin davalarda tarafların haklarının korunması, kişilik haklarının zedelenmemesi ve sürecin hukuka uygun şekilde ilerlemesi adına her dosya büyük bir hassasiyetle ele alınmakta, özel hayatın gizliliği ilkesine uygun bir çalışma anlayışı benimsenmektedir.",
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    body: "İş hukuku alanı, işçi ve işveren arasındaki ilişkinin kurulmasından sona ermesine kadar geçen tüm süreci kapsayan, son derece dinamik ve teknik bir hukuk dalıdır. Bu alanda en sık karşılaşılan uyuşmazlıklar arasında kıdem ve ihbar tazminatı, fazla mesai, yıllık izin alacakları, işe iade davaları, haksız fesih iddiaları, mobbing kaynaklı tazminat talepleri ve hizmet tespiti davaları yer almaktadır. Çalışma hayatının hem ekonomik hem de sosyal boyutu olması sebebiyle, iş uyuşmazlıklarında yapılacak hukuki değerlendirme yalnızca rakamsal alacak hesaplarından ibaret değildir. Her dosyada iş sözleşmesinin niteliği, fiili çalışma düzeni, tanık beyanları, bordro kayıtları ve yargı içtihatları birlikte değerlendirilerek sürecin hukuki zemin üzerinde sağlıklı şekilde yürütülmesi amaçlanır. Arabuluculuk aşamasından dava sürecinin sonuna kadar tüm aşamalar dikkat, özen ve güncel mevzuat ışığında ele alınmaktadır.",
  },
  {
    slug: "kira-hukuku",
    title: "Kira Hukuku",
    body: "Kira hukuku, kiracı ile kiraya veren arasındaki ilişkiyi düzenleyen, uygulamada son derece geniş yer tutan bir hukuk alanıdır. Tahliye davaları, kira bedelinin tespiti ve uyarlanması, kira alacaklarının tahsili, temerrüt nedeniyle tahliye, ihtiyaç nedeniyle tahliye ve sözleşmeye aykırılıktan kaynaklanan uyuşmazlıklar bu alanda en sık karşılaşılan dava türleri arasında yer almaktadır. Kira sözleşmesinin hazırlanmasından, sözleşmenin sona ermesine kadar geçen süreçte tarafların hak ve yükümlülüklerinin doğru şekilde belirlenmesi büyük önem taşır. Özellikle son yıllarda artan kira uyuşmazlıkları, yasal düzenlemelerin yakından takip edilmesini ve her somut olayın kendi koşulları içinde değerlendirilmesini gerektirmektedir. Tahliye süreçleri, kira bedelinin belirlenmesi ve alacak taleplerinde usule ve içtihatlara uygun hareket edilmesi, hak kayıplarının önüne geçilmesi bakımından titizlikle ele alınmaktadır.",
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    body: "Ceza hukuku, kişi özgürlüğünü doğrudan etkileyen sonuçlar doğurabilen, bu nedenle son derece dikkat ve uzmanlık gerektiren bir hukuk alanıdır. Soruşturma ve kovuşturma aşamalarında şüpheli, sanık, mağdur ve müşteki sıfatıyla yer alınan tüm süreçler teknik bilgi ve titiz bir inceleme gerektirir. Delillerin hukuka uygun şekilde toplanması, ifade alma süreçleri, koruma tedbirleri, tutuklama ve adli kontrol uygulamaları ile kanun yollarının doğru şekilde işletilmesi ceza yargılamasının en kritik noktalarıdır. Bu süreçlerde her dosya, maddi gerçeğin ortaya çıkarılması ve savunma hakkının etkin şekilde kullanılması amacıyla kendi özelinde ve ayrıntılı biçimde ele alınmaktadır.",
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    body: "Miras hukuku, kişinin vefatı sonrasında malvarlığının mirasçılara nasıl intikal edeceğini düzenleyen ve aile ilişkileriyle doğrudan bağlantılı bir hukuk dalıdır. Mirasın paylaşımı, mirasçılık belgesinin alınması, muris muvazaası, tenkis davaları, izale-i şuyu davaları, mirasın reddi ve vasiyetnamenin iptali uygulamada sıkça karşılaşılan dava türlerindendir. Bu alandaki uyuşmazlıklar çoğu zaman uzun yıllara yayılan aile içi sorunlara dönüşebilmektedir. Taşınır ve taşınmaz mallar üzerindeki hakların doğru şekilde belirlenmesi, murisin iradesinin hukuka uygunluğunun değerlendirilmesi ve mirasçı haklarının korunması sürecin temelini oluşturur. Bu nedenle her miras dosyası, hem hukuki hem de insani boyutu göz önünde bulundurularak dikkatle ele alınmaktadır.",
  },
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    body: "Gayrimenkul hukuku, taşınmaz mallara ilişkin tüm hukuki işlemleri ve uyuşmazlıkları kapsayan geniş bir alandır. Tapu iptali ve tescil davaları, ortaklığın giderilmesi, kat mülkiyetinden kaynaklanan uyuşmazlıklar, ecrimisil, kamulaştırma, sınır ihtilafları ve taşınmaza ilişkin ayni haklara dayalı davalar en sık karşılaşılan dava türleridir. Taşınmazların ekonomik değeri yüksek olduğundan, burada yapılacak hukuki işlemler son derece titiz bir inceleme gerektirir. Tapu kayıtları, imar durumu, fiili kullanım ve hukuki geçmiş birlikte değerlendirilerek sürecin sağlıklı şekilde yürütülmesi amaçlanmaktadır.",
  },
  {
    slug: "tuketici-hukuku",
    title: "Tüketici Hukuku",
    body: "Tüketici hukuku, günlük yaşamda taraf olunan sözleşmelerden doğan uyuşmazlıkları düzenleyen ve özellikle zayıf durumda bulunan tüketicinin korunmasını amaçlayan bir hukuk dalıdır. Ayıplı mal ve hizmetler, bedel iadesi talepleri, garanti kapsamındaki uyuşmazlıklar, cayma hakkı, mesafeli satış sözleşmeleri, kredi sözleşmelerine ilişkin ihtilaflar ve haksız şartlar bu alanda en sık karşılaşılan uyuşmazlıklardır. Tüketici işlemlerinde çoğu zaman başvuru süreleri ve şekil şartları hak kaybına yol açabilecek kadar önemlidir. Bu nedenle uyuşmazlığın başından itibaren başvuru prosedürleri, Tüketici Hakem Heyeti ve dava süreçleri dikkatle değerlendirilmektedir.",
  },
  {
    slug: "vergi-hukuku",
    title: "Vergi Hukuku",
    body: "Vergi hukuku, devletin kamu gücüne dayanarak uyguladığı vergilendirme işlemlerinin hukuka uygunluğunu denetleyen ve mükellef haklarını koruyan bir alandır. Vergi cezaları, usulsüzlük ve özel usulsüzlük cezaları, vergi ziyaı cezaları, tarhiyat işlemleri, ödeme emirleri ve bu işlemlere karşı açılan iptal davaları bu alanda sıklıkla karşılaşılan uyuşmazlıklardır. İdarenin tesis ettiği işlemlerin hukuka uygunluk denetimi, vergilendirme sürecinin en temel güvencelerinden biridir. Tebligat süreleri, dava açma süreleri ve inceleme raporlarının değerlendirilmesi büyük teknik bilgi gerektirir. Her dosya özelinde vergi mevzuatı ve yargı kararları ışığında ayrıntılı inceleme yapılmaktadır.",
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret Hukuku",
    body: "Ticaret hukuku, ticari işletmelerin faaliyetlerinden doğan tüm hukuki ilişkileri kapsayan geniş ve teknik bir alandır. Şirket kuruluşları, ortaklık yapıları, ticari sözleşmeler, alacak davaları, cari hesap uyuşmazlıkları, haksız rekabet, çek ve senetlere ilişkin davalar ile konkordato ve iflas süreçleri bu alanda sıklıkla karşılaşılan konular arasında yer almaktadır. Ticari hayatın hızına ve karmaşık yapısına uygun olarak şirketlerin hukuki altyapılarının sağlam kurulması, olası uyuşmazlıkların önlenmesi açısından büyük önem taşır. Ticari defterler, sözleşme ilişkileri ve taraf iradeleri birlikte değerlendirilerek her dosya özelinde dikkatli bir hukuki inceleme yapılmaktadır. Böylece ticari ilişkilerin hukuka uygun şekilde sürdürülmesi hedeflenmektedir.",
  },
  {
    slug: "fikri-ve-sinai-haklar",
    title: "Fikri ve Sınai Haklar Hukuku",
    body: "Fikri ve sınai haklar hukuku; marka, patent, tasarım ve telif hakları gibi fikri emeğe dayalı hakların korunmasını amaçlayan bir hukuk dalıdır. Marka ihlalleri, taklit ürünler, izinsiz kullanım, lisans sözleşmeleri, sosyal medya ve internet ortamındaki telif hakkı ihlalleri bu alanda en sık karşılaşılan uyuşmazlıklardır. Günümüzde özellikle dijital ortamda yapılan paylaşımlar nedeniyle hak ihlalleri çok daha hızlı ve yaygın şekilde meydana gelmektedir. Hak sahipliğinin tespiti, ihlalin boyutu ve hukuki koruma yollarının belirlenmesi süreçleri teknik ve hukuki boyutlarıyla birlikte dikkatle ele alınmaktadır.",
  },
  {
    slug: "bilisim-hukuku",
    title: "Bilişim Hukuku",
    body: "Bilişim hukuku, teknolojinin gelişmesiyle birlikte her geçen gün daha fazla uygulama alanı bulan, dijital dünyanın hukuki düzenini sağlayan bir alandır. Kişisel verilerin korunması, sosyal medya kaynaklı kişilik hakkı ihlalleri, internet üzerinden işlenen suçlar, erişimin engellenmesi talepleri, içerik kaldırma başvuruları, siber zorbalık ve dijital dolandırıcılık bu alanın en sık karşılaşılan konularındandır. Dijital mecralarda yapılan paylaşımların doğurduğu hukuki sonuçlar, klasik hukuk alanlarına göre çok daha hızlı ve yaygın etki doğurabilmektedir. Bu nedenle teknik altyapı ile hukuki düzenlemelerin birlikte değerlendirilmesi, somut olayın dijital boyutu da dikkate alınarak hukuki yolun belirlenmesi büyük önem taşımaktadır.",
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getRelatedPracticeAreas(slug: string, count = 3) {
  const index = practiceAreas.findIndex((area) => area.slug === slug);
  if (index < 0) return [];

  return Array.from({ length: count }, (_, step) => {
    return practiceAreas[(index + step + 1) % practiceAreas.length];
  });
}

export function formatPracticeNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function practiceDescription(body: string) {
  const sentence = body.split(/(?<=\.)\s/)[0] ?? body;
  return sentence.length > 180 ? `${sentence.slice(0, 177).trimEnd()}…` : sentence;
}
