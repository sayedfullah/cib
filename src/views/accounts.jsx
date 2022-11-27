import React from 'react';
import { useContext, useState, useRef, useMemo, useEffect } from "react";
import {Context} from "../context/context.js";
import {Notify} from "../components/toast.jsx";
import {OTable} from "../components/tables.jsx";
import {WithdrawModal} from "../components/modal.jsx";
import logoA from "../assets/logoB.png";
import { Data } from "../api/endpoints.js";

const Accounts = ()=>
{
    const { state, dispatch } = useContext(Context);
    const [toast, setToast] = useState({show:false,msg:"No message!"});
    const [data,setData] = useState(Data);
    const toastHandler=(note,noteState)=> setToast(pr=>({...pr,msg:note,show: !noteState}));
    const [withdraw, setWitdraw] = useState({show:false,msg:"No message!"});

    const handleModal = (transact,modalState)=> setWitdraw(pr=> ({...pr,show:!modalState}));
    
    return (
        <>
            <div className="row m-5 mt-1 ">
                <div className="d-flex m-5 ">
                <div> 
                    <img src={logoA} className="img-fluid p-2" style={{maxWidth:"100px"}}  />
                </div>
                    <div className="align-self-center p-2 fw-bold text-secondary">SAVING &amp; CHEQUE ACCOUNT OVERVIEW</div>
                </div>
            </div>
            <div className="row justify-content-center">
                <OTable data={Data}/>
                    <Notify msg={toast.msg} onToast={toast.show} onClose={(e)=>toastHandler("",toast.show)} />
                    {/* <WithdrawModal handleClose={false} show={withdraw.show} /> */}
            </div>
            {/* {JSON.stringify(Data)} */}
        </>
    )
}

export { Accounts }