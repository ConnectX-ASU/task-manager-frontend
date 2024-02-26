import React from "react";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import Gradient from "../../components/Shared/RegistrationGradient/Gradient.jsx";
import Border from "../../components/Shared/RegistrationBorder/Border.jsx";
import style from "../../components/Shared/CssModules/Registration.module.css";
import Button from "../../components/Shared/RegistrationButton/Button.jsx";
export default function Login() {
  function sendData(data) {
    console.log(data);
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .email("Email format doesnt valid")
      .required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,20}/, "Password is not valid")
      .required("Password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: sendData,
    validationSchema,
  });
  return (
    <>
      <div
        className={`min-h-screen bg-secondry-color flex justify-center items-center`}
      >
        <Gradient />
        <form onSubmit={formik.handleSubmit}>
          <Border>
            <h2 className="text-4xl my-4 text-center text-[color:var(--lightblue)] font-bold font-mono">
              Login
            </h2>

            {formik.errors.email && formik.touched.email ? (
              <div className={`${style.form__group} ${style.field}  `}>
                <input
                  type="input"
                  className={`${style.form__error__field} mb-3 `}
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  id="userEmail"
                  required
                />
                <label htmlFor="userEmail" className={`${style.form__label} `}>
                  Email
                </label>
                <span className="text-[color:var(--red)]">
                  {formik.errors.email}
                </span>
              </div>
            ) : (
              <div className={`${style.form__group} ${style.field}  `}>
                <input
                  type="input"
                  className={`${style.form__field} mb-3 `}
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  id="userEmail"
                  required
                />
                <label htmlFor="userEmail" className={`${style.form__label} `}>
                  Email
                </label>
              </div>
            )}

            {formik.errors.password && formik.touched.password ? (
              <div className={`${style.form__group} ${style.field} `}>
                <input
                  type="password"
                  className={`${style.form__error__field} mb-3`}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="password"
                  name="password"
                  id="userPassword"
                  required
                />
                <label
                  htmlFor="userPassword"
                  className={`${style.form__label} `}
                >
                  Password
                </label>
                <span className="text-[color:var(--red)]">
                  {formik.errors.password}
                </span>
              </div>
            ) : (
              <div className={`${style.form__group} ${style.field}`}>
                <input
                  type="password"
                  className={`${style.form__field} mb-3`}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="password"
                  name="password"
                  id="userPassword"
                  required
                />
                <label
                  htmlFor="userPassword"
                  className={`${style.form__label} `}
                >
                  Password
                </label>
              </div>
            )}
            <Button name={"Login"} />
            <p className="text-[color:var(--lightblue)] ">
              Don't have account?
              <span className="font-bold block">Register</span>
            </p>
          </Border>
        </form>
      </div>
    </>
  );
}
