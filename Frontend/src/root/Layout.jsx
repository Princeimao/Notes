import { Outlet } from "react-router-dom";
import Sidebar from "./pages/sidebar";

const Layout = () => {
  return (
    <main className="bg-primary-100 w-full h-screen flex">
      <div>
        <Sidebar />
      </div>

      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
