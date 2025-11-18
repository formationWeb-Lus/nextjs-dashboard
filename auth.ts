import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

/* ---------------- TEMPORARY: simulate DB ---------------- */
async function getUser(email: string): Promise<User | null> {
  // Ici tu peux remplacer par Prisma ou autre ORM
  if (email === "test@example.com") {
    return {
      id: "1",          // id doit être string
      name: "Test User",
      email,
    };
  }
  return null;
}

/* -------------------------- NextAuth -------------------------- */
export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        // 1) Valider les credentials avec Zod
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(4),
          })
          .safeParse(credentials);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // 2) Chercher l'utilisateur
        const user = await getUser(email);
        if (!user) return null;

        // 3) Vérifier mot de passe temporaire
        if (password !== "test1234") return null;

        // 4) Retourner l’utilisateur compatible NextAuth
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin", // Optionnel, page custom
  },
});
