import purpleBall from 'assets/purpleBall.svg';
import redBall from 'assets/redBall.svg';
import { MyBlurBallPurple } from 'UI/MyBlurBallPurple';
import { MyBlurBallRed } from 'UI/MyBlurBallRed';

import { ContentBox } from './ContentBox';
import { MobileContentBox } from './MobileContentBox';

export const Content = () => {
  return (
    <div
      className="w-full min-h-[45vh] max-md:mt-5 mt-28 flex justify-between mb-20
      max-[840px]:flex-col
      max-[840px]:items-center overflow-hidden"
    >
      <div className="w-[300px]">
        <h1 className="text-5xl font-Inter max-sm:text-4xl">Зарабатывайте больше</h1>
        <p
          className="text-5xl max-sm:text-4xl font-black 
        text-transparent bg-clip-text bg-gradient-to-r
         from-[#fcb045] to-[#ff3f78]"
        >
          с WELBEX
        </p>
        <p className="text-lg mt-7 font-Montserrat">
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <ContentBox />
      <MobileContentBox />
      <MyBlurBallRed />
      <MyBlurBallPurple />
      <div className="absolute top-14 left-[31%] -z-10 max-md:hidden">
        <img src={redBall} alt="ball" />
      </div>
      <div
        className="absolute top-0 right-[42%] -z-10 
      max-md:top-[25%] max-md:right-0 max-md:blur-sm"
      >
        <img src={purpleBall} alt="ball" />
      </div>
      <div
        className="absolute top-[56%] right-[35%] -z-10 w-[28px] h-[28px] blur-[2px]
      max-md:top-[43%] max-md:right-[73%] max-md:w-[70px] max-md:h-[70px] max-md:blur-sm"
      >
        <img src={redBall} alt="ball" />
      </div>
    </div>
  );
};
