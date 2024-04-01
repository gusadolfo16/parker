import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firebaseConfig } from '../../../firebaseConfig'; // Import Firebase config

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: 'https://parker-cc78y29yy-pusadolfos-projects.vercel.app/api/auth/callback/google',
    }),
    // You can add other providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: require('@next-auth/firebase-adapter')(firebaseConfig), // Use require for adapter
});