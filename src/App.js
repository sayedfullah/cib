import { Accounts } from './views/accounts';
import React, { useEffect, useState } from 'react';
import { Context } from "./context/context.js";
import { RemoteData } from "./api/endpoints.js";

function App() {
 
  const [initialValue, setInitialValue] = useState([])

  useEffect(()=>
  {
    RemoteData()
    .then(d=> d.json())
    .then(d=> setInitialValue(d))
    .catch(()=> alert("server unavailable"));
  },[]);

  return (
    <Context.Provider value={ {"acc":[initialValue,setInitialValue]} }>
      <div className="container-fluid h-100" >
        <Accounts  />
      </div>
    </Context.Provider>
  );
}

export default App;
