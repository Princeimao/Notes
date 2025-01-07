import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/shared/AppSidebar";
const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-primary-100 h-screen w-full">
        {/* <SidebarTrigger /> */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
