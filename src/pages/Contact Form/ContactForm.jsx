import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame from "../../assets/images/Frame.png";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import "./ContactForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

// import ForgetPassword from "./ForgetPassword";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a vaild email address")
    .required("Email is required")
    .min(7, "Minimum 7 characters required")
    .matches(emailRegex, "Must have some domain name to end with"),

  name: Yup.string()
    .required("Username is required")
    .min(6, "Minimum 6 characters required"),
  message: Yup.string()
    .required("Text is required here")
    .min(6, "Minimum 6 characters required"),
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    border: "none",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgb(8 8 8 / 75%)",
  },
};

const ConatactForm = ({ modalIsOpen, setIsOpen, closeModal, openModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const navigate = useNavigate();

  function closeModals() {
    closeModal();
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModals}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" w-[300px] sm:w-[620px] md:w-[650px] lg:w-[720px] h-[720px] sm:h-[700px] flex flex-col lg:flex-row bg-[#FAFAFB] p-1 overflow-auto overflow-x-hidden ff-scroll loginMain">
          {/* <div className=" sm:hidden md:hidden lg:block min-w-[40%] text-white flex items-center justify-center h-100 lg:h-full w-full lg:w-[40%]">
        <img src={frame} alt="Background" className="w-full h-full" />
      </div> */}
          <div className="flex-1 flex flex-col items-start justify-center p-10 xl:p-16 FormMain">
            <div className="TextLogin">
              <h2 className="text-black text-[38px] font-semibold font-['DM Sans'] Get_Started-Text">
                Get in Touch
              </h2>
              <p className="text-black text-[18px] text-center sm:text-start font-medium font-['DM Sans'] mt-4 Credential-Text">
                Let's work together
              </p>
            </div>
            <div
              className="flex w-[30px] sm:w-[40px] text-black  text-[24px] sm:text-3xl h-[20px]  sm:h-[25px] self-end mt-2 absolute top-[1px] right-1 sm:right-0 cursor-pointer "
              onClick={closeModals}
            >
              <IoIosClose />
            </div>
            <div className="flex-1 w-full flex items-center justify-center mt-20 md:mt-[60px] FormWrapperLogin">
              <Formik
                initialValues={{ email: "", name: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                  // preventDefault();fr
                  setButtonDisable(true);
                  const serviceId = "service_uwbxkhp";
                  const templateId = "template_2pm5vok";
                  const publicKey = "bF7bbCljKrBIiHaAm";

                  const data = {
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                      from_name: values.name,
                      from_email: values.email,
                      to_name: "Amit Chandola",
                      message: values.message,
                    },
                  };

                  try {
                    const res = await axios.post(
                      "https://api.emailjs.com/api/v1.0/email/send",
                      data
                    );
                    console.log("response of send message", res?.data);
                    toast.success("Message Sent Successfully !", {
                      position: "top-right",
                    });
                  } catch (error) {
                    setButtonDisable(false);
                    console.error(error);
                    toast.error("Invalid User!", {
                      position: "top-right",
                    });
                  }
                }}
              >
                {({ handleChange, values, errors, touched }) => (
                  <Form className="w-full " style={{ maxWidth: "600px" }}>
                    <p className="mb-8 text-black text-[18px] mt-16 sm:mt-0 text-center sm:text-start sm:text-[28px] font-semibold font-['DM Sans'] Get_Started-Text">
                      Ready to Get Started?
                    </p>
                    <div className="mb-5">
                      <Input
                        type="text"
                        // placeholder="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        labelText="Your Email Address"
                        validation={!!errors?.email && !!touched?.email}
                        errText={errors?.email || ""}
                        isContact={true}
                      />
                    </div>
                    <div className="mb-5">
                      <Input
                        type="text"
                        // placeholder="Enter Password"
                        name="name"
                        value={values.name}
                        // onChange={(e) => setFieldValue("password", e.target.value)}
                        onChange={handleChange}
                        labelText="Your Name"
                        validation={!!errors?.name && !!touched?.name}
                        errText={errors?.name || ""}
                        isContact={true}
                      />
                    </div>
                    {/* <div className="flex justify-end items-center cursor-pointer  text-sm text-[#6750a4]">
                  <Link to="#">
                    <ForgetPassword />
                  </Link>
                </div> */}
                    <div className="mb-2">
                      <label
                        for="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        // validation={!!errors?.message && !!touched?.message}
                        // errText={errors?.message || ""}
                        className="mb-2 w-full rounded-md border border-zinc-500  py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                    <div className="mt-7">
                      <Button
                        width="100%"
                        type="submit"
                        buttonDisable={buttonDisable}
                      >
                        Send Message
                      </Button>
                    </div>
                    {/* <div className="flex justify-center items-center gap-1 mt-3 font-medium text-sm Support_text ">
                  Don’t have an account?
                  <Link to="/signup" className="text-[#6750a4]  font-medium">
                    Sign up
                  </Link>
                </div> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <ToastContainer />
        </div>
      </Modal>
    </>
  );
};

export default ConatactForm;
