import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/home/Home.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/general/Footer.tsx";
import Form from "./components/form/Form.tsx";
import RoleForm from "./components/form/questions/RoleForm.tsx";
import CompanySizeForm from "./components/form/questions/CompanySizeForm.tsx";
import KnowUsFromForm from "./components/form/questions/KnowUsFromForm.tsx";
import WelcomeForm from "./components/form/WelcomeForm.tsx";
import ThankForm from "./components/form/ThankForm.tsx";
import ResultForm from "./components/form/ResultForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Home />,
      },
      {
        path: "contact",
        element: (
          <>
            <Contact size="page" />
            <Footer isFixed={true} />
          </>
        ),
      },
      {
        path: "form",
        element: (
          <>
            <Form />
          </>
        ),
        children: [
          {
            index: true,
            element: <WelcomeForm />,
          },
          {
            path: "role",
            element: <RoleForm />,
          },
          {
            path: "companysize",
            element: <CompanySizeForm />,
          },
          {
            path: "knowusfrom",
            element: <KnowUsFromForm />,
          },
          {
            path: "thank",
            element: <ThankForm />,
          },
          {
            path: "result",
            element: <ResultForm />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
