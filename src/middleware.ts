import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized: ({ token, req }) => {
            // Si el matcher funciona bien, esto solo se ejecuta en /dashboard
            // Pero por seguridad: si hay token, permite. Si no, verifica si es dashboard.
            if (req.nextUrl.pathname.startsWith("/dashboard")) {
                return !!token;
            }
            return true; // Permitir todo lo demás
        }
    }
});

export const config = {
    matcher: ["/dashboard/:path*"],
};
