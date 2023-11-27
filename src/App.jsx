import PersonalInfo from "./components/PersonalInfo";
import SideMenu from "./components/SideMenu";
import NextBtn from "./components/NextBtn";
import { useEffect, useState } from "react";

function App() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const checkStep1 = () => {
    if (step1) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    } else {
      setStep1(true);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    }
  };

  const checkStep2 = () => {
    if (step2) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    } else {
      setStep2(true);
      setStep1(false);
      setStep3(false);
      setStep4(false);
    }
  };

  const checkStep3 = () => {
    if (step3) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    } else {
      setStep1(false);
      setStep2(false);
      setStep3(true);
      setStep4(false);
    }
  };

  const checkStep4 = () => {
    if (step4) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    } else {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(true);
    }
  };

  useEffect(() => {}, [step1, step2, step3, step4]);

  return (
    <div className="bg-[#f0f6ff] w-screen h-screen flex justify-center items-center">
      <div className="bg-white  p-5 rounded-lg min-w-[60%]  min-h-[60%] flex ">
        <SideMenu
          checkStep1={checkStep1}
          checkStep2={checkStep2}
          checkStep3={checkStep3}
          checkStep4={checkStep4}
        />
        <div className="flex justify-center items-start pl-5 w-full">
          {step1 ? (
            <PersonalInfo />
          ) : step2 ? (
            <div>setp2</div>
          ) : step3 ? (
            <div>step3</div>
          ) : step4 ? (
            <div>step4</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
