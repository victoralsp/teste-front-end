import { Swiper, SwiperSlide } from 'swiper/react';
import productsData from '@/data/products.json';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../../Common/ProductCard/ProductCard';
import iconArrowLeft from '../../../assets/icons/arrowLeft.svg'
import iconArrowRight from '../../../assets/icons/arrowRight.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ProductShelf.module.scss';

interface ProductData {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export const ProductShelf = () => {
  return (
    <section className={styles.shelfSection}>
      <div className={styles.shelfContainer}>
        
        <button className={`${styles.arrow} ${styles.prev} swiper-prev`}>
          <img src={iconArrowLeft} alt="Anterior" />
        </button>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-prev', 
              nextEl: '.swiper-next'
            }}
            spaceBetween={18}
            slidesPerView={4}
            watchSlidesProgress={true}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 }
            }}
          >
            {productsData.products.map((product: ProductData, index: number) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className={`${styles.arrow} ${styles.next} swiper-next`}>
          <img src={iconArrowRight} alt="Próximo" />
        </button>

      </div>
    </section>
  );
};