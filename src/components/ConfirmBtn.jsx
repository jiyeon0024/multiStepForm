import React from "react";

function ConfirmBtn({ thankModal, setThankModal }) {
  console.log(thankModal);
  const checkThankModal = () => {
    if (!thankModal) {
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
