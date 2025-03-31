import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaUsers, FaBriefcase, FaClipboardCheck, FaBuilding } from "react-icons/fa";


export function CardHoverEffect() {
  return (

    <HoverEffect items={projects} />
  );
}

export const projects = [
  {
    title: "Active Workers",
    description: "21",
    link: "/employees",
    icon: <FaUsers />,
  },
  {
    title: "Active Jobs",
    description: "8",
    link: "/jobs",
    icon: <FaBriefcase />,
  },
  {
    title: "On Boarding",
    description: "13",
    link: "/onBoarding",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Departments",
    description: "21",
    link: "/department",
    icon: <FaBuilding />,
  }
];