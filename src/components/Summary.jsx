import React from "react";
import FinishinagUpCard from "./FinishinagUpCard";

function Summary() {
  return (
    <div className="py-5  flex flex-col items-start justify-center w-[400px] max-w-[100%]">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Finishing up</h3>
      <p className="text-gray-400 mt-3">
        Double-check everything look OK before confirming.
      </p>
      <FinishinagUpCard />
    </div>
  );
}

export default Summary;
