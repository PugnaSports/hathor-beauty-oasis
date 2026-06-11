import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { CTALink } from "@/components/hathor/CTAButton";
import { getProductCategoryBySlug, PRODUCTS, type Product } from "@/lib/hathor";

export const Route = createFileRoute("/productos/$categoria")({
  loader: ({ params }) => {
    const category = getProductCategoryBySlug(params.categoria);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const cat = loaderData?.category;
    const title = cat
      ? `${cat.name} — Productos Hathor`
      : "Productos — Hathor Clínica";
    const description = cat?.description ?? "Productos profesionales Hathor.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl">Categoría no encontrada</h1>
      <div className="mt-8">
        <Link
          to="/productos"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-gold"
        >
          Ver todas las categorías
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="px-6 py-32 text-center text-sm text-ink-muted">
      {error.message}
    </div>
  ),
  component: CategoriaPage,
});

function CategoriaPage() {
  const { category } = Route.useLoaderData();

  return (
    <>
      <section className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-7xl">
          <nav className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/productos" className="hover:text-ink inline-flex items-center gap-1">
              <ChevronLeft className="h-3 w-3" /> Productos
            </Link>
            <span className="mx-2 text-ink-muted/50">/</span>
            <span className="text-ink">{category.name}</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
              Productos profesionales
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05]">
              {category.name}
            </h1>
            <p className="mt-5 text-ink-muted leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((p: Product, i: number) => (
            <article
              key={p.name}
              className="reveal rounded-3xl border border-border/60 bg-background p-6 flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.image ? (
                <div className="aspect-square overflow-hidden rounded-2xl bg-white border border-border/60 flex items-center justify-center p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-square rounded-2xl bg-nude/40 flex items-center justify-center text-ink-muted/60 font-display text-xl">
                  {p.name}
                </div>
              )}
              <div className="mt-6 flex-1 flex flex-col">
                <p className="font-display text-lg text-ink leading-snug">
                  {p.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold">
                  {p.format}
                </p>
                {(p.ref || p.size) && (
                  <p className="mt-1 text-xs text-ink-muted">
                    {p.ref ? <>Ref. {p.ref}</> : null}
                    {p.ref && p.size ? " · " : null}
                    {p.size ?? null}
                  </p>
                )}
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border/60 bg-nude/30 p-10 md:p-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-4">
            ¿Necesitas asesoramiento?
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.1] max-w-2xl mx-auto">
            Te recomendamos los productos adecuados tras una valoración personalizada.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTALink to="/contacto">Solicita asesoramiento</CTALink>
            <Link
              to="/productos"
              className="inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background transition-colors"
            >
              Ver otras categorías
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Ensure tree-shaking keeps the type
export type _CategoriasDisponibles = (typeof PRODUCTS)[number]["slug"];