import React from "react";
import { IoToggleSharp } from "react-icons/io5";

function Proudcts() {
  return (
    <div className="w-full pt-7">
      <div className="flex gap-5 justify-start items-center w-full ">
        <div className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]">
          <img src="./images/icon-arcade.svg" alt="" className="pb-5" />
          <p className="text-[#02295a] font-bold">Arcade</p>
          <p className="text-sm text-gray-400">$9/mo</p>
        </div>
        <div className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]">
          <img src="./images/icon-advanced.svg" alt="" className="pb-5" />
          <p className="text-[#02295a] font-bold">Advanced</p>
          <p className="text-sm text-gray-400">$12/mo</p>
        </div>
        <div className="border border-gray-300 rounded-md px-2 py-3 min-w-[120px]">
          <img src="./images/icon-pro.svg" alt="" className="pb-5" />
          <p className="text-[#02295a] font-bold">Pro</p>
          <p className="text-sm text-gray-400">$15/mo</p>
        </div>
      </div>
      <div className=" bg-[#f0f6ff] rounded-md p-2 flex justify-center items-center gap-5 mt-7">
        <span className="text-[#02295a] text-sm font-semibold">Monthly</span>
        <IoToggleSharp size={30} className="rotate-180 text-[#02295a]" />
        <span className="text-sm text-gray-400 font-semibold">Yearly</span>
      </div>
    </div>
  );
}

export default Proudcts;
