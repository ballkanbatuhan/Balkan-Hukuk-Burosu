import { ArrowLink } from "@/components/arrow-link";

export default function NotFound() {
  return (
    <article className="shell py-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-5 text-[clamp(2.6rem,6vw,4.5rem)]">Sayfa bulunamadı.</h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-muted">
        Aradığınız sayfa taşınmış veya henüz yayımlanmamış olabilir.
      </p>
      <div className="mt-10">
        <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
      </div>
    </article>
  );
}
