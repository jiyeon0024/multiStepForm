import React, { useEffect, useState } from "react";
import { prices } from "../util/prices";

function Summary({ formik, setStep }) {
  let arr = [];
  let sum = 0;

  prices.map((i) => {
    if (formik.values.period === i.period) {
      arr.push(i);
    }
  });

  //   console.log(arr);
  let summery = [];
  let addOns = [];
  let plans = [];
  arr.map((i) => {
    addOns = i.addOns;
  });

  arr.forEach((i) => {
    plans = i.plan;
  });

  Object.entries(addOns).forEach((i) => {
    // console.log(i[0]);

    if (formik.values.addOns.includes(i[0])) {
      summery.push(i[1]);
    }
  });

  Object.entries(plans).forEach((i) => {
    if (formik.values.plan.includes(i[0])) {
      summery.push(i[1]);
    }
  });

  summery.map((i) => (sum += i));

  //   console.log(summery);

  return (
    <div className="py-5  flex flex-col items-start justify-center w-[400px] max-w-[100%]">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Finishing up</h3>
      <p className="text-gray-400 mt-3">
        Double-check everything look OK before confirming.
      </p>
      <div className=" mt-5 w-full">
        <div className=" bg-[#f0f6ff] p-4 rounded-md ">
          <div className="flex justify-between items-center  ">
            <div>
              <p className="text-[#02295a] font-semibold">
                {formik.values.plan}
                <span> ({formik.values.period})</span>
              </p>
              <button
                onClick={() => {
                  setStep(2);
                }}
                className="text-gray-500 underline decoration-gray-800 hover:text-[#473dff] "
              >
                Change
              </button>
            </div>

            {formik.values.plan === "Arcade" &&
            formik.values.period === "monthly" ? (
              <p className="text-[#02295a] font-semibold ">$9/mo</p>
            ) : formik.values.paln === "Advanced" &&
              formik.values.period === "monthly" ? (
              <p className="text-[#02295a] font-semibold ">$12/mo</p>
            ) : formik.values.plan === "Pro" &&
              formik.values.period === "monthly" ? (
              <p className="text-[#02295a] font-semibold ">$15/mo</p>
            ) : null}
            {formik.values.plan === "Arcade" &&
            formik.values.period === "yearly" ? (
              <p className="text-[#02295a] font-semibold ">$90/yr</p>
            ) : formik.values.paln === "Advanced" &&
              formik.values.period === "yearly" ? (
              <p className="text-[#02295a] font-semibold ">$120/yr</p>
            ) : formik.values.plan === "Pro" &&
              formik.values.period === "yearly" ? (
              <p className="text-[#02295a] font-semibold ">$150/yr</p>
            ) : null}
          </div>
          <hr className="border-gray-300 mt-5 mb-5" />

          {formik.values.period === "monthly" ? (
            <div className="">
              {formik.values.addOns.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between text-gray-500"
                  >
                    <p>{i}</p>
                    {i === "onlineService" ? <p>+$1/mo</p> : <p>+$2/mo</p>}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="">
              {formik.values.addOns.map((i) => {
                return (
                  <div key={i} className="flex justify-between">
                    <p>{i}</p>
                    {i === "onlineService" ? <p>+$10/yr</p> : <p>+$20/yr</p>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-gray-500">
            Total
            {formik.values.period === "monthly" ? (
              <span> (per month)</span>
            ) : (
              <span> (per year)</span>
            )}
          </p>
          <p className="text-[#473dff] font-extrabold text-lg">
            {formik.values.period === "monthly" ? (
              <span> +${sum}/mo</span>
            ) : (
              <span> ${sum}/yr</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
