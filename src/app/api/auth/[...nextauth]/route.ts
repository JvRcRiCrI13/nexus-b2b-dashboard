import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "mock-id",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-secret",
        }),
        CredentialsProvider({
            name: "Demo",
            credentials: {},
            async authorize(credentials, req) {
                return {
                    id: "demo-user-1",
                    name: "Diego Admin",
                    email: "admin@diegob2b.com",
                    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego"
                };
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: "development-secret-key-123", // Hardcoded for dev reliability
    debug: true, // Enable debug logs
});

export { handler as GET, handler as POST };
