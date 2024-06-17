import { Outlet } from "react-router-dom";
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
      <Outlet />
    </>
  );
}

export default App;
