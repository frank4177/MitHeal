import { HiOutlineHome } from "react-icons/hi2";
import { SiWpexplorer } from "react-icons/si";

export const sidebarMenus = [
    {
      icon: <HiOutlineHome size={30}/>,
      title: "Products",
      route: "/dashboard",
      route_name:"dashboard",
      id: Math.random(),
    },
    {
      icon: <SiWpexplorer size={30} />,
      title: "Verification",
      route: "/dashboard/verification",
      route_name:"explore",
      id: Math.random(),
    },
  ];



  export const products = [
    {
      name: "Slow Heal",
      price: 200
    },
    {
      name: "Moderate Heal",
      price: 150
    },
    {
      name: "Quick Heal",
      price: 800
    }
  ]


  export const genderOptions = [
    {
      title: "Male",
      value: "M"
    },
    {
      title: "Female",
      value: "F"
    },
  ]

  export const countries = [
    {
      title: "Nigeria",
      value: "NG"
    },
    {
      title: "Ghana",
      value: "GH"
    },
  ]