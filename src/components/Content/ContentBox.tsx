import { MyButton } from 'UI/MyButton';
import { MyText } from 'UI/MyText';
import { MyTitle } from 'UI/MyTitle';

import { ContentTitle } from './ContentTitle';

export const ContentBox = () => {
  return (
    <div className="w-[300px] text-end max-[840px]:text-start max-md:hidden">
      <ContentTitle />
      <div className="grid grid-cols-2 gap-x-3 gap-y-7 mt-7">
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
