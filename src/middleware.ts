import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET 
  })

  const isAuthPage = request.nextUrl.pathname.startsWith("/login")
  const isProtectedPage = request.nextUrl.pathname.startsWith("/dashboard")

  // Se está tentando acessar página de login e já está autenticado, redireciona para home
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Se está tentando acessar página protegida e não está autenticado, redireciona para login
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"]
}
