import React, { useEffect, useState } from 'react';
import Meal from './Meal';

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    async function getMeal() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setMeal(data.meals[0]);
    };

    getMeal();
  }, []);

  if(!meal) return null;

  return (
    <section className="container">
      <h2>Featured Meal</h2>
      <Meal meal={meal} />
    </section>
  );
};

export default RandomMeal;