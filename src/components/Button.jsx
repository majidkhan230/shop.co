import React from 'react'

function  Button({text,btnStyles,textStyles,onClick}) {
  return (
    <div 
    className={`rounded-full flex justify-center items-center cursor-pointer md:min-w-[140px]  px-4 py-2 ${btnStyles}`}
    onClick={onClick}
    >
        <span className={`${textStyles}`}>{text}</span>
    </div>
  )
}

export default Button