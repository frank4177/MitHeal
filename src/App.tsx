import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import VerificationPage from "./pages/Verification";
import BiometricVerification from "./pages/BiometricVerification"
import ProtectedRoute from "./protectedRoute";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <ProtectedRoute Component={Dashboard}/>,
        },
        {
          path: "/dashboard/verification",
          element: <VerificationPage/>,
        },
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/dashboard/verification/biometric",
          element: <BiometricVerification />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
