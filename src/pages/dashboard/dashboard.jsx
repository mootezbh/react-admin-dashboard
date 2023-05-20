import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className="row main-content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
