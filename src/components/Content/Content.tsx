import { ContentBox } from './ContentBox';

export const Content = () => {
  return (
    <div className="md:mt-28 flex justify-between mb-[5rem] flex-auto">
      <div className="w-[20vw]">
        <h1 className="text-5xl font-Inter">Зарабатывайте больше</h1>
        <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fcb045] to-[#ff3f78]">
          с WELBEX
        </p>
        <p className="text-lg mt-7 font-Montserrat">
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <ContentBox />
    </div>
  );
};
