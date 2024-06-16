import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
