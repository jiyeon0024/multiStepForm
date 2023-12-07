import React from "react";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";

function SideMenuMobile() {
  return (
    //pass props
    <div className=" flex  gap-10 bg-[url('./images/bg-sidebar-mobile.svg')]  pt-10 justify-center bg-no-repeat bg-cover h-[30%]">
      <Bs1Circle size={30} className="text-white cursor-pointer" />
      <Bs2Circle size={30} className="text-white cursor-pointer" />
      <Bs3Circle size={30} className="text-white cursor-pointer" />
      <Bs4Circle size={30} className="text-white cursor-pointer" />
    </div>
  );
}

export default SideMenuMobile;
