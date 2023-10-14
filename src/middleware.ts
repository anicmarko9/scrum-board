// import { getSession } from 'next-auth/react';
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const session = await getSession({ req });

//   if (!session) {
//     const url = new URL('/api/auth/signin', req.url);
//     url.searchParams.set('callbackUrl', encodeURI(req.url));
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/protected/:path*',
// };

import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
// paths that require authentication or authorization
const requireAuth: string[] = ['/protected'];
export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
      secret: process.env.SECRET,
    });
    //check not logged in
    if (!token) {
      const url = new URL(`/signin`, request.url);
      url.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }
  return res;
}
