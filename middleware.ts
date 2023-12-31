// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);

//   const accessToken = request.cookies.get("accessToken")?.value;

//   if (!accessToken) {
//     const response = new NextResponse(
//       JSON.stringify({ success: false, message: "auth failed" }),
//       { status: 401, headers: { "content-type": "application/json" } }
//     );
//     response.cookies.delete("accessToken");
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   try {
//     const { verifiedJwt } = await (
//       await fetch(request.nextUrl.origin + "/api/auth/authorize", {
//         method: "post",
//         body: JSON.stringify({ accessToken }),
//       })
//     ).json();

//     if (!verifiedJwt) {
//       return new NextResponse(
//         JSON.stringify({ success: false, message: "auth failed" }),
//         { status: 401, headers: { "content-type": "application/json" } }
//       );
//     }

//     requestHeaders.set("verifiedJwt", JSON.stringify(verifiedJwt));

//     // You can also set request headers in NextResponse.rewrite
//     const response = NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });

//     return response;
//   } catch (err) {
//     console.log("err ", err);
//     const response = new NextResponse(
//       JSON.stringify({ success: false, message: "auth failed" }),
//       { status: 401, headers: { "content-type": "application/json" } }
//     );
//     response.cookies.delete("accessToken");
//     return response;
//   }
// }

// export const config = {
//   matcher: ["/api/users", "/users"],
// };

// Web 2 Middleware

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublic = path === '/signin' || path === '/signup'

  const token = request.cookies.get('token')?.value || '';

  if(isPublic && token || token && path === '/')
  {
    return NextResponse.redirect(new URL('/Profile',request.nextUrl))
  }

  if(!isPublic && !token && path !== '/')
  {
    return NextResponse.redirect(new URL('/',request.nextUrl))
  }



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/Profile',
    '/signup',
    '/signin'

  ],
}

