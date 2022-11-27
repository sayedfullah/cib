import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const WithdrawModal = (props)=>
{
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
              <Form.Control type="numeric" placeholder="Account Number" value={props.data.balance} onChange={(ev)=> console.log(ev.target.value)} />
            </Form.Group>
             
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>alert("save")}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { WithdrawModal }