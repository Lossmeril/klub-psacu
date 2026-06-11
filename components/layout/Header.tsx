"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { webCompanyName } from "@/data/webGlobals";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  { label: "O mně", href: "/o-mne" },
  { label: "Klub", href: "/klub" },
  {
    label: "Spolupracujme",
    href: "/spolupracujme",
    children: [
      {
        label: "Videokurz storytellingu",
        href: "/spolupracujme/kurz-storytelling",
      },
      {
        label: "Prezenční kurz",
        href: "/spolupracujme/prezencni-kurz",
      },
      {
        label: "Redakce textu",
        href: "/spolupracujme/redakcni-prace",
      },
      {
        label: "Individuální nášup",
        href: "/spolupracujme/individualni-nasup",
      },
    ],
  },
  { label: "O knížce", href: "/kniha" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-white/10 font-heading">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold text-pink text-lg tracking-tight hover:text-pink/80 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          {webCompanyName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Hlavní navigace">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors inline-flex items-center gap-1 ${
                    isActive(item.href) ? "text-pink" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="text-xs opacity-60">▾</span>
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-dark border border-white/10 rounded-md shadow-xl min-w-52 py-1 mt-0.5">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === child.href
                          ? "text-pink"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(item.href) ? "text-pink" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 text-white"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-dark border-t border-white/10 px-6 py-4"
          aria-label="Mobilní navigace"
        >
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-pink" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pl-4 flex flex-col gap-0.5 mb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-2 py-1.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-pink"
                              : "text-white/55 hover:text-white"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}