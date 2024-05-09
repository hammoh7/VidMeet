//@ts-nocheck
"use client";

import { getMeetCalls } from "@/hooks/getMeetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MeetingCard from "./MeetingCard";

const MeetingList = ({
  type,
}: {
  type: "upcoming" | "done" | "recordings";
}) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    getMeetCalls();
  const router = useRouter();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
                                                                                                                                    
  const getCalls = () => {
    switch (type) {
      case "done":
        return endedCalls;
      case "recordings":
        return recordings;
      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };
  const noGetCalls = () => {
    switch (type) {
      case "done":
        return "No Previous calls";
      case "recordings":
        return "No Recordings";
      case "upcoming":
        return "No Upcoming calls";
      default:
        return '';
    }
  };

  const calls = getCalls();
  const noCalls = noGetCalls();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            title={(meeting as Call).state.custom.description.substring(0,20) || 'No description'}
            date={meeting.state.startsAt.toLocaleString() || meeting.start_time.toLocaleString()}
            isPreviousMeeting={type === "done"}
            handleClick={type === 'recordings' ? () => router.push(`${meeting.url}`) : () => router.push(`/meeting/${meeting.id}`)}
            link={type === "recordings" ? meeting.url : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`}
          />
        ))
      ) : (
        <h1>{noCalls}</h1>
      )}
    </div>
  );
};

export default MeetingList;
