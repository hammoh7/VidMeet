import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { List, UserSearch } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import EndButton from "./EndButton";
import { Loader } from "../Loader";

type LayoutType = "left" | "right" | "grid";

const MeetingRoom = () => {
  const [layout, setLayout] = useState<LayoutType>("left");
  const [participants, setParticipants] = useState(false);
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  const Layout = () => {
    switch (layout) {
      case "right":
        return <SpeakerLayout participantsBarPosition="left" />;
      case "grid":
        return <PaginatedGridLayout />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  if (callingState !== CallingState.JOINED) return <Loader />;

  return (
    <div className="relative h-screen w-full overflow-hidden pt-3 text-white">
      <div className="flex relative size-full items-center justify-center">
        <div className="flex size-full items-center max-w-[1000px]">
          <Layout />
        </div>
        <div
          className={cn("h-[calc(100vh-84px)] hidden ml-2", {
            "show-block": participants,
          })}
        >
          <CallParticipantsList onClose={() => setParticipants(false)} />
        </div>
      </div>
      <div className="flex flex-wrap fixed bottom-0 w-full items-center justify-center gap-3">
        <CallControls />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer px-2.5 py-2.5 rounded-3xl bg-gray-800 hover:bg-gray-600">
              <List className="h-5 w-5 text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent side="right">
            {["Grid", "Left", "Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer p-2"
                  onClick={() => {
                    setLayout(item.toLowerCase() as LayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        <Button
          className="cursor-pointer px-2.5 py-2.5 rounded-3xl bg-gray-800 hover:bg-gray-600"
          onClick={() => setParticipants((prev) => !prev)}
        >
          <div>
            <UserSearch className="h-5 w-5" />
          </div>
        </Button>

        {!isPersonalRoom && <EndButton />}
      </div>
    </div>
  );
};

export default MeetingRoom;
