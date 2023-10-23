import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const  newFoodArray=[...foods,newFood];
    setFoods(newFoodArray);
  }
  function handleLiClick(foodId)
  {
    const newFoodArray=foods.filter((food)=>food.id!==foodId);
    setFoods(newFoodArray);

  }
  function handleUpdate(id)
  {
    const newFoodArray=foods.map((food)=>{
      if (food.id===id)
      {
        return {...food,heatLevel:food.heatLevel+1}
   
      }
      else{
        return food;
      }
    })
    setFoods(newFoodArray);
  }
  function handleChangedvalue(event)
  {
    setFilterBy(event.target.value);
    /* const newFoodArray=foods.filter((food)=>food.cuisine===event.target.value);
    setFoods(newFoodArray); */
  }
  const foodList = foodsToDisplay.map((food) => (<>
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
    <li>  <button onClick={()=>handleUpdate(food.id)}>Update</button></li>
    </>
  ));
 /*  const foodList = foods.map((food) => (<>
    <li key={food.id} onClick={()=>handleLiClick(food.id)}> 
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} 
    
    </li>
    <li>  <button onClick={()=>handleUpdate(food.id)}>Update</button></li></>
  )); */

  return (
    <>
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

      
    </div>
    <div>
    <select name="filter" onChange={handleChangedvalue}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>
    </>
  );
}

export default SpicyFoodList;
