import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
function AddOns({ formik }) {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleAddons = (value) => {
    let newArr = [...formik.values.addOns, value];
    formik.setFieldValue("addOns", newArr);
  };

  const filtered = (value) => {
    let filteredArr = formik.values.addOns.filter((i) => i !== value);
    formik.setFieldValue("addOns", filteredArr);
  };

  const handleCheckBox = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const handleCheckBox1 = () => {
    if (click1) {
      setClick1(false);
    } else {
      setClick1(true);
    }
  };

  const handleCheckBox2 = () => {
    if (click2) {
      setClick2(false);
    } else {
      setClick2(true);
    }
  };

  return (
    <div className=" py-5  flex flex-col items-start justify-center w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Pick add-ons</h3>
      <p className="text-gray-400 mt-3">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="w-full mt-5 flex flex-col justify-center gap-5">
        <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer">
          <div className=" flex justify-center items-center gap-4">
            <div
              onClick={() => {
                handleCheckBox();
              }}
            >
              {click ? (
                <MdCheckBox
                  onClick={() => {
                    filtered("onlineService");
                  }}
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  className="text-gray-300"
                  onClick={() => {
                    handleAddons("onlineService");
                  }}
                />
              )}
            </div>

            <div>
              <p className="text-[#02295a] font-semibold">Online service</p>
              <p className="text-gray-400">Access to multiplayer games</p>
            </div>
          </div>
          <p className="text-[#473dff] text-sm">+$1/mo</p>
        </div>
        <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer">
          <div className=" flex justify-center items-center gap-4">
            <div onClick={() => handleCheckBox1()}>
              {click1 ? (
                <MdCheckBox
                  onClick={() => {
                    filtered("largerStorage");
                  }}
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  className="text-gray-300"
                  onClick={() => {
                    handleAddons("largerStorage");
                  }}
                />
              )}
            </div>

            <div>
              <p className="text-[#02295a] font-semibold">Larger storage</p>
              <p className="text-gray-400">Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className="text-[#473dff] text-sm">+$2/mo</p>
        </div>
        <div className="  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer">
          <div className=" flex justify-center items-center gap-4">
            <div
              onClick={() => {
                handleCheckBox2();
              }}
            >
              {click2 ? (
                <MdCheckBox
                  onClick={() => {
                    filtered("customizableProfile");
                  }}
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  className="text-gray-300"
                  onClick={() => {
                    handleAddons("customizableProfile");
                  }}
                />
              )}
            </div>

            <div>
              <p className="text-[#02295a] font-semibold">
                Customizable profile
              </p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>
          <p className="text-[#473dff] text-sm">+$2/mo</p>
        </div>
      </div>
    </div>
  );
}

export default AddOns;
