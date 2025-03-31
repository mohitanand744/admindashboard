"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-4 pb-8 pt-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative block h-full col-span-12 p-2 md:col-span-6 lg:col-span-6 xl:col-span-3 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#00000041] dark:bg-slate-200/[0.5] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.45 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.75, delay: 0.3 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="transition-all duration-300 bg-white border-none dark:bg-slate-800">
            <div className="flex flex-wrap items-center gap-1 lg:flex-nowrap lg:justify-between">
              <div className="flex-1">
                <div className="icons w-[60px] h-[60px] flex justify-center items-center bg-[#264754] border border-white rounded-xl text-3xl mb-3 text-white">
                  {item.icon}
                </div>
                <CardTitle className="text-slate-700 dark:text-slate-100 whitespace-nowrap">{item.title}</CardTitle>
              </div>

              <CardDescription className="text-slate-700 text-end dark:text-slate-100">{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2  overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 px-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400  tracking-wide leading-relaxed text-3xl lg:text-4xl  font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};
