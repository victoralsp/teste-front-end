import { useState, useEffect } from 'react';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  category?: string;
}

export const useProducts = (categoryName?: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        await new Promise(resolve => setTimeout(resolve, 500));
        
        const response = await fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        const data = await response.json()
        
        const allProducts: Product[] = data.products || data;
        
        if (categoryName && categoryName !== 'CELULAR' && categoryName !== 'VER TODOS') {
          const filtered = allProducts.filter(
            (p) => p.category?.toUpperCase() === categoryName.toUpperCase()
          );
          setProducts(filtered);
        } else {
          setProducts(allProducts);
        }

      } catch (err) {
        setError('Erro ao carregar os produtos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProducts();
  }, [categoryName]);

  return { products, loading, error }
};