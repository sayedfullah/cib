import { createContext } from "react";

const Context = createContext();

const initialValue = 
{ 
    accountNumber: "0000000000000000"
    ,accountType: "savings"
    ,balance: "0" 
};
  
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "WIDTHRAW":
        return { ...state, ...payload };
      case "BALANCE":
        return { ...state, ...payload };
      default:
        console.log("bad selection: ", type); 
    }
  };

  export {Context, reducer, initialValue }
  