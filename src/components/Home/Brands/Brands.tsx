import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Brands.module.scss';
import logoEconverse from '@/assets/logoEconverse.png';

export const Brands = () => {

  const brands = Array(5).fill(logoEconverse);

  return (
    <section className={styles.brandsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Navegue por marcas</h2>
        
        <div className={styles.sliderWrapper}>
          <Swiper
            slidesPerView={5}
            spaceBetween={22}
            breakpoints={{
              320: { slidesPerView: 3.3, spaceBetween: 5 },
              450: { slidesPerView: 4.5 },
              650: { slidesPerView: 5 },
              1024: { slidesPerView: 5 }
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.brandCircle}>
                  <img src={brand} alt="Marca" className={styles.brandImage} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};