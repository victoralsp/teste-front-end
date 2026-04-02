
import { CategorySection } from '../components/Home/CategorySection/CategorySection';
import { FullBanner } from '../components/Home/FullBanner/FullBanner';
import { Header } from '../components/Layout/Header/Header/Header';

export const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <FullBanner/>
        <CategorySection/>
      </main>
    </>
  );
};