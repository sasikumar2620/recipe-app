import React, { useState } from 'react'
import MealCard from './MealCard';

const LandingPage = () => {
 
    const [data,setData]=useState();
    const [search,setSearch]=useState("");
    const [msg,setMsg] = useState("");

    const handleInput = (event)=>{
        setSearch(event.target.value)
    }
    const myFun = async()=>{
        if(search==""){
            setMsg("Please Enter Something");
            
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        //console.log(jsonData.meals)
        setData(jsonData.meals)
        setMsg("")
        }
        
    }
    //console.log(data)
  return (
    <>
    
    <div className='container'>
    
        <div className='searchBar'>
          <input type='text' placeholder='Enter recipe' onChange={handleInput}></input>
           <button onClick={myFun}>Search</button>
        </div>
    </div>
    
    <h1 className='error'>{msg}</h1>
    <div>
        <MealCard detail={data}/>
    </div>
    
    </>
  )
}

export default LandingPage

