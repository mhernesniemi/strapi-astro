interface CldImageProps {
  dataAttributes: any; // data.attributes.image.data.attributes
  width?: number;
  alt?: string;
}

export default function CldImage({
  width,
  alt,
  dataAttributes,
}: CldImageProps) {
  const height = (width / dataAttributes.width) * dataAttributes.height;

  return (
    <div>
      <img
        src={`https://res.cloudinary.com/dwrv366lk/image/upload/w_${width},f_auto/${dataAttributes.hash}${dataAttributes.ext}`}
        width={width}
        height={height}
        decoding="async"
        loading="lazy"
        alt={alt || ""}
        className="bg-slate-100"
      />
    </div>
  );
}
