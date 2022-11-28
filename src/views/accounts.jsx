import React from 'react';
import { useContext, useState } from "react";
import {OTable} from "../components/tables.jsx";
import logoA from "../assets/logoB.png";

import { Context } from "../context/context.js";

/**
 * 
 * @returns main vieww component
 */
const Accounts = ()=>
{
    const [toast, setToast] = useState({show:false,msg:"No message!"});
    const toastHandler=(note,noteState)=> setToast(pr=>({...pr,msg:note,show: !noteState}));
    
    const {acc} = useContext(Context);
    const[initialValue,setInitialValue] = acc;

    return (
        <>
            <div className="row m-5 ">
                <div className="d-flex mx-auto w-50">
                <div> 
                    <img src={logoA} className="img-fluid p-2" style={{maxWidth:"100px"}}  />
                </div>
                    <div className="align-self-center p-2 fw-bold text-secondary">SAVING &amp; CHEQUE ACCOUNT OVERVIEW</div>
                </div>
            </div>
            <div className="row justify-content-center">
                <OTable data={initialValue}/>
            </div>
        </>
    )
}

export { Accounts }