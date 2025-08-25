import React from 'react'

const SkillCard = ({skill, image, experience}) => {

    const css = "shadow-lg bg-[var(--surface)] rounded-lg p-3 flex flex-col items-center justify-around h-44 hover:scale-105 transition-transform duration-500 ease-out"

  return (
    <div className={css}>
      <img src={image} alt="" className='w-16 p-2 bg-gradient-to-br from-[#1838d8] to-[#6c4ce0] rounded-lg'/>
      <h2 className='text-xl font-semibold text-[var(--background)]'>{skill}</h2>
      <div className='w-4/5 bg-[#475b6f] rounded-lg'>
        <div className="h-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" style={{ width: `${experience}%` }}></div>
      </div>
    </div>  
  )
}

export default SkillCard
