"use client";

import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "@/Store/Slices/notificationSlice";

interface NotificationsData {
  title: string;
  message: string;
  time: string;
  id: number;
}

const NotificationPopUP = () => {
  const notification = useSelector((state: any) => state.notification.notifications);
  const dispatch = useDispatch();


  const handleRemoveNotification = (id: number) => {
    setTimeout(() => {
      dispatch(removeNotification(id)); // Remove from Redux after animation
    }, 5); // Match animation duration
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full cursor-pointer dark:bg-gray-800 bg-white flex items-center justify-center w-[40px] h-[40px] dark:text-white text-gray-800 relative">
          <IoIosNotificationsOutline className="text-2xl" />
          <span className="absolute top-0 right-0 flex size-3">
            <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-85 animate-ping"></span>
            <span className="relative inline-flex bg-red-500 rounded-full size-3"></span>
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="relative flex flex-col gap-2 right-[2rem] md:right-[4rem] h-[30rem] hideScrollBar w-[20rem] bg-white p-2 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="relative flex items-center justify-between mt-2 mb-1">
          <h1 className="text-xl font-bold dark:text-white text-[#334155]">Notification</h1>
          <div className="flex items-center justify-center w-7 h-7 left-[7.3rem] bg-red-500 rounded-full font-bold absolute text-[#fff] text-sm">
            {notification.length > 0 ? notification.length : 0}
          </div>
        </div>

        <AnimatePresence>
          {notification.length > 0 ? (
            notification.map((item: NotificationsData, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 80 }} // Slide-out effect
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()} // Prevent dropdown from closing
                  className="p-3 border rounded-md hover:bg-gray-100 bg-gray-50 dark:hover:bg-gray-800 dark:bg-[#0000006b] hover:scale-[1.03] transition-all duration-150"
                >
                  <div>
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-gray-400">{item.message}</p>
                    <p className="mt-2 text-gray-400">{item.time}</p>
                  </div>

                  <div
                    onClick={() => handleRemoveNotification(item.id)}
                    className="absolute right-0 mt-2 mr-2 top-1"
                  >
                    <GiCancel className="text-lg text-gray-400 cursor-pointer" />
                  </div>
                </DropdownMenuItem>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center h-full p-5"
            >
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/no-notification-illustration-download-in-svg-png-gif-file-formats--notifications-mail-box-empty-states-pack-business-illustrations-5639816.png"
                alt="No notifications"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationPopUP;
