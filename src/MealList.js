import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <div className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calorias: {nutrients.calories.toFixed(0)}</li>
          <li>Carboidrato: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Gordura: {nutrients.fat.toFixed(0)}</li>
          <li>Proteina: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </div>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
