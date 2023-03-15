import React from 'react';

type Props = {
  children: string;
};

export const MyButton = ({ children }: Props) => {
  return (
    <button className="mt-12 bg-[#4077F3] py-4 px-7 text-base hover:bg-[#2b57bd]">
      {children}
    </button>
  );
};
