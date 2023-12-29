import  { useState } from "react";
import InputField from "../FormElements/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/Buttons/Button";
import Spinner from "../../shared/Loaders/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../services/redux/features/userSlice";
import { RootState } from "../../../services/redux/store";
import Swal from "sweetalert2";
import Select from "../FormElements/Select";
import PhoneNumberInput from "../FormElements/PhoneNumberInput";
import Date from "../FormElements/Date";
import { countries, genderOptions } from "../../../contants";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerData = useSelector(
    (state: RootState) => state?.user?.registeredData
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [payload, setPayload] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    country:"",
    gender: "",
    dob: "",
    password: "",
  });

  console.log(registerData);

  const handleChange = (e: any) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: any) => {
    setErrorMessage("");
    setPayload({ ...payload, phonenumber: e });
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    if (payload.phonenumber) {
      dispatch(signUp(payload));
      Swal.fire({
        title: "Success",
        icon: "success",
        allowOutsideClick: false,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      setErrorMessage("Please enter phone number");
    }
  };

  return (
    <>
      <div className="w-full max-w-[500px] px-9 py-5 bg-white rounded-[7px]">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[40px] mb-4">
            Mit<span className="text-blue-600">Heal</span>
          </p>
          <h3 className="mb-1 font-bold text-[25px]">Create a new account</h3>
          <p className="text-[14px]">
            To use MitHeal, please enter your details
          </p>
        </div>

        <form
          className="flex flex-col gap-3 mt-7 w-full"
          onSubmit={handleSignUp}
        >
          <Select
            options={countries}
            title="Country"
            name="country"
            handleChange={handleChange}
          />

          <InputField
            title="First Name"
            name="firstname"
            type="text"
            handleChange={handleChange}
            required={true}
          />

          <InputField
            title="Last Name"
            name="lastname"
            type="text"
            handleChange={handleChange}
            required={true}
          />

          <InputField
            title="Email"
            name="email"
            type="email"
            handleChange={handleChange}
            required={true}
          />

          <PhoneNumberInput
            title="Phone Number"
            handleChange={handlePhoneChange}
            error={payload.phonenumber === "" ? errorMessage : null}
          />

          <Select
            options={genderOptions}
            title="Gender"
            name="gender"
            handleChange={handleChange}
          />

          <Date
            title="Date of birth"
            name="dob"
            type="date"
            handleChange={handleChange}
            required={true}
          />
          <InputField
            title="Password"
            name="password"
            type="password"
            handleChange={handleChange}
            required={true}
          />

          <Button
            title="Sign Up"
            height={35}
            loader={<Spinner height={20} width={20} />}
          />

          <Link to="/" className="self-center">
            Already have an account?{" "}
            <span className="text-blue-800 cursor-pointer">Sign Up</span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
