import { createContext, useState } from "react";
import { Answer } from "../../lib/types";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../general/Footer";

type FormContextType = {
  currentAnswers: Answer;
  setCurrentAnswers: React.Dispatch<React.SetStateAction<Answer>>;
};

export const FormContext = createContext<FormContextType>({
  currentAnswers: { role: null, companySize: null, knowUsFrom: null },
  setCurrentAnswers: () => {},
});

function Form() {
  const [currentAnswers, setCurrentAnswers] = useState<Answer>({
    role: null,
    companySize: null,
    knowUsFrom: null,
  });

  return (
    <>
      <Navbar />
      <FormContext.Provider value={{ currentAnswers, setCurrentAnswers }}>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center gap-1 w-full max-w-[400px] h-screen px-2">
            <Outlet />
          </div>
        </div>
      </FormContext.Provider>
      <Footer isFixed={true} />
    </>
  );
}

export default Form;
