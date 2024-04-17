"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const MeetingSetup = ({
  setSetupComplete,
}: {
  setSetupComplete: (value: boolean) => void;
}) => {
  const [isToggledOn, setIsToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("Something went wrong!");
  }

  useEffect(() => {
    if (isToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3">
      <h1 className="text-xl font-semibold">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex h-15 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            className="h-5 w-5"
            type="checkbox"
            checked={isToggledOn}
            onChange={(e) => setIsToggledOn(e.target.checked)}
          />
          Join with Mic and Camera off
        </label>
        <div className="text-white">
          <DeviceSettings />
        </div>
      </div>
      <Button
        onClick={() => {
          call.join();
          setSetupComplete(true);
        }}
        className="rounded-md bg-blue-500 px-5 py-3 hover:bg-blue-800"
      >
        <p className="font-semibold text-white text-lg">Join Meet</p>
      </Button>
    </div>
  );
};

export default MeetingSetup;
