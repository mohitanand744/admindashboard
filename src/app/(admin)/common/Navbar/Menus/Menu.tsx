'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface MenuItemProps {
  openDropdown?: {
    department: boolean;
  };
  setOpenDropdown?: React.Dispatch<
    React.SetStateAction<{
      department: boolean;
    }>
  >;
  icon: React.ReactNode;
  icon2?: React.ReactNode;
  title: string;
  link?: string;
  className?: string;
  setOpenF?: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuItem: React.FC<MenuItemProps> = ({ openDropdown, setOpenDropdown, icon, title, link, icon2, className, setOpenF }) => {
  const [active, setActive] = useState<boolean>(false);
  const route = usePathname()

  const path = route.replaceAll('/', '').toLocaleLowerCase()

  useEffect(() => {
    if (path === title.toLocaleLowerCase().replaceAll(" ", "")) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [path, title])


  return (
    <Link href={link || '#'}>
      <li
        onClick={() => {
          if (!setOpenF) return;
          setOpenF(false)

          if (!openDropdown || !setOpenDropdown) return;
          setOpenDropdown({ ...openDropdown, department: !openDropdown.department });
        }}

        className={`p-3 text-sm ${active ? 'bg-[#00000041] text-white border dark:border-white border-gray-100 dark:bg-[#1E293B]' : 'bg-[#fff] text-gray-600 dark:bg-[#00000041]'} sm:hover:scale-105 transition-all duration-200 cursor-pointer flex justify-between gap-3 items-center   dark:text-white rounded-full text-center ${className}`}
      >
        <div className="flex items-center gap-3">
          {icon}  {title}
        </div>

        {icon2}
      </li>
    </Link>
  );
};

export default MenuItem;
