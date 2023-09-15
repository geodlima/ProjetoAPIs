import React, { useState } from "react";
import MealList from "./MealList"; // Importação do componente MealList

function App() {
  // Definindo estados com a função useState
  const [mealData, setMealData] = useState(null); // Para armazenar os dados das refeições
  const [calories, setCalories] = useState(2000); // Para armazenar o número de calorias desejado

  // Função para buscar dados de refeições com base nas calorias
  function getMealData() {
    // Faz uma solicitação à API Spoonacular com base nas calorias desejadas
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=1933654fbee143c1833427ec5111428f&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json()) // Converte a resposta em JSON
      .then((data) => {
        setMealData(data); // Define os dados das refeições no estado mealData
      })
      .catch(() => {
        console.log("error"); // Registra um erro no console, caso ocorra algum problema na solicitação
      });
  }

  // Função para lidar com mudanças no campo de entrada de calorias
  function handleChange(e) {
    setCalories(e.target.value); // Atualiza o estado calories com o novo valor inserido pelo usuário
  }

  return (
    <div className="App">
      <section className="controls">
        {/* Campo de entrada de calorias */}
        <input
          type="number"
          placeholder="Calorias (Ex.2000)"
          onChange={handleChange} // Chama a função handleChange quando o valor muda
        />
        {/* Botão "Pesquisar" que chama a função getMealData */}
        <button onClick={getMealData}>Pesquisar</button>
      </section>
      
      {/* Renderiza o componente MealList se mealData não for nulo */}
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
