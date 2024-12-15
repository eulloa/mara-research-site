import * as React from "react";
import { Target } from "@/enums";

interface Spotlight {
  className?: string;
  message: string;
  options?: {
    href: string;
    target?: Target;
    type: "a";
  };
}

export const Spotlight = (props: Spotlight): JSX.Element | null => {
  let Component = null;
  const className = props?.className;
  const message = props?.message;
  const options = props?.options;
  const defaultClasses = "bg-lightBlue rounded-lg";

  if (options?.type === "a") {
    if (!options.href) {
      console.error(
        "Error: HTML anchor elements must receive a valid href attribute"
      );

      return Component;
    }

    Component = React.createElement(
      "a",
      {
        className: className || defaultClasses,
        href: options.href,
        target: options.target || Target.SELF,
      },
      message
    );
  } else {
    Component = React.createElement(
      "span",
      { className: className || defaultClasses },
      message
    );
  }

  return Component;
};
