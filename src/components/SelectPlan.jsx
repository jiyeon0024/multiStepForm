import React from "react";
import { IoToggleSharp } from "react-icons/io5";

function SelectPlan({ formik }) {
  const handleSelectPlan = (value) => {
    formik.setFieldValue("plan", value);
  };

  const handlePeriod = () => {
    formik.setFieldValue(
      "period",
      formik.values.period === "monthly" ? "yearly" : "monthly"
    );
  };

  return (
    <div className=" py-5  flex flex-col items-start justify-center   w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">
        Select your plan
      </h3>
      <p className="text-gray-400 mt-3">
        You have the option of monthly or yearly billing.
      </p>
      <div className="w-full pt-7">
        <div className="flex gap-5 justify-start items-center w-full ">
          <div
            onClick={() => handleSelectPlan("arcade")}
            className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]"
          >
            <img src="./images/icon-arcade.svg" alt="" className="pb-5" />
            <label>
              <fieldset
                className="text-[#02295a] font-bold"
                type="radio"
                name="arcadeMonthly"
                value={formik.values.arcade}
              >
                Arcade
              </fieldset>
            </label>
            <p className="text-sm text-gray-400">$9/mo</p>
          </div>
          <div
            onClick={() => handleSelectPlan("advanced")}
            className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]"
          >
            <img src="./images/icon-advanced.svg" alt="" className="pb-5" />
            <p className="text-[#02295a] font-bold">Advanced</p>
            <p className="text-sm text-gray-400">$12/mo</p>
          </div>
          <div
            onClick={() => handleSelectPlan("pro")}
            className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]"
          >
            <img src="./images/icon-pro.svg" alt="" className="pb-5" />
            <p className="text-[#02295a] font-bold">Pro</p>
            <p className="text-sm text-gray-400">$15/mo</p>
          </div>
        </div>
        <div
          onClick={handlePeriod}
          className=" bg-[#f0f6ff] rounded-md p-2 flex justify-center items-center gap-5 mt-7"
        >
          {formik.values.period === "monthly" ? (
            <span className="text-[#02295a] text-sm font-semibold">
              Monthly
            </span>
          ) : (
            <span className="text-gray-400 text-sm font-semibold">Monthly</span>
          )}

          {formik.values.period === "monthly" ? (
            <IoToggleSharp size={30} className="rotate-180 text-[#02295a]" />
          ) : (
            <IoToggleSharp size={30} className=" text-[#02295a] " />
          )}
          {formik.values.period === "yearly" ? (
            <span className="text-sm text-[#02295a] font-semibold">Yearly</span>
          ) : (
            <span className="text-sm text-gray-400 font-semibold">Yearly</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
