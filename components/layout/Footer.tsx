import Link from "next/link";
import { webCompanyName } from "@/data/webGlobals";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/klub_psacu/" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7dTARZQmi66hUrNix1WuKg",
  },
  { label: "YouTube", href: "https://www.youtube.com/@klub_psacu" },
  { label: "Discord", href: "https://discord.gg/7BP3FRj5PT" },
];

const quickLinks = [
  { label: "O mně", href: "/o-mne" },
  { label: "Klub", href: "/klub" },
  { label: "Spolupracujme", href: "/spolupracujme" },
  { label: "O knížce", href: "/kniha" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Zásady cookies", href: "/zasady-cookies" },
  { label: "Obchodní podmínky a GDPR", href: "/obchodni-podminky" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white font-heading">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & contact */}
          <div>
            <p className="font-extrabold text-xl text-pink">{webCompanyName}</p>
            <p className="text-white/50 text-sm mt-1 mb-4">Petr Hanel</p>
            <a
              href="mailto:petr@klubpsacu.cz"
              className="text-sm text-white/70 hover:text-pink transition-colors"
            >
              petr@klubpsacu.cz
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
              Navigace
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-pink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
              Sleduj mě
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-pink transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-white/80 text-xs">
          <p>Vytvořil Michal Špitálský, © {new Date().getFullYear()} </p>
          <div className="flex gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-white/60 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
