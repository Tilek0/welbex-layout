import { MyButton } from 'UI/MyButton';
import { MyText } from 'UI/MyText';
import { MyTitle } from 'UI/MyTitle';

export const ContentBox = () => {
  return (
    <div className="w-3/12 text-end">
      <div className="text-lg font-medium">
        Вместе с
        <span className="text-lg ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FD1D1D]">
          БЕСПЛАТНОЙ
        </span>
        <span className="text-lg mr-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#DF632F]">
          <br /> КОНСУЛЬТАЦИЕЙ
        </span>
        мы дарим:
      </div>
      <div className="grid grid-cols-2 gap-y-7 mt-7">
        <div>
          <MyTitle font="medium" size="lg">
            ВИДЖЕТЫ
          </MyTitle>
          <MyText>
            30 готовых <br /> решений
          </MyText>
        </div>
        <div>
          <MyTitle font="medium" size="lg">
            DASHBOARD
          </MyTitle>
          <MyText>с показателями вашего бизнеса</MyText>
        </div>
        <div>
          <MyTitle font="medium" size="lg">
            SKYPE АУДИТ
          </MyTitle>
          <MyText>
            отдела продаж <br /> и CRM системы
          </MyText>
        </div>
        <div>
          <MyTitle font="medium" size="lg">
            35 ДНЕЙ
          </MyTitle>
          <MyText>
            использования <br /> CRM
          </MyText>
        </div>
      </div>
      <MyButton>Получить консультацию</MyButton>
    </div>
  );
};
