import telegram from 'assets/telegram.svg';
import viber from 'assets/viber.svg';
import whatsapp from 'assets/whatsapp.svg';
import { MyIcon } from 'UI/MyIcon';
import { MyTitle } from 'UI/MyTitle';

export const Footer = () => {
  return (
    <div
      className="flex justify-between w-full min-h-[20vh] 
    max-xl:text-sm max-[868px]:grid max-[868px]:justify-center 
    max-md:gap-y-4 max-md:bg-[#0e1014] max-md:pt-10 pb-10"
    >
      <div>
        <MyTitle size="sm" font="bold" color="var(--secondTextColor)" margin="4">
          О КОМПАНИИ
        </MyTitle>
        <p>Партнерская программа</p>
        <p>Вакансии</p>
      </div>
      <div>
        <MyTitle size="sm" font="bold" color="var(--secondTextColor)" margin="4">
          МЕНЮ
        </MyTitle>
        <div className="flex justify-between w-[25vw] gap-x-3 max-[840px]:gap-x-14">
          <div>
            <p>Расчёт стоимости</p>
            <p>Услуги</p>
            <p>Виджеты</p>
            <p>Интеграции</p>
            <p className="whitespace-nowrap">Наши клиенты</p>
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
      <div className="text-end flex flex-col gap-y-3 max-[868px]:text-start text-base">
        <MyTitle size="sm" font="bold" color="var(--secondTextColor)" margin="2">
          КОНТАКТЫ
        </MyTitle>
        <p>+7 555 555-55-55</p>
        <div className="flex gap-x-3 justify-end max-[868px]:justify-start">
          <MyIcon src={telegram} />
          <MyIcon src={viber} />
          <MyIcon src={whatsapp} />
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
