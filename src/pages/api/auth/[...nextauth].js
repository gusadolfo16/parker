import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useFirebase } from '../../utils/useFirebase'; // Import the custom hook

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
  adapter: FirebaseAdapter(() => useFirebase()), // Wrap useFirebase in a function
});
