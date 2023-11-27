import React from "react";

function ThankModal() {
  return (
    <div className="  flex flex-col items-center justify-center w-[400px] max-w-[100%] gap-3 h-full">
      <img src="./images/icon-thank-you.svg" alt="" />
      <h3 className="font-extrabold text-3xl text-[#02295a]">Thank you!</h3>
      <p className="text-gray-400 text-center text-sm ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgmailing.com.
      </p>
    </div>
  );
}

export default ThankModal;
