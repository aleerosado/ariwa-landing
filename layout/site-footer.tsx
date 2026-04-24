import Link from "next/link";

const footerColumns = [
  {
    title: "Compañía",
    links: [
      { label: "Nosotros", href: "#about" },
      { label: "Industrias", href: "#industries" },
      { label: "Productos", href: "#products" },
    ],
  },
  {
    title: "Soluciones",
    links: [
      { label: "IA aplicada", href: "#solutions" },
      { label: "Ingeniería de producto", href: "#solutions" },
      { label: "Cloud y datos", href: "#technology" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Perspectivas", href: "#insights" },
      { label: "Casos de uso", href: "#use-cases" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "contact@ariwalabs.com", href: "mailto:contact@ariwalabs.com" },
      { label: "partners@ariwalabs.com", href: "mailto:partners@ariwalabs.com" },
      { label: "Lima, Perú", href: "#0" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative border-t border-[#1B365D]/10 bg-[#F8F9FB] pb-10 pt-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sora text-sm font-semibold uppercase tracking-[0.12em] text-[#1B365D]">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5A6C84] transition-colors hover:text-[#E8513F]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#1B365D]/10 pt-6 text-sm text-[#6B7C95] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ariwa Labs. Todos los derechos reservados.</p>
          <p>Pensamos como startup, programamos como leyenda</p>
        </div>
      </div>
    </footer>
  );
}
