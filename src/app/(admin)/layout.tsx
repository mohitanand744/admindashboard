"use client"

import { useState } from "react";
import Navbar from "./common/Navbar/Navbar";
import Sidebar from "./common/Sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "@/Store/store";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(false)


  return (
    <Provider store={store}>
      <div className="h-[100vh]   
        bg-[url('https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?cs=srgb&dl=pexels-elia-clerici-282848-912110.jpg&fm=jpg')] 
        dark:bg-[url('https://images.unsplash.com/photo-1641895964758-3e4374714a8c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8')]
        bg-cover bg-center bg-no-repeat">
        <div className="relative flex h-full gap-5 p-4 overflow-hidden transition-all duration-300 md:p-8">
          <div className={`bottom-4 top-4 md:bottom-8 md:top-8 lg:h-full ${open ? ' translate-x-0' : 'translate-x-[-340px] lg:translate-x-0'}  transition-all duration-300 absolute lg:static z-50 w-[330px] bg-white/30 lg:bg-black/30 dark:bg-white/30 backdrop-blur-sm rounded-3xl`}>
            <Sidebar setOpenF={setOpen} openF={open} />
          </div>


          <div
            className="relative flex-col flex-1 gap-5 overflow-y-auto hideScrollBar bg-black/30 dark:bg-white/30 backdrop-blur-sm rounded-3xl">
            <div className="h-[69px] w-full">
              <Navbar setOpenF={setOpen} />
            </div>
            <div className="flex flex-1 w-full p-4 md:p-8">
              {children}
            </div>
            +
            <div
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className={`absolute left-0 bottom-0 w-full h-full transition-all duration-300 lg:hidden z-40 
    ${open ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'} 
    bg-black/50  backdrop-blur-sm `}
            ></div>
          </div>
        </div>
      </div>
    </Provider>
  );
}