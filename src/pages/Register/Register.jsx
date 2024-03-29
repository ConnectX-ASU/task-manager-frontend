import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import style from "../../components/Shared/CssModules/Registration.module.css";
import Gradient from "../../components/Shared/RegistrationGradient/Gradient.jsx";
import Border from "../../components/Shared/RegistrationBorder/Border.jsx";
import Button from "../../components/Shared/RegistrationButton/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string("Must be string")
    .min(3, "Length more than 3")
    .max(15, "Length less than 15")
    .required("Name is required"),
  email: Yup.string()
    .email("Email format doesnt valid")
    .required("Email is required"),
  password: Yup.string()
  .matches(/^[A-Za-z0-9]{6,20}/, "Password should consist of letters and numbers, length should be between 6 and 20")
  .required("Password is required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required("Repassword is required"),
});

export default function Register() {
  const navigate = useNavigate();

  function sendData(data) {
    console.log(data);
    navigate("/");
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: sendData,
    validationSchema,
  });

  return (
    <div
      className={`min-h-screen bg-secondry-color flex justify-center items-center`}
    >
      <Gradient />
      <form onSubmit={formik.handleSubmit}>
        <Border>
          <h2 className="text-4xl my-4 text-center text-[color:var(--lightblue)] font-bold font-mono">
            Register
          </h2>

          {formik.errors.name && formik.touched.name ? (
            <div className={`${style.form__group} ${style.field}  `}>
              <input
                type="text"
                className={`${style.form__error__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Name"
                name="name"
                id="userName"
                required
              />
              <label htmlFor="userName" className={`${style.form__label} `}>
                Name
              </label>
              <span className="text-[color:var(--red)]">
                {formik.errors.name}
              </span>
            </div>
          ) : (
            <div className={`${style.form__group} ${style.field}  `}>
              <input
                type="text"
                className={`${style.form__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Name"
                name="name"
                id="userName"
                required
              />
              <label htmlFor="userName" className={`${style.form__label} `}>
                Name
              </label>
            </div>
          )}

          {formik.errors.email && formik.touched.email ? (
            <div className={`${style.form__group} ${style.field}  `}>
              <input
                type="input"
                className={`${style.form__error__field} mb-1 `}
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
                className={`${style.form__field} mb-1 `}
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
                className={`${style.form__error__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="password"
                name="password"
                id="userPassword"
                required
              />
              <label htmlFor="userPassword" className={`${style.form__label} `}>
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
                className={`${style.form__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="password"
                name="password"
                id="userPassword"
                required
              />
              <label htmlFor="userPassword" className={`${style.form__label} `}>
                Password
              </label>
            </div>
          )}
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className={`${style.form__group} ${style.field} `}>
              <input
                type="password"
                className={`${style.form__error__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                placeholder="Repeat Password"
                name="rePassword"
                id="userRePassowrd"
                required
              />
              <label htmlFor="userRePassword" className={`${style.form__label} `}>
                Repeat Password
              </label>
              <span className="text-[color:var(--red)]">
                {formik.errors.rePassword}
              </span>
            </div>
          ) : (
            <div className={`${style.form__group} ${style.field} `}>
              <input
                type="password"
                className={`${style.form__field} mb-1`}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                placeholder="Repeat Password"
                name="rePassword"
                id="userRePassowrd"
                required
              />
              <label htmlFor ="userRePassword" className={`${style.form__label} `}>
                Confirm Password
              </label>
            </div>
          )}
          <Button name={"Register"} />
          <p className="text-[color:var(--lightblue)] ">
            already have an account ?
            <Link to='/login' className="font-bold block hover:underline">Log in</Link>
          </p>
        </Border>
      </form>
    </div>
  );
}
