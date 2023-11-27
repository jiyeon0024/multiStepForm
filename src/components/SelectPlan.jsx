import React from "react";
import ButtonLayout from "./ButtonLayout";
import Proudcts from "./Proudcts";

function SelectPlan() {
  return (
    <div className=" py-5  flex flex-col items-start justify-center   w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">
        Select your plan
      </h3>
      <p className="text-gray-400 mt-3">
        You have the option of monthly or yearly billing.
      </p>
      <Proudcts />
    </div>
  );
}

export default SelectPlan;
