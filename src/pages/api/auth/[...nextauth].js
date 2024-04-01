import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URL, // Replace with your domain
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Removed the adapter since Firebase initialization is done in _app.js
});
