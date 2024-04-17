import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const EndButton = () => {
    const call = useCall();
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks();
    const participant = useLocalParticipant(); 
    const meetingHost = participant && call?.state.createdBy && participant.userId === call.state.createdBy.id;

    if(!meetingHost) return null;

    return ( 
        <Button onClick={async() => {
            await call.endCall();
            router.push('/meet')
        }} className="bg-red-500">
            End for Everyone
        </Button>
     );
}
 
export default EndButton;