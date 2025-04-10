import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import HeaderInfo from "../../Components/Header/HeaderInfo";
import FooterCopyright from "../../Components/Footer/FooterCopyright";

function LayoutDefault() {
  return (
    <>
      <div className="">
        <header className="">
          <HeaderInfo />
          <Header />
        </header>
        <div className="">
          <Outlet />
        </div>
        <footer className="">
          <Footer />
          <FooterCopyright />
        </footer>
      </div>
    </>
  );
}
export default LayoutDefault;
