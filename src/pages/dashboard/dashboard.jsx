import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Navigate } from "react-router-dom";
const Dashboard = () => {
  var u = JSON.parse(localStorage.getItem("user"));
    if(u == null) {
      u = "no user"
    }
    console.log(u);
  if (u == "no user") {
    
    return <Navigate to="/login" replace />;
  }

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
