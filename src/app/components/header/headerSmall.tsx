"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Audio } from "@/components";
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
          <div className="flex-1">
            <h1 className="text-2xl">Mara Ulloa</h1>
            <Audio />
          </div>
          <div className="flex flex-1 justify-end">
            <button onClick={toggle}>
              <Image
                src={open ? "/img/close.svg" : "/img/open.svg"}
                width="50"
                height="50"
                alt="Toggle mobile nav"
              />
            </button>
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
