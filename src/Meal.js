import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  // Declaração de estado usando useState para armazenar a URL da imagem da refeição.
  const [imageUrl, setImageUrl] = useState("");

  // useEffect é usado para realizar efeitos colaterais quando meal.id muda.
  useEffect(() => {
    // Dentro de useEffect, uma solicitação à API é feita para obter informações da refeição.
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1933654fbee143c1833427ec5111428f&includeNutrition=false`
    )
      .then((resposta) => resposta.json()) // Converte a resposta da API para JSON.
      .then((data) => {
        // Quando os dados são recebidos com sucesso, a URL da imagem é extraída e armazenada no estado.
        setImageUrl(data.image);
      })
      .catch(() => {
        // Se ocorrer algum erro durante a solicitação, ele é tratado aqui.
        console.log("error");
      });
  }, [meal.id]); // O efeito só é executado quando meal.id muda.

  // O componente Meal renderiza as informações da refeição.
  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Tempo de Preparação: {meal.readyInMinutes} minutes</li>
        <li>Serve: {meal.servings} Pessoas</li>
      </ul>

      <a href={meal.sourceUrl}>Receita</a>
    </article>
  );
}
