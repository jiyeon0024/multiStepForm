import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function AddOnsCards() {
  return (
    <div className="w-full mt-5 flex flex-col justify-center gap-5">
      <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3">
        <div className=" flex justify-center items-center gap-4">
          <MdCheckBoxOutlineBlank className="text-gray-300" />
          <div>
            <p className="text-[#02295a] font-semibold">Online service</p>
            <p className="text-gray-400">Access to multiplayer games</p>
          </div>
        </div>
        <p className="text-[#473dff] text-sm">+$1/mo</p>
      </div>
      <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3">
        <div className=" flex justify-center items-center gap-4">
          <MdCheckBoxOutlineBlank className="text-gray-300" />
          <div>
            <p className="text-[#02295a] font-semibold">Larger storage</p>
            <p className="text-gray-400">Extra 1TB of cloud save</p>
          </div>
        </div>
        <p className="text-[#473dff] text-sm">+$2/mo</p>
      </div>
      <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3">
        <div className=" flex justify-center items-center gap-4">
          <MdCheckBoxOutlineBlank className="text-gray-300" />
          <div>
            <p className="text-[#02295a] font-semibold">Customizable profile</p>
            <p className="text-gray-400">Custom theme on your profile</p>
          </div>
        </div>
        <p className="text-[#473dff] text-sm">+$2/mo</p>
      </div>
    </div>
  );
}

export default AddOnsCards;
