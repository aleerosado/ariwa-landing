import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Industries", href: "#industries" },
      { label: "Careers", href: "#0" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Solutions", href: "#solutions" },
      { label: "Cloud & DevOps", href: "#technology" },
      { label: "Consulting", href: "#solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "contact@ariwalabs.com", href: "mailto:contact@ariwalabs.com" },
      { label: "partners@ariwalabs.com", href: "mailto:partners@ariwalabs.com" },
      { label: "Lima, Peru", href: "#0" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#080C15] pb-10 pt-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F8FAFC]">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] transition-colors hover:text-[#22C55E]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#64748B] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ariwa Labs. All rights reserved.</p>
          <p>AI Engineering & Technology Consulting</p>
        </div>
      </div>
    </footer>
  );
}
