import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white flex justify-between p-5 border-b">
      <div className="flex gap-7 items-center justify-center">
        <Link className="font-bold text-2xl text-emerald-600" href="/">
          VidMeet
        </Link>
        <nav className="flex items-center gap-5 ml-5 text-gray-700 text-md">
          <Button variant="ghost" className="items-center rounded-lg text-md">
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" className="items-center rounded-lg text-md">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
      <div className="flex items-center mr-10">
      <ClerkLoading>
          <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/meet"
              afterSignUpUrl="/meet"
            >
              <Button size="lg" variant="ghost" className="items-center rounded-lg text-md">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
      
    </header>
  );
};

export default Navbar;
