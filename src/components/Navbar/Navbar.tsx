import logoWelbex from 'assets/logoWelbex.svg';
import telegram from 'assets/telegram.svg';
import viber from 'assets/viber.svg';
import whatsapp from 'assets/whatsapp.svg';
import { MyIcon } from 'UI/MyIcon';
export const Navbar = () => {
  return (
    <header
      className="w-full h-[60px] max-md:pt-5 pt-10 mx-auto flex 
    justify-between max-md:justify-center
     max-md:bg-[#0e1014]"
    >
      <div className="flex gap-x-12">
        <div className="grid max-md:hidden">
          <div className="w-[140px] h-[24px]">
            <img src={logoWelbex} alt="welbexLogo" />
          </div>
          <span className="text-[10px] font-Montserrat font-light text-[var(--secondTextColor)] mt-1.5">
            крупный интегратор CRM <br /> в России и еще 8 странах
          </span>
        </div>
        <div className="flex space-x-8 max-lg:space-x-2">
          <a href="/Service">Услуги</a>
          <a href="/Widgets">Виджеты</a>
          <a href="/Integrations">Интеграции</a>
          <a href="/Cases">Кейсы</a>
          <a href="/Certificates" className="max-sm:hidden">
            Сертификаты
          </a>
        </div>
      </div>
      <div className="flex gap-x-12">
        <p className="max-xl:hidden">+7 555 555-55-55</p>
        <div className="flex gap-x-7 items-start max-lg:hidden">
          <MyIcon src={telegram} />
          <MyIcon src={viber} />
          <MyIcon src={whatsapp} />
        </div>
      </div>
    </header>
  );
};
