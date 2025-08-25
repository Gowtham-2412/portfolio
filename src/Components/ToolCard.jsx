import React from 'react'

const ToolCard = ({tool, logo}) => {
  return (
    <div className='bg-[var(--surface)] flex items-center gap-3 shadow rounded-3xl border-2 border-[#3e4d5f] max-w-fit py-2 px-3 cursor-pointer hover:bg-[#2e3b47] hover:scale-[1.02] transition-transform duration-300 ease-out'>
      <img src={logo} alt="" className='w-5'/>
      <p className='text-[var(--background)] font-medium'>{tool}</p>
    </div>
  )
}

export default ToolCard
