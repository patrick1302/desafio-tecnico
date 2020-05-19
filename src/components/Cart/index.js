import React, { useState, useContext } from "react";
import CartContext from "../../context/cartContext";
import { GrCart } from "react-icons/gr";
import { TiDelete } from "react-icons/ti";

import "./style.css";

import Modal from "../../components/Modal";

function Cart({ cart }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const setCart = useContext(CartContext);

  const checkout = () => {
    if (cart.length > 0) {
      handleShowModal();
    }
    localStorage.removeItem("compras");
    setCart([]);
  };

  const removePokemomFromCart = (id) => {
    const removePokemon = cart.filter((item) => item.id !== id);
    setCart(removePokemon);
    localStorage.setItem("compras", JSON.stringify(removePokemon));
  };

  const sumCartPrice = cart.reduce(function (prev, cur) {
    return prev + cur.price;
  }, 0);

  return (
    <div className="cart">
      <div>
        <div className="header-cart">
          <GrCart size="30" />
          <h2>Carrinho</h2>
        </div>
        <div className="summary-item">
          <span className="summary-header">Nome</span>
          <span className="summary-header">Preço</span>
          <span className="summary-header">Imagem</span>
          <span></span>
        </div>
        {cart.map(({ name, price, image, id }, index) => (
          <div key={index} className="summary-item">
            <span className="item-name align">{name}</span>
            <span className="align"> R${price}</span>
            <img src={image} alt="Pokemon" />
            <button onClick={() => removePokemomFromCart(id)}>
              <TiDelete size="30" color="#000" />
            </button>
          </div>
        ))}
      </div>
      <div>
        <div className="summary-total">
          <span>
            <strong>Total:</strong> R$ {sumCartPrice.toFixed(2)}
          </span>
        </div>

        <button className="summary-button" onClick={() => checkout()}>
          Finalizar compra
        </button>
      </div>
      <Modal handleClose={handleCloseModal} show={showModal} />
    </div>
  );
}
export default Cart;
