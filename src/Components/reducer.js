export const reducer=(state,action)=>{
    if (action.type === "REMOVE_ITEM") {
        return {
          ...state,
          items: state.items.filter((curElem) => {
            return curElem.id !== action.payload;
          }),
        };
      }
      if(action.type==="Increment")
      {
       
          let Incrementvalue=  state.items.map((curElem)=>{
                if(curElem.id===action.payload)
                {
                    return{...curElem, quantity:curElem.quantity+1 };
                  
               
                }
                return  curElem;  
               
            });
            return {...state,items:Incrementvalue};
        
      }
      if(action.type==="Decrement")
      {
          
          const Decre =state.items.map((curElem)=>{
            if(action.payload==curElem.id && curElem.id>0){
                return{...curElem,quantity :curElem.quantity-1};
            }

            return {...curElem}
           }).filter((cur)=>cur.quantity !== 0)
          
          
        return{...state,items:Decre}
      }
      if(action.type==="Clear_Cart")
      {
    return  {...state, items:[]};

      }
      if(action.type==="CHANGE_VALUE")
      {
      let {TotalItems,TotalAmount}=  state.items.reduce((accu,cur)=>{
           let {quantity,price}=cur;
          let UpdatedAmount=price*quantity;

           accu.TotalItems+=quantity;
           accu.TotalAmount+=UpdatedAmount;
           return accu;
      },
      {
        TotalItems: 0,
        TotalAmount:0,
      });
          return{...state,TotalItems,TotalAmount}
    }
    return state;
}