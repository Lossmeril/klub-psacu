interface SectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  ariaLabel?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  innerClassName,
  ariaLabel,
}) => {
  return (
    <section
      className={`w-full py-20 lg:py-28 ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      <div className={`max-w-6xl mx-auto px-6 ${innerClassName ?? ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
