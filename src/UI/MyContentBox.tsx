import Line from 'assets/Line.svg';

type Props = {
  children: string;
};

export const MyContentBox = ({ children }: Props) => {
  return (
    <div className="flex flex-row gap-x-1">
      <img src={Line} alt="line" />
      <p className="font-Montserrat text-[13px]">{children}</p>
    </div>
  );
};
