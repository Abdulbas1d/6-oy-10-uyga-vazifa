import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import { CountCart } from '../../App';

function Cards() {
  const [cards, setCards] = useState([]);
  const [notCard, setNotCard] = useState(false);
  const { count, setCount } = useContext(CountCart);

  function getItemFromLocalStorage() {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  }

  useEffect(() => {
    const cart = getItemFromLocalStorage();
    if (cart.length === 0) {
      setNotCard(true);
    } else {
      setCards(cart);
      setNotCard(false);
    }
  }, []);

  useEffect(() => {
    const totalAmount = cards.reduce((total, cart) => total + cart.amount, 0);
    setCount(totalAmount);
  }, [cards, setCount]);

  function removeCart(cartId) {
    const deleteCart = confirm("Rostdan ham o'chirmoqchimisiz?");
    if (deleteCart) {
      const deleteCard = cards.filter(cart => cart.cartId !== cartId);
      setCards(deleteCard);
      localStorage.setItem('cart', JSON.stringify(deleteCard));
      if (deleteCard.length === 0) {
        setNotCard(true);
      }
    }
  }

  const subtotal = cards.reduce((total, cart) => total + cart.price * cart.amount, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.1;
  const orderTotal = subtotal + shipping + tax;

  return (
    <div className='card_container'>
      <h2 className='card_title'>{notCard ? "Hozircha kartalar mavjud emas!" : "Your Cart"}</h2>
      <div className="hr">
        <hr />
      </div>

      <div className="aboutCard">
        <div className="differentCard">
          {cards.map((cart, index) => (
            <div key={index} className="anyCard">
              <img src={cart.image} alt="" />

              <div className="dataOne">
                <h4>{cart.title}</h4>
                <p>{cart.company}</p>
                <label htmlFor="color">
                  Color:
                  <span style={{ backgroundColor: cart.productColor }}></span>
                </label>
              </div>

              <div className="dataTwo">
                <label htmlFor="select">
                  Amount
                  <select name="select" id="select">
                    {[...Array(15)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </label>
                <button onClick={() => removeCart(cart.cartId)} id="remove">Remove</button>
              </div>

              <h4 className='price'>${cart.price}</h4>
            </div>
          ))}
        </div>

        <div className="resultPrice">
          <div className="result">
            <span>Subtotal <strong>${subtotal.toFixed(2)}</strong></span>
            <span>Shipping <strong>${shipping.toFixed(2)}</strong></span>
            <span>Tax <strong>${tax.toFixed(2)}</strong></span>
            <span className='res'>Order Total <strong>${orderTotal.toFixed(2)}</strong></span>
          </div>
          <button className="login">PLEASE LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;