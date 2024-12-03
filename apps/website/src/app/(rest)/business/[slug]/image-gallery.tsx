import Image from "next/image";

export const ImageGallery = ({ sample_images }: { sample_images?: string }) => {
  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: string) => {
    const arr = item.split("/upload/");
    const newImage = arr[1] ? `${arr[0]}/upload/w_1200/${arr[1]}` : item;

    return {
      original: newImage,
      thumbnail: newImage,
    };
  });

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border">
      {images[0] && (
        <Image
          src={images[0].original}
          alt="Business"
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
};
