import { useState } from "react";
import InputField from "../FormElements/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/Buttons/Button";
import Spinner from "../../shared/Loaders/Spinner";
import { AuthType } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { login} from "../../../services/redux/features/userSlice";
import { RootState } from "../../../services/redux/store";
import CryptoJS from 'crypto-js';

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const storedCredentials = useSelector((state: RootState) => state?.user?.registeredData);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [payload, setPayload] = useState<AuthType>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setErrorMessage("")
    const { name, value } = e.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (payload.email === storedCredentials.email && payload.password === storedCredentials.password) {
      const token = "token2924"
      // Encrypt token
      const encryptedToken = CryptoJS.AES.encrypt(token, '001').toString();
      navigate("/dashboard")
      dispatch(login(encryptedToken))
    } else {
      setErrorMessage("Incrorrect login details")
    }
  };

  return (
    <>
      <div className="w-full max-w-[500px] px-9 py-5 bg-white rounded-[7px]">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[40px] mb-4">
            Mit<span className="text-blue-600">Heal</span>
          </p>
          <h3 className="mb-1 font-bold text-[25px]">Log into your account</h3>
          <p className="text-[14px]">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form
          className="flex flex-col gap-3 mt-7 w-full"
          onSubmit={handleLogin}
        >
         
          <InputField
            title="Email"
            name="email"
            type="email"
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

          {errorMessage ? <p className="text-red-600 text-[14px]">{errorMessage}</p>: null}
          <Button
            title="Log in"
            height={35}
            loader={<Spinner height={20} width={20} />}
          />

          <Link to="/signup" className="self-center">
            Dont have an account?{" "}
            <span className="text-blue-800 cursor-pointer">Sign Up</span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
