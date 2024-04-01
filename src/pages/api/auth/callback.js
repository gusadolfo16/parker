import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    // Lógica de redirección o procesamiento después de la autenticación
    router.push('/');
  }, []);

  return null; // Opcionalmente, puedes mostrar un mensaje de carga
}
