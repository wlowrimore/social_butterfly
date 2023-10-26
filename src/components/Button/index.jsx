import React from 'react'

const Button = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className='w-full h-full text-center bg-red-400/70'>{children}</button>
  )
}

export default Button