import React from 'react'

const SectionHeading = ({ text }: { text: string }) => {
  return (
    <div className='mb-5'>
      <h1 className='text-2xl font-semibold text-white'>{text}</h1>
    </div>
  )
}

export default SectionHeading