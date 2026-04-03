import { useState } from 'react';
import { CategorySection } from '../components/Home/CategorySection/CategorySection';
import { FullBanner } from '../components/Home/FullBanner/FullBanner';
import { ProductShelf } from '../components/Home/ProductShelf/ProductShelf';
import { ShelfTabs } from '../components/Home/ShelfTabs/ShelfTabs';
import { Header } from '../components/Layout/Header/Header/Header';
import { SectionTitle } from '../components/Common/SectionTitle/SectionTitle';
import { Partners } from '../components/Home/Partners/Partners';
import { BtnSeeAll } from '../components/Common/BtnSeeAll/BtnSeeAll';

export const Home = () => {

  const [activeTab, setActiveTab] = useState('CELULAR');
  
  return (
    <>
      <Header/>
      <main>
        <FullBanner/>
        <CategorySection/>
        <section className="container-shelf">
          <SectionTitle
            title='Produtos relacionados'
          />
          <ShelfTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <ProductShelf/>
          <Partners/>
          <SectionTitle
            title='Produtos relacionados'
          />
          <BtnSeeAll
            marginBottom={5}
          />
          <ProductShelf/>
          <Partners/>
        </section>
      </main>
    </>
  );
};