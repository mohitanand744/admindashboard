import React from 'react'
import { FaCloud, FaCloudsmith, FaDatabase } from 'react-icons/fa';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { MdOutlineSecurity } from 'react-icons/md';
import MenuItem from '../Menus/Menu';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  className?: string;
}

const menuItems: MenuItemProps[] = [
  {
    icon: <HiMiniDevicePhoneMobile className="text-lg" />,
    title: "Software Development",
    link: "/softwareDevelopment",
    className: "border",
  },
  {
    icon: <MdOutlineSecurity className="text-lg" />,
    title: "Cybersecurity",
    link: "/cyberSecurity",
    className: "border",
  },
  {
    icon: <FaCloudsmith className="text-lg" />,
    title: "IT Support",
    link: "/itSupport",
    className: "border",
  },
  {
    icon: <FaDatabase className="text-lg" />,
    title: "Data Science",
    link: "/dataScience",
    className: "border",
  },
  {
    icon: <FaCloud className="text-lg" />,
    title: "Cloud Computing",
    link: "/cloudComputing",
    className: "border",
  },
];

interface DropDownProps {
  openDropdown: {
    value: boolean;
  };
}


const DropDown: React.FC<DropDownProps> = ({ openDropdown }) => {
  return (
    <ul
      className={`${openDropdown.value
        ? "min-h-[18.6rem] opacity-100 py-4 px-2 sm:p-4 mb-3 scale-100 translate-y-0"
        : "h-[0] opacity-0 p-0 gap-0 scale-95 translate-y-[-10px]"
        } overflow-hidden transition-all flex flex-col gap-2 duration-300 ease-in-out bg-[#fff] dark:bg-[#00000041] text-gray-600 dark:text-white rounded-2xl`}
    >

      {
        menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))

      }
    </ul>

  )
}

export default DropDown