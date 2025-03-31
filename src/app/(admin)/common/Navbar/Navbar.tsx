"use client"

import ThemeToggle from '@/components/Buttons/Toggletheme'
import React from 'react'
import { AnimatedTooltipPreview } from '../../components/cards/UserProfile'
import { IoIosNotificationsOutline } from "react-icons/io";
import Input from '../../components/Inputs/Input';
import { FaSearch } from "react-icons/fa";
import { CgMenuRight } from 'react-icons/cg';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

interface Props {
  setOpenF: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<Props> = ({ setOpenF }) => {
  const [openSearch, setOpenSearch] = React.useState<boolean>(false)

  return (
    <div className='relative flex items-center justify-between w-full h-full px-8 bg-[#00000041]'>

      <div className="flex items-center gap-8">

        <div className="block cursor-pointer lg:hidden">
          <CgMenuRight onClick={() => setOpenF(true)} className="mr-4 text-2xl text-white" />
        </div>
        <div className="hidden font-medium text-white lg:block">
          <h1 className='text-xl'><b>Welcome</b> Back</h1>
          <p>John</p>
        </div>
      </div>

      {
        openSearch && <div className="absolute sm:hidden left-0 w-full top-[4.3rem]">
          <Input
            placeholder='Search'
            className='block py-3 border-none sm:hidden'
            type='text'
            name='search'
            value=''
            onChange={() => {
              console.log("Mohit");
            }}
            disabled={false}
          />



          <div className="absolute text-gray-400 -translate-y-1/2 bg-[#00000041] dark:bg-gray-800 rounded-md flex justify-center items-center h-[35px] group w-[35px] top-1/2 right-1">
            <FaSearch className="text-white transition-all duration-150 group-hover:scale-125 group-active:scale-90" /></div>
        </div>
      }

      <div className="flex items-center gap-3">
        <div className="relative w-[40px] sm:w-[200px] md:w-[300px]">
          <Input
            placeholder='Search'
            className='hidden sm:block'
            type='text'
            name='search'
            value=''
            onChange={() => {
              console.log("Mohit");
            }}
            disabled={false}
          />



          <div
            onClick={() => setOpenSearch(!openSearch)}
            className="absolute text-gray-400 -translate-y-1/2 bg-[#00000041] dark:bg-gray-800 rounded-md flex justify-center items-center h-[35px] group w-[35px] top-1/2 right-1">
            <FaSearch className="text-white transition-all duration-150 group-hover:scale-125 group-active:scale-90" /></div>
        </div>
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

          <DropdownMenuContent className="w-64 p-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DropdownMenuItem className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                Notification 1
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                Notification 2
              </DropdownMenuItem>
              <DropdownMenuItem className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                View All
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
        <div className='relative mt-[2.5rem]'>
          <AnimatedTooltipPreview />
        </div>
      </div>
    </div>
  )
}

export default Navbar