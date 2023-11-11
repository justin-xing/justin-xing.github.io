import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Root = () => {
    let location = useLocation();

  return (
    <>
      <Header/>
      <Outlet/>
      {location.pathname !== '/' ? <Footer/> : null}
    </>
  );
};

export default Root;
