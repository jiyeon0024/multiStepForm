import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

function PersonalInfo({ formik }) {
  //   console.log(formik.values);
  return (
    <>
      <h3 className="font-extrabold text-3xl text-[#02295a]">Personal info</h3>
      <p className="text-gray-400 mt-3">
        Please provide your name, email, address, and phone number.
      </p>
      <div
        className="mt-10 flex flex-col w-full
      "
      >
        <div className="flex justify-between items-center">
          <label className="text-[#02295a] ">Name</label>
          {formik.errors.name && (
            <p className="text-red-500 font-bold">{formik.errors.name}</p>
          )}
        </div>

        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className={
            formik.errors.name
              ? "border border-red-500 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold "
              : "border border-gray-300 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold focus:ring-1 focus:ring-inset focus:ring-[#02295a]"
          }
          placeholder="e.g Stephen King"
        />
      </div>
      <div className="mt-4 flex flex-col w-full">
        <div className="flex justify-between items-center">
          <label className="text-[#02295a] ">Email Address</label>{" "}
          {formik.errors.email && (
            <p className="text-red-500 font-bold">{formik.errors.email}</p>
          )}
        </div>

        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={
            formik.errors.name
              ? "border border-red-500 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold "
              : "border border-gray-300 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold focus:ring-1 focus:ring-inset focus:ring-[#02295a]"
          }
          placeholder="e.g stephenking@lorem.com"
        />
      </div>
      <div className="mt-4 flex flex-col w-full">
        <div className="flex justify-between items-center">
          <label htmlFor="phone" className="text-[#02295a] ">
            Phone
          </label>{" "}
          {formik.errors.phone && (
            <p className="text-red-500 font-bold">{formik.errors.phone}</p>
          )}
        </div>

        <input
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className={
            formik.errors.name
              ? "border border-red-500 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold "
              : "border border-gray-300 rounded py-1 outline-none pl-2 text-[#02295a] font-semibold focus:ring-1 focus:ring-inset focus:ring-[#02295a]"
          }
          placeholder="e.g +1 234 567 890"
        />
      </div>
    </>
  );
}

export default PersonalInfo;
