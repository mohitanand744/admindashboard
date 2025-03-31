'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiSun } from "react-icons/fi";
import { MdOutlineNightsStay } from "react-icons/md";


export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme() // Use resolvedTheme to avoid issues with undefined values

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 w-[80px] h-[40px]"></div>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="rounded-full dark:bg-gray-800 bg-white flex items-center justify-center w-[40px] h-[40px] dark:text-white text-gray-800 border-2"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === 'dark' ? <FiSun className='text-2xl' /> : <MdOutlineNightsStay className='text-xl' />}
    </button>
  )
}
