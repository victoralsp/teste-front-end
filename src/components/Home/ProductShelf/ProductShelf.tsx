import { Swiper, SwiperSlide } from 'swiper/react';
import { useProducts, type Product } from '../../../hooks/useProducts';
import { useModal } from '../../../hooks/useModal';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductCard } from '../../Common/ProductCard/ProductCard';
import { ProductModal } from '../../Common/ProductModal/ProductModal'
import iconArrowLeft from '../../../assets/icons/arrowLeft.svg'
import iconArrowRight from '../../../assets/icons/arrowRight.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ProductShelf.module.scss';


interface ProductShelfProps {
  selectedCategory?: string; 
}

export const ProductShelf = ({ selectedCategory }: ProductShelfProps) => {
  const { products, loading, error } = useProducts(selectedCategory);
  const { isOpen, data, openModal, closeModal } = useModal<Product>();

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Ocorreu um erro ao carregar os produtos.</p>
      </div>
    );
  }

  return (
    <section className={styles.shelfSection}>
      <div className={styles.shelfContainer}>
        
        {products.length > 0 && (
          <button className={`${styles.arrow} ${styles.prev} swiper-prev`}>
            <img src={iconArrowLeft} alt="Anterior" />
          </button>
        )}

        <div className={styles.sliderWrapper}>
          {loading ? (
            <div className={styles.loadingPlaceholder}>Carregando produtos...</div>
          ) : products.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
              pagination={{ clickable: true }}
              spaceBetween={18}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1.4, spaceBetween: 10 },
                500: { slidesPerView: 2.2, spaceBetween: 10 },
                768: { slidesPerView: 3.2 },
                1024: { slidesPerView: 4 }
              }}
            >
              {products.map((product: Product, index: number) => (
                <SwiperSlide key={index}>
                  <ProductCard 
                    product={product} 
                    onOpenModal={() => openModal(product)} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyContent}>
                <p>Nenhum produto encontrado para "<strong>{selectedCategory}</strong>"</p>
              </div>
            </div>
          )}
        </div>

        {products.length > 0 && (
          <button className={`${styles.arrow} ${styles.next} swiper-next`}>
            <img src={iconArrowRight} alt="Próximo" />
          </button>
        )}
      </div>

      <ProductModal 
        isOpen={isOpen} 
        product={data} 
        onClose={closeModal} 
      />
    </section>
  );
};