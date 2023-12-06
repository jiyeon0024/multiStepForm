import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

function AddOns({ formik }) {
  const handleAddons = (value) => {
    if (formik.values.addOns.indexOf(value) < 0) {
      let newArr = [...formik.values.addOns, value];
      formik.setFieldValue("addOns", newArr);
    } else {
      let filteredArr = formik.values.addOns.filter((i) => i !== value);
      formik.setFieldValue("addOns", filteredArr);
    }
  };

  console.log(formik.values.addOns);

  // 1 = render the clicky cards
  // 2 - get the current values of addons
  // 3 - if addons.indexof addon > -1 show border
  // 4 - when clicking card call function
  // if add on is selected filter it out of the array
  //  if add on is not selected {...addons, value}

  return (
    <div className=" py-5  flex flex-col items-start justify-center w-[400px] max-w-[100%] ">
      <h3 className="font-extrabold text-3xl text-[#02295a]">Pick add-ons</h3>
      <p className="text-gray-400 mt-3">
        Add-ons help enhance your gaming experience.
      </p>
      {formik.values.period === "monthly" ? (
        <div className="w-full mt-5 flex flex-col justify-center gap-5 ">
          <div
            onClick={() => {
              handleAddons("onlineService");
            }}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("onlineService")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("onlineService") ? (
                  <MdCheckBox className="text-[#473dff] " />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <fieldset
                  className="text-[#02295a] font-semibold"
                  type="radio"
                  name="onlineService"
                  value={formik.values.addOns}
                >
                  Online service
                </fieldset>

                <p className="text-gray-400">Access to multiplayer games</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$1/mo</p>
          </div>
          <div
            onClick={() => handleAddons("largerStorage")}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("largerStorage")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("largerStorage") ? (
                  <MdCheckBox className="text-[#473dff]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <fieldset
                  className="text-[#02295a] font-semibold"
                  type="radio"
                  name="largerStorage"
                  value={formik.values.addOns}
                >
                  Larger storage
                </fieldset>

                <p className="text-gray-400">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$2/mo</p>
          </div>
          <div
            onClick={() => {
              handleAddons("customizableProfile");
            }}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("customizableProfile")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("customizableProfile") ? (
                  <MdCheckBox className="text-[#473dff]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <fieldset
                  className="text-[#02295a] font-semibold"
                  type="radio"
                  name="customizableProfile"
                  value={formik.values.addOns}
                >
                  Customizable profile
                </fieldset>
                <p className="text-gray-400">Custom theme on your profile</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$2/mo</p>
          </div>
        </div>
      ) : (
        <div className="w-full mt-5 flex flex-col justify-center gap-5 ">
          <div
            onClick={() => {
              handleAddons("onlineService");
            }}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("onlineService")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("onlineService") ? (
                  <MdCheckBox className="text-[#473dff]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <p className="text-[#02295a] font-semibold">Online service</p>
                <p className="text-gray-400">Access to multiplayer games</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$10/yr</p>
          </div>
          <div
            onClick={() => handleAddons("largerStorage")}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("largerStorage")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("largerStorage") ? (
                  <MdCheckBox className="text-[#473dff]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <p className="text-[#02295a] font-semibold">Larger storage</p>
                <p className="text-gray-400">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$20/yr</p>
          </div>
          <div
            onClick={() => {
              handleAddons("customizableProfile");
            }}
            className={
              formik.errors.addOns
                ? "border border-red-500 rounded-md p-3 cursor-pointer flex justify-between items-center"
                : formik.values.addOns.includes("customizableProfile")
                ? " flex justify-between items-center border border-[#473dff]  bg-[#f0f6ff] rounded-md p-3 cursor-pointer"
                : "  flex justify-between items-center border border-gray-300  rounded-md p-3 cursor-pointer "
            }
          >
            <div className=" flex justify-center items-center gap-4">
              <div>
                {formik.values.addOns.includes("customizableProfile") ? (
                  <MdCheckBox className="text-[#473dff]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-300" />
                )}
              </div>

              <div>
                <p className="text-[#02295a] font-semibold">
                  Customizable profile
                </p>
                <p className="text-gray-400">Custom theme on your profile</p>
              </div>
            </div>
            <p className="text-[#473dff] text-sm">+$20/yr</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddOns;
