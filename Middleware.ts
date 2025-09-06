import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/app/Login",
    },
})

export function middleware() {
    console.log("🚀 Middleware is running")
}
export const config = {
    matcher: ["/:path*", "/Dashboard/:path*"], // protect home + all dashboard pages
}
