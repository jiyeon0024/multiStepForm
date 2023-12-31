import React from "react";

function ConfirmBtn({ step }) {
  const checkThankModal = () => {
    if (step === 5) {
      setThankModal(true);
    }
  };
  return (
    <button
      className="text-white bg-[#473dff] rounded-md px-4 py-2 text-sm "
      onClick={() => {
        checkThankModal();
      }}
    >
      Confirm
    </button>
  );
}

export default ConfirmBtn;
