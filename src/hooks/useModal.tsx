import { useState, useCallback } from 'react';

export const useModal = <T = any>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  // usecallback pra evitar que a funcao seja recriada sem necessidade
  const openModal = useCallback((item?: T) => {
    if (item) setData(item);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);

    // setTimeout(() => setData(null), 3000);
  }, []);

  return {
    isOpen,
    data,
    openModal,
    closeModal
  };
};