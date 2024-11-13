import React from "react";

const sizes = {
  large: "text-5xl",
  small: "text-xl",
};

type BangoNameProps = {
  size: "large" | "small";
};

export default function BangoName({ size }: BangoNameProps) {
  const fontSize = sizes[size];

  return <h1 className={`${fontSize} font-bango text-vistaWhite-50`}>BANGO</h1>;
}
