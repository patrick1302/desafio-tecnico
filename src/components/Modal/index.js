import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowModal = ({ handleClose, show }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pokemom</Modal.Title>
        </Modal.Header>
        <Modal.Body>Obrigado por realizar a compra!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ShowModal;
