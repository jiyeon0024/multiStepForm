import React from "react";
import AddOnsCards from "./AddOnsCards";
import ButtonLayout from "./ButtonLayout";

function AddOns({ step1, step4 }) {
  return (
    <div className=" py-5  flex flex-col items-start justify-center w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Pick add-ons</h3>
      <p className="text-gray-400 mt-3">
        Add-ons help hnhance your gaming experience.
      </p>
      <AddOnsCards />
      <ButtonLayout step1={step1} step4={step4} />
    </div>
  );
}

export default AddOns;
