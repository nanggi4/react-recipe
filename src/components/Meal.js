import React from 'react';

const Meal = ({ meal }) => {
  if(!meal) return null;

  const {
    strMealThumb,
    strMeal,
    strInstructions,
    strArea,
    strCategory
  } = meal;

  return (
    <div className="meal">
      <div className="meal-img">
        <img src={strMealThumb} alt={strMeal} /> 
      </div>
      <div className="meal-details">
        <h2 className="meal-title">{strMeal}</h2>
        <p className="meal-instruction">
          {strInstructions.substring(0, 200) + "..."}
        </p>
        <ul className="meal-info">
          <li>
            Catogery
            <strong>{strCategory}</strong>
          </li>
          <li>
            Area
            <strong>{strArea}</strong>
          </li>
        </ul>
        <button className="btn">
          View Recipe <i className="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </div>   
  );
};  

export default Meal;