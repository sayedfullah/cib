import './App.css';
import { Accounts } from './views/accounts';
import React from 'react';
import { useReducer,useMemo } from 'react';
import {Context, reducer, initialValue} from "./context/context.js";
import { RemoteData,Data } from "./api/endpoints.js";

function App() {
  const [state, dispatch] = useReducer(reducer,initialValue);

  RemoteData()
  .then(d=> d.json())
  .then(d=> console.log(JSON.stringify(d)))
  .catch(()=> console.log("fecth failed"));

  /**
   * prevent re-render on HOC children
   */
  const contextValue = useMemo(() => 
  {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <Context.Provider value={contextValue}>
      <div className="container-fluid h-100" >
        <Accounts  />
      </div>
    </Context.Provider>
  );
}

export default App;
  {/* <div className="bg-primary p-5" >
          <h1>{state.accountType}</h1>
          <h1 className="text-success" onClick={(e)=>dispatch({type:"BALANCE",payload:{balance:"700.51"}})}>{state.accountNumber}</h1>
          <h1>{state.balance}</h1>
        </div>
        <Accounts /> */}