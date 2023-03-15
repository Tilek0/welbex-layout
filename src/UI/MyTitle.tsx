type Props = {
  children: string;
  size: string;
  font: string;
  margin?: string;
  color?: string;
};
export const MyTitle = ({ children, size, font, color, margin }: Props) => {
  return (
    <h2 className={`text-${size} font-${font} text-[${color}] mb-${margin}`}>
      {children}
    </h2>
  );
};
