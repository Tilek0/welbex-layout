import { Content } from 'components/Content/Content';
import { Footer } from 'components/Footer/Footer';
import { Navbar } from 'components/Navbar/Navbar';

export const MainPage = () => {
  return (
    <div className="w-[var(--cotainerWidth)] mx-auto min-h-full max-md:w-full">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};
