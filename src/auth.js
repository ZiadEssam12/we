// src/app/auth.js
import NextAuth, { AuthError, CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

class CustomError extends CredentialsSignin {
  constructor(msg) {
    super(msg);
    this.code = msg;
    this.message = msg;
  }
}

const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Validate credentials
          if (!credentials?.email || !credentials?.password) {
            throw new CustomError("Email and password are required");
          }

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/authorize`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new CustomError(data.message || "Invalid credentials");
          }

          return {
            id: data.user.id,
            email: data.user.email,
          };
        } catch (error) {
          console.error("Authentication error:", error.message);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Only populate session if token has valid user data
      if (token && !token.error) {
        session.user.id = token.id;
        session.user.email = token.email;
        return session;
      }
      // Return empty session if there's an error
      return { user: {} };
    },

    async jwt({ token, user }) {
      // For sign-in, store user data in token
      if (user) {
        // If there was an error during sign-in
        if (user.error) {
          token.error = user.error;
          delete token.id;
          delete token.email;
          delete token.name;
        } else {
          // Valid user, store data in token
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
        }
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  trustHost: true,
  pages: {
    signIn: "/login",
  },
});

export { handlers, auth, signIn, signOut };
