import React from "react";

function FinishinagUpCard() {
  return (
    <div className=" mt-5 w-full">
      <div className=" bg-[#f0f6ff] p-4 rounded-md ">
        <div className="flex justify-between items-center  ">
          <div>
            <p className="text-[#02295a] font-semibold">Arcade(Monthly)</p>
            <p className="text-gray-400 underline decoration-gray-800 ">
              Change
            </p>
          </div>
          <p className="text-[#02295a] font-semibold ">$9/mo</p>
        </div>
        <hr className="border-gray-300 mt-5 mb-5" />
        <div className="flex justify-between items-center pb-2">
          <p className="text-gray-400">Online service</p>
          <p className="text-[#02295a]  ">+$1/mo</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p className="text-gray-400">Larger storage</p>
          <p className="text-[#02295a]  ">+$2/mo</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-gray-400">Total(per month)</p>
        <p className="text-[#473dff] font-bold">+$12/mo</p>
      </div>
    </div>
  );
}

export default FinishinagUpCard;
