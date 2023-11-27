import React from "react";
import NextBtn from "./NextBtn";
import GoBackBtn from "./GoBackBtn";
import ConfirmBtn from "./ConfirmBtn";

function ButtonLayout({ step1, step4, thankModal, setThankModal }) {
  return (
    <div className="flex justify-end  items-end mt-20  w-[400px] max-w-[100%]">
      {!step1 && !step4 ? (
        <div className="flex justify-between items-center w-full">
          <GoBackBtn />
          <NextBtn />
        </div>
      ) : !step1 && step4 ? (
        <div
          className={
            thankModal ? "hidden" : "flex justify-between items-center w-full"
          }
        >
          <GoBackBtn />
          <ConfirmBtn thankModal={thankModal} setThankModal={setThankModal} />
        </div>
      ) : (
        <NextBtn />
      )}
    </div>
  );
}

export default ButtonLayout;
