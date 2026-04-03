import { useState, useEffect } from 'react';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        const data = await response.json()
        
        setProducts(data.products || data)
      } catch (err) {
        setError('Erro ao carregar os produtos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error }
};