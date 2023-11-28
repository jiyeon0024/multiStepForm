import React from "react";
import NextBtn from "./NextBtn";
import GoBackBtn from "./GoBackBtn";
import ConfirmBtn from "./ConfirmBtn";

function ButtonLayout({ step1, step4, thankModal, setThankModal, user }) {
  return (
    <div className="flex justify-end  items-end mt-20  w-[400px] max-w-[100%]">
      {!step1 && !step4 ? (
        <div className="flex justify-between items-center w-full">
          <GoBackBtn />
          <NextBtn user={user} />
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
        <NextBtn user={user} />
      )}
    </div>
  );
}

export default ButtonLayout;
