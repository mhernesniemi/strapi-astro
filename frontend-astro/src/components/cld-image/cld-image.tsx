interface CldImageProps {
  id: string;
  width: string;
  ext: string;
}

export default function CldImage({ id, width, ext }: CldImageProps) {
  return (
    <div>
      <img
        src={`https://res.cloudinary.com/dwrv366lk/image/upload/w_${width},f_auto/${id}${ext}`}
      />
    </div>
  );
}
