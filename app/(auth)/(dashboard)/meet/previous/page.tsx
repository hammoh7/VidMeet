import MeetingList from "@/components/meet/MeetingList";

const PreviousPage = () => {
    return ( 
        <section className="flex size-full flex-col gap-10 text-white">
            <h1 className="text-xl font-bold">
                Previous Meetings
            </h1>
            <MeetingList type="done" />
        </section>
     );
}
 
export default PreviousPage;