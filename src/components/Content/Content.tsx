import purpleBall from 'assets/purpleBall.svg';
import redBall from 'assets/redBall.svg';
import { MyBlurBallPurple } from 'UI/MyBlurBallPurple';
import { MyBlurBallRed } from 'UI/MyBlurBallRed';
import { MyImage } from 'UI/MyImage';

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
      <MyImage src={redBall} text="red" />
      <MyImage src={purpleBall} text="purple" />
      <MyImage src={redBall} text="redSmall" />
    </div>
  );
};
