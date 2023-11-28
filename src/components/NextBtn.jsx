import React from "react";

function NextBtn({ user }) {
  return (
    <button
      className="text-white bg-[#02295a] rounded-md px-4 py-2 text-sm cursor-pointer "
      disabled={user === ""}
      onClick={() => {
        console.log(user);
        console.log("click");
      }}
    >
      Next Step
    </button>
  );
}

export default NextBtn;
