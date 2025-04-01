"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Super Admin",
    image:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU=",
  }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full mb-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}

         