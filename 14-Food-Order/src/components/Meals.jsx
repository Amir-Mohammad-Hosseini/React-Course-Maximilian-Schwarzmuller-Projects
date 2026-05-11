import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp  from "../hooks/useHttp";
import { BASE_URL } from "../utils/utils";
import Error from "./Error";

const requestConfig = {}

const Meals = () => {
  const { data: meals, isLoading, error } = useHttp(`${BASE_URL}meals` , requestConfig , []);

  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }
  if(error){
    return <Error title="Failed to fetch meals" message={error.message} />
  }
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} mealDatas={meal} {...meal} />
      ))}
    </ul>
  );
};

export default Meals;
