import {MouseEvent} from "react";
import {sendGAEvent} from "@next/third-parties/google";

export const handleNewsClick = (e: MouseEvent) => {
  const target = e?.target as HTMLUListElement;
  sendGAEvent("event", target?.innerText);
};

