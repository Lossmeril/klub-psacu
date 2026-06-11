interface SectionHeadingProps {
  heading: string;
  tag?: string;
  /** Use on dark backgrounds — switches heading to text-white */
  inverted?: boolean;
  className?: string;
}

export default function SectionHeading({
  heading,
  tag,
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-14 ${className ?? ""}`}>
      {tag && (
        <p className="font-heading text-pink font-semibold uppercase tracking-widest text-sm mb-3">
          {tag}
        </p>
      )}
      <h2
        className={`font-heading font-extrabold text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-dark"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
