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

  // mobile screen: start from advanced

  return (
    <div className=" py-5  flex flex-col items-start justify-center   w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">
        Select your plan
      </h3>
      <p className="text-gray-400 mt-3">
        You have the option of monthly or yearly billing.
      </p>
      <div className="w-full pt-7">
        {formik.values.period === "monthly" ? (
          <div className="sm:flex      sm:gap-5 justify-start items-center w-full ">
            <div
              onClick={() => handleSelectPlan("Arcade")}
              className={
                formik.errors.plan
                  ? "border border-red-500 rounded-md px-2 py-3 min-w-[120px] cursor-pointer sm:flex-col flex items-center sm:items-start gap-5 sm:gap-0"
                  : formik.values.plan.includes("Arcade")
                  ? "border border-[#473dff]  bg-[#f0f6ff]  rounded-md px-2 py-3 min-w-[120px] cursor-pointer sm:flex-col flex sm:items-start items-center gap-5 sm:gap-0"
                  : "border border-gray-300 rounded-md px-2 py-3 min-w-[120px] cursor-pointer sm:flex-col flex items-center gap-5 sm:items-start sm:gap-0"
              }
            >
              <div className="flex justify-center items-center">
                <img
                  src="./images/icon-arcade.svg"
                  alt=""
                  className="sm:pb-5 w-10 "
                />
              </div>
              <div>
                <label>
                  <fieldset
                    className="text-[#02295a] font-bold"
                    type="radio"
                    name="arcade"
                    value={formik.values.plan}
                  >
                    Arcade
                  </fieldset>
                </label>
                <p className="text-sm text-gray-400">$9/mo</p>
              </div>
            </div>
            <div
              onClick={() => handleSelectPlan("Advanced")}
              className={
                formik.errors.plan
                  ? "border border-red-500 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
                  : formik.values.plan.includes("Advanced")
                  ? "border border-[#473dff]  bg-[#f0f6ff]  rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
                  : "border border-gray-300 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
              }
            >
              <img src="./images/icon-advanced.svg" alt="" className="pb-5" />
              <label>
                <fieldset
                  className="text-[#02295a] font-bold"
                  type="radio"
                  name="advanced"
                  value={formik.values.plan}
                >
                  Advanced
                </fieldset>
              </label>
              <p className="text-sm text-gray-400">$12/mo</p>
            </div>
            <div
              onClick={() => handleSelectPlan("Pro")}
              className={
                formik.errors.plan
                  ? "border border-red-500 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
                  : formik.values.plan.includes("Pro")
                  ? "border border-[#473dff]  bg-[#f0f6ff]  rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
                  : "border border-gray-300 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
              }
            >
              <img src="./images/icon-pro.svg" alt="" className="pb-5" />
              <label>
                <fieldset
                  className="text-[#02295a] font-bold"
                  type="radio"
                  name="pro"
                  value={formik.values.plan}
                >
                  Pro
                </fieldset>
              </label>
              <p className="text-sm text-gray-400">$15/mo</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-5 justify-start items-center w-full ">
            <div
              onClick={() => handleSelectPlan("Arcade")}
              className={
                formik.errors.plan
                  ? "border border-red-500 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
                  : "border border-gray-300 rounded-md px-2 py-3 min-w-[120px] cursor-pointer"
              }
            >
              <img src="./images/icon-arcade.svg" alt="" className="pb-5" />
              <label>
                <fieldset
                  className="text-[#02295a] font-bold"
                  type="radio"
                  name="arcade"
                  value={formik.values.plan}
                >
                  Arcade
                </fieldset>
              </label>
              <p className="text-sm text-gray-400">$90/yr</p>
              <p className="text-[#02295a] text-xs">2 months free</p>
            </div>
            <div
              onClick={() => handleSelectPlan("Advanced")}
              className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]"
            >
              <img src="./images/icon-advanced.svg" alt="" className="pb-5" />
              <label>
                <fieldset
                  className="text-[#02295a] font-bold"
                  type="radio"
                  name="advanced"
                  value={formik.values.plan}
                >
                  Advanced
                </fieldset>
              </label>
              <p className="text-sm text-gray-400">$120/yr</p>
              <p className="text-[#02295a] text-xs">2 months free</p>
            </div>
            <div
              onClick={() => handleSelectPlan("Pro")}
              className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]"
            >
              <img src="./images/icon-pro.svg" alt="" className="pb-5" />
              <label>
                <fieldset
                  className="text-[#02295a] font-bold"
                  type="radio"
                  name="pro"
                  value={formik.values.plan}
                >
                  Pro
                </fieldset>
              </label>
              <p className="text-sm text-gray-400">$150/yr</p>
              <p className="text-[#02295a] text-xs">2 months free</p>
            </div>
          </div>
        )}

        <div
          onClick={handlePeriod}
          className=" bg-[#f0f6ff] rounded-md p-2 flex justify-center items-center gap-5 mt-7 cursor-pointer"
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
