import { ArrowLink } from "@/components/arrow-link";

export default function NotFound() {
  return (
    <article className="section shell">
      <p className="kicker">404</p>
      <h1 className="page-title mt-4">Sayfa bulunamadı.</h1>
      <p className="lede mt-6 max-w-md">
        Aradığınız sayfa taşınmış veya henüz yayımlanmamış olabilir.
      </p>
      <div className="mt-10">
        <ArrowLink href="/">Ana sayfaya dön</ArrowLink>
      </div>
    </article>
  );
}
