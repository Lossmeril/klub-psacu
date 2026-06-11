import Link from "next/link";
import Button from "@/components/button";
import CartoonBox from "../cartoonBox";

// ─── Base card shell ────────────────────────────────────────────────────────

interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark" | "pink";

  outline?: boolean;
}

export default function Card({
  children,
  className,
  theme = "dark",
  outline = false,
}: CardProps) {
  const themeClasses = {
    light: "bg-white border-gray-200 hover:border-pink/40",
    dark: "bg-dark border-white/10 hover:border-pink/40",
    pink: "bg-pink-400 border-pink hover:border-pink-600/40",
  };

  return (
    <>
      <div
        className={`flex flex-col gap-3 p-6 rounded-xl border transition-colors relative ${className ?? ""} ${themeClasses[theme]}`}
      >
        {outline && (
          <div
            className={`comic-box w-full h-full absolute -top-1 -left-1`}
          ></div>
        )}
        {children}
      </div>
    </>
  );
}

// ─── Variants ───────────────────────────────────────────────────────────────

export interface FeatureCardProps {
  icon: string | React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  external?: boolean;
}

export function FeatureCard({
  icon,
  tag,
  title,
  desc,
  cta,
  href,
  external,
}: FeatureCardProps) {
  return (
    <Card>
      <span className="text-3xl">{icon}</span>
      <p className="font-heading font-semibold text-pink text-xs uppercase tracking-wider">
        {tag}
      </p>
      <h3 className="font-heading font-bold text-white text-lg leading-snug">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed flex-1">{desc}</p>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white/70 hover:text-pink transition-colors mt-2"
        >
          {cta} »
        </a>
      ) : (
        <Link
          href={href}
          className="text-sm font-semibold text-white/70 hover:text-pink transition-colors mt-2"
        >
          {cta} »
        </Link>
      )}
    </Card>
  );
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  authorImage?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  authorImage,
}: TestimonialCardProps) {
  return (
    <Card theme="pink" outline>
      <p className="text-white/90 text-base flex-1 mb-4">
        &bdquo;{quote}&ldquo;
      </p>
      <footer>
        <p className="font-heading font-bold text-white">{author}</p>
        <p className="text-white/50 text-sm">{role}</p>
      </footer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          authorImage ??
          `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=1e1e1e&color=fff&size=100`
        }
        alt={author}
        className="w-20 h-20 rounded-full object-cover mt-4 absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] bg-light grid place-items-center"
      />
    </Card>
  );
}

export interface ServiceCardProps {
  title: string;
  body: string;
  cta: string;
  href: string;
}

export function ServiceCard({ title, body, cta, href }: ServiceCardProps) {
  return (
    <CartoonBox>
      <h3 className="font-heading font-bold text-xl text-dark">{title}</h3>
      <p className="text-dark/75 leading-relaxed">{body}</p>
      <div>
        <Button label={cta} href={href} transparent inverted />
      </div>
    </CartoonBox>
  );
}
