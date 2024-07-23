import { Header } from "../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "../Provider.jsx";
import { Footer } from "../components/footer/Footer.jsx";

export default function App() {
  return (
    <Provider>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}
