import { MyContentBox } from 'UI/MyContentBox';

import { ContentTitle } from './ContentTitle';
export const MobileContentBox = () => {
  return (
    <div className="md:hidden w-[300px]">
      <ContentTitle />
      <div className="grid grid-cols-2 gap-y-4">
        <MyContentBox>SKYPE АУДИТ</MyContentBox>
        <MyContentBox>30 ВИДЖЕТОВ</MyContentBox>
        <MyContentBox>DASHBOARD</MyContentBox>
        <MyContentBox>МЕСЯЦ AMOCRM</MyContentBox>
      </div>
    </div>
  );
};
