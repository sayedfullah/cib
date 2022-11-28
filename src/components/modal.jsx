import React, { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Context } from '../context/context';
import {Withdraw} from "../modules/transactions.js";
import {Notify} from "../components/toast.jsx";

const WithdrawModal = (props)=>
{
  const [debit, setDebit] = useState(0);
  const [toast, setToast] = useState({show:false,msg:"No message!"});
  const {acc} = useContext(Context);
  const[initialValue,setInitialValue] = acc;
  const toastHandler=(note,noteState)=> setToast(pr=>({...pr,msg:note,show: !noteState}));
  const withdrawalHandler = (accountNumber,accountType,balance,debit)=>
  {
      initialValue.forEach(n =>
       { 
          let a = Withdraw(accountType,balance,debit);
          setInitialValue(pr=> pr.map(n=> {if (n.account_number === accountNumber) {toastHandler("Transaction Successfull",toast.show); return {...n, balance:a.toFixed(2)}} return n}))
          
    });
  }

  return (
    <>
      <Modal show={props.show}  backdrop="static"  keyboard={false} fullscreen={false} centered  size="md" >
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title className="text-muted">Withdrawal Account: <b className="text-capitalize text-dark">{props.data.account_type}</b></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4" >
          <Form >
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label className="small text-captalize">Account Number</Form.Label>
              <Form.Control type="text" placeholder="Account Number" value={props.data.account_number} />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label className="small text-captalize">Balance</Form.Label>
              <Form.Control type="text" placeholder="Account Number" value={props.data.balance} />
            </Form.Group>
            
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label className="small text-captalize">Withdraw</Form.Label>
              <Form.Control type="numeric" placeholder="Account Number" value={debit} onChange={(ev)=> {setDebit(ev.target.value)}} />
            </Form.Group>  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>withdrawalHandler(props.data.account_number,props.data.account_type,props.data.balance,debit)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Notify msg={toast.msg} onToast={toast.show} onClose={(e)=>toastHandler("",toast.show)} />
    </>
  );
}

export { WithdrawModal }