"use client";

import { CalendarCheck2, LucideVideo, SaveIcon, UserPlus2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Meeting from "./Meeting";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";
import ReactDatePicker from "react-datepicker";

const MeetList = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [meeting, setMeeting] = useState<
    "isNewMeeting" | "isJoiningMeeting" | "isScheduleMeeting" | undefined
  >();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const { toast } = useToast();
  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({ title: "Please select Date and Time" });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Call missing!");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "New Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({ title: "Meeting Created" });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to Create Meeting",
        description: "Please try again",
      });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meet/${callDetails?.id}`

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div
        className="flex flex-col cursor-pointer bg-indigo-400 px-5 py-7 justify-between w-full xl:max-w-[250px] min-h-[250px] rounded-[12px]"
        onClick={() => setMeeting("isNewMeeting")}
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
        onClick={() => setMeeting("isJoiningMeeting")}
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
        onClick={() => setMeeting("isScheduleMeeting")}
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
        onClick={() => router.push("/meet/recordings")}
      >
        <div className="flex-center bg-red-200 size-10 rounded-[10px]">
          <SaveIcon height={24} width={24} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Recordings</h1>
          <p className="text-md">Recorded meetings</p>
        </div>
      </div>

      {!callDetails ? (
        <Meeting
          isOpen={meeting === "isScheduleMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2">
            <label className="text-base text-normal leading-[20px]">
              Meeting Description:
            </label>
            <Textarea
              className="border-none bg-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label className="text-base text-normal leading-[20px]">
              Schedule:
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm a"
              className="w-full rounded p-2 focus:outline-none"
            />
          </div>
        </Meeting>
      ) : (
        <Meeting
          isOpen={meeting === "isScheduleMeeting"}
          onClose={() => setMeeting(undefined)}
          title="Meeting Scheduled"
          className="text-center"
          buttonText="Copy link"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Copied" })
          }}
        />
      )}

      <Meeting
        isOpen={meeting === "isNewMeeting"}
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
