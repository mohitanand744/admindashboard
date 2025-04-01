"use client"


import React, { useState } from 'react'
import { MdContactSupport, MdHome, MdOutlineCancel, MdPeopleAlt } from "react-icons/md";
import { FaUsers, FaBriefcase, FaClipboardCheck, FaBuilding, FaCartArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from '../Navbar/Menus/Menu';
import DropDown from '../Navbar/DropDowns/DropDown';
import { LuBoxes } from 'react-icons/lu';
import { TbSettingsFilled } from 'react-icons/tb';


interface Props {
  setOpenF: React.Dispatch<React.SetStateAction<boolean>>;
  openF: boolean;
}

const Sidebar: React.FC<Props> = ({ setOpenF, openF }: Props) => {
  const [openDropdown, setOpenDropdown] = useState({
    department: false,
  });

  return (
    <div className='flex flex-col justify-between h-full py-5 overflow-y-auto text-xl font-bold text-white hideScrollBar'>
      <div className="flex flex-col h-full">
        <div className="w-[90%] relative py-5 rounded-2xl bg-[#00000041] lg:bg-[#ffffff41] dark:bg-[#00000041] text-gray-600 dark:text-white mx-auto">
          <img className='w-[10rem] mx-auto' src="https://weboconnect.com/assets/images/logo/logo.png" alt="" />

          <div onClick={() => setOpenF(false)} className="absolute block text-3xl text-red-400 cursor-pointer lg:hidden top-2 right-2">
            <MdOutlineCancel className='' />
          </div>
        </div>

        <ul className="w-[90%] mt-4 h-full flex overflow-y-auto hideScrollBar flex-col gap-3 px-5 py-5 rounded-2xl bg-[#00000041] lg:bg-[#ffffff41] dark:bg-[#00000041] text-gray-600 dark:text-white mx-auto">

          <MenuItem
            icon={<MdHome className='text-xl' />}
            title='Dashboard'
            link='/dashboard'
          />
          <MenuItem
            icon={<FaUsers className='text-lg' />}
            title='Workers'
            link='/employes'
          />

          <MenuItem
            icon={<FaBriefcase className='text-md' />}
            title='Jobs'
            link='/jobs'
          />

          <MenuItem
            icon={<FaClipboardCheck className='text-md' />}
            title='On Boarding'
            link='/onBoarding'
          />

          <MenuItem
            icon={<FaBuilding className='text-md' />}
            title='Departments'
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            icon2={<IoIosArrowDown className={`text-lg transition-all duration-200 ${openDropdown.department ? "rotate-180" : ""}`} />}
          />

          <DropDown openDropdown={{
            value: openDropdown.department
          }} />

          <MenuItem
            icon={<LuBoxes className='text-lg' />}
            title='Products'
            className='mt-[-0.7rem]'
            link='/products'
          />
          <MenuItem
            icon={<FaCartArrowDown className='text-lg' />}
            title='Orders'
            link='/orders'
          />

          <MenuItem
            icon={<MdPeopleAlt className='text-lg' />}
            title='Customers'
            link='/customers'
          />

          <MenuItem
            icon={<TbSettingsFilled className='text-lg' />}
            title='Settings'
            link='/settings'
          />

          <MenuItem
            icon={<MdContactSupport className='text-lg' />}
            title='Support & Help'
            link='/support'
          />


        </ul>
      </div>


    </div>
  )
}

export default Sidebar