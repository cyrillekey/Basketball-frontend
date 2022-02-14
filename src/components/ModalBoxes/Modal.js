import React ,{useState} from "react";
import { Modal,Button } from "react-bootstrap";
const ModalB=(props)=>{


    return(
<Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleYes}>Understood</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default ModalB;