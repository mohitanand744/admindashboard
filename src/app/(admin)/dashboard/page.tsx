"use client"

import React, { useRef } from 'react'
import { CardHoverEffect } from '../components/cards/hoverEffectCard'
import { BarChartComp } from '../components/Charts/BarChart'
import { ExpandableCard } from '../components/cards/ExpandedCards'
import SectionHeading from '../components/Headings/SectionHeading'
import { LineChartComp } from '../components/Charts/LineChart'
import { RadialChartComp } from '../components/Charts/RadialChart'

const page = () => {

  const topRef = useRef(null);
  return (
    <div className='w-full' ref={topRef}>
      <h1 className='p-2 text-3xl font-semibold text-white'>Dashboard</h1>

      <CardHoverEffect />

      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-6">
          <SectionHeading text='Jobs' />
          <div className="h-[450px]">
            <BarChartComp />
          </div>


        </div>

        <div className="col-span-12 lg:col-span-6">
          <SectionHeading text='Recent Employs' />
          <div className="h-[450px] flex justify-center  hideScrollBar overflow-y-auto p-4 bg-[#00000041] rounded-2xl">
            <ExpandableCard topRef={topRef} />
          </div>

        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 mt-4 lg:col-span-8 xl:col-span-6">
          <SectionHeading text='Revenue' />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6"> <RadialChartComp /></div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6"> <RadialChartComp /></div>
          </div>
        </div>

        <div className="col-span-12 mt-4 xl:col-span-6 lg:col-span-4">
          <SectionHeading text='Analytics' />
          <LineChartComp />
        </div>
      </div>
    </div>
  )
}

export default page