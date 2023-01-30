import React from "react";
import styled from "styled-components";
import { BasketButton } from "../basket/BasketButton";

export const Header = ({ onShowBasket }) => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton onClick={onShowBasket}></BasketButton>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;
`;

const Logo = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
