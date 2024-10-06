import React from 'react'
import './MainCard.css'
import MainCardSection1 from './MainCardSection1/MainCardSection1'
import MainCardSection2 from './MainCardSection2/MainCardSection2'
import MainCardSection3 from './MainCardSection3/MainCardSection3'

function MainCard() {
  return (<>
    <MainCardSection1></MainCardSection1>
    <MainCardSection2></MainCardSection2>
    <MainCardSection3></MainCardSection3>
    </>
  )
}

export default MainCard