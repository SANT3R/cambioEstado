import React from 'react'

export const Img = ({direccion, info, idName, className}) => {
  return (
      <img src={direccion} alt={info} class={className} id={idName}/>
  )
}
