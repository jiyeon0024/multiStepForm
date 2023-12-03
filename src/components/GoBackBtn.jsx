import React from "react";

function GoBackBtn({ onClick }) {
  return (
    <button
      type="button"
      className="text-gray-400 cursor-pointer  rounded-md  py-2 text-sm "
      onClick={() => {
        onClick();
      }}
    >
      Go Back
    </button>
  );
}

export default GoBackBtn;
