import { Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center border shadow-md p-5 bg-blue-100 text-emerald-700 rounded-2xl">
          <Video className="h-8 w-8 mr-2" />
          VidMeet | Video Meeting Application
        </div>
        <div className="text-md md:text-lg items-center text-center text-zinc-500">
          <h2 className="text-xl md:text-md pb-1 pt-1 pl-2 pr-2 text-emerald-800 rounded-b-md">
            Join the Meet with VidMeet
          </h2>
        </div>
      </div>
      <div className="text-md md:text-md text-zinc-800 mt-5 max-w-sm md:max-w-xl text-center mx-auto">
        A collaborative video communication platform where connections come to life in pixels! 
        With VidMeet, your screen becomes a portal to productivity and fun, bridging distances with 
        crystal-clear video and a sprinkle of digital magic. 
      </div>
      <Button size="lg" className="mt-5 text-md" asChild>
        <Link href="/login">
            Start for Free
        </Link>
      </Button>
    </div>
  );
};

export default Home;
