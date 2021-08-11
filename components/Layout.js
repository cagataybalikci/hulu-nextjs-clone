import { Children } from "react";
import Header from "../components/Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
