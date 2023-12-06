import * as Yup from "yup";

export const UserInfoSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  //   phone: Yup.string().required("This field is required"),
  phone:
    // Yup.string().matches(phoneRegExp, "Must be more than 10 characters") &&
    // Yup.string().required("This field is required"),
    Yup.string()
      .required("Password is required")
      .min(6, "Password must have at least 6 characters")
      .max(18, "Max password length is 18"),
});

export const SelectPlanSchema = Yup.object().shape({
  plan: Yup.string().required("Plan is required"),
});

export const AddOnsSchema = Yup.object().shape({
  addOns: Yup.array().of(Yup.string()).min(1).required("AddOns is required"),
});
