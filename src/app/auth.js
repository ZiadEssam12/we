// src/app/auth.js
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

class CustomError extends CredentialsSignin {
  constructor(msg) {
    super(msg);
    this.code = msg;
    this.message = msg;
    this.name = "CustomError";
    this.fails = true;
  }
}

const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userName: {
          label: "اسم المستخدم",
          type: "text",
          placeholder: "اسم المستخدم",
        },
        password: {
          label: "كلمة المرور",
          type: "password",
          placeholder: "كلمة المرور",
        },
      },
      async authorize(credentials) {
        console.log("credentials :  ", credentials);

        try {
          // Validate credentials
          if (!credentials?.userName || !credentials?.password) {
            throw new CustomError("اسم المستخدم وكلمة المرور مطلوبان");
          }

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/authorize`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userName: credentials.userName,
                password: credentials.password,
              }),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new CustomError(data.message || "بيانات الاعتماد غير صحيحة");
          }

          return {
            id: data.user.id,
            userName: data.user.userName,
            name: data.user.name,
            role: data.user.role,
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
        session.user.userName = token.userName;
        session.user.name = token.name;
        session.user.role = token.role;
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
          delete token.userName;
          delete token.name;
          delete token.role;
          // If the user is not valid, set error message
        } else {
          // Valid user, store data in token
          token.id = user.id;
          token.userName = user.userName;
          token.name = user.name;
          token.role = user.role;
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
