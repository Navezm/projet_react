import React from 'react';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Description | {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-justify">
            {props.chapitre}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn_rss" onClick={props.onHide}>Fermer</button>
        </Modal.Footer>
      </Modal>
    );
}

let ListeChap = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className="d-flex mt-lg-5 mt-sm-4">
            <div className="p-0 m-0 d-flex">
                <button className="btn mx-3 btn_rss" onClick={()=>setModalShow(true)}>Description</button>
                <button className="btn mx-3 btn_sub">Lire les scans</button>
            </div>

            <MyVerticallyCenteredModal name={props.name} chapitre={props.chapitre}
            show={modalShow}
            onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default ListeChap;