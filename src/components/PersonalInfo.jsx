import React from "react";
import NextBtn from "./NextBtn";
function PersonalInfo() {
  return (
    <form className=" py-3 min-w-[500px] flex flex-col items-start justify-center ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Personal info</h3>
      <p className="text-gray-400 mt-3">
        Please provide your name, email, address, and phone number.
      </p>
      <div
        className="mt-10 flex flex-col w-full
      "
      >
        <label htmlFor="name" className="text-[#02295a] font-semibold">
          Name
        </label>
        <input type="text" className="border border-gray-300 rounded py-1" />
      </div>
      <div className="mt-4 flex flex-col w-full">
        <label htmlFor="email " className="text-[#02295a] font-semibold">
          Email Address
        </label>
        <input type="text" className="border border-gray-300 rounded py-1" />
      </div>
      <div className="mt-4 flex flex-col w-full">
        <label htmlFor="phone" className="text-[#02295a] font-semibold">
          Phone
        </label>
        <input type="text" className="border border-gray-300 rounded py-1" />
      </div>
      <div className="flex justify-end w-full items-end mt-44">
        <NextBtn />
      </div>
    </form>
  );
}

export default PersonalInfo;
