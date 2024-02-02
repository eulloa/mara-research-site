import Image from "next/image";

type IModal = {
  open: boolean;
  onClick: () => void;
  src: string;
};

export const Modal = ({ onClick, open, src }: IModal) => {
  if (open) {
    const url = decodeURIComponent(src.split("url=")[1]);
    const imgSrc = url.split("&")[0];

    return (
      <dialog
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/[.75] p-4"
        open={open}
      >
        <div className="bg-white h-auto">
          <div className="flex">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-end">
              <button
                className="w-[2rem] h-[2rem] text-black"
                onClick={onClick}
              >
                X
              </button>
            </div>
          </div>
          <div className="flex w-full p-4">
            <Image
              src={imgSrc}
              width="0"
              height="0"
              alt="asdf" // TODO:
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </dialog>
    );
  }

  return null;
};
