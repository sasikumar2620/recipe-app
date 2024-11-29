import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import {Route,Routes} from 'react-router-dom'
import MealInfo from './components/MealInfo'
function App() {


  return (
    <>
     
     <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/:mealid' element={<MealInfo/>}></Route>
     </Routes>
    </>
  )
}

export default App
