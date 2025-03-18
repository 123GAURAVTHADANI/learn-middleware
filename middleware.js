import { NextResponse } from "next/server";

export function middleware(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/products", "/orders", "/about/:path*"],
};

// next js - App Routing (Yes)
// next js - page routing