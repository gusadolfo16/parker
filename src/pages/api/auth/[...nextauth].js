import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { firebaseConfig } from '../../firebaseConfig'; // Importa la configuración de Firebase

export default NextAuth({
  providers: [
    Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Puedes agregar otros proveedores aquí, como Providers.Facebook, Providers.Twitter, etc.
  ],
  firebase: {
    ...firebaseConfig, // Configuración de Firebase
  },
});
