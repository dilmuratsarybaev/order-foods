import React from "react";
import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
const items = [
  {
    id: Date.now().toString(),
    title: "Sushi",
    amount: 4,
    price: 22.99,
  },
  {
    id: Date.now().toString(),
    title: "Schnitzel",
    price: 16.99,
    amount: 4,
  },
  {
    id: Date.now().toString(),
    title: "Barbecue Burger",
    price: 12.99,
    amount: 4,
  },
  {
    id: Date.now().toString(),
    title: "Green Bowl",
    price: 19.99,
    amount: 4,
  },
];
export const Basket = ({onClose}) => {
  return (
    <Modal onClose={onClose}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return <BasketItem key={item.id} item={item} />;
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount price={0.0} onClose={onClose} onOrder={() => {}} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
