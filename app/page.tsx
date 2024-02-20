"use client";
import React, { FC, useState } from "react";
import Heading from "../app/utils/Heading";
import Header from "./componcents/Header";
type props = {};

const Page: FC<props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      {/* <AdminProtected> */}
        <Heading
          title={`e-Shikhon - Admin`}
          description="Learning"
          keywords="React,Fron end ,etc"
        />
        <Header 
         open={open}
         setOpen={setOpen}
         activeItem={activeItem}
         setRoute={setRoute}
         route={route}/>
        <div className="flex h-[200vh] ">
          <div className="1500px:w-[16%] w-1/2">
            {/* <AdminSidebar /> */}
          </div>
          <div className="w[85%]">
            {/* <DashboardHero /> */}
          </div>
        </div>
      {/* </AdminProtected> */}
    </div>
  );
};

export default Page;
