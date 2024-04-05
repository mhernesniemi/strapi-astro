import React from "preact/compat";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "large" | "medium" | "small";
  children: string;
  zeroMargin?: boolean;
}

export default function Heading({
  level,
  size,
  children,
  zeroMargin,
}: HeadingProps) {
  const Tag = level;

  return <Tag>{children}</Tag>;
}
