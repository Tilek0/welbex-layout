import { Content } from 'components/Content';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';

export const MainPage = () => {
  return (
    <div className="w-[var(--cotainerWidth)] mx-auto">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};
