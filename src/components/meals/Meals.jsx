import React from "react";
import styled from "styled-components";
import { MealItem } from "./meal-Item/MealItem";
const DUMMY_MEALS = [
  {
    id: Date.now().toString(),
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: Date.now().toString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.99,
  },
  {
    id: Date.now().toString(),
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: Date.now().toString(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];
export const Meals = () => {
  return (
    <Card>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal}  />;
        })}
      </ul>
    </Card>
  );
};

const Card = styled.div`
  width: 64.9375rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 135px auto;
  padding: 18px 40px 10px 40px;
`;
