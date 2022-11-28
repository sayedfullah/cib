import React from "react";
import Toast  from 'react-bootstrap/Toast';

const Notify= (props) =>
{
    return (
        <Toast className="m-2 fixed-bottom" show={props.onToast} onClose={props.onClose} animation={true}  delay={4000} autohide>
            <Toast.Header className="bg-light text-primary">
                <strong className="me-auto">Notification</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body className="text-dark fw-bold">{props.msg}</Toast.Body>
        </Toast>
    );
}

export  {Notify};
