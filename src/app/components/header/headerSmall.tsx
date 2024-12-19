"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Audio, Close, Open } from "@/components";
import { TClasses } from "@/types";
import { NavSmall } from "@/app/components/nav";

export const HeaderSmall = ({ classes }: TClasses): React.ReactNode => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  return (
    <>
      <div className={classes}>
        <div className="flex">
          <div className="flex-2">
            <h1 className="text-xl font-bold">
              Mara Ulloa{" "}
              <span className="font-light text-gray">HCI Researcher</span>
            </h1>
            <Audio />
          </div>
          <div className="flex flex-1 justify-end">
            <button onClick={toggle}>{open ? <Close /> : <Open />}</button>
          </div>
        </div>
      </div>
      {open
        ? createPortal(
            <NavSmall onClick={() => setOpen(!open)} />,
            document.body.querySelector("main") as HTMLElement
          )
        : null}
    </>
  );
};
