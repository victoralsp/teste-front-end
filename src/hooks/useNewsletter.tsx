import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useCart } from '../context/CartContext/CartContext'

export const useNewsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { showMessage } = useCart();

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 3) {
      showMessage('Preencha seu nome corretamente');
      return;
    }

    if (!validateEmail(email)) {
      showMessage('Insira um e-mail válido');
      return;
    }

    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Dados capturados:', { name, email });
      
      setStatus('success');
      showMessage('Cadastro realizado com sucesso, em breve voce receberá as novidades da Econverse!');
      
      setName('');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 5000);

    } catch (err) {
      setStatus('error');
      showMessage('Erro ao cadastrar. Tente novamente.');
    }
  };

  return {
    data: { name, email },
    status,
    handlers: {
      handleNameChange,
      handleEmailChange,
      handleSubmit,
    },
  };
};