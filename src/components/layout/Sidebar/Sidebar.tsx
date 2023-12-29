import { sidebarMenus } from "../../../contants";
import { useDispatch } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { logout } from "../../../services/redux/features/userSlice";
import Logo from "../../shared/Logo";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Get url path
  const path = location.pathname;

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <>
      <div className="w-[16%] min-h-[100vh]  shadow-lg">
        <div className="p-3 fixed h-full w-[15%] flex flex-col">
          <Logo />

          <hr />

          <div className="flex flex-col gap-3 mt-6 ">
            {sidebarMenus.map((item) => (
              <Link
                to={item.route}
                className={` ${
                  path === item.route
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black"
                } flex flex-row h-[55px] rounded-[8px] cursor-pointer items-center p-2 gap-3 `}
                key={item.id}
              >
                <div>{item.icon}</div>
                <span className=" text-[18px]">{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-[20px]">
            <div
              className="flex flex-row items-center gap-1 text-[18px] cursor-pointer text-[orangered]"
              onClick={handleLogout}
            >
              <CiLogout />
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
