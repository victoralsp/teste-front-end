import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bannerExemplo from '@/assets/fullbanner-home.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './FullBanner.module.scss';

interface BannerItem {
  id: number;
  imageDesktop: string;
  imageMobile: string;
  alt: string;
}
const banners: BannerItem[] = [
  {
    id: 1,
    imageDesktop: bannerExemplo,
    imageMobile: bannerExemplo,
    alt: 'Venha conhecer nossas promoções'
  },
  // eae pessoal da econverse :D 
  // comente o bloco abaixo se quiser remover o slider e deixar 1 banner fixo
  {
    id: 2,
    imageDesktop: bannerExemplo,
    imageMobile: bannerExemplo,
    alt: '50% Off nos produtos'
  }
];

export const FullBanner = () => {

  return (
    <section className={styles.fullBanner}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <picture>
              <source media="(max-width: 1024px)" srcSet={banner.imageMobile} />
              <img src={banner.imageDesktop} alt={banner.alt} className={styles.bannerImage} />
            </picture>
            
            <div className={styles.bannerContent}>
              <div className={styles.container}>
                <h2 className={styles.title}>Venha conhecer nossas <br/> promoções</h2>
                <p className={styles.subtitle}>
                  <strong className={styles.highlight}>50% Off</strong> nos produtos
                </p>
                <button className={styles.button}>Ver produto</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};