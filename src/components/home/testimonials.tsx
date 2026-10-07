import { EditorialImage } from "@/components/editorial-image";
import { SectionHeader, sectionBlockSpacing, sectionLedeClass } from "@/components/section-header";
import { media, testimonials } from "@/lib/content";

export function Testimonials() {
  const quotes = testimonials.slice(0, 3);

  return (
    <section aria-labelledby="guven-baslik">
      <div className="section shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              id="guven-baslik"
              kicker="Müvekkillerimizden"
              title={
                <>
                  Güven, yalnızca sonuçla değil;
                  <span className="block">süreçle de kurulur.</span>
                </>
              }
              headingClassName="heading mt-4 max-w-[18ch]"
            />
          </div>
          <figure className="lg:col-span-5 lg:pt-2">
            <EditorialImage
              src={media.justice.src}
              alt={media.justice.alt}
              zoom
              objectPosition="center 18%"
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]"
            />
            <figcaption className="mt-3.5 kicker">Adalet</figcaption>
          </figure>
        </div>

        {quotes.length > 0 ? (
          <ol className={`${sectionBlockSpacing} space-y-12 md:space-y-16`}>
            {quotes.map((item, index) => (
              <li
                key={item.id}
                className={
                  index === 1 ? "lg:ml-[18%] lg:max-w-[40rem]" : "max-w-[46rem]"
                }
              >
                <figure>
                  <blockquote>
                    <p className="quote text-ink">
                      “{item.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 kicker text-ink">
                    {item.author}
                    {item.context ? ` · ${item.context}` : null}
                    {" · "}
                    Google
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        ) : (
          <p className={`${sectionLedeClass} ${sectionBlockSpacing}`}>
            Müvekkil görüşleri, kaynakları doğrulandıktan sonra bu alanda paylaşılacak.
          </p>
        )}
      </div>
    </section>
  );
}
