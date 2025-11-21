import React from "react";

import Link from "next/link";
import { webButtonArrow } from "@/data/webGlobals";

interface ButtonProps {
  label: string;
  href?: string;

  transparent?: boolean;
  inverted?: boolean;
  monochrome?: boolean;

  className?: string;

  onClick?: () => void;
}

const ButtonInside: React.FC<ButtonProps> = ({
  label,
  transparent,
  inverted,
  monochrome,
  className,
}: {
  label: string;
  transparent?: boolean;
  inverted?: boolean;
  monochrome?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`${className} font-semibold border-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink ${
        !transparent
          ? !inverted
            ? !monochrome
              ? "bg-pink border-pink text-white hover:bg-transparent hover:border-white px-3.5 py-2.5 "
              : "bg-dark text-white hover:bg-dark/70 px-3.5 py-2.5 "
            : !monochrome
            ? "bg-light text-pink hover:light/90 px-3.5 py-2.5 "
            : "bg-light text-dark hover:bg-light/90 px-3.5 py-2.5 "
          : !inverted
          ? !monochrome
            ? "border-none bg-transparent text-pink hover:text-white px-0"
            : "border-none bg-transparent text-white hover:text-white/60 px-0"
          : !monochrome
          ? "border-none bg-transparent text-pink hover:text-dark px-0"
          : "border-none bg-transparent text-dark hover:text-dark/60 px-0"
      } `}
    >
      {label + " " + webButtonArrow}
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  transparent,
  inverted,
  monochrome,
  onClick,
  className,
}) => {
  return (
    <>
      {href ? (
        <Link href={href} onClick={onClick}>
          <ButtonInside
            label={label}
            transparent={transparent}
            inverted={inverted}
            monochrome={monochrome}
            className={className}
          />
        </Link>
      ) : onClick ? (
        <button onClick={onClick}>
          <ButtonInside
            label={label}
            transparent={transparent}
            inverted={inverted}
            monochrome={monochrome}
            className={className}
          />
        </button>
      ) : (
        <ButtonInside
          label={label}
          transparent={transparent}
          inverted={inverted}
          monochrome={monochrome}
          className={className}
        />
      )}
    </>
  );
};

export default Button;
