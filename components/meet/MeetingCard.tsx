"use client";

import { Calendar, CopyCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  isPreviousMeeting?: boolean;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  title,
  date,
  isPreviousMeeting,
  handleClick,
  link,
}: MeetingCardProps) => {
  const { toast } = useToast();
  return (
    <section className="flex min-h-[250px] w-full px-5 py-9 flex-col justify-between rounded-[10px] xl:max-w-[500px]">
      <div className="flex flex-col gap-4">
        <Calendar height={30} width={30} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </div>
      {!isPreviousMeeting && (
        <div className="flex gap-2">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(link);
              toast({
                title: "Link copied",
              });
            }}
            className="bg-blue-500 px-5"
          >
            <CopyCheck height={15} width={15} className="mr-2" />
            Copy
          </Button>
        </div>
      )}
    </section>
  );
};

export default MeetingCard;
