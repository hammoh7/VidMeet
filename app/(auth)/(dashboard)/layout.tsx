import ClientProvider from "@/providers/ClientProvider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <ClientProvider>{children}</ClientProvider>
    </div>
  );
};

export default DashboardLayout;
