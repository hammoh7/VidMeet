import MeetingList from "@/components/meet/MeetingList";


const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-xl font-bold">Upcoming Meetings</h1>
      <MeetingList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;
