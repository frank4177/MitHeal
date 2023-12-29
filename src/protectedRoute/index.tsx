import { useSelector } from "react-redux";
import { RootState } from "../services/redux/store";
import { Navigate } from "react-router-dom";

interface IComponentProp {
  Component: () => JSX.Element
}

const ProtectedRoute = ({Component}: IComponentProp) => {
  const auth = useSelector((state: RootState) => state?.user?.accessToken);


    return auth ? <Component/> : <Navigate to="/" />
}

export default ProtectedRoute