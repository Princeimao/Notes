import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { AppSidebar } from "../components/shared/AppSidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthenticatedUser } from "../context/features/userSlice";
import { Loader } from "lucide-react";
const Layout = () => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthenticatedUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/signin");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <main className="bg-primary-100 h-screen w-full text-white flex justify-center items-center">
        <Loader />
      </main>
    );
  }

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
