import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firebaseConfig } from "../../../firebaseConfig"; // Import Firebase config
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URL, // Replace with your domain
    }),
    // You can add other providers here (e.g., Facebook, GitHub)
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirebaseAdapter(firebaseConfig), // Use adapter directly with firebaseConfig
});
