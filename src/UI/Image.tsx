import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type Props = {
  image: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
};
export const Image = ({ image }: Props) => {
  return <div>{image && <img {...image} alt="#" />}</div>;
};
