import Image from "next/image";

type IGallery = {
  images: string[];
};

export const Gallery = ({ images }: IGallery) => (
  <div id="events" className="mt-10">
    <ul className="flex flex-wrap gap-x-4">
      {images.map((img, i) => (
        <li className="basis-1/4 flex-auto" key={`${i}-${img}`}>
          <Image
            loading="lazy"
            className="w-full"
            alt="image"
            src={`/img/events/${img}`}
            placeholder="empty"
            width={100}
            height={100}
          />
        </li>
      ))}
    </ul>
  </div>
);
