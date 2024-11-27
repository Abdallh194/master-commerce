import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegCheckCircle } from "react-icons/fa";

type TModalVars = {
  handleClose: () => void;
  show: boolean;
};
function ViewModal({ handleClose, show }: TModalVars) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>
            Submit successfully <FaRegCheckCircle />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your response has been sent successfully. We will contact you within
          24 hours.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewModal;
