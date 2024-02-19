import Sidebar from "./_components/sidebar";

function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <div className="hidden md:flex h-full w-56 flex-col inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
export default Dashboardlayout;
