import { Link, Outlet } from "react-router-dom"; 
// import Navbar from "../components/Navbar";
import Navbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};
export default SharedLayout;
