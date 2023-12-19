import { Outlet } from "react-router-dom";
import UserFooter from "../../../components/UserFooter/index";
import UserNavbar from "../../../components/UserNavbar/index";

const UserRoot = () => {
  return (
    <>
    <UserNavbar/>
      <Outlet />
      <UserFooter/>
    </>
  );
};

export default UserRoot;
