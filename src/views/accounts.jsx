import React from 'react';
import { useContext, useState } from "react";
import {Notify} from "../components/toast.jsx";
import {OTable} from "../components/tables.jsx";
import {WithdrawModal} from "../components/modal.jsx";
import logoA from "../assets/logoB.png";

import { Context } from "../context/context.js";

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
                <Notify msg={toast.msg} onToast={toast.show} onClose={(e)=>toastHandler("",toast.show)} />
            </div>
            {/* {JSON.stringify(data)} */}
        </>
    )
}

export { Accounts }