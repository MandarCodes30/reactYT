import React from 'react'

const Button = ({name}) => {
  return (
    <button type='button' className='border border-b-slate-500 bg-slate-200 p-2 m-3 rounded-lg font-bold'>{name}</button>
  )
}

export default Button