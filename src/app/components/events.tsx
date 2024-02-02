"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

type IEvents = {
  images: SlideImage[];
};

const RenderPhoto = ({
  photo,
  wrapperStyle,
  imageProps: { alt, title, sizes, className, onClick },
}: RenderPhotoProps) => (
  <div style={{ ...wrapperStyle, position: "relative" }}>
    <Image
      fill
      src={photo}
      placeholder="blur"
      blurDataURL="/img/placeholder.png"
      {...{ alt, title, sizes, className, onClick }}
    />
  </div>
);

export const Events = ({ images }: IEvents) => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(-1);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8" id="events">
      <h1 className="dark:text-white mb-4">Events</h1>
      <PhotoAlbum
        layout="rows"
        photos={images.map((img) => ({
          src: img.src,
          width: 800,
          height: 600,
        }))}
        onClick={({ index: current }) => {
          setIndex(current);
          setOpen(!open);
        }}
        renderPhoto={RenderPhoto}
      />
      <Lightbox
        captions={{
          descriptionTextAlign: "center",
        }}
        close={() => setOpen(!open)}
        index={index}
        plugins={[Captions]}
        open={open}
        slides={images}
      />
    </div>
  );
};
