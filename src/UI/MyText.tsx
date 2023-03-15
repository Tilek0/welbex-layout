import { ReactNode } from 'react';

type Props = {
  children: string | ReactNode;
};

export const MyText = ({ children }: Props) => {
  return <p className="font-Montserrat">{children}</p>;
};
