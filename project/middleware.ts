import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

async function fetchRefresh(refreshToken: string) {
  // const apiUrl =
  //   process.env.NODE_ENV === "production"
  //     ? process.env.PRODUCTION_API_URL
  //     : process.env.DEVELOPMENT_API_URL;

  // try {
  //   const response = await fetch(`${apiUrl}/AC/US003`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ refresh: refreshToken }),
  //   });

  //   if (response.ok) {
  //     const data: { access: string } = await response.json();

  //     const cookieStore = await cookies();

  //     cookieStore.set("access", data.access, {
  //       maxAge: 3600,
  //       path: "/",
  //       sameSite: "strict",
  //     });

  //     return true;
  //   } else {
  //     return false;
  //   }
  // } catch (error) {
  //   return false;
  // }

  return true;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const staticFilePattern = /\.(.*)$/;

  if (staticFilePattern.test(pathname)) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access");
  const refreshToken = cookieStore.get("refresh");

  if (pathname === "/login" || pathname === "/join") {
    if (accessToken && refreshToken) {
      const homeUrl = new URL("/", request.url);
      return NextResponse.redirect(homeUrl);
    }
    return NextResponse.next();
  }

  // if (!accessToken) {
  //   const loginUrl = new URL("/login", request.url);
  //   const response = NextResponse.redirect(loginUrl);

  //   if (refreshToken) {
  //     const result = await fetchRefresh(decodeURIComponent(refreshToken.value));
  //     if (!result) {
  //       response.cookies.delete("access");
  //       response.cookies.delete("refresh");
  //       return response;
  //     }

  //     return NextResponse.next();
  //   } else {
  //     response.cookies.delete("access");
  //     response.cookies.delete("refresh");
  //     return response;
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
