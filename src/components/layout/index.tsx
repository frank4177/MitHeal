import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-[85%] max-[1200px]:w-[100%] box-border">
          {/* <Navbar />loo */}
          <div className=" p-[50px] max-[1200px]:p-[10px]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
