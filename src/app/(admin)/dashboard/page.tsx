"use client"

import React, { useRef } from 'react'
import { CardHoverEffect } from '../components/cards/hoverEffectCard'
import { BarChartComp } from '../components/Charts/BarChart'
import { ExpandableCard } from '../components/cards/ExpandedCards'
import SectionHeading from '../components/Headings/SectionHeading'
import { LineChartComp } from '../components/Charts/LineChart'
import { RadialChartComp } from '../components/Charts/RadialChart'
import { motion } from "framer-motion";

const page = () => {

  const topRef = useRef(null);
  return (
    <div className='w-full' ref={topRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className='p-2 text-3xl font-semibold text-white'>Dashboard</h1>

        <CardHoverEffect />
      </motion.div>

      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <SectionHeading text='Jobs' />
            <div className="h-[450px]">
              <BarChartComp />
            </div>
          </motion.div>


        </div>

        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <SectionHeading text='Recent Employs' />

            <div className="h-[450px] flex justify-center  hideScrollBar overflow-y-auto p-4 bg-[#00000041] rounded-2xl">
              <ExpandableCard topRef={topRef} />
            </div>
          </motion.div>

        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 mt-4 lg:col-span-8 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <SectionHeading text='Revenue' />

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6"> <RadialChartComp /></div>

              <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6"> <RadialChartComp /></div>
            </div>

          </motion.div>
        </div>

        <div className="col-span-12 mt-4 xl:col-span-6 lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <SectionHeading text='Analytics' />
            <LineChartComp />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default page