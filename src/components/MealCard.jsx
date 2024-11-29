import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const MealCard = ({detail}) => {
    console.log(detail)


  return (
    <div className='meals'>
      {
        !detail ? "" : detail.map((curItem)=>{
            return(
                <>
                    <div className='mealImg'>
                        <img src={curItem.strMealThumb} alt="" />
                         <p>{curItem.strMeal}</p>
                         <NavLink to={`${curItem.idMeal}`}><button>Recipe</button></NavLink>
                         
                    </div>
                </>
            )
        })
      }
    </div>
  )
}

export default MealCard
