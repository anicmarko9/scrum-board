import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req }) {
      let token: string | undefined;
      if (req.cookies.get('jwtClient')) {
        token = req.cookies.get('jwtClient')?.value;
      } else if (req.cookies.get('next-auth.session-token')) {
        token = req.cookies.get('next-auth.session-token')?.value;
      } else if (req.cookies.get('__Secure-next-auth.session-token')) {
        token = req.cookies.get('__Secure-next-auth.session-token')?.value;
      } else return false;
      return !!token;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export const config = { matcher: ['/organization/:path*'] };
