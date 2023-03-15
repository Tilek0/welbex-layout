import logoWelbex from 'assets/logoWelbex.svg';
import telegram from 'assets/telegram.svg';
import viber from 'assets/viber.svg';
import whatsapp from 'assets/whatsapp.svg';
export const Navbar = () => {
  return (
    <header className="w-full h-[60px] mt-10 mx-auto flex justify-between pt-2">
      <div className="flex gap-x-12">
        <div className="grid">
          <div className="w-[140px] h-[24px]">
            <img src={logoWelbex} alt="welbexLogo" />
          </div>
          <span className="text-[10px] font-Montserrat font-light text-[var(--secondTextColor)] mt-1.5">
            крупный интегратор CRM <br /> в России и еще 8 странах
          </span>
        </div>
        <div className="flex space-x-8">
          <a>Услуги</a>
          <a>Виджеты</a>
          <a>Интеграции</a>
          <a>Кейсы</a>
          <a>Сертификаты</a>
        </div>
      </div>
      <div className="flex gap-x-12">
        <p className="text-right">+7 555 555-55-55</p>
        <div className="flex gap-x-7 items-start">
          <img src={telegram} alt="telegram" />
          <img src={viber} alt="viber" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
    </header>
  );
};
