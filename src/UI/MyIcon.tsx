type Props = {
  src: string;
};

export const MyIcon = ({ src }: Props) => {
  return (
    <>
      <img src={src} alt="contacts" />
    </>
  );
};
