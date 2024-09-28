import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar onSearch={() => {}} />
      <Outlet />
    </>
  );
};

export default Layout;
