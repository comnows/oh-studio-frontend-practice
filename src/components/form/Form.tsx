import { createContext, useState } from "react";
import { Answer } from "../../lib/types";
import { Outlet } from "react-router-dom";

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
    <FormContext.Provider value={{ currentAnswers, setCurrentAnswers }}>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-1 w-full max-w-[400px] h-screen">
          <Outlet />
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default Form;
