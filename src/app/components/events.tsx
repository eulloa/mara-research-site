"use client";

import { useEffect, useState } from "react";
import { Gallery, Modal } from "@/components";

type IEvents = {
  images: string[];
};

export const Events = ({ images }: IEvents) => {
  const [open, setOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string | null>(null);

  const clickListener = (e: MouseEvent, src: string) => {
    setOpen(true);
    setSrc(() => src);
  };

  const escapeListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(() => false);
    }
  };

  useEffect(() => {
    const imgNodes = document.querySelectorAll(
      "#events img"
    ) as NodeListOf<HTMLImageElement>;

    imgNodes?.forEach((img) => {
      img.addEventListener("click", (e) => clickListener(e, img?.src));
    });

    return () => {
      imgNodes?.forEach((img) => {
        img.removeEventListener("click", () => clickListener);
      });
    };
  }, []);

  useEffect(() => {
    document?.addEventListener("keydown", escapeListener);

    return () => {
      document?.removeEventListener("keydown", escapeListener);
    };
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Gallery images={images} />
      <Modal onClick={() => setOpen(!open)} open={open} src={src as string} />
    </>
  );
};
