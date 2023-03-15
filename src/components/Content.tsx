export const Content = () => {
  return (
    <div className="md:mt-28 flex justify-between min-h-[50vh]">
      <div className="w-[20vw]">
        <h1 className="text-5xl font-Inter">
          Зарабатывайте больше <br />
          <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fcb045] to-[#ff3f78]">
            с WELBEX
          </span>
        </h1>
        <p className="text-lg mt-7 font-Montserrat">
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className="w-3/12 text-end">
        <h2 className="text-lg font-medium">
          Вместе с
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FD1D1D] mx-1">
            БЕСПЛАТНОЙ
          </span>
          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#DF632F] mx-1">
            <br /> КОНСУЛЬТАЦИЕЙ
          </span>
          мы дарим:
        </h2>
        <div className="grid grid-cols-2 gap-y-7 mt-7">
          <div>
            <h3 className="font-medium text-lg">ВИДЖЕТЫ</h3>
            <p className="font-Montserrat">
              30 готовых <br /> решений
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg">DASHBOARD</h3>
            <p className="font-Montserrat">с показателями вашего бизнеса</p>
          </div>
          <div>
            <h3 className="font-medium text-lg">SKYPE АУДИТ</h3>
            <p className="font-Montserrat">
              отдела продаж <br /> и CRM системы
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg">35 ДНЕЙ</h3>
            <p className="font-Montserrat">
              использования <br /> CRM
            </p>
          </div>
        </div>
        <button className="mt-12 bg-[#4077F3] py-4 px-7 text-base hover:bg-[#2b57bd]">
          Получить консультацию
        </button>
      </div>
    </div>
  );
};
