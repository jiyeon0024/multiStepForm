import PersonalInfo from "./components/PersonalInfo";
import SideMenu from "./components/SideMenu";
import NextBtn from "./components/NextBtn";
import { useEffect, useState } from "react";
import SelectPlan from "./components/SelectPlan";
import ButtonLayout from "./components/ButtonLayout";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankModal from "./components/ThankModal";

function App() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [thankModal, setThankModal] = useState(false);

  const checkStep1 = () => {
    if (step1) {
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
      // setStep2(false);
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

      setStep4(false);
    } else {
      setStep1(false);
      setStep2(false);
      setStep3(true);
    }
  };

  const checkStep4 = () => {
    if (step4) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
    } else {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(true);
    }
  };

  useEffect(() => {}, [step1, step2, step3, step4, thankModal]);

  return (
    <div className="bg-[#f0f6ff] w-screen h-screen flex justify-center items-center">
      <div className="bg-white  p-5 rounded-lg min-w-[60%]  max-h-[100%] flex  h-[600px] ">
        <SideMenu
          checkStep1={checkStep1}
          checkStep2={checkStep2}
          checkStep3={checkStep3}
          checkStep4={checkStep4}
        />
        <div className="flex flex-col items-center pl-5 w-full  ">
          <div className="h-[600px] ">
            {step1 ? (
              <PersonalInfo />
            ) : step2 ? (
              <SelectPlan />
            ) : step3 ? (
              <AddOns />
            ) : step4 && !thankModal ? (
              <Summary />
            ) : thankModal && step4 ? (
              <ThankModal />
            ) : null}
          </div>

          {/* {thankModal ? <ThankModal /> : null} */}
          <ButtonLayout
            step1={step1}
            step4={step4}
            thankModal={thankModal}
            setThankModal={setThankModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
