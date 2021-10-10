import React from 'react';
import { RandomMeal, Meal } from './components/index';

// TODOS
// 1. Search for meals
// 2. Display the results
// 3. Featured meals
// Bonus:
// - Favorite recipe                              

function App() {
  return (
    <div className="App">
      <input type="text" />
      <RandomMeal />
      <Meal />
      <Meal />
    </div>
  );
}

export default App;
