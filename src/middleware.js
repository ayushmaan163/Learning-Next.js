import { NextResponse } from "next/server";

// To redirect all pages to a single page
export function middleware1(request) {
  if (request.nextURL.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// To redirect selective pages to a particular page
export function middleware2(request) {
  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/about/:path*", "/studentList/:path*"],
};
