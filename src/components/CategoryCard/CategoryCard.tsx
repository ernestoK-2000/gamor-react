import React from 'react'
import './CategoryCard.css'
import { BiSolidRightArrowAlt } from "react-icons/bi";

interface Props {
  name: string;
  url: string;
  photo?: string;
  color?: string;
  num: number;
}

function CategoryCard({name, url, photo, color, num}: Props) {

  return (
    <div className='category-card'>
      
      <div className='category-card-number'><div className='linedec'></div>0{num}</div>
      <div className='category-card-title'>{name}</div>
      <BiSolidRightArrowAlt className='category-card-arrow' />
    </div>
  )
}

export default CategoryCard