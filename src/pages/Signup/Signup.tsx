import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../../assets/images/Frame.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchemaSignup = Yup.object({
  // name: Yup.string()
  //   .required("Full name is required")
  //   .min(3, "Full name length is greter then 3 character"),
  // organization: Yup.string()
  //   .required("Organization name is required")
  //   .min(3, "Organization name length is greter then 3 character"),
  password: Yup.string()
    .min(8, "At least 8 characters")
    .required("Password is required")
    .matches(/[0-9]/, "Includes numbers and special characters")
    .matches(/[a-z]/, "A mix of uppercase and lowercase letters")
    .matches(/[A-Z]/, "A mix of uppercase and lowercase letters")
    .matches(/[^\w]/, "Includes numbers and special characters")
    .max(20, "Maximumn 20 characters allowed"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password")], "Passwords must match")
  //   .required("Confirm Password is required"),

  email: Yup.string()
    .email("Invalid email address")
    .min(7, "Minimum 7 characters required")
    .max(40, "Maximumn 40 characters allowed")
    .matches(emailRegex, "Invalid email address")
    .required("Email is required"),
});

const Signup: React.FC = () => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row bg-[#FAFAFB] h-screen">
      <div className="sm:hidden md:hidden lg:block min-w-[40%] text-white flex items-center justify-center h-100 lg:h-full w-full lg:w-[40%]">
        <img src={frame} alt="Background" className="w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col p-10 xl:px-24">
        <div className="mt-[50px]">
          <h2 className="text-3xl font-medium">Create your account</h2>
          <p className="text-lg	 font-normal">
            Quickly access your dashboard in minutes!
          </p>
        </div>
        <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-[180px]">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchemaSignup}
            onSubmit={(values, { setSubmitting }) => {
              console.log("form data", values);
              setButtonDisable(true);
              const apiUrl =
                "https://smfg-backend-service.site/v1/user/password";
              const proxyUrl = "https://cors-anywhere.herokuapp.com/";
              const apiKey = "368f286f442e50f720ef7d8d952add8b";
              const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
              fetch(`${urlWithParams}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
                }),
              })
                .then((response) => {
                  // if (!response.ok) {
                  //   throw new Error("Network response was not ok");
                  // }
                  return response.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data?.data?.token);
                  console.log(data, "values");
                  if (data) {
                    toast.success("Registration Successful !", {
                      position: "top-right",
                    });
                    setTimeout(() => {
                      navigate("/");
                    }, 2000);
                  }
                })

                .catch((error) => {
                  console.error("Error fetching data:", error);
                  setButtonDisable(false);
                  toast.error("Registration Failed !", {
                    position: "top-right",
                  });
                });
            }}
          >
            {({ values, isSubmitting, handleChange, errors, touched }) => (
              <Form className="w-full mt-5" style={{ maxWidth: "600px" }}>
                <div className="mb-5">
                  <Input
                    type="text"
                    // placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    labelText="Email Address"
                    validation={!!errors?.email && !!touched?.email}
                    errText={errors?.email || ""}
                    isEmail={true}
                    isContact={false}
                    textColor={"#22C55E"}
                  />
                  {/* <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1"
                  /> */}
                </div>
                <div className="mb-5">
                  <Input
                    type="password"
                    // placeholder="Create password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    labelText="Create password"
                    validation={!!errors?.password && !!touched?.password}
                    errText={errors?.password || ""}
                    isEmail={false}
                    isContact={false}
                    textColor={"#22C55E"}

                    // value={values.password}
                  />
                  {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1"
                  /> */}
                </div>{" "}
                <div className="mt-7">
                  <Button
                    type="submit"
                    // onClick={() => navigate("/otp")}
                    width="100%"
                    buttonDisable={buttonDisable}
                  >
                    Create account
                  </Button>
                </div>
                <div className="flex justify-center items-center gap-1 mt-3 font-medium text-sm	">
                  Already have an account?
                  <Link to="/" className="text-[#6750A4]   font-medium">
                    Log in
                  </Link>
                  {/* {/ <Link to="#">Contact Support</Link> /} */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
