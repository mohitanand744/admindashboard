import Link from 'next/link';
import React from 'react';

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
}

const MenuItem: React.FC<MenuItemProps> = ({ openDropdown, setOpenDropdown, icon, title, link, icon2, className }) => {
  return (
    <Link href={link || '#'}>
      <li
        onClick={() => {
          if (!openDropdown || !setOpenDropdown) return;

          setOpenDropdown({ ...openDropdown, department: !openDropdown.department });
        }}

        className={`p-3 text-sm hover:scale-105 transition-all duration-200 cursor-pointer flex justify-between gap-3 items-center bg-[#fff] dark:bg-[#00000041] text-gray-600 dark:text-white rounded-full text-center ${className}`}
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
