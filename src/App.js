import { Accounts } from './views/accounts';
import React, { useEffect, useState } from 'react';
import { Context } from "./context/context.js";
import { RemoteData } from "./api/endpoints.js";

function App() {
 
  const [initialValue, setInitialValue] = useState([])

  /*
   opted to not use useMemoization, because of dynamic data
  */
  useEffect(()=>
  {
    RemoteData()
    .then(d=> d.json())
    .then(d=> setInitialValue(d))
    .catch(()=> alert("server unavailable"));
  },[]);

  /*
    Best to use class component to support error boundary
    Unsure as to approach, generally two accounts per user.

  */
  return (
    <Context.Provider value={ {"acc":[initialValue,setInitialValue]} }>
      <div className="container-fluid h-100" >
        <Accounts  />
      </div>
    </Context.Provider>
  );
}

export default App;
