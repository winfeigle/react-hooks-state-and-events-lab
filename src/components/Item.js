import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, setInCart ] = useState(false);

  function handleCartButtonClick(){
    setInCart(inCart => (!inCart))
  }

  return (
    <li className={ inCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartButtonClick} className={ inCart ? "remove" : "add" }>{ inCart ? "Remove From" : "Add to" } Cart</button>
    </li>
  );
}

export default Item;
