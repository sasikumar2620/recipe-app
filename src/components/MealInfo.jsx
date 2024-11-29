import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MealInfo = () => {
    const {mealid}=useParams();
    //console.log(mealid)
    const [info,setInfo] = useState()
    const getInfo = async()=>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        //console.log(jsonData.meals[0])
        setInfo(jsonData.meals[0])
    }

    if(info!=""){
        getInfo()
    }
    
  return (
    <>
    <Link to="/"><button>Home</button></Link>
    {
        !info?"Data not found":
        <div className='mealInfo'>
        <img src={info.strMealThumb} alt="" />
        <div className='info'>
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <p>{info.strInstructions}</p>
        </div>
    </div>
    }
   </>
  )
}

export default MealInfo
