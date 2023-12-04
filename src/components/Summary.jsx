import React, { useState } from "react";

function Summary({ formik }) {
  let arr = [];
  let sum = 0;
  const prices = [
    {
      period: "monthly",
      plan: { Arcade: 9, Advanced: 12, Pro: 15 },
      addOns: { onlineService: 1, largerStorage: 2, customizableProfile: 2 },
    },
    {
      period: "yearly",
      plan: { Arcade: 90, Advanced: 120, Pro: 150 },
      addOns: { onlineService: 10, largerStorage: 20, customizableProfile: 20 },
    },
  ];

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

  arr.map((i) => {
    plans = i.plan;
  });

  Object.entries(addOns).map((i) => {
    console.log(i[0]);

    if (formik.values.addOns.includes(i[0])) {
      summery.push(i[1]);
    }
  });

  Object.entries(plans).map((i) => {
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
                <span>({formik.values.period})</span>
              </p>
              <p className="text-gray-400 underline decoration-gray-800 ">
                Change
              </p>
            </div>

            {formik.values.plan === "Arcade" ? (
              <p className="text-[#02295a] font-semibold ">$9/mo</p>
            ) : formik.values.paln === "Advanced" ? (
              <p className="text-[#02295a] font-semibold ">$12/mo</p>
            ) : (
              <p className="text-[#02295a] font-semibold ">$15/mo</p>
            )}
          </div>
          <hr className="border-gray-300 mt-5 mb-5" />

          <div className="">
            {formik.values.addOns.map((i) => {
              return (
                <div key={i} className="flex justify-between">
                  <p>{i}</p>
                  {i === "onlineService" ? <p>+$1/mo</p> : <p>+$2/mo</p>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-[#473dff] font-bold">total</p>
          <p>+${sum}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
