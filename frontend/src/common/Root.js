import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Root = () => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default Root;
