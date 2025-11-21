interface SectionProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  ariaLabel?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  columns,
  ariaLabel,
  className,
}) => {
  return (
    <section
      className={`w-full min-h-screen  place-content-center text-center ${className}`}
      aria-label={ariaLabel}
    >
      <div
        className={`max-w-[80%] mx-auto ${
          columns ? `grid grid-cols-${columns}` : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};
export default Section;
