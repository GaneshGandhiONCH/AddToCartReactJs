import React, { useContext } from 'react';
import "../Components/cart.css";
// import { Scrollbars } from "react-custom-scrollbars-2";
import {Scrollbars} from 'react-custom-scrollbars-2';
import Items from './items';
import {CardContext} from './card';


function CardData(){
  const {items,TotalItems,TotalAmount}= useContext(CardContext)
    return(
         <section className="main-cart-section">
    <div className="cart-icon">
          <img src="./images/cart.png" alt="cart-logo" />
          <p>{TotalItems}</p>
  </div>
      <h1>shopping Cart</h1>
      <p className="total-items">
        you have <span className="total-items-count"> {TotalItems}</span> items
        in shopping cart
      </p>

      <div className="cart-items">
        <div className="cart-items-container">
          <Scrollbars>
              {
                  items.map((Cur,Index)=>{
                    return  <Items key={Index}{...Cur}/>
                  })
              }
              <Items/>
         </Scrollbars>
        </div>
      </div>

      <div className="card-total">
        <h3>
          Cart Total : <span>{TotalAmount}$</span>
        </h3>
        <button>checkout</button>
        <button className="clear-cart" >
          Clear Cart
        </button>
      </div>
    </section>
    );
}
export default CardData;

