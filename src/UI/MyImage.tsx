type Props = {
  src: string;
  text: string;
};

export const MyImage = ({ src, text }: Props) => {
  const red = `absolute top-14 left-[31%] -z-10 max-md:hidden`;
  const purple = `absolute top-0 right-[42%] -z-10 
    max-md:top-[25%] max-md:right-0 max-md:blur-sm`;
  const redSmall = `absolute top-[56%] right-[35%] -z-10 w-[28px] h-[28px] blur-[2px]
  max-md:top-[43%] max-md:right-[73%] max-md:w-[70px] max-md:h-[70px] max-md:blur-sm`;
  return (
    <div
      className={`${text === 'red' ? red : ''} ${text === 'purple' ? purple : ''}, ${
        text === 'redSmall' ? redSmall : ''
      }`}
    >
      <img src={src} alt="ball" />
    </div>
  );
};
