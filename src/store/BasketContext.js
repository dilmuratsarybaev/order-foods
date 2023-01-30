import { createContext, useState } from "react";

const BasketContext = createContext({
  items: [],
});

const BasketProvider = ({ children }) => {
  const { items, setItems } = useState([]);

  const addTodBasket = (newItem) => {
    setItems((prevState) => {
      if (!prevState.length) {
        return [newItem];
      }


      const updatedItems = prevState.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          oldItem.amount = oldItem.amount + newItem.amount;
        }
        return oldItem;
      });
      return updatedItems;
    });
  };

  const state = {
    items,
    addTodBasket,
  };

  return (
    <BasketContext.Provider value={state}> {children} </BasketContext.Provider>
  );
};

export default BasketProvider;
