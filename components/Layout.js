import { children } from "react";
import Header from "../components/Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
