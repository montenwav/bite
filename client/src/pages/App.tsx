import { Header } from "../components/header/Header.js";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer.js";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
