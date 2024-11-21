import React from 'react'

function Counter({countValue,SubText}) {
  return (
    <div className="flex flex-col">
    <h1 className="font-semibold text-4xl">{countValue}+</h1>
    <h3>{SubText}</h3>
  </div>
  )
}

export default Counter