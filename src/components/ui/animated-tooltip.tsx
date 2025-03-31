"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import Button from "@/app/(admin)/components/Buttons/Button";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative -mr-4 group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: -20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  whiteSpace: "nowrap",
                }}
                className="absolute w-[200px] z-50 flex flex-col items-center justify-center px-4 py-2 mt-2 text-xs -translate-x-1/2 bg-[#101620]  rounded-md top-full right-1/2"
              >
                <div className="absolute inset-x-10 -top-px z-30 h-px w-[70%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -top-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-[1rem] text-white mb-4">{item.designation}</div>

                <ul className="flex flex-col w-full gap-2 px-2 py-3 mb-4 border-white border-y rounded-2xl">

                  <li className="text-[1rem] cursor-pointer hover:scale-105 transition-all duration-150 flex gap-1 items-center bg-[#ffffff69] p-2 rounded-full font-medium text-gray-50 ">
                    <CgProfile className="mr-2" />
                    Profile</li>
                  <li className="text-[1rem] cursor-pointer hover:scale-105 transition-all duration-150 flex gap-1 items-center bg-[#ffffff69] p-2 rounded-full font-medium text-gray-50 ">
                    <MdOutlineSettings className="mr-2 text-white" />
                    Setting</li>

                </ul>
                <Button className="w-full" variant="danger">
                  Logout
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative h-12 w-12 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
