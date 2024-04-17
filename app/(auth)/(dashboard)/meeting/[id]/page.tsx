"use client";

import { Loader } from "@/components/Loader";
import MeetingRoom from "@/components/meet/MeetingRoom";
import MeetingSetup from "@/components/meet/MeetingSetup";
import { getCallById } from "@/hooks/getCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const MeetingPage = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [setupComplete, setSetupComplete] = useState(false);
  const { call, callLoading } = getCallById(id);

  if (!isLoaded || callLoading) return <Loader />;

  return (
    <div className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!setupComplete ? (
            <MeetingSetup setSetupComplete={setSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </div>
  );
};

export default MeetingPage;
