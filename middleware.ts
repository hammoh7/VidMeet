import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = [
  '/meet',
  '/meet/personal',
  '/meet/previous',
  '/meet/recordings',
  '/meet/upcoming',
  '/meeting(.*)',
]

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
