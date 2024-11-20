import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../../assets/images/Frame.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./ForgetPassword";
import "../../NewPages/AllocationEngine/Allocation.scss";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email. Please try again")
    .required("Email cannot be left blank")
    .min(7, "Invalid email. Please try again")
    .matches(emailRegex, "Invalid email. Please try again"),

  password: Yup.string()
    .required("Passwords cannot be left blank")
    .matches(/[0-9]/, "Invalid Password. Please try again")
    .matches(/[a-z]/, "Invalid Password. Please try again")
    // .matches(/[A-Z]/, "Invalid Password. Please try again")
    .matches(/[^\w]/, "Invalid Password. Please try again"),
});

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (value: any) => {
    console.log(value, "value");

    const admin_email = "admin@indilabs.com";
    const admin_password = "admin123@456";
    const staticToken = "your-static-token";
    console.log("value", admin_email, admin_password);
    if (admin_email === value.email && admin_password === value.password) {
      localStorage.setItem("token", staticToken);
      setTimeout(() => {
        navigate("/dashboard/recovery");
      }, 3000);
      //navigate("/strategy")
      toast.success("Login Sucessful !", {
        position: "top-right",
      });
      setButtonDisable(true);
    } else {
      toast.error("Invalid credentials !", {
        position: "top-right",
      });
      setButtonDisable(true);
    }
  };

  const Loader = () => {
    return <span className="loader"></span>;
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#FAFAFB] loginMain">
      <div className=" sm:hidden md:hidden lg:block min-w-[40%] text-white flex items-center justify-center h-100 lg:h-full w-full lg:w-[40%]">
        <img src={frame} alt="Background" className="w-full h-full" />
      </div>
      {loader ? (
        <div className="w-full flex justify-center items-center relative top-48">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex-1 flex flex-col p-10 xl:p-24 FormMain">
            <div className="ml-10 TextLogin">
              <h2 className="text-black text-[28px] font-semibold font-['DM Sans'] Get_Started-Text">
                Get Started Now
              </h2>
              <p className="text-black text-base font-medium font-['DM Sans'] Credential-Text">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-[180px] FormWrapperLogin">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                // onSubmit={(values) => {
                //   setButtonDisable(true);
                //   setLoader(true);
                //   // handleLogin(values);
                //   // console.log("form data", values);
                //   const apiUrl =
                //     "https://smfg-backend-service.site/v1/user/login";
                //   // const proxyUrl = "https://smfg-backend-service.site/v1/home/";
                //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                //   const apiKey = "368f286f442e50f720ef7d8d952add8b";
                //   const urlWithParams = `${proxyUrl}${apiUrl}?api_key=${apiKey}`;
                //   fetch(`${urlWithParams}`, {
                //     method: "POST",
                //     headers: {
                //       "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                //       email: values.email,
                //       password: values.password,
                //     }),
                //   })
                //     .then((response) => {
                //       if (!response.ok) {
                //         // throw new Error("Network response was not ok");
                //         // toast.error("Incorrect email or password !", {
                //         //   position: "top-right",
                //         // });
                //       }
                //       return response.json();
                //     })
                //     .then((data) => {
                //       setLoader(false);
                //       localStorage.setItem("message", data?.message);
                //       localStorage.setItem("username", values?.email);
                //       // console.log(data, "values");
                //       if (data?.message === "Login successful") {
                //         localStorage.setItem("token", "true");
                //         toast.success("Login Successful !", {
                //           position: "top-right",
                //         });
                //         setTimeout(() => {
                //           navigate("/home/recovery");
                //         }, 1000);
                //       } else if (
                //         data?.detail === "Incorrect email or password"
                //       ) {
                //         setButtonDisable(false);
                //         toast.error("Incorrect password !", {
                //           position: "top-right",
                //         });
                //         return;
                //       } else {
                //         // localStorage.setItem("token", "false");
                //         setButtonDisable(false);
                //         toast.error("Invalid User!", {
                //           position: "top-right",
                //         });
                //       }
                //       //  else {
                //       //   localStorage.setItem("token", "false");
                //       // }
                //     })
                //     .catch((error) => {
                //       console.error("Error fetching data:", error);
                //       setLoader(false);
                //     });
                // }}
                onSubmit={(values) => {
                  handleLogin(values);
                }}
              >
                {({ handleChange, values, errors, touched }) => (
                  <Form className="w-full " style={{ maxWidth: "600px" }}>
                    <div className="mb-5">
                      <Input
                        type="text"
                        // placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        labelText="Email Address"
                        validation={!!errors?.email && !!touched?.email}
                        errText={errors?.email || ""}
                        isEmail={true}
                        isContact={false}
                        textColor={"#ED0E00"}
                      />
                      {/* <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1 "
                  /> */}
                    </div>
                    <div className="mb-2">
                      <Input
                        type="password"
                        // placeholder="Enter Password"
                        name="password"
                        value={values.password}
                        // onChange={(e) => setFieldValue("password", e.target.value)}
                        onChange={handleChange}
                        labelText="Enter Password"
                        validation={!!errors?.password && !!touched?.password}
                        errText={errors?.password || ""}
                        isEmail={false}
                        showPasswordToggle={true}
                        isContact={false}
                        textColor={"#ED0E00"}
                      />
                      {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1"
                  /> */}
                    </div>
                    <div className="flex justify-end items-center cursor-pointer  text-sm text-[#6750a4]">
                      <Link to="#">
                        <ForgetPassword />
                      </Link>
                    </div>
                    <div className="mt-7">
                      <Button
                        width="100%"
                        type="submit"
                        buttonDisable={buttonDisable}
                      >
                        Log in
                      </Button>
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-3 font-medium text-sm Support_text ">
                      Don’t have an account?
                      <Link
                        to="/signup"
                        className="text-[#6750a4]  font-medium"
                      >
                        Sign up
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default LoginForm;
