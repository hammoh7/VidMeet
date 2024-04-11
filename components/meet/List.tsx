"use client";

import { CalendarCheck2, LucideVideo, SaveIcon, UserPlus2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Meeting from "./Meeting";

const MeetList = () => {
  const router = useRouter();
  const [meeting, setMeeting] = useState<'isNewMeeting' | 'isJoiningMeeting' | 'isScheduleMeeting' | undefined>()
  const createMeeting = () => {

  }
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="flex flex-col cursor-pointer bg-indigo-400 px-5 py-7 justify-between w-full xl:max-w-[250px] min-h-[250px] rounded-[12px]"
        onClick={() => setMeeting('isNewMeeting')}
      >
        <div className="flex-center bg-indigo-200 size-10 rounded-[10px]">
          <LucideVideo height={24} width={24} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">New Meeting</h1>
          <p className="text-md">Start a new meeting</p>
        </div>
      </div>
      <div
        className="flex flex-col cursor-pointer bg-blue-400 px-5 py-7 justify-between w-full xl:max-w-[250px] min-h-[250px] rounded-[12px]"
        onClick={() => setMeeting('isJoiningMeeting')}
      >
        <div className="flex-center bg-blue-200 size-10 rounded-[10px]">
          <UserPlus2 height={24} width={24} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Join Meeting</h1>
          <p className="text-md">Join meeting via invitation</p>
        </div>
      </div>
      <div
        className="flex flex-col cursor-pointer bg-violet-400 px-5 py-7 justify-between w-full xl:max-w-[250px] min-h-[250px] rounded-[12px]"
        onClick={() => setMeeting('isScheduleMeeting')}
      >
        <div className="flex-center bg-violet-200 size-10 rounded-[10px]">
          <CalendarCheck2 height={24} width={24} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Plan Meeting</h1>
          <p className="text-md">Schedule your meeting</p>
        </div>
      </div>
      <div
        className="flex flex-col cursor-pointer bg-red-400 px-5 py-7 justify-between w-full xl:max-w-[250px] min-h-[250px] rounded-[12px]"
        onClick={() => router.push('/meet/recordings')}
      >
        <div className="flex-center bg-red-200 size-10 rounded-[10px]">
          <SaveIcon height={24} width={24} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Recordings</h1>
          <p className="text-md">Recorded meetings</p>
        </div>
      </div>

      <Meeting
        isOpen={meeting === 'isNewMeeting'}
        onClose={() => setMeeting(undefined)}
        title="Start a New Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetList;
