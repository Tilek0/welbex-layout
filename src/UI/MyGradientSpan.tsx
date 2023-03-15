import { FC, ReactNode } from 'react';

type Props = {
  children: string | ReactNode;
  from: string;
  to: string;
  size: string;
  font: string;
  margin?: string;
};

export const MyGradientSpan: FC<Props> = ({ children, from, to, size, font, margin }) => {
  return (
    <span
      className={`text-${size} font-${font} mx-${margin} text-transparent bg-clip-text bg-gradient-to-r from-[${from}] to-[${to}]`}
    >
      {children}
    </span>
  );
};
