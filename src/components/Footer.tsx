import telegram from 'assets/telegram.svg';
import viber from 'assets/viber.svg';
import whatsapp from 'assets/whatsapp.svg';

export const Footer = () => {
  return (
    <div className="flex justify-between w-full h-[20vh]">
      <div>
        <h2 className="text-sm font-bold text-[var(--secondTextColor)] mb-4">
          О КОМПАНИИ
        </h2>
        <p>Партнерская программа</p>
        <p>Вакансии</p>
      </div>
      <div className="-translate-x-20">
        <h2 className="text-sm font-bold text-[var(--secondTextColor)] mb-4">МЕНЮ</h2>
        <div className="flex justify-between w-[25vw]">
          <div>
            <p>Расчёт стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p>Наши клиенты</p>
          </div>
          <div>
            <p>Кейсы</p>
            <p>Благодарственные письма</p>
            <p>Сертификаты</p>
            <p>Блог на Youtube</p>
            <p>Вопрос / Ответ</p>
          </div>
        </div>
      </div>
      <div className="text-end flex flex-col gap-y-3">
        <h2 className="text-sm font-bold text-[var(--secondTextColor)] mb-4">КОНТАКТЫ</h2>
        <p>+7 555 555-55-55</p>
        <div className="flex gap-x-3 justify-end">
          <img src={telegram} alt="telegram" />
          <img src={viber} alt="viber" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <p className="text-xs font-Montserrat mt-12">
          ©WELBEX 2022. Все права защищены. <br />
          <u>Политика конфиденциальности</u>
        </p>
      </div>
    </div>
  );
};
