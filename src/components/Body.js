import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
