import PersonalInfo from "./components/PersonalInfo";
import SideMenu from "./components/SideMenu";
import { useFormik } from "formik";

import { useEffect, useState } from "react";
import SelectPlan from "./components/SelectPlan";

import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankModal from "./components/ThankModal";
import NextBtn from "./components/NextBtn";
import ConfirmBtn from "./components/ConfirmBtn";
import GoBackBtn from "./components/GoBackBtn";
import UserInfoSchema from "./util/formValidation";

function App() {
  const [step, setStep] = useState(1);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
      period: "monthly",
      addOns: [],
    },
    validationSchema: step === 1 ? UserInfoSchema : "",
    onSubmit: (values) => {
      console.log(values);
      switch (step) {
        case 1:
          setStep(2);
          break;
        case 2:
          setStep(3);
          break;
        case 3:
          setStep(4);
          break;
        default:
          break;
      }
    },
  });

  const dec = () => {
    if (step === 1) return;

    setStep(step - 1);
  };

  console.log(formik.values);

  return (
    <div className="bg-[#f0f6ff] w-screen h-screen flex justify-center items-center">
      <div className="bg-white  p-5 rounded-lg min-w-[50%]  max-h-[100%] flex  h-[600px] ">
        <SideMenu setStep={setStep} formik={formik} />
        <div className="flex flex-col items-center pl-5 w-full  ">
          <form onSubmit={formik.handleSubmit} className="h-[600px] ">
            {step === 1 ? (
              <PersonalInfo formik={formik} />
            ) : step === 2 ? (
              <SelectPlan formik={formik} />
            ) : step === 3 ? (
              <AddOns formik={formik} />
            ) : step === 4 ? (
              <Summary formik={formik} />
            ) : step === 5 ? (
              <ThankModal formik={formik} />
            ) : null}
            <div className="flex justify-end  items-end mt-20  w-[400px] max-w-[100%]">
              {step !== 1 && step !== 4 && step !== 5 ? (
                <div className="flex justify-between items-center w-full">
                  <GoBackBtn onClick={dec} />
                  <NextBtn />
                </div>
              ) : step !== 1 && step !== 5 ? (
                <div className={"flex justify-between items-center w-full"}>
                  <GoBackBtn onClick={dec} />
                  <ConfirmBtn step={step} />
                </div>
              ) : step !== 5 ? (
                <NextBtn />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
