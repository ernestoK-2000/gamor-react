import React from 'react'
import CategorySection from '../CategoriesSection/CategorySection'
import MainCard from '../MainCard/MainCard'
import { AppTheme } from '../../models/models'
import { useOutletContext } from 'react-router-dom'
import "./MainPage.css"


function MainPage() {
  const theme = useOutletContext<AppTheme>();
  return (
    <div id='main-page'>
        <MainCard theme={theme}></MainCard>
        <CategorySection></CategorySection>
    </div>
  )
}

export default MainPage