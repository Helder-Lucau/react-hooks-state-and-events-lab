import React, {useState} from "react";

function Item({ name, category }) {

  const [product, setProduct] = useState(false);

  function addCart(e){
    e.preventDefault();
    setProduct(!product)
  }

  const productClass = product ? "in-cart" : ""

  return (
    <li className={productClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{productClass ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
