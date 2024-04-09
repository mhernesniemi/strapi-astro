interface CldImageProps {
  dataAttributes: any; // data.attributes.image.data.attributes
  width?: number;
  alt?: string;
  resolution?: number;
}

export default function CldImage({
  width,
  alt,
  dataAttributes,
  resolution = 1.5,
}: CldImageProps) {
  const height = (width / dataAttributes.width) * dataAttributes.height;

  const retinaWidth = width * resolution;

  const wrapperStyle = {
    width: width + "px",
    height: height + "px",
  };

  return (
    <div style={wrapperStyle}>
      <img
        src={`https://res.cloudinary.com/dwrv366lk/image/upload/w_${retinaWidth},f_auto/${dataAttributes.hash}${dataAttributes.ext}`}
        width={width}
        height={height}
        decoding="async"
        loading="lazy"
        alt={alt || ""}
        className="bg-slate-100 w-full"
      />
    </div>
  );
}
