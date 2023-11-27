import React from "react";

import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";

function SideMenu() {
  return (
    <div className="bg-[url('./images/bg-sidebar-desktop.svg')]  bg-no-repeat  bg-contain p-6 rounded-lg w-1/3 ">
      <ul className="flex flex-col gap-7">
        <li className="text-white flex justify-start items-center gap-3">
          <Bs1Circle size={30} className="text-white cursor-pointer" />
          <div className="">
            <p className="text-sm text-[#d6d9e6]">STEP 1</p>
            <p className="font-semibold">YOUR INFO</p>
          </div>
        </li>
        <li className="text-white flex justify-start items-center gap-3">
          <Bs2Circle size={30} className="text-white cursor-pointer" />
          <div className="">
            <p className="text-sm text-[#d6d9e6]">STEP 2</p>
            <p className="font-semibold">SELECT PLAN</p>
          </div>
        </li>
        <li className="text-white flex justify-start items-center gap-3">
          <Bs3Circle size={30} className="text-white cursor-pointer" />
          <div className="">
            <p className="text-sm text-[#d6d9e6]">STEP 3</p>
            <p className="font-semibold">ADD-ONS</p>
          </div>
        </li>
        <li className="text-white flex justify-start items-center gap-3">
          <Bs4Circle size={30} className="text-white cursor-pointer" />
          <div className="">
            <p className="text-sm text-[#d6d9e6]">STEP 4</p>
            <p className="font-semibold">SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
