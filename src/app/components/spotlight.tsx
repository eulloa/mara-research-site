import * as React from "react";
import { Target } from "@/enums";

interface Spotlight {
  className?: string;
  message: string;
  options?: {
    href?: string;
    target?: Target;
    type?: "a" | "span";
  };
}

export const Spotlight = (props: Spotlight): JSX.Element | null => {
  let Component = null;
  const className = props?.className;
  const message = props?.message;
  const options = props?.options;
  const defaultClasses = "bg-lightBlue rounded-lg";

  const type = options?.type;
  const isAnchor = type === "a";

  if (isAnchor) {
    if (!options?.href) {
      console.error(
        "Error: HTML anchor elements must receive a valid href attribute"
      );
    }
  }

  Component = React.createElement(
    options?.type as string,
    {
      className: className ?? defaultClasses,
      href: isAnchor ? options?.href : null,
      target: isAnchor ? options?.target ?? Target.BLANK : null,
    },
    message
  );

  return Component;
};

Spotlight.displayName = "Spotlight";

