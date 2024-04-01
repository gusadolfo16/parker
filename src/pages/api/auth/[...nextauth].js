import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firebaseConfig } from '../firebaseConfig'; // Importa la configuración de Firebase

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // Puedes agregar otros proveedores aquí, como Providers.Facebook, Providers.Twitter, etc.
  ],
  secret: process.env.NEXTAUTH_SECRET,
  firebase: {
    ...firebaseConfig, // Configuración de Firebase
  },
});