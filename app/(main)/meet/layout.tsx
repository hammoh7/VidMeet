import Navbar from "@/components/meet/Navbar";
import Sidebar from "@/components/meet/Sidebar";

const MeetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-gray-800">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-5 pb-5 pt-28 max-md:pb-12 sm:px-12">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default MeetLayout;
