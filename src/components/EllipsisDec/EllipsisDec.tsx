import React from 'react'

interface Props{
  id?: string
}

function EllipsisDec({id}: Props) {
  return (
    <div id={id ? id : ""} className='ellipseDec'></div>
  )
}

export default EllipsisDec