import React, {createContext, useEffect, useReducer} from 'react';
import {products} from './products';
import "../Components/cart.css";
import CardData from './CardData';
import  {reducer}  from  './reducer';
export const CardContext = createContext();
const InitialState={
  items:products,
  TotalAmount:0,
  TotalItems:0,
};
function Card()
{
 
 const [state,dispatch] = useReducer(reducer,InitialState);
const  RemoveItem =(id)=>{
  return dispatch({
    type:"REMOVE_ITEM",
    payload:id,
  });
};
const Increment=(id)=>{
return dispatch({
  type:"Increment",
  payload:id,
})
}

const Decrement=(id)=>{
  return dispatch({
    type:"Decrement",
    payload:id,
  })
};

useEffect(()=>
{
  return dispatch({
    type:"CHANGE_VALUE"
  });
},[state.items])

    return(
      
      <CardContext.Provider value={{... state,RemoveItem,Increment,Decrement}}  >
        <CardData/>
      </CardContext.Provider>
    
    );

}
export default Card;