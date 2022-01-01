import React, { useContext } from 'react';
import { CardContext } from './card';
function Items({id,title,description,price,img,quantity})
{
const {RemoveItem,Increment,Decrement}=useContext(CardContext);
return(
    <>
    
    <div className="items-info">
        <div className="product-img">
          <img src={img}/>
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"   onClick={()=>{Decrement(id)}}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={()=>{Increment(id)}}></i>
        </div>

        <div className="price">
          <h3>{price}Rs</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={()=>{RemoveItem(id)}}></i>
        </div>
      </div>

         
    </>
);
}
export default Items;