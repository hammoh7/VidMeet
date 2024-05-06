"use client";

import { useMeetCalls } from "@/hooks/getMeetCalls";
import { useRouter } from "next/navigation";

const MeetingList = ({ type }: { type: 'upcoming' | 'done' | 'recordings' }) => {
    const { endedCalls, upcomingCalls, callRecordings, isLoading } = useMeetCalls();
    const router = useRouter();

    const getCalls = () => {

    }

    return ( 
        <div>
            Meeting List
        </div>
     );
}
 
export default MeetingList;