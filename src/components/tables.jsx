import React from 'react';
import Table from 'react-bootstrap/Table';
// import { Data } from "../api/endpoints.js";
import {tableHeader} from "../context/config.js";
import { GlobalBalance } from "../modules/transactions.js";
import {WithdrawModal} from "./modal.jsx";
import { useContext, useState, useRef, useMemo, useEffect } from "react";

const OTable = (props)=>
{  
    let data = props.data;
    const account = GlobalBalance(data);
    const [withdraw, setWitdraw] = useState({show:false,transact:{account_type:"",account_number:"",balance:"0"}});
    const handleModalOpen = (val,obj)=> setWitdraw(pr=> ({...pr,show:!val,transact:obj})); 
    const handleModalClose = ()=> setWitdraw(pr=> ({...pr,show:!withdraw.show}));

   console.log(withdraw.show)
    return(
        <>
        <div className="table-responsive w-50 p-1 shadow">
            <Table striped  hover size="sm" responsive="sm" className="text-center">
                <thead>
                <tr>
                    { React.Children.toArray(tableHeader.map(n=> <th >{n}</th>)) }
                </tr>
                </thead>
                <tbody className="text-center">
                    {
                        React.Children.toArray(
                            account.data.map((n,i)=> 
                            <tr >
                                <td >{i+1}</td>
                                <td onClick={()=> handleModalOpen(withdraw.show,n)} title="click to transact" className="text-primary text-decoration-underline">{n.account_number}</td>
                                <td className="text-capitalize" >{n.account_type}</td>
                                <td className={(n.balance < 0 ) ? "text-danger" : "text-dark" }>ZAR {n.balance}</td>
                            </tr>)
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={tableHeader.length-1} className="fw-bold" >GLOBAL BALANCE: </td>
                        <td className="text-center fw-bold">ZAR {account.balance}</td>
                    </tr>
                </tfoot>   
            </Table>
        </div>
        <h1>{withdraw.show}</h1>
        <WithdrawModal show={withdraw.show} handleClose={handleModalClose}  data={withdraw.transact} />
        </>
    )
}

export { OTable }